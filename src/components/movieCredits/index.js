import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
//import { excerpt } from "../../util";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
        <th scope="col">Name</th>
          <th scope="col">Character</th>
          <th scope="col">Popularity</th>
          <th scope="col">Known for</th>
          <th scope="col">Photo</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {credits.map(cast => {
            return (
              <tr key={cast.id}>
                <td>{cast.name}</td>
                <td>{cast.character}</td>
                <td>{cast.popularity}</td>
                <td>{cast.known_for_department}</td>
                <td>
                  {" "}
                  <img
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={cast.name}
          />
                </td>

                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/${cast.id}`,
                      state: {
                        similar: cast,
                        movie: movie
                      }
                    }}
                  >
                    Full Details
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};