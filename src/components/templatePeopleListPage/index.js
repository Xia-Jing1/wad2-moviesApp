import React, { useState } from "react";
import Header1 from "../headerPeopleList";
import PeopleList from "../peopleList";
import FilterControls from "../filterControl";

const PeopleListPageTemplate = ({ name, people, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header1 name={name} numPeople={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
       action={action}
       people={displayedPeople}
    />
    </>
  );
};

export default PeopleListPageTemplate ;