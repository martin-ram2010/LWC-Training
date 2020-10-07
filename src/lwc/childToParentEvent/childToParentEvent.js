import { LightningElement, track } from 'lwc';
 
export default class ChildToParentEvent extends LightningElement {
    @track msg;
    @track dateMsg;

    constructor() {
        super();
        this.template.addEventListener('datechange', this.handleNotification.bind(this));
    }

    handleCustomEvent(event) {
        const textVal = event.detail;
        this.msg = textVal;
    }
    handleNotification(event) {
        this.dateMsg = event.detail;
    }
}