import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieSimilar from "../components/movieSimilar";

const MovieSimilarPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieSimilar review={props.location.state.similar} /> 
      </PageTemplate>
  );
};

export default MovieSimilarPage;