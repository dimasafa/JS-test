const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('Und deine Schatzung', '');
const c = prompt('Noch eins?', '');
const d = prompt('Und deine Schatzung', '');

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.log(personalMovieDB);