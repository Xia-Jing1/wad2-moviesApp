import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 
import { RegionsContext } from '../../contexts/regionsContext' 


const FilterControls = props => {
  const context = useContext(GenresContext,RegionsContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };
  const handleRegionChange = e => {
    handleChange(e, "region", e.target.value);
  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
          <span>Country:</span>
          <select id="region" onChange={handleRegionChange}>
            {context.genres.map(region => {
              return (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              );
            })}
          </select>

        </h4>
      </div>
    </div>
  );
};

export default FilterControls;