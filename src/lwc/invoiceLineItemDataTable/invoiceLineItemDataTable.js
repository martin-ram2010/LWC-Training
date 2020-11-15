import { LightningElement,api, wire } from 'lwc';
 import getInvoiceLineItems from '@salesforce/apex/InvoiceLineItemController.getInvoiceLineItems';
const columns = [
    { label: 'Invoice Line Item Name', fieldName: 'link',type: 'url',typeAttributes: {label: { fieldName: 'Invoice_Line_Item_Name__c'}, target: '_top'}  },
    { label: 'Status', fieldName: 'Invoice_Line_Item_Status__c'},
    { label: 'Total Price', fieldName: 'Total_Price__c', type: 'currency' }
];
export default class InvoiceLineItemDataTable extends LightningElement {
    @api recordId;
    @api status ;
    columns = columns;

    @wire(getInvoiceLineItems, {'invoiceId': '$recordId', 'status' : '$status'}) invoiceLineItems;

    get title(){
        return this.status +' Invoice Line Items';
    }
    get invoiceLineItemRecords(){
        if(this.invoiceLineItems.data)
            return this.invoiceLineItems.data.map(record => Object.assign(
                { "link": '/'+record.Id},
                record
            ));
        else
            return [];
    }

}