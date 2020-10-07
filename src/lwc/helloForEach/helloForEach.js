import { LightningElement } from 'lwc';
 
export default class HelloForEach extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
    // handleClick(event) {
    //     this.contacts = [
    //         {
    //             Id: 1,
    //             Name: 'Amy1 Taylor',
    //             Title: 'VP of Engineering',
    //         },
    //         {
    //             Id: 2,
    //             Name: 'Michael1 Jones',
    //             Title: 'VP of Sales',
    //         },
    //         {
    //             Id: 3,
    //             Name: 'Jennifer1 Wu',
    //             Title: 'CEO',
    //         },
    //     ];
    // }
}