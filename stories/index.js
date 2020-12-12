import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import PeopleCard from "../src/components/peopleCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import PeopleHeader from "../src/components/headerPeopleList";
import MovieList from "../src/components/movieList";
import PeopleList from "../src/components/peopleList";
import MovieDetails from "../src/components/movieDetails";
import PeopleDetails from "../src/components/peopleDetails";
import MovieHeader from "../src/components/headerMovie";


import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const sample1 = {

  
  name: "Johnny Depp",
  Birthday: "1963-06-09",
  Place_of_birth:"Owensboro, Kentucky, USA",
  known_for_department:"Acting",
  popularity: 25.248,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  
   
  
};






storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Add to Favorites</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Add to Favorites</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Add to Favorites</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);


storiesOf("Latest Page/Header", module).add("default", () => (
  <MoviesHeader title="Latest Movies" numMovies={1} />
));  

storiesOf("Latest Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Add to Like List</button>
        )}
      />
    );
  });




  storiesOf("Upcoming Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Upcoming Page/Header", module).add("default", () => (
  <MoviesHeader title="Upcoming Movies" numMovies={10} />
));  


storiesOf("Upcoming Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Add to Watch List</button>
        )}
      />
    );
  });

  storiesOf("Popular Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Popular Page/Header", module).add("default", () => (
  <MoviesHeader title="Popular Movies" numMovies={10} />
));  


storiesOf("Popular Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Add to Want List</button>
        )}
      />
    );
  });



  storiesOf("Top Rated Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Top Rated Page/Header", module).add("default", () => (
  <MoviesHeader title="Top Rated Movies" numMovies={10} />
));  

storiesOf("Top Rated Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Add to Collection List</button>
        )}
      />
    );
  });


  storiesOf("Now Playing Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Now Playing Page/Header", module).add("default", () => (
  <MoviesHeader title="Now Playing Movies" numMovies={10} />
));  

storiesOf("Now Playing Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Enjoy it</button>
        )}
      />
    );
  });


  storiesOf("Favrites Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Favrites Page/Header", module).add("default", () => (
  <MoviesHeader title="Favrites Movies" numMovies={0} />
));  


storiesOf("Watch Page/FilterControls", module)
.addDecorator(story => (
  <GenresContextProvider>{story()}</GenresContextProvider>
))
.add("default", () => (
  <FilterControls onUserInput={action("button-click")} numMovies={10} />
));

storiesOf("Watch Page/Header", module).add("default", () => (
<MoviesHeader title="Watch List" numMovies={0} />
));  



storiesOf("Like Page/FilterControls", module)
.addDecorator(story => (
  <GenresContextProvider>{story()}</GenresContextProvider>
))
.add("default", () => (
  <FilterControls onUserInput={action("button-click")} numMovies={10} />
));

storiesOf("Like Page/Header", module).add("default", () => (
<MoviesHeader title="Like List" numMovies={0} />
));  


storiesOf("Want Page/FilterControls", module)
.addDecorator(story => (
  <GenresContextProvider>{story()}</GenresContextProvider>
))
.add("default", () => (
  <FilterControls onUserInput={action("button-click")} numMovies={10} />
));

storiesOf("Want Page/Header", module).add("default", () => (
<MoviesHeader title="Want List" numMovies={0} />
));  



storiesOf("Collection Page/FilterControls", module)
.addDecorator(story => (
  <GenresContextProvider>{story()}</GenresContextProvider>
))
.add("default", () => (
  <FilterControls onUserInput={action("button-click")} numMovies={10} />
));

storiesOf("Collection Page/Header", module).add("default", () => (
<MoviesHeader title="Collection List" numMovies={0} />
));  


storiesOf("Enjoy Page/FilterControls", module)
.addDecorator(story => (
  <GenresContextProvider>{story()}</GenresContextProvider>
))
.add("default", () => (
  <FilterControls onUserInput={action("button-click")} numMovies={10} />
));

storiesOf("Enjoy Page/Header", module).add("default", () => (
<MoviesHeader title="Enjoy It!" numMovies={0} />
));  



storiesOf("People Page/PeopleCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <PeopleCard
      people={sample1}
      action={people => <button className="btn w-100 btn-primary">Concern</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample1, profile_path: undefined };
    return (
      <PeopleCard
        people={sampleNoPoster}
         action={people => (
         <button className="btn w-100 btn-primary">Concern</button>
        )}
      />
    );
  });

  storiesOf("People Page/PeopleList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const people = [sample1, sample1, sample1, sample1, sample1];
    return (
      <PeopleList
        people={people}
        action={people => (
          <button className="btn w-100 btn-primary">Concern</button>
        )}
      />
    );
  });



storiesOf("People Page/Header", module).add("default", () => (
  <PeopleHeader name="Popular Actor List" numPeople={10} />
));




