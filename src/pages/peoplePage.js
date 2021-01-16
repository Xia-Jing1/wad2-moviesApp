import React, { useContext } from "react";
import PeopleListPageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'
import AddToConcernListButton from '../components/buttons/addConcernList'

const PeoplePage = () => {
  const context = useContext(PeopleContext);
  const people = context.popular.filter((m) => {  // New
    return !("popular" in m);
  });

  return (
    <PeopleListPageTemplate
      name="Latest Actor List"
      people={people}  /* Changed */
      action={(people) => {
        return <AddToConcernListButton people={people} />;
      }}
    />
  );
};
export default PeoplePage;