import { LightningElement, api } from 'lwc';
 
export default class TodoTaskDay3 extends LightningElement {
    // @api itemName;
    upperCaseItemName;

    @api 
    get itemName(){
        return this.upperCaseItemName;
    }
    set itemName(value){
        this.upperCaseItemName = value.toUpperCase();
    }
}