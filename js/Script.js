"use strict"
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const perconalMovieDb={
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

perconalMovieDb.movies[a] = b;
perconalMovieDb.movies[c] = d;

console.log(perconalMovieDb);