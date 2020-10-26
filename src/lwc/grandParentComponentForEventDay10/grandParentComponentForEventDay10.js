import { LightningElement } from 'lwc';
 
export default class GrandParentComponentForEventDay10 extends LightningElement {
    connectedCallback(){
        this.template.addEventListener('datechange', this.handleDateChange.bind(this));
    }
    handleDateChange(event){
        console.log('inside handleDateChange - grand parent');
        if(event){
            console.log('event data:'+event.detail);
        }
    }
}