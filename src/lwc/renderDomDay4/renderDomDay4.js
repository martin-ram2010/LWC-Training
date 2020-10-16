import { LightningElement } from 'lwc';
 
export default class RenderDomDay4 extends LightningElement {
    showDetails= false;
    
    handleChange(event){
        console.log(event.target.checked);
        this.showDetails = event.target.checked;
    }
}