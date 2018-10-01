/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
isNumberInArray = (numbers, number) => {
    console.log('HERE:', numbers);
    console.log('LEN:', numbers.length);
    // do not consider the last array element
    for (let i = 0; i < numbers.length; i++) {
        if (number === numbers[i] && i !== 5) {
            return true;
        }
    }
    
    return false;
}


