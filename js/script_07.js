"use strict";

alert('hello romka'); //alert вывод сообщения через браузер

const result = confirm("are you here?"); //confirm - подвтверждение 
console.log(result); //вывод в консоль переменной result

const answer = +prompt("Вам есть 18 годиков?", ""); // Вопрос с вводом ответа("значение по умолчания") . Все данные выводятся в строку. Плюс перед prompt(ожидается введение числового значения)
console.log(answer);

const answers = []; //создание пустого массива[]

answers[0] = prompt("Как ваще имя?", ""); //1 элемент массива
answers[1] = prompt("Как дела?", ""); //2 элемент масива
answers[2] = prompt("Сколько годиков?", ""); // 3 элемент массива
document.write(answers); //Write вывести массив на экран 

console.log(typeof(null)); //ошибка java script , null выводит в обьект(object)

//не весь код сработает в консоле VS code (prompt, alert.confirm) работают только в браузере