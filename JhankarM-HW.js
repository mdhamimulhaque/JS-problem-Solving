// ================ feet calculator =======================
function footToMie(n){
  let miles =  0.000189;
  let convert = n * miles;
  
  return convert;
}

let result = footToMie(50);
console.log(result);

//============== woodCalculator ===========================

function woodCalculator(a,b,c){
     var chair = a*1;
     var table = b*3;
     var bed = c*5;
     var allThree = chair + table + bed;
     var chairTable = chair + table;
     var chairBed = chair + bed;
     var tableBed = table + bed;
     
     if(chair && table && bed){
         return "You need total:" + allThree + " ft³" + " (" + "chair:" + chair + " ft³" + " table:" + table + " ft³"  + " bed:" + bed + " ft³" + ")";
     }else if(chair && table || table && bed || chair && bed){

       
         if(chair && table){
            return "You need total:" + chairTable + " ft³" + " (" + "chair:" + chair + " ft³" + " table:" + table + " ft³" + ")";
         }else if (chair && bed){
            return "You need total:" + chairBed + " ft³" + " (" + "chair:" + chair + " ft³" + " bed:" + bed + " ft³" + ")";
         }else{
             return "You need total:" + tableBed + " ft³" + " (" + "table:" + table + " ft³" + " bed:" + bed + " ft³" + ")";
         }
     
     } else{
     
         if(chair && table == 0 && bed == 0){
            return "chair: " + chair + " ft³" ;
         }else if(chair == 0 && table  && bed == 0){
            return "table: " + table + " ft³" ;
         }else if(chair == 0 && table ==0  && bed ){
            return "bed: " + bed + " ft³" ; 
         }else{
             return "Plzzz input your value";
         }
     
     }

}

var result1 = woodCalculator(8,5,3);
console.log(result1);


//===================== brickCalculator ===================

function brickCalculator(b){
  var f10Constant = 10*15;
  var f20Constant = 10*12;
  var upF20Constant = 20*10;

  var f10 = b * 15;  
      f10 = Math.abs(f10 - f10Constant);

  var f20 = (b*12);
      f20 = Math.abs(f20 - f20Constant);
   
  var upF20 = b*10;
      upF20 = Math.abs(upF20Constant - upF20);

  var f20Total = f10Constant + f20;
  var UpF20Total = f10Constant + f20Constant + upF20;

  var brick = 1000;


  if(b != 0 && b <= 10 ){
      return "Your total length: " + f10 + "ft" + ". You need : " + f10 + " bricks" ;
  } else if(b >= 10 && b <= 20){
      return "Your total length: " + f20Total + "ft" + ". You need : " + brick * f20Total + " bricks";
  }else if(b > 20){
    return "Your total length: " + UpF20Total + "ft" + ". You need : " + brick * UpF20Total + " bricks";
  }else{
      return "Your length is empty";
  }
      
}

var result3 = brickCalculator(76);
console.log(result3);

