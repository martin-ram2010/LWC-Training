import { LightningElement, track } from 'lwc';
 
export default class ParentComponent extends LightningElement {
    variableVal;
    constructor(){
        super();
        console.log('parentLifeCycle constructor');
        //throw new Error('Whoops!');
    }
    //lifecycle hook fires when a component is inserted into the DOM.
    connectedCallback(){
        console.log('parentLifeCycle connectedCallback - Element inserted in DOM');
        this.variableVal='ParentLifeCycle';
    }
    //Use it to perform logic after a component has finished the rendering phase.
    renderedCallback(){
        console.log('parentLifeCycle renderedCallback');
    }
   
    disconnectedCallback() {
        //You can remove the listeners once the component is destroyed.
        console.log('parentLifeCycle disconnectedCallback - Element removed from DOM');
    }
    //Implement it to create an error boundary component that captures errors in all the descendent components in its tree.It captures errors that occur in the descendant's lifecycle hooks or during an event handler declared in an HTML template. 
    errorCallback(error, stack){
        console.error('Error:'+error);
        console.error('stack:'+stack);
     }
    handleButtonClick(event){
        this.variableVal='Parent-Life-Cycle';
    }

    
}