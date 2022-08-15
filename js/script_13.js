"use strict";

if (4 == 9) { //if(если) условие верно то "ok!"
    console.log("ok!");
} else { //else(иначе) ошибка"error"" 
    console.log("error");
}

// Пример работы условия
const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("Mnogo");
} else {
    console.log("ok");
}

//1 аргумент    2 аргумент          3 аргумент
(num === 50) ? console.log("ok!") : console.log("error"); //Тернанрный оператор 

// switch конструкция( происходит строгое сравнение) , со строкой тоже работает ""
const nume = 50; // case(значение условия) , break(заверщение условия при вернном значении)
    switch(nume) {
        case 49:
            console.log("nema");
            break;
        case 100:
            console.log("error");
            break;
        case 50:
            console.log("profit");
            break;
        default: //Значение по умолчанию(если ни одно из условий не выполнено)
            console.log("kak to kak");
            break;
    }