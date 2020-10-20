import { LightningElement } from 'lwc';
import addNumber from 'c/addNumberJs';
import {returnInrForPounds , showToast} from 'c/namedExportDay7';

//Static Resources
import LwcImage from '@salesforce/resourceUrl/customImage';
import customJs from '@salesforce/resourceUrl/customJs';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';

export default class ShareJavascriptDay7 extends LightningElement {
    number1 = 0;
    number2 = 0;
    number3 = 0;
    sum =0;
    handleChange(event){
        let name= event.target.name;
        switch(name){
            case "input1": 
                        this.number1 = event.target.value;
                        break;
            case "input2":
                        this.number2 = event.target.value;
                        break;
            case "input3":
                        this.number3 = event.target.value;
                        break;
        }
    }

    handleClick(event){
        this.sum = addNumber(this.number1, this.number2 , this.number3);
        let inr = returnInrForPounds(this.sum);
        console.log('inr:'+inr);
        let toastEvent = showToast('success', 'dismissable', 'INR', 'The sum of pounds in INR is: '+inr);
        this.dispatchEvent(toastEvent);
    }


    ///////////Static Resource Code //////////////////////////////////////
    connectedCallback(){
        // Promise.all([])
        // .then()
        // .catch();


        loadScript(this, customJs+'/customjs/jquery-3.5.1.min.js')
        .then(() =>{
            console.log('JS File is Uploaded Successfully.');
            return loadStyle(this, customJs+'/customjs/customCSS.css');
        })
        .then(() =>{
            console.log('CSS File is Uploaded Successfully.')
        })
        .catch(error =>{
            console.error('error while uploading JS file.'+error.body.message);
        });

        // loadStyle(this, customJs+'/customjs/customCSS.css')
        // .then(() =>{
        //     console.log('CSS File is Uploaded Successfully.')
        // })
        // .catch(error =>{
        //     console.error('error while uploading CSS file.'+error.body.message);
        // });
    }
    addImage(event){
        var h1element = this.template.querySelector('.headline');
        var img = window.document.createElement('IMG');
        img.src = LwcImage;
        img.class = 'lwc';
        window.$(h1element).html(img);
    }
    removeImage(event){
        let imageTag = this.template.querySelector('img');
        window.$(imageTag).remove();
    }
}