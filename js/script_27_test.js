//1
let x = 5; 
console.log(x++); // 5

//2
let two = [ ] + false - null + true ;
console.log(two);  //NaN 

//3
let y = 1; 
let x = y = 2; 
console.log(x); //2

//4
let four = [ ] + 1 + 2;
console.log(four); //12

//5
console.log( "1"[0] ); //1

//6
let six = 2 && 1 && null && 0 && undefined ;
console.log(six); //null
//и запинается на лжи

//или запинается на правде
//7
let sevenOne = !!( a && b ); //boolen
let sevenTwo = (a && b); //false

console.log(typeof(sevenOne));
console.log(typeof(sevenTwo));

//8
let vosem = ( null || 2 && 3 || 4 );
console.log(vosem);

//9
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b  //folse

//10
console.log(+"Infinity" ); //infinity

//11
"Ёжик" > "яблоко" //true 

//12
let twelve = 0 || "" || 2 || undefined || true || falsе;
console.log(twelve); //2