import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        popular: [...state.popular]
      };
      case "load":
        return { movies: action.payload.movies, upcoming: [...state.upcoming],popular: [...state.popular]};
      case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies],popular: [...state.popular]};
      case "load-popular":
        return { popular: action.payload.movies ,upcoming: [...state.upcoming], movies: [...state.movies]};
      
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };

      case "add-popular":
        return {
          popular: state.popular.map((m) =>
            m.id === action.payload.movie.id ? { ...m, popular: true } : m
          ),
          movies : [...state.movies],
          upcoming: [...state.upcoming]
        };

      case "add-watchlist":
        return {
          upcoming: state.upcoming.map((m) =>
            m.id === action.payload.movie.id ? { ...m, watchList: true } : m
          ),
          movies: [...state.movies],
          popular: [...state.popular]
        };

    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addToPopular = (movieId) => {
    const index = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-popular", payload: { movie: state.popular[index] } });
  };
  
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { upcoming: state.upcoming[index] } });
  };

  


  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
        addToPopular : addToPopular
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;