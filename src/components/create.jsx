// create.js

// Importing the useState hook from React to manage state within the functional component
import { useState } from "react";
import axios 
from "axios";
function Create() {
  // Defining state variables for movie details: title, year, and poster
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form refresh behavior
    console.log(title, year, poster); // Logs the entered movie details to the console
  

  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  
  axios.post('http://localhost:3000/api/movies', movie)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));
};

  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* Form to collect movie information */}
      <form onSubmit={handleSubmit}>
        {/* Input field for movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title} // Controlled input linked to title state
            onChange={(e) => { setTitle(e.target.value) }} // Updates title state on change
          />
        </div>

        {/* Input field for movie year */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year} // Controlled input linked to year state
            onChange={(e) => { setYear(e.target.value) }} // Updates year state on change
          />
        </div>

        {/* Input field for movie poster URL */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input
            type="text"
            className="form-control"
            value={poster} // Controlled input linked to poster state
            onChange={(e) => { setPoster(e.target.value) }} // Updates poster state on change
          />
        </div>

        {/* Submit button to add the movie */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Exporting the Create component so it can be imported and used in other parts of the app
export default Create;
