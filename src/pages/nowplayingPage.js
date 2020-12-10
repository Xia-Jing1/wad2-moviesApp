import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListupPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToEnjoyListButton from '../components/buttons/addToEnjoyList'

const NowplayingPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("nowplaying" in m);
  });

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToEnjoyListButton movie={movie} />;
      }}
    />
  );
};
export default NowplayingPage;