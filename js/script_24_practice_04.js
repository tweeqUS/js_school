"use strict";


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/




let numberOfFilms;




const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },

    
    rememberMyFilm: function() {
        let i = 0;
        while (i < 2) {
            let questionOne = prompt("Один из последних просмотренных фильмов?") ;
            let questionTwo = prompt("На сколько оцените его?");
            i++;
            
            if(questionOne != '' && questionTwo != '' && questionOne != null && questionTwo != null && questionOne.length < 50) {
                personalMovieDB.movies[questionOne] = questionTwo; 
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (numberOfFilms >= 1 && numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
        } else if (numberOfFilms > 10 && numberOfFilms < 30) {
        alert('Вы классический зритель');
        } else if (numberOfFilms > 30) {
        alert('Вы киноман');
        } else {
        alert('Произошла ошибка');
        }
    },

    writeYourGenres: function () {
        let i = 1;
        let answers;
        while (i <= 3) {
            answers = prompt(`Ваш любимый жанр под номером ${i}`);
            i++;
        
        if(answers != '' || answers != null) {
            i--;  
            } else {
            personalMovieDB.genres[i + 1] = answers;
            }

            personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Любимый жанр #${i + 1} - это ${item}`);
            });
        }
    },
    
        
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("база закрыта");
        }
    },
    
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        } 
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilm();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
