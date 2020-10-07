import { LightningElement, api } from 'lwc';
 
export default class TodoTask extends LightningElement {
    uppercaseItemName;

    @api
    get itemName() {
        return this.uppercaseItemName;
    }

    set itemName(value) {
       this.uppercaseItemName = value.toUpperCase();
    }
}