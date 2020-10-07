import { LightningElement } from 'lwc';
import header from '@salesforce/label/c.Header';
import title from '@salesforce/label/c.Title';
export default class CustomLabelDemo extends LightningElement {
    label = {
        header,
        title
    };
}