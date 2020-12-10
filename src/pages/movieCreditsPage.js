import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieCredits from "../components/movieCredits";

const MovieCreditsPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieCredits review={props.location.state.credits} /> 
      </PageTemplate>
  );
};

export default MovieCreditsPage;