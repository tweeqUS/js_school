"use strict";

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

document.addEventListener('DOMContentLoaded', () =>{

   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('нажали на экран');
    console.log(e.touches); //touches - содержит список всех пальцев на экране
                            //target.touches - Все пальцы которые взаимадействуют с конкретном элементе
                            //changetTouches - список пальцево, которые участвуют в событии                         
    });

   
   box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log('двигается'); 
    console.log(e.targetTouches[0].pageX) //Показ координат по оси(X)
   });


   box.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('палец убрали'); 
   });



});


