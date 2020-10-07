import { LightningElement,track, api } from 'lwc';
 
export default class PtcChildComponent extends LightningElement {
    message;
    @api
    changeMessage(parentMessage) {
         this.message = parentMessage.toUpperCase();
    }
}