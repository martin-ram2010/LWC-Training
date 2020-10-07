import { LightningElement } from 'lwc';
 
export default class ParentToChildEvent extends LightningElement {
    handleChangeEvent(event){
        this.template.querySelector('c-ptc-child-component').changeMessage(event.target.value);
    }
}