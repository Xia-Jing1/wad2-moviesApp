import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopleDetails";
import PageTemplate from "../components/templatePeoplePage";
import usePeople from "../hooks/usePeople";

import PeopleCredits from "../components/movieCredits";



const PeoplePage = props => {
  const { id } = props.match.params;
  const [people] = usePeople(id)  // NEW
  return (
    <>
    {people ? (
      <>


        <PageTemplate people={people}>
          <PeopleDetails people={people} /> 
        </PageTemplate>


{/* <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}/movie_credits`}
              >
                Credits
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}`}
              >
                Hide 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/people/:id/credits`}
          render={props => <PeopleCredits people={people} {...props} />}
        /> */}



      </>
    ) : (
      <p>Waiting for actor details</p>
    )}
  </>
  );
};

export default withRouter(PeoplePage);