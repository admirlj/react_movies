const serviceMovie = require("../service/movies");

class moviesController {
  async createMovie(req, res) {
    try {
      const id = await serviceMovie.createMovie(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }

  async getMovies(req, res) {
    try {
      const movies = await serviceMovie.getMovies();
      res.send({ res: movies });
    } catch (err) {
      console.error(err);
    }
  }

  async getMoviesByName(req, res) {
    try {
      const movies = await serviceMovie.getMoviesByName(req.params.name);
      res.send({ res: movies });
    } catch (err) {
      console.error(err);
    }
  }

  //IDDDDD
  async getMoviesById(req, res) {
    try {
      const movies = await serviceMovie.getMoviesById(req.params.id);
      res.send({ res: movies });
    } catch (err) {
      console.error(err);
    }
  }

  async updateMovie(req, res) {
    try {
      const movies = await serviceMovie.updateMovie(req.params.id, req.body);
      res.send({ res: movies });
    } catch (err) {
      console.error(err);
    }
  }

  async deleteMovie(req, res) {
    try {
      const movies = await serviceMovie.deleteMovie(req.params.id);
      res.send({ res: movies });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new moviesController();
