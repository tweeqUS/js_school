"use strict"

const category = "toys";
console.log('https://someurl.com/' + category); //Сложение строки с переменной

console.log(`https://someurl.com/${category}`); //Инторполяция(сложение строки с переменной в кривых скобках `${переменная}`)

// Пример 

const user = "Romka";
alert(`hello , ${user}`);