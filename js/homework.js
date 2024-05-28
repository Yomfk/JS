"use strict"
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDb={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt ("Какой фильм вы посмотрели?", ""),
      b = prompt ("На сколько вы его оцените?", ''),
      c = prompt ("Какой фильм вы посмотрели?", ""),
      d = prompt ("На сколько вы его оцените?", '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);