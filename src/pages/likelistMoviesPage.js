import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const LikeListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const likelist = context.latest.filter( m => m.latest)
  return (
    <MovieListPageTemplate
      movies={likelist}
      title={"Like List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default LikeListMoviesPage;