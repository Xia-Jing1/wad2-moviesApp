import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const RecommendationsPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.recommendations.filter((m) => {  // New
    return !("recommendations" in m);
  });

  return (
    <PageTemplate
      title="Recommendations Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};
export default RecommendationsPage;