
let numberOfFilms ;

function start(){
    numberOfFilms = +prompt("Скільки фільмів ти подивився?");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів ти подивився?");
    }
}


start();

document.getElementById('out').innerHTML = numberOfFilms;

let personlMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};


function rememberMyFilms(){
    for(let i = 0 ; i < 2 ; i++){
        let lastFilm = prompt("Назва останнього фільму який ви дивились?", "");
        let lastMark = prompt("На скільки ви його оцінюєте?");
        
        if(lastFilm != null && lastMark != null && lastFilm != '' && lastMark != '' && lastFilm.length < 50 && lastMark .length < 50){
            personlMovieDB.movies[lastFilm] = lastMark;
        } 
        else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalMovie(){
    if(personlMovieDB.count <= 10 ){
        console.log("Мало фільмів");
    } else if (personlMovieDB.count > 10 &&personlMovieDB.count <= 30 ){
        console.log("Класичний глядач фільмів");
    } else if (personlMovieDB.count > 30) {
        console.log("Ви кіноман");

    } else{
        console.log("error!!!!");
    }
}

detectPersonalMovie();



console.log(personlMovieDB);


function showMyDB(hidden){
    if( !hidden ){
        console.log(personlMovieDB);
    }
}

showMyDB(personlMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++) {
        personlMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();


