// namedExportDay7
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 

const returnInrForPounds = (pounds) =>{
    return pounds * 95;
}

function showToast(variant, mode, title, message){
    return new ShowToastEvent({
        title : title,
        message : message,
        mode : mode,
        variant : variant
    });
}

export {returnInrForPounds , showToast};