import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAllInvoice from '@salesforce/apex/InvoiceLineItemController.getAllInvoice';
import INV_OBJECT from '@salesforce/schema/Invoice__c';
export default class Invoices extends NavigationMixin(LightningElement){
    @track invoiceData;
    showInvoiceLineItems = false;
    selectedInvoiceRecordId;
    connectedCallback(){
        this.getINV();
    }
     //Fetch Invoice Line Items
     getINV(){
        getAllInvoice()
        .then(result => {
            this.invoiceData = result; 
       }).catch(error => {
           this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error while fetching Invoice records',
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
        this.showInvoiceLineItems =true;
        this.selectedInvoiceRecordId = event.target.dataset.id;
        
    }
    //Handle action click
    handleView(event){
        console.log('data:'+event.target.dataset.id);
        console.log('title:'+event.target.title);
        this.navigateToRecordPage(event.target.dataset.id, event.target.title);
    }
    //Handle hide 
    handleHide(event){
        this.showInvoiceLineItems =false;
    }
    //Navigate to record page
    navigateToRecordPage(invoiceId, action) {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: invoiceId,
                objectApiName: INV_OBJECT, 
                actionName: action
            }
        });
    }

}