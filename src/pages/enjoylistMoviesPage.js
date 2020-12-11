import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const EnjoyListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const enjoylist = context.nowplaying.filter( m => m.nowplaying)
  return (
    <MovieListPageTemplate
      movies={enjoylist}
      title={"Enjoy It!"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default EnjoyListMoviesPage;