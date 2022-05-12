
let strArray = [];
let strReversed = '';
let strLetter = '';
const reverseString = function(str) {
    strLetter = '';
    strReversed = '';
    strArray = [];
    
    for (let i = 0; i < str.length; i++){
        strLetter = str.slice(i,i+1);        
        strArray[i] = strLetter;
    }   
   
    for (let n = strArray.length - 1; n > -1; n--) {
        strLetter = strArray[n];
        strReversed = strReversed + strLetter;
    }

    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
