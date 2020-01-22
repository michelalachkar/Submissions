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
//add
app.get("/movies/add", (req, res) => {
  res.send("this should be a post request that adds a movie");
});
//edit
app.get("/movies/edit", (req, res) => {
  res.send("this should be a post request that eduts a movie");
});
//delete
app.get("/movies/delete", (req, res) => {
  res.send("this should be a post request that deletes a movie");
});

app.listen(port, () => {
  console.log(`Server listenning on http://localhost:${port}`);
});
