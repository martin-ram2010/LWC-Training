import { LightningElement } from 'lwc';
 
export default class CtpChildComponent extends LightningElement {
    handleChange(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('mycustomevent', {
            detail: event.target.value
        });
       this.dispatchEvent(selectEvent);
    }
    handleDateChange(event) {
        console.log('handleDateChange'+event.target.value);
        event.preventDefault();
        const selectEvent = new CustomEvent('datechange', {
            detail: event.target.value, bubbles : true
        });
       this.dispatchEvent(selectEvent);
    }
}