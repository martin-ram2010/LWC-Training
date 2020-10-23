import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import LANGUAGE from '@salesforce/i18n/lang';

//User Properties
import userId from '@salesforce/user/Id';
import isGuesUser from '@salesforce/user/isGuest';

//Custom Permission
import CUSTOM_PERMISSION from '@salesforce/customPermission/LWC_Permission';
import VIEW_SETUP from '@salesforce/userPermission/ViewSetup';
import VIEW_ALL_DATA from '@salesforce/userPermission/ViewAllData';

//Form Factor - represent the device from which Salesforce is accessed
import FORM_FACTOR from '@salesforce/client/formFactor';

export default class UserPropertiesDay9 extends LightningElement {
    localeProp = LOCALE;
    languageProp = LANGUAGE;
    formattedDate = new Intl.DateTimeFormat(LOCALE).format(new Date());
    //User Properties
    currentUserId = userId;
    isCurrentUserGuest = isGuesUser;

    //Custom Permission property
    hasAccessToLwc = CUSTOM_PERMISSION;
    hasAccessToViewSetup = VIEW_SETUP;
    hasAccessToViewAllData = VIEW_ALL_DATA;
    //Capture form factor
    formFactor = FORM_FACTOR;
}