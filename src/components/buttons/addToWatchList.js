import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const AddToWatchListButton = e => {
    e.preventDefault();
    context.AddToWatchListButton (movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={AddToWatchListButton }
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton ;