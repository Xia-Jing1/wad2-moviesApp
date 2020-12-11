import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm1 from '../components/reviewForm1'

const ReviewForm1Page = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm1 movie={props.location.state.movie} />
      </PageTemplate>
  );
};
export default ReviewForm1Page;