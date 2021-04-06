import Movies from "../components/Movies";
import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import FormAdd from "../components/FormAdd";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setsearchMovie] = useState("");
  const [formAdd, setFormAdd] = useState(false);
  const [newMovie, setNewMovie] = useState({});
  const [statsMsg, setStatsMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  //GET MOVIES METHOD
  const getMovies = () => {
    console.log("get movies");
    fetch("http://localhost:9000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data.res))
      .catch((err) => console.log(err));
  };
  //GET MOVIES
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log("useEfect new movie");
    fetch(`http://localhost:9000/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        getMovies();
        document.querySelector("#addForm").reset();
        setStatsMsg("The movie has been added successfully!");
      })
      .catch((err) => console.log(err));
  }, [newMovie]);

  useEffect(() => {
    setShowMsg(true);
  }, [statsMsg]);

  //EVENT SEARCH SUBMIT
  const onSubmitHandler = (e) => {
    console.log("trazi");
    e.preventDefault();
    if (searchMovie) {
      fetch(`http://localhost:9000/movies/name/${searchMovie}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.res.length < 1) {
            getMovies();
            setStatsMsg(`No results on: ${searchMovie}`);
          } else {
            setMovies(data.res);
            setStatsMsg(`Result on: ${searchMovie}`);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  //EVENT SEARCH ONCHANGE
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setsearchMovie(e.target.value);
    console.log("on typing handler");
  };

  const onEditClick = (e) => {
    const id = e.target.getAttribute("data-key");
  };

  //EVENT DELETE
  const onDeleteHandler = (id) => {
    let _data = {
      id: id,
    };
    console.log(_data);
    fetch(`http://localhost:9000/movies/${_data.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        getMovies();
        setStatsMsg("Movie deleted successfully!");
      })
      .catch((err) => console.log(err));
    console.log("delete");
  };
  //EVENT ADD MOVIE
  const onSubmitAddHander = (e) => {
    e.preventDefault();
    console.log("CALL FETCH AND ADD movie");
    const target = e.target;
    const newMovie = {};
    newMovie.name = target.querySelector("#movieName").value;
    newMovie.genre = target.querySelector("#movieGenre").value;
    newMovie.rating = Number(target.querySelector("#movieRating").value);
    newMovie.explicit =
      target.querySelector("#movieExplicit").value == "on" ? true : false;
    setNewMovie(newMovie);
  };

  const onClickAdd = () => {
    console.log("show add form");
    setFormAdd(!formAdd);
  };
  return (
    <>
      <main>
        <Head
          onClickAdd={onClickAdd}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
          formAddStats={formAdd}
          onSubmitAddHander={onSubmitAddHander}
        />
        {showMsg ? `${statsMsg}` : ""}
        <section id="movies-section">
          {movies.length > 0 ? (
            <Movies
              onEditClick={onEditClick}
              movies={movies}
              onChange={onChangeHandler}
              onSubmit={onSubmitHandler}
              onDelete={onDeleteHandler}
            />
          ) : (
            <h2>There is no movies</h2>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
