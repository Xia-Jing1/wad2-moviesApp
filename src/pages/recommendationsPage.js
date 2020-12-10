import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
//import {MoviesContext} from '../contexts/moviesContext'
import AddToFondListButton from '../components/buttons/addToFondList'
import { withRouter } from "react-router-dom";
import {getRecommendationsMovies} from '../api/tmdb-api'

const RecommendationsPage = (props) => {
  const {id} = props.match.params;

  const [movies,setMovies] = useState([]);
  getRecommendationsMovies(id).then((res)=>{setMovies(res)})

  return (
    <PageTemplate
      title="Recommendations Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFondListButton movie={movie} />;
      }}
    />
    
  );
};
export default withRouter(RecommendationsPage);