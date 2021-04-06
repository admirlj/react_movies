import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Edit = () => {
  return (
    <>
      <Switch>
        <Route path="/edit/:id" component={Child} />
      </Switch>
    </>
  );
};

export function Child() {
  let { id } = useParams();
  const [movieName, setMovieName] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieExplicit, setMovieExplicit] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieName(data.res[0].name);
        setMovieRating(Number(data.res[0].rating));
        setMovieGenre(data.res[0].genre);
        setMovieExplicit(data.res[0].explicit);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    let _id = Number(document.querySelector("#movieID").innerText);
    let _data = {
      id: Number(document.querySelector("#movieID").innerText),
      name: movieName,
      genre: movieGenre,
      rating: Number(movieRating),
      explicit: movieExplicit,
    };
    e.preventDefault();
    console.log("......");
    fetch(`http://localhost:9000/movies/${_id}`, {
      method: "PUT",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setUpdate(true))
      .catch((err) => console.log(err));
  };

  const onChangeHandlerName = (e) => {
    console.log(e.target.value);
    setMovieName(e.target.value);
  };
  const onChangeHandlerRating = (e) => {
    console.log(e.target.value);
    setMovieRating(e.target.value);
  };
  return (
    <div className="container-md">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="mb-3 row hidden">
          <label className="form-label" id="movieID">
            {id}
          </label>
        </div>
        <div className="mb-3 row">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="name"
            value={movieName}
            onChange={onChangeHandlerName}
            class="form-control"
          ></input>
        </div>
        <div className="mb-3 row">
          <label for="rating" className="form-label">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            min="1"
            max="10"
            placeholder="name"
            value={movieRating}
            onChange={onChangeHandlerRating}
            class="form-control"
          ></input>
        </div>
        <input
          type="submit"
          value={update ? "Updated" : "Update"}
          className={`btn btn-${update ? "success" : "primary"} mb-37`}
          disabled={update ? true : false}
        ></input>
      </form>
    </div>
  );
}
export default Edit;
