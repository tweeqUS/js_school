"use strict";


const btn = document.querySelector('button'), //на теги точка не ставится
      btns = document.querySelectorAll('button'), 
      btn2 = document.getElementsByTagName('button'),
      overlay = document.querySelector('.overlay');

//  btn.onclick = function() { 
//     alert('Click');
//  };

//  btn.onclick = function() { //выводит последний onclick из за принципы работы dom элементов
//     alert('Click clack bang');
//  };


let i = 0;
const deleteElement = (e) => { 
    console.log(e.target); 
    i++;
    if(i == 1) {
        btn.removeEventListener('click', deleteElement); //Удаляет событие после клика
    }
};

btn.addEventListener('click', deleteElement); // Создает событие deleteElement(console.log(e.target);)


btn.addEventListener('mouseenter', () => { //выводим в консоль события при наведении мыши на кнопку
    console.log('Click clack bang , pow pow'); 
});

// Событие срабатывает сначало во вложеном элементе (сначало btn[1] потом overlay) 
const deleteElementOne = (e) => {
    // console.log(e.target); //событие
    console.log(e.currentTarget); //Показывает что внутри вложено
    console.log(e.type); //type -тип события 
};

btn2[1].addEventListener('click', deleteElementOne);
overlay.addEventListener('click', deleteElementOne);

const link = document.querySelector('a');

link.addEventListener('click', (event) => { 
    event.preventDefault(); //для отмены всех действий у элементов(prevenDefault)
    console.log(event.target); //.target отображение элемента полностью 
});

btns.forEach(btn => { //Перербор всех элементов и назначение им события
    btn.addEventListener('click', deleteElement, {once: true}); // {once: true} опция. запускает обработчик один раз
});