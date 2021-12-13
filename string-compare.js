let x,y,xx,yy,xxx,yyy,z,zz,zzz;
let result,result1,result2,result3,result4,result5,result6,result7,result8,result9;
// ASCII code :: a = 61; 1 = 31;
x = "a";
y = "z";
result = x == y;
result1 = x > y;
result2 = x < y;
console.log(result,result1,result2); // false-false-true

xx = "aab";
yy = "aac";
result3 = xx < yy;
result4 = xx == yy;
console.log(result3,result4);// true-false

xxx = 1;
yyy = "1";
result5 = xxx == yyy;
result6 = xxx === yyy;
result7 = xxx > yyy;
console.log(result5,result6,result7); // true-false-false

z = "a"; // ASCII code :: a = 61;  1 = 31;
zz = 1;
result8 = z > zz;
console.log(result8); // false


z = 8; 
zz = 5;
zzz = 3;
result9 = z > zz > zzz; // z > zz = true(1) and true(1) > zzz = false;
console.log(result9); // false


