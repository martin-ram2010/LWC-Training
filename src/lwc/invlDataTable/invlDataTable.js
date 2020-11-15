import { LightningElement,api, track ,wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getInvoiceLineItems from '@salesforce/apex/InvoiceLineItemController.getINVL';
import deleteINVL from '@salesforce/apex/InvoiceLineItemController.deleteINVL';
import INVL_OBJECT from '@salesforce/schema/Invoice_Line_Item__c';

export default class InvlDataTable  extends NavigationMixin(LightningElement){
    @api recordId;
    
    //Get Invoice Line Items related to Invoice Id (recordId) 
    //Fetch Invoice Line Items
    @wire(getInvoiceLineItems, {invoiceId: '$recordId'}) 
    ivoiceLineItems;
    
    //Delete Invoice Line Item
    deleteInvoiceLineItem(invoiceLineItemId){
        deleteINVL({invlId: invoiceLineItemId})
        .then(() => {
            refreshApex(this.ivoiceLineItems);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Invoice Line Item Deleted successfully',
                    variant: 'success'
                })
            );  
       }).catch(error => {
           this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error while deleting Invoice Line Item record.',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
    //Handle action click
    handleActionClick(event){
        console.log('data:'+event.target.dataset.id);
        console.log('title:'+event.target.title);
        switch (event.target.title) {
            case 'view':
            case 'edit':
              this.navigateToRecordPage(event.target.dataset.id, event.target.title);
              break;
            case 'delete':
                if(confirm('Are you sure you want to delete?'))
                    this.deleteInvoiceLineItem(event.target.dataset.id);
            break;
          }
    }

    //Navigate to record page
    navigateToRecordPage(invoiceLineItemId, action) {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: invoiceLineItemId,
                objectApiName: INVL_OBJECT, 
                actionName: action
            }
        });
    }
    //Communicate with Parent and hide the related list
    handleHide(event){
        this.dispatchEvent(new CustomEvent('hide'));
    }

}