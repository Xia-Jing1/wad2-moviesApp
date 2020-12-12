import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToConcernListButton = ({ people }) => {
  const context = useContext(PeopleContext);

  const handleAddToConcernList = e => {
    e.preventDefault();
    context.addToConcernList (people.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToConcernList }
    >
      Concern
    </button>
  );
};

export default AddToConcernListButton ;