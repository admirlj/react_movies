const { log } = require("debug");
const knex = require("../db/db");

class moviesDAO {
  async createMovie(name, genre, rating, explicit) {
    const [id] = await knex("movies")
      .insert({
        name: name,
        genre: genre,
        rating: Number(rating),
        explicit: Boolean(explicit),
      })
      .returning("id");

    return id;
  }

  async getMovies() {
    const movies = await knex("movies")
      .select("*")
      .then(function (data) {
        //do something here
        return data;
      });
    return movies;
  }

  async getMoviesByName(name) {
    const movies = await knex("movies")
      .where("name", "like", `%${name}%`)
      .select("*")
      .then(function (data) {
        return data;
      });

    return movies;
  }

  async getMoviesById(_id) {
    const movies = await knex("movies")
      .where({ id: Number(_id) })
      .select("*")
      .then(function (data) {
        return data;
      })
      .catch((err) => console.log(err));

    return movies;
  }

  async updateMovie(id, name, genre, rating, explicit) {
    return knex("movies")
      .update({ name: name, genre: genre, rating: rating, explicit: explicit })
      .where({ id })
      .then(() => "updated sucessfully")
      .catch((e) => console.error(e));
  }

  async deleteMovie(id) {
    const movies = await knex("movies")
      .where({ id })
      .del()
      .then(() => "Deleted successfuly")
      .catch((err) => console.log(err));

    return movies;
  }
}

module.exports = new moviesDAO();
