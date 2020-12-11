import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage' 
import WatchlistMoviesPage from './pages/watchlistMoviesPage' 
import LikelistMoviesPage from './pages/likelistMoviesPage' 
import WantlistMoviesPage from './pages/wantlistMoviesPage' 


import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingPage from './pages/upcomingPage' 
import PopularPage from './pages/popularPage'
import TopratedPage from './pages/topratedPage';
import LatestPage from './pages/latestPage';
import MovieSimilarPage from './pages/movieSimilarPage';
import RecommendationsPage from './pages/recommendationsPage';
import MovieCreditsPage from "./pages/movieCreditsPage";
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
          <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
          <Route exact path="/movies/likelist" component={LikelistMoviesPage} />
          <Route exact path="/movies/wantlist" component={WantlistMoviesPage} />
          <Route path="/movies/upcoming" component={UpcomingPage} />
          <Route path="/movies/popular" component={PopularPage} />
          <Route path="/movies/toprated" component={TopratedPage} /> 
          <Route path="/movies/latest" component={LatestPage} />
          <Route path="/movies/similar" component={MovieSimilarPage} />
          <Route path="/movies/recommendations/:id" component={RecommendationsPage} />
          <Route path="/movies/nowplaying" component={NowplayingPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/credits/:id" component={MovieCreditsPage} /> 
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