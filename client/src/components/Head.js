import FormAdd from "./FormAdd";

const Head = ({
  onSubmit,
  searchMovie,
  onChange,
  onClickAdd,
  formAddStats,
  onSubmitAddHander,
}) => {
  return (
    <header className="App-header">
      <nav className="flex">
        <button
          onClick={onClickAdd}
          className={`btn btn-${formAddStats ? "danger" : "success"}`}
        >
          {`${formAddStats ? "CLOSE" : "ADD"}`}
        </button>
        <FormAdd formAddStats={formAddStats} onSubmit={onSubmitAddHander} />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchMovie}
            onChange={onChange}
            class="form-control"
          ></input>
        </form>
      </nav>
    </header>
  );
};

export default Head;
