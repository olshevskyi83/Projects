const numberOfFilms = +prompt('How many fils you watched?');
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

 for (let i = 0; i < 2; i++) {
   const a = prompt('One of the last movie'),
         b = prompt('film rate');
         
   if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
      personalMovieDB.movies[a] = b;
   } else {
      console.log('try again');
      i--;
   }
 }

          
