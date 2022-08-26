"use strict";


const obj = {
    a: 5,
    b: 1
};

const copy = obj; // создание ссылки на первый объект , copy ссылается на obj 
copy.a = 10; // Меняется значение и в copy и в obj
console.log(copy);
console.log(obj);


// Создание копии объекта !!!Не работает с ворженными оьъектами. во вложеных объектах создаются ссылки!!! (поверхностная копия)
function copyOne(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return(objCopy);
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyOne(numbers);

newNumbers.a = 10;
newNumbers.a.x = 10; // Пример работы со вложеным объектом
console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // берем объект numbers и соеденяем его с объектом add (Поверхностный объект)


const clone = Object.assign({}, add); //Кпируем в новый пустой объект
clone.d = 20;
console.log(add);
console.log(clone);


//Создании копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asdasfasfasf';
console.log(newArray);
console.log(oldArray);

// Создание копии массива Spread(...)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'LiveJournal', 'Blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //Оператор Spread(...) создаёт копию массива 

console.log(internet);

// Передача массива в функцию с помощью Spread(...)
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num);

