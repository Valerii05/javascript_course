
let numberOfFilms = +prompt("Скільки фільмів ти подивився?");

document.getElementById('out').innerHTML = numberOfFilms;

let personlMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

let lastFilm = prompt("Назва останнього фільму який ви дивились?", "");
let lastMark = prompt("На скільки ви його оцінюєте?");

let preLastFilm = prompt("Назва передостаннього фільму який ви дивились?", "");
let preLastMark = prompt("На скільки ви його оцінюєте?");


personlMovieDB.movies[lastFilm] = lastMark;
personlMovieDB.movies[preLastFilm] = preLastMark;

console.log(personlMovieDB);