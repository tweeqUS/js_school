"use strict";

function first() {
    //Do somithing
    setTimeout(function() {
        console.log(1);
    }, 500); //задержка в пол секунды (0.5)
}

function second() {
    console.log(2);
}

first();
second();
//callback ---------------------
function learnJS(lang, callback) { // lang and callback аргументы
    console.log(`Я учу: ${lang}`); // Функция вызывает conosle.log
    callback(); // Аргумент в виде функции которая вызывается после
}

function done() { // Создаём вторую функцию
    console.log('Я прошел этот урок!!!'); 
}
learnJS('javascript', done); // Исполтзуем первый аргумент функции learnJS и выводим в console.log, в качестве 2го аргумента выводим функцию done(callback функция)
//Вывод в консоле
// Я учу: javascript
// Я прошел этот урок!!!