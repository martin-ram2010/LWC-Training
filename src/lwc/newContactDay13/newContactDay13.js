import { LightningElement, api } from 'lwc';
import CONTACT from '@salesforce/schema/Contact';
import ACCOUNTID from '@salesforce/schema/Contact.AccountId';
import NAME from '@salesforce/schema/Contact.Name';
import PHONE from '@salesforce/schema/Contact.Phone';
//To navigate to contact record page once the contact is created.
import {NavigationMixin} from 'lightning/navigation';
 
export default class NewContactDay13 extends NavigationMixin(LightningElement) {
    @api recordId;//Account Id - this LWC in Account page
    contactApi = CONTACT;
    accountIdField = ACCOUNTID;
    nameField = NAME;
    phoneField = PHONE;
    handleContactSuccess(event){
        console.log('handleContactSuccess:'+JSON.stringify(event.detail));
        let contactId = event.detail.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes :{
                recordId : contactId,
                objectApiName : this.contactApi,
                actionName : 'view'
            }
        });
    }
    handleCancel(event){
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                if(field.fieldName !== "AccountId")
                    field.reset();
            });
        }

        this.dispatchEvent(new CustomEvent('close'));
    }
}