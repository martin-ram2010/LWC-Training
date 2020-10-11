import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';//ViewAllData
import hasLwcAccess from '@salesforce/customPermission/LWC_Permission';
 
export default class PermissionLwc extends LightningElement {
    hasAccessToSetup = hasViewSetup;
    hasAccessToLwc = hasLwcAccess;
}