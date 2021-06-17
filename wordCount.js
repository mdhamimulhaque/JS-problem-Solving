let text = "My name is Himel. Tamal is my brother.";
let count = 0;
for(let i = 0; i<text.length; i++){
   let word = text[i];
   if( word == " " && text[i-1] != " "){
       count++;
   }
}
count++;
console.log(count);