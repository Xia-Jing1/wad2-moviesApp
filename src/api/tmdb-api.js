

export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getRegions = () => {
  return fetch(
    "https://api.themoviedb.org/3/region/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const  getUpcomingMovies= () => {
  return fetch(
    '/api/upcoming',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getPopularMovies = () => {
  return fetch(
    '/api/popular',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};


export const getTopratedMovies = () => {
  return fetch(
    '/api/toprated',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getLatestMovies = () => {
  return fetch(
    '/api/latest',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};


export const getNowplayingMovies = () => {
  return fetch(
    '/api/nowplaying',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getRecommendationsMovies = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results);
};

// export const getMovieSimilar = id => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then(res => res.json())
//     .then(json => json.results);
// };
export const getMovieSimilar = id => {
  return fetch(
    `/api/movies/${id}/similar`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   },
   method:'get',
 }
 ).then(res => res.json());
};


export const getMovieCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.cast);
    
};
export const getPopularPeople = () => {
  return fetch(
    '/api/actors',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
 ).then(res => res.json());
};

export const getPeople = id => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};




