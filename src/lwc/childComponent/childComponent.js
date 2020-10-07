import { LightningElement } from 'lwc';
 
export default class ChildComponent extends LightningElement {
    variableVal; properties;
    constructor(){
        super();
        console.log('childLifeCycle constructor');
    }
    //lifecycle hook fires when a component is inserted into the DOM.
    connectedCallback(){
        console.log('childLifeCycle connectedCallback - Element inserted in DOM');
        this.variableVal='ChildLifeCycle';
        throw new Error('Whoops!');
    }
    //Use it to perform logic after a component has finished the rendering phase.
    renderedCallback(){
        this.properties='set by rendered callback';
        console.log('childLifeCycle renderedCallback');
    }
    disconnectedCallback() {
        //You can remove the listeners once the component is destroyed.
        console.log('childLifeCycle disconnectedCallback - Element removed from DOM');
    }
    //Adding errorCallback at child is of no use, won't catch the component life cycle hook error
    // errorCallback(error, stack){
    //     console.error('Error handle at Child component:'+error);
    //     console.error('stack:'+stack);
    //  }
    handleButtonClick(){
        this.properties='set by rendered button click';
        console.log('childLifeCycle button click');
    }    
}