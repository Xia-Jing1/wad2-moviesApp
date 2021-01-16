import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link} from "react-router-dom"    // CHANGED

import LoginPage from "./sample/loginPage";
import SignUpPage from "./sample/signUpPage";
import PrivateRoute from "./sample/privateRoute";
import AuthHeader from "./sample/authHeader";
import AuthProvider from "./sample/authContext";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PeopleContextProvider from "./contexts/peopleContext";
const FavoriteMoviesPage = lazy(() => import('./pages/favoritesMoviesPage')); 
const WatchlistMoviesPage = lazy(() => import('./pages/watchlistMoviesPage' ));
const LikelistMoviesPage = lazy(() => import('./pages/likelistMoviesPage' ));
const WantlistMoviesPage = lazy(() => import( './pages/wantlistMoviesPage' ));
const CollectionMoviesPage = lazy(() => import('./pages/collectionMoviesPage'));
const EnjoylistMoviesPage = lazy(() => import( './pages/enjoylistMoviesPage' ));
const HomePage = lazy(() => import('./pages/homePage'));
const MoviePage = lazy(() => import('./pages/movieDetailsPage'));
const MovieReviewPage= lazy(() => import( './pages/movieReviewPage'));
const UpcomingPage = lazy(() => import( './pages/upcomingPage')); 
const PopularPage = lazy(() => import( './pages/popularPage'));
const TopratedPage = lazy(() => import('./pages/topratedPage'));
const LatestPage = lazy(() => import('./pages/latestPage'));
const MovieSimilarPage = lazy(() => import('./pages/movieSimilarPage'));
const RecommendationsPage = lazy(() => import('./pages/recommendationsPage'));
const MovieCreditsPage = lazy(() => import( './pages/movieCreditsPage'));
const NowplayingPage = lazy(() => import('./pages/nowplayingPage'));
const AddMovieReviewPage = lazy(() => import( './pages/addMovieReviewPage'));
const AddMovieReview1Page = lazy(() => import('./pages/addMovieReview1Page'));
const AddPeopleListPage = lazy(() => import('./pages/peoplePage'));
const PeoplePage = lazy(() => import( './pages/peopleDetailsPage'));


const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
        <AuthHeader />

    <div className="jumbotron">
    <SiteHeader />      {/* New Header  */}
      <div className="container-fluid">
      <MoviesContextProvider> 
      <GenresContextProvider> 
      <PeopleContextProvider> 
      <Suspense fallback={<h1>Loading page....</h1>}>
        <Switch>
        <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        <Route path="/people/people1" component={AddPeopleListPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/reviews/form1" component={AddMovieReview1Page} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
          <Route exact path="/movies/likelist" component={LikelistMoviesPage} />
          <Route exact path="/movies/wantlist" component={WantlistMoviesPage} />
          <Route exact path="/movies/collection" component={CollectionMoviesPage} />
          <Route exact path="/movies/enjoylist" component={EnjoylistMoviesPage} />
          <PrivateRoute path="/movies/upcoming" component={UpcomingPage} />
          <PrivateRoute path="/movies/popular" component={PopularPage} />
          <PrivateRoute path="/movies/toprated" component={TopratedPage} /> 
          <PrivateRoute path="/movies/latest" component={LatestPage} />
          <Route path="/movies/similar" component={MovieSimilarPage} />
          <Route path="/movies/recommendations/:id" component={RecommendationsPage} />
          <PrivateRoute path="/movies/nowplaying" component={NowplayingPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/people/:id" component={PeoplePage} />
          <Route path="/credits/:id" component={MovieCreditsPage} /> 
          <PrivateRoute path="/" component={HomePage} />
          

          

          <Redirect from="*" to="/" />
        </Switch>
        </Suspense>
        </PeopleContextProvider> 
        </GenresContextProvider> 
        </MoviesContextProvider> 
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));