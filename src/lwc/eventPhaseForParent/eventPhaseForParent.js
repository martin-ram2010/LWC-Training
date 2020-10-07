import { LightningElement } from 'lwc';
 
export default class EventPhaseForParent extends LightningElement {
    name;

    handleAlert(event){
        console.log(event.detail);
        console.log(event.target);
        this.name = event.detail;
    }
}