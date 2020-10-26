import { LightningElement, track } from 'lwc';
 
export default class ParentComponentForEventDay10 extends LightningElement {
    fullName;
    @track dob;
    age;
    handleNameChange(event){
        if(event.detail)
            this.fullName = event.detail.toUpperCase();
    }

    connectedCallback(){
        this.template.addEventListener('datechange', this.handleDateChange.bind(this));
    }
    handleDateChange(event){
        console.log('inside handleDateChange');
        if(event){
            console.log('event data:'+event.detail);
            this.dob=event.detail;
        }
    }
}