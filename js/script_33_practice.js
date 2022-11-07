
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Юла",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
   
    
    const promoDel = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector('.promo__genre'),
          promoInt = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

          addForm.addEventListener('submit', (event ) => {
            event.preventDefault();

            let newFilm = addInput.value;
            const favorite = checkbox.checked;

            if (newFilm) {

                if(newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }

                if(favorite) {
                    console.log('Добавляем любимый фильм');
                }

                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, promoInt);
            }
            event.target.reset();
          });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
         });
    };

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
        promoBg.style.backgroundImage = "url('../img/bg.jpg')";
    };
   
    const sortArr = (arr) => {
        arr.sort();
    };
   
    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
            </li> 
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);//РЕКУРСИЯ (для формирования новой нумерации)
            });
        });

    }

    
 


    deleteAdv(promoDel);
    makeChanges();
    
    createMovieList(movieDB.movies, promoInt);


});
//Свое решение



// const formAdd = document.querySelector('.add');
// const inputAdd = formAdd.querySelector('.adding__input');
// const films = document.querySelector('.promo__interactive-list');
// const filmLi = films.getElementsByTagName('li');

// //Создание верстки 
// const newFilmElement = (textFilm) => {
//     const newLi = document.createElement('li');
//           newLi.className = 'promo__interactive-item';
//           newLi.textContent = textFilm;   
//     const delEl = document.createElement('div');
//           delEl.className = 'delete';
//    newLi.insertAdjacentElement('afterbegin', delEl);
//    return newLi;
// }

// //Перебор массива для отображения всех его элементов на верстке
// newMovieDB.forEach((item, index) => {
//     const filmItem = newFilmElement(`${index + 1} ${item}`);
//     // console.log(filmItem);
//     films.append(filmItem);
//     return filmItem;
// });

// //Блок с созданием ошибки
// const createErrorBlock = (errorMessage) => {
//     const newSpan = document.createElement('span');
//           newSpan.className = 'danger_message';
//           newSpan.textContent = errorMessage;
//           newSpan.style.color = 'Red';
    
//     return newSpan;
// }

// //Событие на инпут
// formAdd.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const inputValue = inputAdd.value.toUpperCase(); //Получаем значение input в ВЕРХНЕМ РЕГИСТРЕ
    
//    //Функция, которая отрезает в конце слова БУКВЫ , если длина слова больше 20 символов
//     const filmSlice = (string) => {
//                 if (string.length > 20)
//                    return string.substring(0,20)+'...';
//                 else
//                    return string;
//              };
//     const resultat = filmSlice(inputValue);          
    

//     const someFilm = newMovieDB.some((film) => {
//         return film === (inputValue && resultat).trim(); //Cмотрим, есть ли такой фильм  && смотрим длину слова
//     });

    
          

//     const errorMessageBlockFromDOM = formAdd.querySelector('.danger_message')//Получаем селектор с блоком ошибки
    
   
//         if(!inputValue) { //Если input пустой
//             const errorBlock = createErrorBlock('Введите название фильма');//То пишем эту ошибку
//             formAdd.append(errorBlock);
//         } else if (someFilm) { //если такой фильм есть
//             const errorBlock = createErrorBlock('Такой фильм уже есть. Введите другое название!'); //То пишем эту ошибку
//             formAdd.append(errorBlock);
//         } else if (inputValue || !someFilm) {//Если вводим в input называние фильма и такого фильма, который вводим нет
//             const resInput = filmSlice(inputValue);
    
//             const addNewFilm = newMovieDB.push(`${resInput}`);// то пушим этот фильм
            
//             //findIndex
//             const searchedIndex = newMovieDB.findIndex((film) => { //поиск индеска элемента массива
//                 return film === resInput;
//             });

//             const filmNew = newFilmElement(`${searchedIndex + 1} ${resInput}`);//Добавляем этот фильм в верску
//             films.append(filmNew); //Добавляем на страницу
//         }   
  
//     if (errorMessageBlockFromDOM) { //Если окно ошибки есть
//         errorMessageBlockFromDOM.remove();//То удаляем
//     }


//     console.log(newMovieDB);
// });


// //Удаление фильмов из списка 

// const filmsDel = document.querySelector('.promo__interactive-list');
// filmsDel.addEventListener('click', (event) => {
        
//     const { target } = event; //Получаем таргет (верстка)
//     const buttonDelete = target.closest('.delete'); //Находим кнопку delete
//     const filmDochka = target.closest('.promo__interactive-item'); //Находим 'элемент который нужно удалить
    

//    if(buttonDelete) { //Если находит данный блок 
//     filmDochka.remove('.promo__interactive-item'); //То удаляем этот блок
//    }
// })


//Решение учителя

