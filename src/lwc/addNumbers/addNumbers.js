import { LightningElement, track } from 'lwc';
import {returnSum as util, showToast} from 'c/utilJs';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class AddNumbers extends LightningElement {
    @track input1=0;
    @track input2= 0;
    @track input3 = 0;


    @track sum ;


    handleChange(event){
        let changedValue  = event.target.label;
        switch(changedValue)
        {
        case "input1":
            this.input1 = event.target.value;
        break;
        case "input2":
            this.input2 = event.target.value;
        break;
        case "input3":
            this.input3 = event.target.value;
        break;
        default :
            break;
        }
    }
    calculateSum() {
        this.sum = util(Number(this.input1),Number(this.input2),Number(this.input3));
        console.log("sum is=="+this.sum);
        this.dispatchEvent(showToast('info','dismissable','success', 'The addition of all :'+this.sum));
    }
}