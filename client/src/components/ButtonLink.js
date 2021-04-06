import React from "react";
import { Link } from "react-router-dom";
import edit from "../pages/Edit";

const ButtonLink = ({ id, name, onEditClick, onDelete }) => {
  return (
    <>
      <Link to={`/edit/${id}`} className="btn btn-primary">
        Edit
      </Link>

      <Link onClick={() => onDelete(id)} className="btn btn-danger">
        Delete
      </Link>
    </>
  );
};

export default ButtonLink;
