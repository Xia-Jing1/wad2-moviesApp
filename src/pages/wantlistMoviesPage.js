import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WantListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const wantlist = context.popular.filter( m => m.popular)
  return (
    <MovieListPageTemplate
      movies={wantlist}
      title={"Want List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WantListMoviesPage;