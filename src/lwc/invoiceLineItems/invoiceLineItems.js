import { LightningElement,api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getInvoiceLineItems from '@salesforce/apex/InvoiceLineItemController.getINVL';
import deleteINVL from '@salesforce/apex/InvoiceLineItemController.deleteINVL';
import INVL_OBJECT from '@salesforce/schema/Invoice_Line_Item__c';
export default class InvoiceLineItems  extends NavigationMixin(LightningElement){
    @api recordId;
    @track ivoiceLineItemData;
    
    //Get Invoice Line Items related to Invoice Id (recordId) 
    connectedCallback(){
        // if(!this.ivoiceLineItemData)
            this.getINVL();
    }
    
    //Fetch Invoice Line Items
    getINVL(){
        getInvoiceLineItems({invoiceId: this.recordId})
        .then(result => {
            this.ivoiceLineItemData = result; 
       }).catch(error => {
           this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error while fetching Invoice Line Item records',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
    //Delete Invoice Line Item
    deleteInvoiceLineItem(invoiceLineItemId){
        deleteINVL({invlId: invoiceLineItemId})
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Invoice Line Item Deleted successfully',
                    variant: 'success'
                })
            );  
            this.getINVL();
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

}