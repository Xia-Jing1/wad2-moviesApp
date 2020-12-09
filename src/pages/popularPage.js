import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const PopularPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular.filter((m) => {  // New
    return !("popular" in m);
  });

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};
export default PopularPage;