var x = 1000;
var y = 98000;
var z = 44000;

// 1st way(minimum & maximum) with max/min
var result = Math.max(x,y,z);
console.log("The maximum number is : " + result);
var result = Math.min(x,y,z);
console.log("The minimum number is : " + result);

// 2nd way(minimum & maximum) with function/condition
function maximum(x,y,z){
    if(x > y &&  x > z){
        return("x is large : " + x);
    }else if(y>x && y>z){
        return("Y is large : " + y);
    }else {
        return ("Z is large : " + z);
    }
}

var result4 = maximum(x,y,z);
console.log(result4);


// min

function minimum(x,y,z){
  if(x < y && x < z){
    return "X is small number :" + x;
  }else if(y < x && y < z){
      return "Y is small number :" + y ;
  }else{
      return "Z is small number :" + z;
  }
}

var result5 = minimum(x,y,z);
console.log(result5);



