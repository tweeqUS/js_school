'use strict';


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), //Работа сразу внутри wrapper
      oneHeart = wrapper.querySelector('.heart');
      

box.style.backgroundColor = 'blue'; //инлайн стили перебивают свойства css
box.style.width = '500px';

box.style.cssText = 'background-color: grey; width: 700px'; //запись css свойств по id

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red'; // При обращении к getElementsByClassName, обязаетльно указываем индекс элемента 


//1 способ перебора через цикл
for (let i = 0; i < hearts.length; i++) {     //перебор всех элементов через цикл 
    hearts[i].style.backgroundColor = 'green';  //и замена свойства
}

//2 способ перебора через метот forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

const div = document.createElement('div'); //создает новый элемент тольок внутри js

div.classList.add('black'); //создание div в html документе с классом black (div class ='black')
document.body.append(div); // помезяем div в конец(append) body

wrapper.append(div); //добавление элемента
wrapper.appendChild(div); //старый способ добавления элемента

wrapper.prepend(div); // добавление элемента в начало класса wrapper

hearts[0].before(div); //вставка элемента перед (before)
wrapper.insertBefore(div, hearts[1]); //старый способ

hearts[0].after(div); //встака элемента после (after)

circle[0].remove(); //удаление элемента
// wrapper.removeChild(hearts[2]);  старый способ удаления элемента

hearts[0].replaceWith(circle[0]); //замена элемента (первым пишем элемент который хотим заменить)
// wrapper.replaceChild(circle[0], hearts[0]); старый способ замены элемента

div.innerHTML = "<h1>Hello world</h1>"; //работа с html структурой , добавление в блок 

// div.textContent = '<h1>Hello</h1>'; // добавляет только текст 

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); //beforebegin вставляет html код перед элементом
div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>'); //afterbegin вставляет в начало нашего элемента
div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>'); //beforeend вставляет перед концом элемента
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>'); //afterend встаялет после элемента
