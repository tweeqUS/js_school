"use strict";

//Преобразование в строку

// 1 
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2
console.log(typeof(5 + "")); // Сложение строки с любым числом , получается строка

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

//Превобразование в число

// 1
console.log(typeof(Number('4')));

// 2
console.log(typeof(+"5")); //Унарный плюс

// 3
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

//Преобразование в булиновое значение

// 0, "", null, undefined, Nan; =  false

// 1
let switcher = null;
if(switcher) {
    console.log('working...');
}

switcher = 1;
if(switcher) {
    console.log('working...');
}

//2
console.log(typeof(Boolean('5')));

//3
console.log(typeof(!!4444));
