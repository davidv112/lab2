// Importing the MovieItem component from the local file 'movieItem'
import MovieItem from './movieItem';

// Defining a functional component named Movies that takes 'props' as a parameter
const Movies = (props) => {
    return (
        // Mapping through the 'myMovies' array (passed in via props)
        // For each movie object, render a MovieItem component
        props.myMovies.map((movie) => {
            // Passing each movie object as a prop called 'mymovie' to the MovieItem component
            return <MovieItem mymovie={movie}
key={movie._id}
                Reload={props.Reload}>
            </MovieItem>;
        })
    );
}

// Exporting the Movies component so it can be imported and used elsewhere
export default Movies;
