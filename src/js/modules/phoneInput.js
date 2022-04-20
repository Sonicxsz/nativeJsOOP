function phoneInput (selector) {

let phoneInput = document.querySelectorAll(selector);

function getInputNumbersValue (input){
    return input.value.replace(/\D/g, '');
}


phoneInput.forEach(inp =>{
    inp.addEventListener('input', onPhoneInput);
    inp.addEventListener('keydown', onPhoneKey);
    inp.addEventListener('paste', onPhonePaste);
});


function onPhonePaste(e){
    let pasted = e.clipboardData || window.clipboardData,
    input = e.target,
    inputNumbersValue = getInputNumbersValue(input);
    if(pasted){
        let pastedText = pasted.getData('Text');
        if(/\D/g.test(pastedText)){
            input.value = inputNumbersValue;
        }
    }
}

function onPhoneKey(e){
    let input = e.target;
    if(e.keyCode == '8' && getInputNumbersValue(input).length == 1){
        e.target.value = '';
    }
}

function onPhoneInput (e){
    let input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    formattedInputValue = '',
    selectionStart = input.selectionStart;
    if(!inputNumbersValue){
        input.value = '';
    }

    if(input.value.length != selectionStart){
        if(e.data && /\D/g.test(e.data)){
            input.value = inputNumbersValue;
        }
        return
    }

    if(['7', '8', '9'].includes(inputNumbersValue[0])){
        if(inputNumbersValue[0] == '9'){
            inputNumbersValue = '7' + inputNumbersValue;
        }
        let firstSybmols = (inputNumbersValue[0] == '8') ? '8' : '+7';
        formattedInputValue = firstSybmols + ' ';

        if(inputNumbersValue.length > 1){
            formattedInputValue += "(" + inputNumbersValue.substring(1,4);
        }

        if(inputNumbersValue.length >= 5){
            formattedInputValue += ') ' + inputNumbersValue.substring(4,7);
        }

        if(inputNumbersValue.length >= 8){
            formattedInputValue += '-' + inputNumbersValue.substring(7,9);
        }
        if(inputNumbersValue.length >= 10){
            formattedInputValue += '-' + inputNumbersValue.substring(9,11);
        }

    }else {
        //not Russian
        formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
}


}

export default phoneInput;