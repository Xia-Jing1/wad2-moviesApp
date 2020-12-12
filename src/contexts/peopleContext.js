import React, { useEffect, createContext, useReducer } from "react";
import { getPopularPeople,} from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        people: state.people.map((m) =>
          m.id === action.payload.people.id ? { ...m, favorite: true } : m
        ),
         
        
      };

        
      case "load-popular":
        return { popular: action.payload.movies};
     
        default:
            return state;
        }
        
      };

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { popular: [],  });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  


  


  useEffect(() => {
    getPopularPeople().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

 

  return (
    <PeopleContext.Provider
      value={{
        popular: state.popular,
        addToFavorites: addToFavorites,
        
        
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;