import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToCollectionListButton from '../components/buttons/addToCollectionList'

const TopratedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("toprated" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToCollectionListButton movie={movie} />;
      }}
    />
  );
};

export default TopratedMoviesPage;