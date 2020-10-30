import { LightningElement,api, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import updateContacts from '@salesforce/apex/ContactController.updateContacts';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
 
const COLS = [
    { label: 'First Name', fieldName: 'FirstName', editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class ApexContactsForAccount extends LightningElement {
    @api recordId;
    // @track contactData;
    columns = COLS;
    draftValues = [];

    @wire(getContacts, { accId: '$recordId' })
    contact; // contact = {error : errorData , data : contactData};
    // getContactFunction({error , data}){ 
    //     if(data){
    //         console.log('contacts :'+JSON.stringify(data));
    //         this.contactData = data;
    //     }
    //     if(error){

    //     }
    // }

    //To Save a single record at a time
    /*handleSave(event) {
        const fields = {}; 
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[FIRSTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].FirstName;
        fields[LASTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;

        const recordInput = {fields};

        updateRecord(recordInput)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact updated',
                    variant: 'success'
                })
            );
            // Display fresh data in the datatable
            return refreshApex(this.contact).then(() => {

                // Clear all draft values in the datatable
                this.draftValues = [];

            });
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or reloading record',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }*/

    //To Update multiple contacts imperative call to apex
    handleSave(event) {
        const updatedFields = event.detail.draftValues;
        
       // Pass edited fields to the updateContacts Apex controller
        updateContacts({data: updatedFields})
        .then(result => {
            console.log(JSON.stringify("Apex update result: "+ result));
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact updated',
                    variant: 'success'
                })
            );
    
            // Display fresh data in the datatable
            refreshApex(this.contact).then(() => {
                // Clear all draft values in the datatable
                this.draftValues = [];
            });
    
        
       }).catch(error => {
           this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or refreshing records',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}