import { LightningElement, track, api } from 'lwc';
 
import {  createMessageContext,releaseMessageContext, subscribe, APPLICATION_SCOPE} from 'lightning/messageService';
import INVLMessageChannel from "@salesforce/messageChannel/InvoiceLineItemMessage__c";
import getInvoiceLineItems from '@salesforce/apex/InvoiceLineItemController.getInvoiceLineItems';

export default class InvoiceMessageChannelSubscriber extends LightningElement {
    @track msg = '';
    @track receivedMessage = '';
    @api recordId;
    count =0;
    channel;
    //The MessageContext object provides information about the Lightning web components that are using the Lightning message service. Get this object via the MessageContext via createMessageContext()
    context = createMessageContext();
    
    connectedCallback(){
        this.handleSubscribe();
    }
    handleSubscribe() {
        
        const parentPage = this;
        // Subscribes to a specified message channel. Returns a Subscription object that you can use to unsubscribe
        this.channel = subscribe(this.context, INVLMessageChannel, function (event){
            if (event != null) {
                const message = event.messageBody;
                const invoiceId = event.invoiceId;
                parentPage.msg += message;//+'<br/>';
                let body = parentPage.template.querySelector('div.body');
                if(body){
                    let divElement = document.createElement('div');
                    divElement.innerText = ++parentPage.count +'. ' +message;
                    body.appendChild(divElement);
                }
            }
        },//To receive messages on a message channel from anywhere in the application, pass the subscriberOptions parameter as {scope: APPLICATION_SCOPE}. 
         { scope: APPLICATION_SCOPE }
        );
    }
    
    disconnectedCallback() {
        // MessageContext isn’t automatically released for service components. Instead, call releaseMessageContext(messageContext) to remove any subscriptions associated with your Lightning web component’s MessageContext.
        releaseMessageContext(this.context);
    }
}