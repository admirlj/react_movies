var express = require("express");
var router = express.Router();
const movies = require("../mojabaza");
const uuid = require("uuid");

const movieController = require("../controller/movies");
//GET ALL MOVIES
router.get("/", movieController.getMovies);

//SEARCH BY NAME
router.get("/name/:name", movieController.getMoviesByName);

//SEARCH BY ID
router.get("/:id", movieController.getMoviesById);

//POST MOVIE
router.post("/", movieController.createMovie);

// UPDATE MOVIE
router.put("/:id", movieController.updateMovie);

//DELETE MOVIE
router.delete("/:id", movieController.deleteMovie);

module.exports = router;

//POST OLD
/*
function (req, res) {
  newMovie = {
    id: uuid.v4(),
    name: req.body.name,
    genre: req.body.genre,
    rating: req.body.rating,
    explicit: false,
  };

  if (!newMovie.name || !newMovie.genre || !newMovie.rating) {
    return req
      .status(400)
      .json({ msg: "Please insert name, genre and rating " });
  }

  movies.push(newMovie);
  res.json({ msg: 'msg: "new Movie has been added', movies });
}




//////GET BY NAME
function (req, res) {
  const found = movies.some((value) => value.name.search(req.params.name));
  if (!found) res.send({ res: "No movie found" });

  res.send({
    res: movies.filter((value) => value.name.search(req.params.name) != -1),
  });
}



/// UPDATE 


function (req, res) {
  const updateMovie = req.body;
  const found = movies.some((value) => value.id == parseInt(req.body.id));
  if (found) {
    movies.map((value, index) => {
      if (value.id === updateMovie.id) {
        value.name = updateMovie.name;
        value.genre = updateMovie.genre;
        value.rating = updateMovie.rating;
        value.explicit = updateMovie.explicit;
      }
    });
    res.send({
      msg: movies,
    });
  }
  res.send({
    msg: `No movie with id: ${req.body.id}`,
  });
}




/////////DELETE


function (req, res) {
  const found = movies.some((value) => value.id === parseInt(req.body.id));
  if (found) {
    movies.forEach(function (value, index) {
      value.id === parseInt(req.body.id) ? movies.splice(index, 1) : true;
    });
    res.send({ res: movies });
  }
  {
    res.send({ msg: "CANT FOUND id" });
  }
}
*/
