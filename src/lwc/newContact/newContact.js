import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import LEVEL_FIELD from '@salesforce/schema/Contact.Level__c';
 
export default class NewContact extends NavigationMixin(LightningElement){//extends LightningElement {
    @api recordId;
    contactObject = CONTACT_OBJECT;
    accountField = ACCOUNT_FIELD;
    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    emailField = EMAIL_FIELD;
    levelField = LEVEL_FIELD;

    handleContactCreated(event){
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success',
            message: 'New Contact is created successfuly.',
            variant: 'success',
          }));
        this.navigateToRecordViewPage(event.detail.id);
        //this.dispatchEvent(new CustomEvent('close'));
    }
    handleError(event){
        console.log(event.detail);
        // this.dispatchEvent(
        //     new ShowToastEvent({
        //         title: 'Error creating record',
        //         message: event.detail.message,
        //         variant: 'error',
        //     }),
        // );
    }
    navigateToRecordViewPage(contactId) {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: contactId,
                objectApiName: CONTACT_OBJECT, // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}