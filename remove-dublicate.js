var names = ["Rahim","Karim","Tamal","Himel","Tamal","Karim"];
var uniqueName = [];
for(var i = 0; i < names.length; i++){
  var elements = names[i];
  var index = uniqueName.indexOf(elements);
  if (index == -1){
    uniqueName.push(elements);
  }
  console.log(uniqueName);
}

console.log("result = ",uniqueName);