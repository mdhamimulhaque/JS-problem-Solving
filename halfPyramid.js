// ============= Half pyramid with for loop =======

// ------------- half pyramid ----------
 // 1     - 1st
 // 12    - 2st
 // 123   - 3st
 // 1234  - 4st
 // 12345 - 5st

for(i=1; i<=5; i++){
    let num = "";
     for(j=1; j<=i; j++){
        //  console.log(j);
        num += j + " ";
     }
    console.log(num); 

 }

//=======================================
//------------- print (*)
 // *     - 1st
 // * *    - 2st
 // * * *   - 3st
 // * * * *  - 4st
 // * * * * * - 5st

//  for(i=1; i<=5; i++){
//     let num = "";
//      for(j=1; j<=i; j++){
//         num +="* ";
//      }
//     console.log(num);  
//  }

//===========================================

 //------------- print reverse (*)
 // * * * * * - 5st
 // * * * *  - 4st 
 // * * *   - 3st
 // * *    - 2st
  // *     - 1st


//   for(i=5; i>=1; i--){
//       let res = "";
//       for(j=1; j<=i; j++){
//         //   res += j + " "; //---------number
//           res +="* "; //---------star
//       }
//       console.log(res)
//   }