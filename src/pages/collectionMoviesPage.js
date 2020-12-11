import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const CollectionMoviesPage = props => {
  const context = useContext(MoviesContext);
  const collectionlist = context.toprated.filter( m => m.toprated)
  return (
    <MovieListPageTemplate
      movies={collectionlist}
      title={"Collection List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default CollectionMoviesPage;