// Import the Express module to create the web server
import express from 'express';
const app = express();
const port = 3000;

// Import and use CORS to allow requests from other origins
import cors from 'cors';
app.use(cors());

// Import and configure body-parser to handle form data and JSON in requests
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set headers to allow cross-origin requests and define allowed methods and headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow these HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow these headers
  next(); // Pass control to the next middleware
});

// A simple route to check if the server is working
app.get('/', (req, res) =>{
    res.send('Hello World');
});

// Route to handle GET requests to /api/movies
app.get('/api/movies', (req, res) =>{
    // A sample array of movies to send back as JSON
    const movies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ]
  // Send the array of movies in a JSON response
  res.json({myArray: movies })
}) 

// Route to handle POST requests to /api/movies
app.post('/api/movies', (req, res) => {
    console.log(req.body); // Log the data sent in the request body
    res.send('POST request to the movies endpoint'); // Respond to confirm receipt
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
