import { LightningElement } from 'lwc';
import SVG_LOGO from '@salesforce/resourceUrl/logo';
import SF_LOGO from '@salesforce/resourceUrl/SalesforceLogo';

export default class SvgComponent extends LightningElement {
    svgURL = `${SF_LOGO}#sflogo`
    connectedCallback(){
        console.log(JSON.stringify(`${SF_LOGO}#sflogo`));
    }
}