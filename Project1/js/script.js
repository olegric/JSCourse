'use strict';

const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt('Какой фильм ты посмотрел?', ''),
      mark1 = prompt('Как оцениваешь?', ''),
      film2 = prompt('Какой фильм ты посмотрел?', ''),
      mark2 = prompt('Как оцениваешь?', '');


personalMovieDB.movies[film1] = mark1;
personalMovieDB.movies[film2] = mark2;

console.log(personalMovieDB);
