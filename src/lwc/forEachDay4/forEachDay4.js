import { LightningElement, track } from 'lwc';
 
export default class ForEachDay4 extends LightningElement {
    @track accounts=[
        {Id : "id1", Name : "Vineeth" , Location : "Hyderabad"},
        {Id : "id2", Name : "Swapna" , Location : "US"},
        {Id : "id3", Name : "Ranjan" , Location : "Hyderabad"},
    ];
    get checkAccounts(){
        return this.accounts.length === 0;
    }
}