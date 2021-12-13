// logical operator
// && (and), || (or), ! (not)

let num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11,num12;

//------------- and operator (if one condition false == false // both condition must be true)
num1 = true && true; //--->true
num2 = true && false; //--->false
num3 = false && true; //--->false
num4 = false && false; //--->false
console.log(num1,num2,num3,num4);

//------------- or operator (one condition true == true)
num5 = true || true; //--->true
num6 = true || false; //--->true
num7 = false || true; //--->true
num8 = false || false; //--->false
console.log(num5,num6,num7,num8);

// compare
let num13,num14,num15;
num13 = 13;
num14 = 12;
num15 = 5;

const result = (num13 > num14) && (num14 < num15);
console.log(result); //----------- false (one condition false here )
const result1 = (num13 > num14) || (num14 < num15);//----------- true (one condition true here)
console.log(result1); //----------- false (not operator use )
console.log(!result1); //----------- false (not operator use )


//------------OR Operator---------------------
console.log("OR", undefined || null); // null
console.log(undefined ||  0); // 0
console.log( null || 0); // 0
console.log(undefined || null || 0); // 0
//---------------------------------
console.log(undefined ||  1); // 1
console.log( null || 1); // 1
console.log(undefined || null || 1); // 1
//------------------------------
console.log( null || 0 || 1); // 1
console.log( '' || "" || "Hamim"); // hamim
console.log( null || 2 || undefined); // 2

//  ------------------ AND Operator --------------

console.log("AND", 1 && 0); // 0
console.log(null && 5); // null
console.log(0 && "Hamim");  // 0
console.log(1 && 2 && null && 3);  // null
console.log(1 && 2 && 3 );  // 3


//  ------------------ NOT Operator --------------
console.log("NOT", !true );  // false
console.log( !0 );  // true
console.log( !null );  // true
//-----( !!  used for converting something  to boolean type)
console.log( !!null );  // false
console.log( !!false );  // false
console.log( !!true );  // true
console.log( !!"Hamim" );  // true





