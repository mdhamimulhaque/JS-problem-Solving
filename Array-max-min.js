var numbers = [10,20,70,40,50];

var maxNum = numbers[0];
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    if(maxNum < element){
        maxNum = element;
    }
}

console.log("Maximum number is : " +maxNum);


// min
var nid = [10,20,30,40,5];
var min = nid[0];
for(var i = 0; i < nid.length; i++){
    var loop = nid[i];
  if(min > loop){
      min = loop;
  }
}

console.log("minimum number is : " + min);