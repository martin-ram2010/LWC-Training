import { LightningElement } from 'lwc';
 
export default class EventPhaseForChild2 extends LightningElement {
    name;
    constructor() {
        super();
        this.template.addEventListener('alert', this.handleAlert.bind(this));
    }
    handleAlert(event){
        console.log(event.detail);
        console.log(event.target);
        this.name = event.detail;
    }
}