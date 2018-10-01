/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const MIN = 1;
const MAX = 49;
const numberOfElements = 6;

let numbers = [];
let output = '';
for (let i = 0; i < numberOfElements; i++) {
    output += '<input id="' + i + '" type="text" maxlength="2" class="number">';
}

document.getElementById('app').innerHTML = output;

// number fields
let inputs = document.querySelectorAll('.number');

// listen for events
inputs.forEach(input => {
    input.addEventListener('blur', e => {
        console.log('value: ', e.target.value);
        if (e.target.value < "1" || e.target.value > "49") {
            document.getElementById(e.target.id).classList.add('invalid');
        }

        let myNumber = e.target.value;
        console.log(myNumber);
        console.log(numbers);
        let isInArray = isNumberInArray(numbers, myNumber);
        console.log('in array? ', isInArray);

        if (!isInArray) {
            numbers[e.target.id] = myNumber;
            document.querySelector('.error-message').innerHTML = '';
            document.getElementById(e.target.id).classList.remove('invalid');
        } else if (myNumber === '') {
            document.querySelector('.error-message').innerHTML = 'Empty value in cell ' + e.target.id;
        } else {
            document.querySelector('.error-message').innerHTML = myNumber + ' is already in the array';
            document.getElementById(e.target.id).value = '';
        }

        console.log(numbers);
    });
});

format = value => {
    console.log('value: ', value);
}

isValid = value => {
    let number = Number.parseInt(value);
    if (!value || value < MIN || value > MAX) return false;
    
    return true;
}

isNumberInArray = number => {
    console.log("My Number", number);
    console.log("Numbers: ", numbers);
    // do not consider the last array element
    for (let i = 0; i < numbers.length; i++) {
        if (number === numbers[i] && i !== 5) {
            return true;
        }
    }
    
    return false;
}


