import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieCredit from "../components/movieCredit";

const MovieCreditsPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieCredit review={props.location.state.credit} /> 
      </PageTemplate>
  );
};

export default MovieCreditsPage;