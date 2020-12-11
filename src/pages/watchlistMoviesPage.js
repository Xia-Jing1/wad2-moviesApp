import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview1'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.upcoming)
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviesPage;