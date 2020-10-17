import { LightningElement } from 'lwc';
 
export default class ContactsSlot extends LightningElement {
    handlechanges(event){
        console.log('We\'re in Parent Component contactsSlot: '+event.target.value);
    }
}