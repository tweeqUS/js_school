"use strict";
//  console.log(document.body.childNodes);//Получить все node
//  console.log(document.body.firstChild)
//  console.log(document.body.lastChild) 

//  console.log(document.querySelector('#current').parentNode.parentNode)// parentNode - получить родителя у элемента с id "#current"

//Дата атрибуты
console.log(document.querySelector('[data-current="3"]').nextSibling)//Получить data атрибут. NextSibling - получить следущий элемент 

console.log(document.querySelector('[data-current="3"]').nextElementSibling) //получить следущий элемент (не Nodes);


for(let node of document.body.childNodes) { //Перебераем все Nodes
    if(node.nodeName == '#text') {  //Пропускаем все Nodes с значением  nodeName == '#text'
        continue; 
    }

    console.log(node); //Вывод без текстовых Nodes
}