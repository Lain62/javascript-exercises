const removeFromArray = function(array, arrayRemoved) {



    function removeCalculation(){
        for (i = 0; i <= arrayRemoved.length; i++){
            let index = array.indexOf(arrayRemoved[i]);
            array.splice(index, 1);
            console.log(i)
            
    }
 
    }
    let legt = arrayRemoved.length
    return legt

    
};

console.log(removeFromArray([1, 2, 3, 4, 5], 1, 4))

// CHECK OUT array.shift DOCUMENTATIONS
// THIS DOES NOT WORK EXPERIMENT LATER

// Do not edit below this line
module.exports = removeFromArray;
