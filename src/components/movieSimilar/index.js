import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieSimilar } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    getMovieSimilar(movie.id).then(similar => {
      setSimilar(similar);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Overview</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {similar.map(s => {
            return (
              <tr key={s.id}>
                <td>{s.title}</td>
                <td>{s.popularity}</td>
                <td>{excerpt(s.overview)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/${s.id}`,
                      state: {
                        similar: s,
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