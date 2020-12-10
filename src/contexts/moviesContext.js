import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getTopratedMovies,getLatestMovies,getNowplayingMovies} from "../api/tmdb-api";

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
        return { movies: action.payload.movies, upcoming: [...state.upcoming],popular: [...state.popular],toprated: [...state.toprated],latest: [...state.latest],nowplaying: [...state.nowplaying]};
      case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies],popular: [...state.popular] ,toprated: [...state.toprated],latest: [...state.latest],nowplaying: [...state.nowplaying]};
      case "load-popular":
        return { popular: action.payload.movies ,upcoming: [...state.upcoming], movies: [...state.movies] ,toprated: [...state.toprated],latest: [...state.latest],nowplaying: [...state.nowplaying]};
      case "load-toprated":
        return { toprated: action.payload.movies,popular: [...state.popular] ,upcoming: [...state.upcoming] , movies: [...state.movies],latest: [...state.latest],nowplaying: [...state.nowplaying]};
      case "load-latest":
        return { latest: action.payload.movies,popular: [...state.popular] ,upcoming: [...state.upcoming] , movies: [...state.movies],toprated: [...state.toprated],nowplaying: [...state.nowplaying]};
        case "load-nowplaying":
          return { nowplaying: action.payload.movies,popular: [...state.popular] ,upcoming: [...state.upcoming] , movies: [...state.movies],toprated: [...state.toprated],latest: [...state.latest]};
        
        
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
                m.id === action.payload.upcoming.id ? { ...m, upcoming: true } : m
              ),
            movies: [...state.movies],
            popular: [...state.popular]
          };
            case "add-wantList":
              return {
                popular: state.popular.map((m) =>
                  m.id === action.payload.popular.id ? { ...m, popular: true } : m
                ),
                
                movies: [...state.movies],
               
              };

          case "add-collectionList":
            return {
              toprated: state.toprated.map((m) =>
                m.id === action.payload.toprated.id ? { ...m, toprated: true } : m
              ),
                  
              movies: [...state.movies],
       
            };  
            
            case "add-LikeList":
            return {
              latest: state.latest.map((m) =>
                m.id === action.payload.latest.id ? { ...m, latest: true } : m
              ),
            movies: [...state.movies],           
          };
         
              
        default:
          return state;
      }
    };

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [],toprated:[],latest:[],nowplaying:[] });

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
 
  const addToCollectionList = (movieId) => {
    const index = state.toprated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-collectionList", payload: { toprated: state.toprated[index]} });
    
  }; 
  const addToLikeList = (movieId) => {
    const index = state.latest.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-LikeList", payload: { latest: state.latest[index]} });
    
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
    getTopratedMovies().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLatestMovies().then((movies) => {
      dispatch({ type: "load-latest", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowplayingMovies().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
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
        latest:state.latest,
        nowplaying:state.nowplaying,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
        addToWantList: addToWantList,
        addToCollectionList: addToCollectionList,
        addToLikeList: addToLikeList,
        
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;