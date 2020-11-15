import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import BILLING_STATUS from '@salesforce/schema/Invoice__c.Billing_Status__c';
import PRICE from '@salesforce/schema/Invoice__c.Price__c';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';

export default class InvoiceHeading extends LightningElement {
    @api recordId;
    
    @wire(getRecord, { recordId: '$recordId', fields: [BILLING_STATUS, PRICE], optionalFields: [] })
    invoice;

    get status() {
        return getFieldValue(this.invoice.data, BILLING_STATUS);
    }
    get formattedNumber() {
        return new Intl.NumberFormat(LOCALE, {
            style: 'currency',
            currency: CURRENCY,
            currencyDisplay: 'symbol'
        }).format(getFieldValue(this.invoice.data, PRICE));
    }
}