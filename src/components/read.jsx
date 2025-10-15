import { useEffect, useState } from "react";
import axios from 'axios'
// Importing the Movies component from the local 'movies' file
import Movies from "./movies";

// Defining a functional component named Read
const Read = () => {

    // Declaring a state variable 'myMovies' to store an array of movies
    // 'setMovie' is the function used to update this state
    const [myMovies, setMovie] = useState([]);

    // useEffect hook runs after the component mounts (empty dependency array means it runs once)
    useEffect(() => {
        // Perform HTTP GET request using axios to fetch movie data
        axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
            .then((response) => {
                // Logs the array of movies to the console for debugging
                console.log(response.data.myArray);
                // Updates the state variable with the fetched movie array
                setMovie(response.data.myArray);
            })
            .catch((error) => {
                // Logs any errors that occur during the fetch
                console.log(error);
            });
    }, []); // Empty array ensures the effect runs only once (on component mount)

    return (
        <div>
            {/* Displaying a header for the Read component */}
            <h1>Hello from Read Component</h1>

            {/* Passing the fetched movies array as a prop named 'myMovies' to the Movies component */}
            <Movies myMovies={myMovies}></Movies>
        </div>
    );
}

// Exporting the Read component so it can be imported and used in other parts of the app
export default Read;
