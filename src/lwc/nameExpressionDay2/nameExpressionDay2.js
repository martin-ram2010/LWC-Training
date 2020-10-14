import { LightningElement, track } from 'lwc';
 
export default class NameExpressionDay2 extends LightningElement {
    firstName ='';
    lastName ='';
    @track nameObj ={firstName :'', lastName :''};
    @track dateObj;

    handleChange(event){
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(this.firstName);
        if(event.target.name === 'firstName')
            this.firstName =event.target.value;
        if(event.target.name === 'lastName')
            this.lastName =event.target.value;
    }
    get uppercaseNames(){
        return this.firstName.toUpperCase() +' '+this.lastName.toUpperCase();
    }


    //Object Tracking
    handleObjectChange(event){
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(this.firstName);
        if(event.target.name === 'firstNameObj')
            this.nameObj.firstName =event.target.value;
        if(event.target.name === 'lastNameObj')
            this.nameObj.lastName =event.target.value;
    }
    get uppercaseNamesObj(){
        return this.nameObj.firstName.toUpperCase() +' '+this.nameObj.lastName.toUpperCase();
    }
    initDate(event){
        this.dateObj = new Date();
    }
    updateDate(event){
        //this.dateObj.setHours(9);
        let currentDate = new Date();
        currentDate.setHours(2);
        this.dateObj=currentDate;
    }
}