// ================ function work=====================
//==========================================================

// ------------------------array declare
var bangla = [85,70,54,57,79];
arrayCollector(bangla);

var english = [10,22,33,55,21,50];
arrayCollector(english);

//----------------------- value catch by function
function arrayCollector(myArray){
    for (let i = 0; i < myArray.length; i++) {
        const bangValue = myArray[i];
        calculation(bangValue);
    }
}

// ------------------------catching value apply with condition into function
function calculation(myValue){

    if(myValue % 2 == 0){
        console.log(myValue + ": This is even Number");
    }else{
        console.log(myValue*2 + ": This is odd Number double value");
    }
}

// ================ function work (another way----all work together)=====================
//=========================================================================================

var physic = [500,70,54,57,79];
calculationAllValue(physic);

var chemistry = [10,22,33,55,21,50];
calculationAllValue(chemistry);


function calculationAllValue(myAllValue){
    
    for (let i = 0; i < myAllValue.length; i++) {
        let valueCollector = myAllValue[i];
        
        let valueColectAll = valueCollector;
  


    if(valueColectAll % 2 == 0){
        console.log(valueColectAll + ": This is even Number for physic & chemistry");
    }else{
        console.log(valueColectAll*2 + ": This is odd Number double value for physic & chemistry");
    }
}
}



//=========================same work  without function ===============================

// var numbers = [10,22,33,55,21,50];

// for (let i = 0; i < numbers.length; i++) {
//     const myNumbers = numbers[i];

//     if(myNumbers % 2 == 0){
//         console.log(myNumbers + ": This is even Number");
//     }else{
//         console.log(myNumbers*2 + ": This is odd Number double value");
//     }
    
// }


// var bangla = [85,70,54,57,79];

// for (let i = 0; i < bangla.length; i++) {
//     const subjectBan = bangla[i];
    
//     if(subjectBan % 2 == 0){
//         console.log(subjectBan + ": This is even Number");
//     }else{
//         console.log(subjectBan*2 + ": This is odd Number double value");
//     }
// }