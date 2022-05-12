let sumNum1 = 0;
let sumNum2 = 0;

const sumAll = function(a, b) {
    sumNum1 = 0;
    sumNum2 = 0;
   
    if (typeof a !== typeof b){        
        return 'ERROR';
    }else if(a < 0 || b < 0){
        return 'ERROR';
    }else if (a < b){
        for (let i = a; i <= b; i++){
            sumNum1 = i;
            sumNum2 = sumNum2 + sumNum1;   
          
        }
        return sumNum2;
    }else{
        for (let i = b; i <= a; i++){
            sumNum1 = i;
            sumNum2 = sumNum2 + sumNum1;   
          
        }
        return sumNum2;
    }



};

// Do not edit below this line
module.exports = sumAll;
