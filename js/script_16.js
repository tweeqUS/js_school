"use strict";

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("hello world!!!");
// 1 тип функции
function pisulek(a, b) {
    const c = a * b;
    console.log(c);
}
 pisulek(3, 5);

// 2 тип функции
 function calc (a, b) {
    return (a + b); // После return функция прекращает своё выполнение
 } 

 console.log(calc(3, 5));
 console.log(calc(4, 6));

// 3 тип функции
 function ret() { //создаём функфию
    let num = 50; // содаём переменную

    //


    return num; //Возврашаем переменную
 } // точка с заяпятой не нужна


  const anotherNum = ret(); //Создаём константу и присваивыем функцию
  console.log(anotherNum); //Выводим в консоль константу


// 4 тип функции. Выполняется только тогда , когда до неё доходит код
  const logger = function() {
    console.log('hello');
  }; // точка с заяпятой обязательна

// Стрелочная функция ( Простые функции можно выполнить в одну строку)
// 1 тип записи в однку строку
const calcTree = (a, b) => {return a + b};
console.log(calcTree(3, 5));
// 2 тип записи 
const calcTwo = (a, b) => {
    return a + b;
};
console.log(calcTwo(1, 2));