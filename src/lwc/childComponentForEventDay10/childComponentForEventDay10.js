import { LightningElement } from 'lwc';
 
export default class ChildComponentForEventDay10 extends LightningElement {
    handleNameChange(event){//By default parent can listen to this event declaritively, bubble is not required
        let nameChangeEvent = new CustomEvent('namechange',{detail : event.target.value});
        this.dispatchEvent(nameChangeEvent);
    } 
    handleDateChange(event){ // Parent listens programmetically then add bubbles to true
        console.log('handleDateChange');
        let dateChangeEvent = new CustomEvent('datechange',{detail : event.target.value, bubbles: true, composed :true});
        this.dispatchEvent(dateChangeEvent);
    }

    // To listen by Internal DOM - add the handler and no bubbles is required
    /*connectedCallback(){
        this.template.addEventListener('datechange', this.handleDateChange.bind(this));
    }
    handleDateChange(event){
        console.log('inside handleDateChange - child');
        if(event){
            console.log('event data:'+event.detail);
        }
    }*/
}