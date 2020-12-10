import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import MovieSimilar from "../components/movieSimilar";
import MovieCredits from "../components/movieCredits";



const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>

<div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/recommendations") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/recommendations/${id}`}
              >
                Recommendations Movies
              </Link>
            ) : (
              <Link to="/movies/recommendations"           
            >
           Click Here!
            </Link>
              
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/recommendations`}
          render={props => <recommendationsPage movie={movie} {...props} />}
        />


        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} /> 
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />


<div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/similar`}
              >
                Some Similar Movies 
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/similar`}
          render={props => <MovieSimilar movie={movie} {...props} />}
        />

      <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/credits`}
              >
                Credits 
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/credits/${id}`}
              >
                Hide 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/credits/:id/credits`}
          render={props => <MovieCredits movie={movie} {...props} />}
        />



      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);