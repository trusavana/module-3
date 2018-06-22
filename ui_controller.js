
 import MaskInput from 'mask-input'; 

export default class UIController {
   
    constructor() {
        this.createInput();        
    }

    createInput(){
        this.numInp = document.getElementById('card');
       
        this.maskInput = new MaskInput(this.numInp, {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            //onChange: this.inpValidation.bind(this),
            maskChar: '_',
        })
    }
}

