// Importing the Card component from react-bootstrap for UI styling
import Card from 'react-bootstrap/Card'

// Defining a functional component named MovieItem that takes 'props' as a parameter
const MovieItem = (props) => {
    return (
        <div>
            {/* Using the Card component to display movie information in a styled card layout */}
            <Card className="text-centre">
                <Card.Body>
                    {/* Displaying the movie title passed in through props */}
                    <Card.Title>{props.mymovie.Title}</Card.Title>

                    {/* Displaying the movie poster image */}
                    <img src={props.mymovie.Poster} alt="Movie Poster" />
                </Card.Body>

                {/* Displaying the movie release year in the card footer */}
                <Card.Footer className="text-muted">{props.mymovie.Year}</Card.Footer>
            </Card>
        </div>
    );
}

// Exporting the MovieItem component for use in other parts of the application
export default MovieItem;
