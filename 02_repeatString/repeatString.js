let heyString = '';
const repeatString = function(str, n) {    
    let heyString = '';
    if (n < 0){
        return 'ERROR';
    }else{
        for (let i = 0; i < n; i++) {
            heyString = heyString + str;
        }
        return heyString;
    }

};

// Do not edit below this line
module.exports = repeatString;
