
 import MaskInput from 'mask-input'; 

export default class UIController {
   
    constructor() {
        this.createInput();        
    }

    createInput(){
        this.numInp = document.createElement('input');
        this.numInp.setAttribute('type', 'text');
        this.numInp.setAttribute('id', 'inp');
        document.body.appendChild(this.numInp);

        this.maskInput = new MaskInput(this.numInp, {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            //onChange: this.inpValidation.bind(this),
            maskChar: '_',
        })
    }
}

