import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Cast</th>
          <th scope="col">Crew</th>
        </tr>
      </thead>
      <tbody>
        {credits.map(s => {
            return (
              <tr key={s.id}>
                <td>{s.title}</td>
                <td>{excerpt(s.overview)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/${s.id}`,
                      state: {
                        credits: s,
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