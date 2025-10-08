// Importing the Movies component from the local 'movies' file
import Movies from "./movies";

// Defining a functional component named Read
const Read = () => {

    // Creating a constant 'data' that stores an array of movie objects
    // Each object contains movie details such as Title, Year, IMDb ID, Type, and Poster URL
    const data = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];

    return (
        <div>
            {/* Displaying a header for the Read component */}
            <h1>Hello from Read Component</h1>

            {/* Passing the 'data' array as a prop named 'myMovies' to the Movies component */}
            <Movies myMovies={data}></Movies>
        </div>
    );
}

// Exporting the Read component so it can be imported and used in other parts of the app
export default Read;
