const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(bodyParser.json());

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connectionString =
  "mongodb+srv://michel:codicodi@clusterprime-mvjxv.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDb Connected"))
  .catch(err => console.log(err));

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Movie = mongoose.model("movies", movieSchema);

app.get("/", (req, res) => {
  res.send("now");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  let myDate = new Date();
  res.send({
    status: 200,
    message: `${myDate.getHours()}:${myDate.getMinutes()}`
  });
});

app.get("/hello/:id", (req, res) => {
  const myId = req.params.id;
  res.send({ status: 200, message: `hello ${myId}` });
});

app.get("/search", (req, res) => {
  if (req.query.s) {
    const mySearch = req.query.s;

    res.send({ status: 200, message: "ok", data: mySearch });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});

// let movies = [];
// get
app.get("/movies/get", (req, res) => {
  Movie.find().then(movie => {
    res.json(movie);
  });
});

app.get("/movies/get/:sortby", (req, res) => {
  const sortBy = req.params.sortby;
  switch (sortBy) {
    case "by-date":
      Movie.find()
        .sort({ year: "asc" })
        .then(movie => {
          res.json({ status: 200, data: movie });
        });
      break;
    case "by-rating":
      Movie.find()
        .sort({ rating: "desc" })
        .then(movie => {
          res.json({ status: 200, data: movie });
        });
      break;
    case "by-title":
      Movie.find()
        .sort({ title: "asc" })
        .then(movie => {
          res.json({ status: 200, data: movie });
        });
      break;
    default:
      res.json({
        status: 500,
        error: true,
        message: "you have to provide a valid search"
      });
      break;
  }
});

app.get("/movies/get/id/:id", (req, res) => {
  if (req.params.id) {
    const movieById = Movie.findById(req.params.id);
    if (movieById) {
      movieById
        .then(movie => res.json({ status: 200, data: movie }))
        .catch(err =>
          res.json({
            status: 404,
            error: true,
            message: `movie with id ${req.params.id} does not exist`
          })
        );
    }
  }
});

//add
const paramChecker = (year, title) => {
  let errors = [];
  if (!year) {
    errors.push("year is missing");
  } else if (!/\d{4}/.test(year)) {
    errors.push("the year should be 4 digits");
  } else if (isNaN(year)) {
    errors.push("the year should be a number");
  }
  if (!title) {
    errors.push("title is missing");
  }
  return errors;
};

app.post("/movies/add", (req, res) => {
  let year = req.query.year;
  let title = req.query.title;
  let rating = req.query.rating;
  req.body.year = year;
  req.body.title = title;
  req.body.rating = rating;
  year = req.body.year;
  title = req.body.title;
  rating = req.body.rating;

  let errors = paramChecker(year, title);

  if (errors.length > 0) {
    res.json({ status: 403, error: true, message: errors });
  } else if (!rating) {
    let newMovie = new Movie({
      title: title,
      year: year,
      rating: 4
    });
    newMovie
      .save()
      .then(movie => res.json(movie))
      .catch(err => console.log(err));
    // movies.push({ title: title, year: year, rating: 4 });
    // res.json({ title: title, year: year, rating: 4 });
  } else {
    // movies.push({ title: title, year: year, rating: rating });
    // res.json({ title: title, year: year, rating: rating });
    let newMovie = new Movie({
      title: title,
      year: year,
      rating: rating
    });
    newMovie
      .save()
      .then(movie => res.json(movie))
      .catch(err => console.log(err));
  }
});

//edit
app.put("/movies/update/:id", (req, res) => {
  let id = req.params.id;
  let movieToUpdate = {};
  const movieById = Movie.findById(id);

  if (movieById) {
    movieById.then(movie => (movieToUpdate = movie));
    console.log(movieToUpdate);
    for (test in req.query) {
      if (test === "title") {
        movieToUpdate[test] = req.query[test];
      }
      if (test === "year") {
        movieToUpdate[test] = req.query[test];
      }
      if (test === "rating") {
        movieToUpdate[test] = req.query[test];
      }
    }
    movieById.updateOne(movieToUpdate);
    res.json({ status: 200, data: movieToUpdate });
  } else {
    res.json({ status: 404, error: true, message: `id ${id} doesn't exist` });
  }
});
//delete
app.delete("/movies/delete/:id", (req, res) => {
  let id = req.params.id;
  const movieById = Movie.findById(id);
  if (movieById) {
    movieById.deleteOne().then(movie => res.json({ status: 200, data: movie }));
  } else {
    res.json({
      status: 404,
      error: true,
      message: `the movie id ${id} does not exist`
    });
  }
});
//checkpoint
app.listen(port, () => {
  console.log(`Server listenning on http://localhost:${port}`);
});
