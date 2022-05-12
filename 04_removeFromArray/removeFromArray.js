
const removeFromArray = function(arr, rem1) {    
   
    for (let n = 1; n <= arguments.length; n++){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === rem1){
                arr.splice(i,1);
            }        
            rem1 = arguments[n];
        }
    }
    
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
