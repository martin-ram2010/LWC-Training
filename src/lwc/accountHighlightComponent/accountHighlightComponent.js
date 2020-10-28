import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountHighlightComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api flexipageRegionWidth;
    connectedCallback(){
        const event = new ShowToastEvent({
            title: 'Record Context',
            message: 'Object API Name :'+this.objectApiName +' with Record Id : '+this.recordId +' is displayed with '+this.flexipageRegionWidth+' width' ,
            mode : 'dismissable',
            variant : 'success'
        });
        this.dispatchEvent(event);
    }
    get gridDesign(){
        let gridClass='';
        if(this.flexipageRegionWidth === 'SMALL'){
            gridClass = 'slds-col slds-size_12-of-12';
        }else if(this.flexipageRegionWidth === 'MEDIUM' || this.flexipageRegionWidth === 'LARGE'){
            gridClass = 'slds-col slds-size_6-of-12';
        }
        return gridClass;
    }
}