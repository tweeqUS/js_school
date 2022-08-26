"use strict";


let str = "some";
let strObj = new String(str); //Метод создания строки (String) 

console.log(typeof(str));
console.log(typeof(strObj)); //Возвращает объект

// Создание прототипа
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const mike = Object.create(soldier); 
console.log(mike.armor);


const john = {
    health: 100
};

john.__proto__ = soldier; //Старый метод создания прототипа

Object.setPrototypeOf(john, soldier); //Современный метод создания прототипа

console.log(john.armor);

john.sayHello();


