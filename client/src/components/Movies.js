import ButtonLink from "./ButtonLink";

const Movies = ({ movies, onEditClick, onDelete }) => {
  return (
    <div className="movies-container">
      {movies.map((value) => {
        return (
          <div className="movie card">
            <h2>{value.name}</h2>
            <p>
              Rating: <br></br>
              {value.rating}
            </p>

            <ButtonLink
              onEditClick={onEditClick}
              id={value.id}
              name={value.name}
              onDelete={onDelete}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
