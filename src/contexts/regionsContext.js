import React, { useState, useEffect, createContext } from "react";
import { getRegions } from "../api/tmdb-api";

export const RegionsContext = createContext(null)

const RegionsContextProvider = props => {
    const [regions, setRegions] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
      getRegions().then(allRegions => {
        setRegions([regions[0], ...allRegions]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <RegionsContext.Provider
          value={{
            regions
          }}
        >
          {props.children}
        </RegionsContext.Provider>    
    )
}

export default RegionsContextProvider;