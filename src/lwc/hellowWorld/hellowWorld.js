import { LightningElement, track } from 'lwc';
 
export default class HellowWorld extends LightningElement {
    @track greeting = 'World'; 

    handleChange(event) {
        //properties declared within class referred using this keyword
        console.log('this.greeting:'+this.greeting);
        this.greeting = event.target.value;
    }
}