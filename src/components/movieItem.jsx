// Importing the Card component from react-bootstrap for UI styling
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// Defining a functional component named MovieItem that takes 'props' as a parameter
const MovieItem = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3000/api/movies/'+props.mymovie._id)
        .then((res)=>{
            console.log(res.data);
            props.Reload();
            alert('Movie'+props.mymovie.title+ 'Deleted');
        })
        .catch();
    }
    return (
        <div>
            {/* Using the Card component to display movie information in a styled card layout */}
            <Card className="text-centre">
                <Card.Body>
                    {/* Displaying the movie title passed in through props */}
                    <Card.Title>{props.mymovie.title}</Card.Title>

                    {/* Displaying the movie poster image */}
                    <img src={props.mymovie.poster} alt="Movie Poster" />
                </Card.Body>

                {/* Displaying the movie release year in the card footer */}
                <Card.Footer className="text-muted">{props.mymovie.year}</Card.Footer>
                <Link className='btn btn-primary' to={"/edit/" +props.mymovie._id}>edit</Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

// Exporting the MovieItem component for use in other parts of the application
export default MovieItem;
