import { LightningElement } from 'lwc';
 
export default class ContactSlot extends LightningElement {
    handlechanges(event){
        console.log('We\'re in Container Component contactSlot: '+event.target.value);
    }
}