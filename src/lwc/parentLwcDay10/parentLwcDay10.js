import { LightningElement } from 'lwc';
 
export default class ParentLwcDay10 extends LightningElement {
    variableVal;
    properties;

    //You can not access any properties and DOM elements here
    //You can listen to events
    constructor(){
        //Call constructor in your parent class LightningElement
        super();
        console.log('parentLwcDay10 constructor');
    }
    //You can access only properties and listen events but not child dom elments yet
    connectedCallback(){
        this.properties = 'parentLwcDay10';
        console.log('parentLwcDay10 connectedCallback');
    }
    //To return a template 
    // render(){

    // }

    //Once all the DOM is ready this method will be called, 
    //You can set the value of properties, dom elements accessible
    renderedCallback(){
        // this.variableVal = 'parentLwcDay10 renderedCallback';
        console.log('parentLwcDay10 renderedCallback');
    }
    //When commponent is being removed from DOM, any final thing you want to do.
    disconnectedCallback(){
        console.log('parentLwcDay10 disconnectedCallback');
    }

    //Errorcallback will listen any exception thrown by child component
    // errorCallback(error, stack){
    //     console.error('Error:'+error);
    //     console.error('Stack:'+stack);
    // }
}