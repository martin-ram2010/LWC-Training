import { LightningElement } from 'lwc';
 
export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;

    handleChange(event) {
        //to get the value of checkbox 
        this.areDetailsVisible = event.target.checked;
        //To track the value of a checkbox use event.target.checked
        //To track the value of other than checkbox use event.target.value
    }
}