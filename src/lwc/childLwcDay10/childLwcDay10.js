import { LightningElement, track } from 'lwc';
 
export default class ChildLwcDay10 extends LightningElement {
    @track variableVal;
    properties;
    isUpdated = false;

    //You can not access any properties and DOM elements here
    //You can listen to events
    constructor(){
        //Call constructor in your parent class LightningElement
        super();
        console.log('childLwcDay10 constructor');
    }
    //You can access only properties and listen events but not child dom elments yet
    connectedCallback(){
        this.properties = 'childLwcDay10';
        console.log('childLwcDay10 connectedCallback');
        throw new Error('this is not a valid component');
    }
    //To return a template 
    // render(){

    // }

    //Once all the DOM is ready this method will be called, 
    //You can set the value of properties, dom elements accessible
    renderedCallback(){
        this.variableVal = 'childLwcDay10 renderedCallback';
        // if(!this.isUpdated){
        //     this.variableVal = new Date();
        //     this.isUpdated = true;
        // }

        console.log('childLwcDay10 renderedCallback');
    }
    //When commponent is being removed from DOM, any final thing you want to do.
    disconnectedCallback(){
        console.log('childLwcDay10 disconnectedCallback');
    }
}