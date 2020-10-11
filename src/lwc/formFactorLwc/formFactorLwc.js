import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';
 
export default class FormFactorLwc extends LightningElement {
    formFactor = FORM_FACTOR;
}