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
     
        case "add-ConcernList":
          return {
            people: state.people.map((m) =>
              m.id === action.payload.people.id ? { ...m, people: true } : m
            ),
          // eslint-disable-next-line no-dupe-keys
          people: [...state.people],           
        };



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

  const addToConcernList = (peopleId) => {
    const index = state.people.map((m) => m.id).indexOf(peopleId);
   
    dispatch({ type: "add-ConcernList", payload: { people: state.people[index]} });
    
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
        addToConcernList: addToConcernList,
        
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;