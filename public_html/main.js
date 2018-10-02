/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const MIN = 1;
const MAX = 49;
const LOTTO_NUMBERS = 6
const POWER_BALL = LOTTO_NUMBERS - 1;

let numbers = Array(LOTTO_NUMBERS).fill('');

let output = '';
// create input fields
for (let i = 0; i < numbers.length; i++) {
    output += '<input id="' + i + '" type="text" maxlength="2" class="number">';
}

// add input fields to document
document.getElementById('app').innerHTML = output;

// number fields
let inputs = document.querySelectorAll('.number');

// listen for events
inputs.forEach(input => {
    input.addEventListener('blur', e => {
        let id = e.target.id;
        let myNumber = e.target.value;
        let number = parseInt(myNumber);
        
        if (!isValid(number)) {
            showError(id);
        } else {
            // value is not the powerball
            if (id < POWER_BALL && isNumberInArray(number)) {
                showError(id);
            } else {
                hideError(id, number);
            }
        }
    });
});


/**
 * Invalid input, show errors in real time
 * 
 * @param {type} id
 * @returns {undefined}
 */
showError = id => {
    document.getElementById(id).classList.add('invalid-input');
    document.querySelector('.error-message').innerHTML = 'Invalid input in cell ' + id;
    document.getElementById(id).value = '';
    
    // remove element from numbers array
    numbers[id] = '';
}

/**
 * Valid input, hide errors in real time
 * 
 * @param {type} id
 * @param {type} number
 * @returns {undefined}
 */
hideError = (id, number) => {
    document.getElementById(id).classList.remove('invalid-input');
    document.querySelector('.error-message').innerHTML = '';
    document.getElementById(id).value = format(number);
    
    // add number to array at position id
    numbers[id] = parseInt(number);
}

/**
 * @param {type} value is a valid number between 1 and 49
 * @returns {String}
 */
format = value => {
    let number = Number.parseInt(value);
    
    if (number < 10) {
        value = '0' + number;
    }
    
    return value;
}

/**
 * Checks the value is a valid number
 * @param {type} number is an integer
 * @returns {Boolean}
 */
isValid = number => {
//    let number = Number.parseInt(value);
    
    // allow non-empty values between 1 and 49
    if (!number || number < MIN || number > MAX) {
        return false;
    }

    return true;
}

/**
 * Numbers entered by the user
 * @param {type} number
 * @returns {Boolean}
 */
isNumberInArray = number => {
    for (let i = 0; i < numbers.length; i++) {
        // do not consider the power ball element
        if (parseInt(number) === numbers[i]) {
            return true;
        }
    }
    
    return false;
}
