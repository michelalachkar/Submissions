const express = require("express");

const app = express();

const port = 5000;

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

app.get("/search?", (req, res) => {
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

let movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
// get
app.get("/movies/get", (req, res) => {
  res.json({ status: 200, data: movies });
});

app.get("/movies/get/:sortby", (req, res) => {
  const sortBy = req.params.sortby;
  let arrayToReturn = [];
  switch (sortBy) {
    case "by-date":
      arrayToReturn = movies.sort((a, b) => {
        return a.year - b.year;
      });
      break;
    case "by-rating":
      arrayToReturn = movies.sort((a, b) => {
        return b.rating - a.rating;
      });
      break;
    case "by-title":
      arrayToReturn = movies.sort((a, b) => {
        return a.title > b.title;
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
  res.json({ status: 200, data: arrayToReturn });
});

app.get("/movies/get/id/:id", (req, res) => {
  if (req.params.id) {
    if (req.params.id < movies.length && req.params.id >= 0) {
      res.json({ status: 200, data: movies[req.params.id] });
    } else {
      res.json({
        status: 404,
        error: true,
        message: `the movie with id ${req.params.id} does not exist`
      });
    }
  }
});
//add
const paramChecker=(year,title)=>{
  let errors = [];
  if(!year){
    errors.push("year is missing")
  }else if(year.length!==4){
    errors.push("the year should be 4 digits")
    
  }else if(isNaN(year)){
    errors.push("the year should be a number")
  }
  if(!title){
    errors.push("title is missing")
  }
  return errors;
}

app.get("/movies/add?", (req, res) => {
  let year = req.query.year;
  let title = req.query.title;
  let rating = req.query.rating;
  let errors = paramChecker(year,title);
  if (errors.length>0){
    res.json({status:403, error:true, message:errors});
  }else if (!rating){
    movies.push({title:title,year:year,rating:4});
    res.json({title:title,year:year,rating:4});
  }else{
    movies.push({title:title,year:year,rating:rating});
    res.json({title:title,year:year,rating:rating});
  }

  console.log(movies);
});
//edit
app.get("/movies/edit", (req, res) => {
  res.send("this should be a post request that eduts a movie");
});
//delete
app.get("/movies/delete/:id", (req, res) => {
  let id = req.params.id;
  if(id<movies.length&&id>=0){
    let removedMovie = movies.splice(id,1);
    console.log(removedMovie);
    res.json({status:200,data:movies});
  }else{
    res.json({status:404, error:true, message:`the movie id ${id} does not exist`})
  }
});

app.listen(port, () => {
  console.log(`Server listenning on http://localhost:${port}`);
});
