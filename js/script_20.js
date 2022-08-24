"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest(); // Запуск созданного метода внутри объекта

const {border, bg} = options.colors; // Диструктуризация - вытаскиваем свойство из объекта options.colors в качестве отдельно переменной
console.log(border);


console.log(Object.keys(options)); //Выводит ключи(Object.keys) объекта(options)
console.log(Object.keys(options).length); // lenght выводит колличество ключей


console.log(options.colors.border);
delete options.colors.bg; //Удаление объекта 
console.log(options);

//Создание цикла на перебор объекта в options
for (let key in options) { //key перебирает значение свойств(name, width, height и т.д.) in (в каком объекте перебрать) 
    console.log(`Свойство ${key} имеет значение ${options[key]}`); //Не перебирает вложенный объект
}

let counter = 0;
for (let key in options) {
    if(typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //Для вызова вложенного объекта
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    }
    console.log(counter); //counter - подсчёт свойств