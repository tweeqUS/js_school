'use strict';


const box = document.getElementById('box'); // получить элемент по айди (id)
console.log(box);

const btns = document.getElementsByTagName('button'); //полкчение элементов по имени тега(name tag)
console.log(btns[1]); //получение элемента из html коллекции [1] (начинается отсчет с 0)

const circle = document.getElementsByClassName('circle'); //получение элемента по имени класса(class name)
console.log(circle);

const hearts = document.querySelectorAll('.heart'); //получение элементов по селектору(пишеться через точку)
// console.log(hearts);\

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //получение первого элемента по селектору(какой первый элемент находит, тот и выводит)
console.log(oneHeart);
