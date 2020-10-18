import { LightningElement } from 'lwc';
 
export default class ContactSlot extends LightningElement {
    handlechanges(event){
        console.log('We\'re in Container Component contactSlot: '+event.target.value);
    }
    handleClick(event) {
        this.template.querySelector('div').style.color='green';
        // this.querySelector('p').style.color='red';
        this.querySelectorAll('p').forEach(element => {
            element.style.color='red'; 
        });
    }
}