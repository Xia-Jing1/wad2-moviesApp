import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage' 
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingPage from './pages/upcomingPage' 
import PopularPage from './pages/popularPage'
import TopratedPage from './pages/topratedPage';
import LatestPage from './pages/latestPage';
import RecommendationsPage from './pages/recommendationsPage';
import NowplayingPage from './pages/nowplayingPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
      <MoviesContextProvider> 
      <GenresContextProvider> 
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/upcoming" component={UpcomingPage} />
          <Route path="/movies/popular" component={PopularPage} />
          <Route path="/movies/toprated" component={TopratedPage} /> 
          <Route path="/movies/latest" component={LatestPage} />
          <Route path="/movies/recommendations" component={RecommendationsPage} />
          <Route path="/movies/nowplaying" component={NowplayingPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider> 
        </MoviesContextProvider> 
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));