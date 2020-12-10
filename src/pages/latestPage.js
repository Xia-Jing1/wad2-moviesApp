import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const LatestPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.latest.filter((m) => {  // New
    return !("latest" in m);
  });

  return (
    <PageTemplate
      title="Latest Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};
export default LatestPage;