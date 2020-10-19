import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import LwcImage from '@salesforce/resourceUrl/customImage';
import customJs from '@salesforce/resourceUrl/customJs';


export default class ThirdPartyJs extends LightningElement {
    customImage = LwcImage; 
    renderedCallback() {
        // Promise.all([
        //     loadStyle(this, customJs + '/customjs/customCSS.css'),
        //     loadScript(this, customJs + '/customjs/jquery-3.5.1.min.js'),
        // ]) 
        // .then(() => {
        //         console.log('Files loaded.');
        //     })
        //     .catch(error => {
        //         console.log(error.body.message);
        //     });
        //Load JS File
        loadScript(this, customJs + '/customjs/jquery-3.5.1.min.js')
        .then(() => {
                console.log('JS Files loaded.');
                return loadStyle(this, customJs + '/customjs/customCSS.css');
        })
        .then(() => {
            console.log('CSS Files loaded.');
    })
        .catch(error => {
            console.log(error.body.message);
        });
        //Load CSS File
        // loadStyle(this, customJs + '/customjs/customCSS.css')
        // .then(() => {
        //         console.log('CSS Files loaded.');
        // })
        // .catch(error => {
        //     console.log(error.body.message);
        // });
    }
    handleClick(event) {
        const h1Element = this.template.querySelector('h1.headline');
        // h1Element.innerHTML =`<div>I'm Using JQuery</div>`;
        // window.$(h1Element).css("color", "red");
        var img = window.document.createElement("IMG");
        img.src = this.customImage;
        img.class ='lwc';
        window.$(h1Element).html(img); 
    }
    removeClick(event) { 
        const imageElement = this.template.querySelector('img');
        window.$(imageElement).remove();
    }
}