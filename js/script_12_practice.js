/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false,
};

let questionOne = prompt("Один из последних просмотренных фильмов?");
let questionTwo = prompt("На сколько оцените его?");
let questionThree = prompt("Один из последних просмотренных фильмов?");
let questionFour = prompt("На сколько оцените его?");

                        // WARNING . НЕПРАВИЛЬНО //
// personalMovieDB.movies[0] = "'" + questionOne + "'" + ":" + "'" + questionTwo + "'";
// personalMovieDB.movies[1] = "'" + questionThree + "'" + ":" +  "'" + questionFour + "'";

// personalMovieDB.movies[0] = `'${questionOne}': '${questionTwo}'`;
// personalMovieDB.movies[1] = `'${questionThree}': '${questionFour}'`;

                        // ПРАВИЛЬНО
personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB);