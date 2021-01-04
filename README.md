# Assignment 1 - ReactJS app.

Name: Jing Xia

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,

 + Feature 1 - View popular actors and their profiles
 + Feature 2 - View the latest movie and its details
 + Feature 3 - View the top 20 most popular movies
 + Feature 4 - View the top 20 highest-rated movies
 + Feature 5 - Check out the movies that are showing
 + Feature 6 - Provide recommended movie links for each movie
 + Feature 7 - See a list of similar movies  for each movie
 + Feature 8 - View the credits for the current movie

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, 

+ https://api.themoviedb.org/3/movie/popular - get popular movies. 
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies.
+ https://api.themoviedb.org/3/movie/latest - get latest movie.
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies.
+ https://api.themoviedb.org/3/movie/${id}/recommendations - get the recommendation movies.
+ https://api.themoviedb.org/3/movie/${id}/similar - get the similar movies.
+ https://api.themoviedb.org/3/movie/${id}/credits - get the movie credits.
+ https://api.themoviedb.org/3/person/popular - get the popular actors.
+ https://api.themoviedb.org/3/person/${id} - get the person you want.
+ https://api.themoviedb.org/3/region/movie/list - get the country list.

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed .......

<img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gln49thubuj30bg11aq5w.jpg" alt="storybook" style="zoom:50%;" />

<img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gln4ab6ezsj308k0dmt9j.jpg" alt="storybook" style="zoom:50%;" />

[stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![latest movies](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxbosmnej31c00u0hdt.jpg)
>Display the latest movie, click on the picture to see the detailed description of the movie, click on the "Add to Like List" button to add to the List of Like List.

![截屏2020-12-12 下午10.41.58](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxf3364xj31c00u0x6r.jpg)
>Popular movies are displayed. Click the picture to see a detailed description of the movie. Click the "Add to Want List" button to Add to the desired List. 

![top rated movies](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxlefx25j31c00u0x6q.jpg)

>Displays top rated movies. Click on the image to see a detailed description of the movie. Click the "Add to Collection List" button to Add to the collected List.

![nowplaying](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxmgz7zbj31c00u0qv7.jpg)

>Displays the Now Playing movie. Click on the image to see a detailed description of the movie. Click the "Enjoy It" button to add to the specific list. 

![watchlist](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxmv8ebfj31c00u0kjl.jpg)

>The page shows upcoming movies that being added to the watch list. Click the image to view the movie details, and click the "Write a Review" button to write a review.

![likelist](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxni8eihj31c00u0e81.jpg)

>The page shows latest movies that being added to the like list. Click the image to view the movie details, and click the "Write a Review" button to write a review. 

![wantlist](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxokzzb2j31c00u0qv5.jpg)

>The page shows popular movies that being added to the want list. Click the image to view the movie details, and click the "Write a Review" button to write a review. 

![collection list](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxqdrhp0j31c00u0hdt.jpg)

>The page shows top rated movies that being added to the collection list. Click the image to view the movie details, and click the "Write a Review" button to write a review.

![enjoy it](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxqz9igaj31c00u0npd.jpg)

>The page shows now playing movies that being added to the enjoy list. Click the image to view the movie details, and click the "Write a Review" button to write a review. 

![popular actor](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxroxv7lj31c00u0b2b.jpg)

>Displays the popular actor list. Click on the image to see a detailed description of the actor. 

![overview](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxsde7fvj31c00u0npd.jpg)

>A brief introduction and pictures of the actors are displayed. Click the back button to go back to the previous page.

![overview](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxt0u6thj31c00u0x6p.jpg)

>Shows detailed information on a movie. Clicking the "Show Reviews" button will display extracts from critic reviews. Clicking the "Some Similar Movies" button will display a list of movies that are similar to the current movie. Clicking on credits will show you a list of the actors in the film. Clicking the "Recommendations Movies" button will display a list of recommended movies related to the movie. Click the 'back' button to go back to the previous page.

![recommendations](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxts835mj31c00u0x6r.jpg)

>Displays a list of recommended movies for a particular movie. Click on the picture to view the corresponding movie details.

![similar](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxue1sz5j31c00u0kjl.jpg)

>A list of movies similar to the current movie is displayed. Click the 'Full Dentail' button to see the details of the recommended movies.

![credits](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxv4vqjaj31c00u04qq.jpg)

>It shows the information sheet of the cast and crew for the film.

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - Displays the user's favorite movies selection.
+ /movies/watchlist (public) - Displays the watchlist added by the user.
+ /movies/likelist (public) - Displays the likelist added by the user.
+ /movies/wantlist (public) - Displays the wantlist added by the user.
+ /movies/collection (public) - Displays the collectionlist added by the user.
+ /movies/enjoylist (public) - Displays the enjoylist added by the user.
+ /reviews/:id (public) - Displays the full text of a movie review.
+ /people/:id (public) - Displays the details of the actor.
+ /credits/:id (public) - Displays the details of the credits.
+ /people/people1 (public) - Displays the actor list.
+ /movies/popular (public) -Displays the popular movies list.
+ /movies/toprated (public) - Displays the top rated movies list.
+ /movies/latest (public) - Displays the latest movies list.
+ /movies/similar (public) - Displays the similar movies list.
+ /movies/nowplaying (public) - Displays the now playing movies list.
+ /movies/recommendations/:id (public) - Displays the recommendations movies list.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![actor](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxvx8wchj31c00u01kz.jpg)

> Clicking the actor button causes the display of popular actor list.

![popular](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxwcddvij31c00u01kz.jpg)
> Clicking a card causes the display of that actor's details.

![popular](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxwwg74lj31c00u0npf.jpg)

> Clicking a card causes the display of that movie's details.

![wantlist](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxxd07l2j31c00u0npf.jpg)

> Clicking the "Add to Want List" causes reduce the current page movie card and add it to the want List.

![recommendations](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxxyz8gxj31c00u01ky.jpg)

>Clicking the "Recommendations Movies" for recommendations movies' card list.

![similar](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxyfnz34j31c00u01ky.jpg)

>Clicking the "Some Similar Movies" for similar movies list.

![full detail](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxz20nqoj31c00u0kjl.jpg)

>Clicking the "Full Details" button for details of the similar movie.

![credits](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxzicbrwj31c00u01ky.jpg)

>Clicking the "Credits" for credit list of this film.

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Jing Xia

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]

+ Popular Actor List page - Shows the popular actors. Click on the image to see details of the actor.

Tests: cypress/integration/people-page.spec.js 

![actor](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy02vjl9j31c00u0b2b.jpg)

+ Movie details page - Shows the overview of the movie. Clicking the "Some Similar Movies" button displays a list of Movies Similar to that movie. Click on the "Credits" button to show the Credits for the film.

Tests: cypress/integration/navigation.spec.js 

![overview](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy149juyj31c00u0b2a.jpg)

+ Latest Movies page - Shows the latest movie. The "Add to Like List" button adds the movie to Like List. Click on the image to see details of the film.

Tests: cypress/integration/latest-page.spec.js 

![latest](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy2nvgruj31c00u0hdt.jpg)

+ Movie Recommendations page: Displays the recommendation movie list of a movie.

Tests: cypress/integration/recommendations-page.spec.js 

![recommendations](https://tva1.sinaimg.cn/large/0081Kckwgy1glmxts835mj31c00u0x6r.jpg)

+ Popular Movies page: Displays the popular movies list.Filters can filter movies.

Tests: cypress/integration/popular-page.spec.js 

![ popular](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy3sy1j4j31c00u04qs.jpg)

+ Top rated movies page: Displays the top rated movies.Filters can filter movies.

Tests: cypress/integration/toprated-page.spec.js 

![top rated](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy4x3fwqj31c00u01kz.jpg)

+ Now playing movies: Displays the now playing movies.Filters can filter movies.

Tests: cypress/integration/nowplaying-page.spec.js 

![now playing](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy5d0qemj31c00u0u0z.jpg)

+ Movie watch list: Displays the movie added from upcoming movie page. Filters can filter movies.

Tests: cypress/integration/watchlist-page.spec.js 

![watch list](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy5vhqvqj31c00u0x6p.jpg)

+ Add review: Add your review of one movie.Correct and incorrect inputs produce different submission results.

Tests: cypress/integration/watchlist-page.spec.js 

![add your review](https://tva1.sinaimg.cn/large/0081Kckwgy1glmy6tyl7ej31c00u04qq.jpg)

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/c8y1cf/

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]

+ cypress/integration/watchlist-page.spec.js - test write a review incorrectly. 
+ cypress/integration/watchlist-page.spec.js - test do not write review and click the submit button.

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
