import { LightningElement , track} from 'lwc';
 
export default class HelloExpressions extends LightningElement {
    //Primitive properties are reactive by default, not required @track or @api
    firstName = '';
    lastName = '';
    @track fullName = { firstName : '', lastName : ''};
    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;//.toUpperCase();
        }
    }

    get uppercasedFullName() {
        let name=this.firstName +' ' +this.lastName;
        return  name.toUpperCase();
    }

    handleChangeTrack(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.fullName.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.fullName.lastName = event.target.value;
        }
    }
    get uppercasedFullNameTrack() {
        let name=this.fullName.firstName +' ' +this.fullName.lastName;
        return  name.toUpperCase();
    }
}