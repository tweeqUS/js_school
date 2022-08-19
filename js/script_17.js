"use strict";


//Свойства .length
const str = "teSt";
const arr = [1, 2, 4];
console.log(str.length);
console.log(arr.length);
console.log(str[2]);

console.log(str.toUpperCase()); // Метод toUpperCase меняет в верхний регистр
console.log(str.toLowerCase()); // Метод toLowerCase меняет в нижний регистр


// Метод поиска подстроки
            //  012345
 const fruit = "Some fruit";
 console.log(fruit.indexOf("fruit")); //indexOf выводит номер подстроки , в данном примере 5 строка.

 console.log(fruit.slice(5, 10)); // Метод .slice вырезает кусок из строки подстроку.
 console.log(fruit.slice(5)); // Вырезает кусок (от 5 индекса) до конца строки
 console.log(fruit.substring(5, 10)); // как метод .slice только не использует отрицательное значение
 console.log(fruit.substr(5, 5)); // Начиная с 5 индекса вырезает 5 символов


 const num = 12.2;
 console.log(Math.round(num)); // Math.round округление до ближайшего целого 
 
 const test = "12.2px";
 console.log(parseInt(test)); //Метод перевода в число
 console.log(parseFloat(test)); // Меиод перервода в число с дробными значениями