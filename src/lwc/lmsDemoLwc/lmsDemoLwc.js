import { LightningElement, track } from 'lwc';
import { publish,createMessageContext,releaseMessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from 'lightning/messageService';
import lmsDemoMC from "@salesforce/messageChannel/LMSDemo__c";

export default class LmsDemoLwc extends LightningElement {
    @track msg = '';
    @track receivedMessage = '';
    channel;
    //The MessageContext object provides information about the Lightning web components that are using the Lightning message service. Get this object via the MessageContext via createMessageContext()
    context = createMessageContext();

   
    handleSubscribe() {
        const parentPage = this;
        // Subscribes to a specified message channel. Returns a Subscription object that you can use to unsubscribe
        this.channel = subscribe(this.context, lmsDemoMC, function (event){
            if (event != null) {
                const message = event.messageBody;
                const source = event.source;
                parentPage.receivedMessage = 'Message: ' + message + '. Sent From: ' + source;
            }
        },//To receive messages on a message channel from anywhere in the application, pass the subscriberOptions parameter as {scope: APPLICATION_SCOPE}. 
         { scope: APPLICATION_SCOPE }
        );
    }
    //Unsubscribes from a message channel.
    handleUnsubscribe() {
        unsubscribe(this.channel);
    }

    handleChange(event) { 
        this.msg = event.target.value;
    }

    handleClick() {  
        const payload = {
            source: "Lightnign Web Component",
            messageBody: this.msg
        }; 
        //	Send a message to components subscribed to the specified Lightning Message Channel.
        publish(this.context, lmsDemoMC, payload);
    } 

    disconnectedCallback() {
        // MessageContext isn’t automatically released for service components. Instead, call releaseMessageContext(messageContext) to remove any subscriptions associated with your Lightning web component’s MessageContext.
        releaseMessageContext(this.context);
    }
}