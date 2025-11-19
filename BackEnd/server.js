// Import the Express framework to create a web server
import express from 'express';
const app = express();
const port = 3000;

// Import and enable CORS to allow cross-origin requests
import cors from 'cors';
app.use(cors());

// Import and configure body-parser to parse URL-encoded and JSON request bodies
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set custom headers for CORS and allowed HTTP methods/headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allowed headers
  next(); // Continue to the next middleware or route handler
});

// Import and connect to MongoDB using Mongoose
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://admin:admin@cluster0.si8dhu8.mongodb.net/?appName=Cluster0');

// Define a schema for the Movie collection
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Create a model from the schema
const movieModel = mongoose.model('Movie', movieSchema);

// Route to create a new movie (POST request)
app.post('/api/movies', async (req, res) => {
  const { title, year, poster } = req.body;
  const newMovie = new movieModel({ title, year, poster });
  await newMovie.save();
  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});

// Root route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route to get all movies (GET request)
app.get('/api/movies', async (req, res) => {
  const movies = await movieModel.find({});
  res.json(movies);
});

// Route to get a single movie by its ID
app.get('/api/movie/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id);
  res.send(movie);
});


app.get('/api/movie/:id', async (req, res) => {
    let movie = await movieModel.findById({ _id: req.params.id });
    res.send(movie);
});

app.put('/api/movie/:id', async (req, res) => {
    const updatedMovie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMovie);
});
//  This second POST route to /api/movies overrides the previous one.
// You should remove or rename it to avoid conflicts.
app.post('/api/movies', (req, res) => {
  console.log(req.body);
  res.send('POST request to the movies endpoint');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
