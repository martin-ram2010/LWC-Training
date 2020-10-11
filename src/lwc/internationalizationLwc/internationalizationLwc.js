// internationalizationLwc.js
import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import LANG from '@salesforce/i18n/lang';

export default class InternationalizationLwc extends LightningElement {
    lang = LANG;
    date = new Date();
    formattedDate = new Intl.DateTimeFormat(LOCALE).format(this.date);
}