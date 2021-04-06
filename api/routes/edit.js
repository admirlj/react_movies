var express = require("express");
var router = express.Router();
const movies = require("../mojabaza");

const movieController = require("../controller/movies");

/* GET users listing. */
router.get("/edit/:id", movieController.getMoviesById);

module.exports = router;
