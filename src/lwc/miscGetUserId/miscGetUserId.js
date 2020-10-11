import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';
import isGuestUser  from '@salesforce/user/isGuest';
export default class MiscGetUserId extends LightningElement {
    userId = Id;
    isGuest = isGuestUser;
}