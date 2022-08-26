"use strict";


const arr = [1, 4, 5, 6, 7];

// неправильная работа массива. Нарушение логики.  ТАК ДЕЛАТЬ НЕЛЬЗЯ
arr[99] = 0;
console.log(arr.length);
console.log(arr);


arr.pop(); //Удаление массива с конца
arr.push(10); //Добавление массива в конец

console.log(arr);

// 1 способ перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//2 способ перебора массива , можно использовать break and continue
for(let value of arr) {
    console.log(value);
}

const arrOne = [1, 5, 6, 7, 8];

//3 способ перебора массива .forEach
arrOne.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


arrOne.forEach(function(item, i) {
    console.log(`${i}: ${item}`);
});


const str = prompt("", "");
const products = str.split(", "); //Формирует новый массив .split
products.sort(); //Сортировка массива по алфавиту
console.log(products.join('; ')); //ЗАписывает массив в строку .join

// Метод перебора численного массива и сортировка по порядку
const arrTwo = [3,56 ,5 ,67, 4];
arrTwo.soft(compareNum);
console.log(arrTwo);

function compareNum(a, b) { //callback функция для правильного перебора массива
    return a- b; 
}