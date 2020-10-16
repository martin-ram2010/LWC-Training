import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';
export default class MultipleTemplateDay4 extends LightningElement {
    templateOneProperty = true;
    
    render(){ // Render is a life cycle method which will be called when a property value changes and always return html file reference
        console.log('Rendered: '+this.templateOneProperty);
        return this.templateOneProperty ? templateOne : templateTwo;
    }

    switchTemplate(event){
        this.templateOneProperty = (this.templateOneProperty === true ) ? false : true;
    }
}