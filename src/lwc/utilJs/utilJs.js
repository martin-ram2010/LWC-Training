//Sample function to return sum of three number 
const returnSum = (a,b,c) =>{ 
    return a+b+c;
}
function showToast (variant='info', mode='dismissable', title, message) { 
    console.log('title:'+title);
    console.log('message:'+message);
    const event = new ShowToastEvent({
         title: title,
         message: message,
         mode : mode,
         variant : variant
     });
     //You can not fire event even after importing showtoast event 
     return event;
 }
export{returnSum, showToast};