// Movie class (logic inside methods)
    // add isClassic() > true if year < 2000

class Movie {
    constructor(title, year, rating)   // sets up the movie definitions 
    {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    isClassic() {
        return this.year < 2000;  // the part that executes the question; checks the movie's year
    }
}

const movies = [
    new Movie("Breaking Bad", 2009, 9.6),
    new Movie("Fatal Seduction", 2023, 7.8),
    new Movie("Black Panther", 1999, 6.9)
];   // created multiple movie instances and stored them in an array 

const classics = movies.filter(m => m.isClassic());   // filtering: calls the method on each object and keeps only the classics
console.log(classics);

