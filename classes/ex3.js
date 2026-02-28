// Movie class (logic inside methods)
    // add isClassic() > true if year < 2000

class Movie {
    constructor(title, year, rating) 
    {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    isClassic() {
        return this.year < 2000;  // the part that executes the question 
    }
}

const movies = [
    new Movie("Breaking Bad", 2009, 9.6),
    new Movie("Fatal Seduction", 2023, 7.8),
    new Movie("Black Panther", 1999, 6.9)
];

const classics = movies.filter(movies.isClassic());
console.log(classics);

