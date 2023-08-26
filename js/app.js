



function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin 3 digit found', pin);
        getPin();
    }

}


function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){

    const pin = getPin();
    // console.log(pin);

    //display pin input field  

    const displayFieldPin = document.getElementById('display-field');
    displayFieldPin.value = pin;
    
})


document.getElementById('calculator').addEventListener('click', function (event){

    const number = event.target.innerText;

    const typesNumberField= document.getElementById('types-number');
    const previousTypeString = typesNumberField.value;


    if(isNaN (number)){
        // console.log(number);

        if(number === 'C'){
            typesNumberField.value = '';
        }

        else if(number === '<'){
            const digits = previousTypeString.split('');
            digits.pop();

            const remainingDigits = digits.join('');
            typesNumberField.value = remainingDigits;

        }
    }

    else{
        const previousType = previousTypeString + number;
        typesNumberField.value = previousType ;
        
    }
   
});

document.getElementById('submit-Button').addEventListener('click', function(){

    // console.log('button click');

    const displayFieldPin = document.getElementById('display-field');
    const currentField = displayFieldPin.value ;

    const typesNumberField  = document.getElementById('types-number');
    const currentNumber = typesNumberField.value;

// messaage ar shob kaj pinSuccessMessage //  pinWrongMessage  //
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinWrongMessage = document.getElementById('pin-wrong');

    if(currentNumber === currentField){
        // console.log('correct pin')
        pinSuccessMessage.style.display = 'block';
        pinWrongMessage.style.display = 'none';

    }
    else{
        // console.log('incorrect pin')

        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';



    }

})