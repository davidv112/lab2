import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {

  // Pull the movie ID from the URL
  let { id } = useParams();

  // Local state for the movie fields
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");

  // For sending the user elsewhere after updating
  const navigate = useNavigate();

  // Fetch the existing movie details once the component loads
  useEffect(() => {
    axios.get('http://localhost:3000/api/movie/' + id)
      .then((response) => {
        // Fill the form with the existing data
        setTitle(response.data.title);
        setYear(response.data.year);
        setPoster(response.data.poster);
      })
      .catch((error) => {
        // If it blows up, at least you'll see why
        console.log(error);
      });
  }, [id]);

  // Handle the form being submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page refreshing like a gobshite

    // Build the updated movie object
    const newMovie = { id, title, year, poster };

    // Send the update to the backend
    axios.put('http://localhost:3000/api/movie/' + id, newMovie)
      .then((res) => {
        console.log(res.data); // Log the response for your own sanity
        navigate('/read');     // Fire the user back to the list
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Title: </label>
          {/* Controlled input for the title */}
          <input 
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Release Year: </label>
          {/* Controlled input for the year */}
          <input 
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Poster URL: </label>
          {/* Controlled input for the poster URL */}
          <input 
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)} 
          />
        </div>

        <div className="form-group">
          {/* Button to fire off the update */}
          <input 
            type="submit" 
            value="Edit Movie" 
            className="btn btn-primary" 
          />
        </div>
      </form>
    </div>
  );
}