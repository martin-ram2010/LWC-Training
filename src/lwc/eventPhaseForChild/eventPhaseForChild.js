import { LightningElement, api } from 'lwc';
 
export default class EventPhaseForChild extends LightningElement {
    @api
    accName = 'Test';
    @api
    status;

    handleClick(event){
        console.log(event.target.dataset.status);
        this.template.querySelectorAll('lightning-input').forEach(
            element => {
                if(element.name === 'accname'){
                    this.accName = element.value;
                    this.dispatchEvent(new CustomEvent('alert', 
                                                        { 
                                                             bubbles: true,
                                                         composed: true,
                                                        detail: element.value }));
                }
            }
        )
    }
}