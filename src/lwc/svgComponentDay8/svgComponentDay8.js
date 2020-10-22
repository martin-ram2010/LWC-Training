import { LightningElement } from 'lwc';
import sfLogo from '@salesforce/resourceUrl/SalesforceLogo';
import header from '@salesforce/label/c.Header';
import title from '@salesforce/label/c.Title';


export default class SvgComponentDay8 extends LightningElement {
    svgUrl = `${sfLogo}#sflogo`;
    firstName = 'Vineeth';
    lastName = 'P';

    titleLabel = title;
    headerLabel = header;
    connectedCallback(){
        console.log('svgURl:'+this.svgUrl);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}