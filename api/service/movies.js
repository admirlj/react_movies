const moviesDAO = require("../dao/movies");

class movieService {
  createMovie(personDAO) {
    const { name, genre, rating, explicit } = personDAO;
    return moviesDAO.createMovie(name, genre, rating, explicit);
  }

  getMovies() {
    return moviesDAO.getMovies();
  }

  getMoviesByName(name) {
    return moviesDAO.getMoviesByName(name);
  }

  getMoviesById(id) {
    return moviesDAO.getMoviesById(id);
  }

  updateMovie(id, personDAO) {
    const { name, genre, rating, explicit } = personDAO;

    return moviesDAO.updateMovie(id, name, genre, rating, explicit);
  }

  deleteMovie(id) {
    return moviesDAO.deleteMovie(id);
  }
}

module.exports = new movieService();
