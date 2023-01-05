"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const rateOfFilm = prompt('На сколько оцените его?', '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const rateOfFilm2 = prompt('На сколько оцените его?', '');


personalMovieDb.movies[lastFilm] = rateOfFilm;
personalMovieDb.movies[lastFilm2] = rateOfFilm2;

console.log(personalMovieDb);