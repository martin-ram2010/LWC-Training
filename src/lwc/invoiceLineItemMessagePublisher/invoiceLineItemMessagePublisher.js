import { LightningElement, track, api, wire } from 'lwc';
import { publish,createMessageContext,releaseMessageContext} from 'lightning/messageService';
import INVLMessageChannel from "@salesforce/messageChannel/InvoiceLineItemMessage__c";

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import INVL_STATUS from '@salesforce/schema/Invoice_Line_Item__c.Invoice_Line_Item_Status__c';
import INVL_NAME from '@salesforce/schema/Invoice_Line_Item__c.Invoice_Line_Item_Name__c';
import INVL_INVOICE_ID from '@salesforce/schema/Invoice_Line_Item__c.Invoice__c';

export default class InvoiceLineItemMessagePublisher extends LightningElement {
    @api recordId;
    @track msg = '';
    @track receivedMessage = '';
    channel;
    @track invlData;

    @wire(getRecord, { recordId: '$recordId', fields: [INVL_STATUS, INVL_INVOICE_ID, INVL_NAME], optionalFields: [] })
    invoiceLineItemFunc({error, data}){
        if(data){
            this.invlData = data;
            //Check if the current invoice line item status is pending -> if so, pulish the message
            if( getFieldValue(data, INVL_STATUS) ===  'Pending'){
                this.publishMessage();
            }
        }else if(error){
            
        }
    };
    
    //The MessageContext object provides information about the Lightning web components that are using the Lightning message service. Get this object via the MessageContext via createMessageContext()
    context = createMessageContext();
    publishMessage() {  
        const payload = {
            invoiceId: getFieldValue( this.invlData, INVL_INVOICE_ID),
            messageBody: new Date()+' :: '+getFieldValue( this.invlData, INVL_NAME)+' Invoice Line Item status is updated to Pending.'
        }; 
        //	Send a message to components subscribed to the specified Lightning Message Channel.
        publish(this.context, INVLMessageChannel, payload);
    } 

    disconnectedCallback() {
        // MessageContext isn’t automatically released for service components. Instead, call releaseMessageContext(messageContext) to remove any subscriptions associated with your Lightning web component’s MessageContext.
        releaseMessageContext(this.context);
    }
}