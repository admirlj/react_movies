const FormAdd = ({ onSubmit, formAddStats }) => {
  return (
    <>
      <div className={`container-md  ${formAddStats ? "" : "hidden"}`}>
        <form id="addForm" onSubmit={onSubmit}>
          <div className="mb-3 row">
            <label hidden className="form-label">
              Name
            </label>
            <input id="movieName" type="text" placeholder="name"></input>
          </div>
          <div className="mb-3 row">
            <label hidden className="form-label">
              Genre
            </label>
            <input id="movieGenre" type="text" placeholder="genre"></input>
          </div>
          <div className="mb-3 row">
            <label hidden className="form-label">
              Rating
            </label>
            <input id="movieRating" type="text" placeholder="rating"></input>
          </div>
          <div className="mb-3 row">
            <label className="form-label">explicit</label>
            <input
              id="movieExplicit"
              type="checkbox"
              placeholder="explicit"
            ></input>
          </div>
          <input type="submit" className="btn btn-primary" value="ADD"></input>
        </form>
      </div>
    </>
  );
};

export default FormAdd;
