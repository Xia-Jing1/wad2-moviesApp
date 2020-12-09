import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getTopratedMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
         upcoming: [...state.upcoming],
         popular: [...state.popular],
        
      };

        
      case "load":
        return { movies: action.payload.movies, upcoming: [...state.upcoming],popular: [...state.popular],toprated: [...state.toprated]};
      case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies],popular: [...state.popular] ,toprated: [...state.toprated]};
      case "load-popular":
        return { popular: action.payload.movies ,upcoming: [...state.upcoming], movies: [...state.movies] ,toprated: [...state.toprated]};
      case "load-toprated":
        return { toprated: action.payload.movies,popular: [...state.popular] ,upcoming: [...state.upcoming] , movies: [...state.movies]};
      
        case "add-review":
          return {
            movies: state.movies.map((m) =>
              m.id === action.payload.movie.id
                ? { ...m, review: action.payload.review }
                : m
            ),
            upcoming: [...state.upcoming],
          };
    
          case "add-watchList":
            return {
              upcoming: state.upcoming.map((m) =>
                m.id === action.payload.movie.id ? { ...m, watchList: true } : m
              ),
              top: state.toprated.map((m) =>
              m.id === action.payload.movie.id ? { ...m, watchList: true } : m
            ),
          };
            case "add-wantList":
              return {
                popular: state.popular.map((m) =>
                  m.id === action.payload.popular.id ? { ...m, popular: true } : m
                ),
                
                movies: [...state.movies],
               
              };
         
                
            
          case "add-popular":
            return {
              popular: state.popular.map((m) =>
                m.id === action.payload.movie.id ? { ...m, popular: true } : m
              ),
              movies : [...state.movies],
              upcoming: [...state.upcoming]
            };

           
          
           
    
        default:
          return state;
      }
    };

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [],toprated:[] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchList", payload: { upcoming: state.upcoming[index]} });
    
  };

  const addToWantList = (movieId) => {
    const index = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-wantList", payload: { popular: state.popular[index]} });
    
  };
 
   

  const addToPopular = (movieId) => {
    const index = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-popular", payload: { popular: state.popular[index] } });
  };

  // const addToToprated = (movieId) => {
  //   const index = state.popular.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "add-toprated", payload: { movie: state.toprated[index] } });
  // };



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
    getTopratedMovies().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


 

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        toprated:state.toprated,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
        addToWantList: addToWantList,
        addToPopular : addToPopular,
        
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;