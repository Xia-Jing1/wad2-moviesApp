let movies;
const movieId = 551804; // Enola Holmes movie id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    // it("should allow navigation from site header", () => {
    //   cy.get("nav").find("li").eq(1).find("a").click();
    //   cy.url().should("include", `/favorites`);
    //   cy.get("h2").contains("Favorite Movies");
    //   cy.get("nav").find("li").eq(1).find("a").click();
    //   cy.url().should("include", `/favorites`);
    //   cy.get("h2").contains("Upcoming Movies");
    //   cy.get("nav").find("li").eq(2).find("a").click();
    //   cy.get("nav.navbar-brand").find("a").click();
    //   cy.url().should("not.include", `/favorites`);
    //   cy.get("h2").contains("No. Movies");
    // });
  });

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/`);
      cy.get(".card").eq(18).find("img").click();
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });
  

    it("should change browser URL when show/hide similar is clicked", () => {
      cy.contains("Some Similar Movies").click();
      cy.url().should("include", `/movies/${movieId}/similar`);
      cy.contains("Hide").click();
      cy.url().should("not.include", `/movies/${movieId}/similar`);
    });
    

    it("should change browser URL when show/hide credits is clicked", () => {
      cy.contains("Credits").click();
      cy.url().should("include", `/movies/${movieId}/credits`);
      cy.contains("Hide").click();
      cy.url().should("not.include", `/movies/${movieId}/credits`);
    });

  });

  // describe("From the Favorites page", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //     cy.get(".card").eq(0).find("button").click();
  //     cy.get("nav").find("li").eq(2).find("a").click();
  //   });
  //   it("should navigate to the movies detail page and change the browser URL", () => {
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.url().should("include", `/movies/${movies[0].id}`);
  //     cy.get("h2").contains(movies[0].title);
  //   });
  // });

  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click({force: true});
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    // it("should navigate from favorites page to movie details and back", () => {
    //     cy.get(".card").eq(0).find("button").click();
    //     cy.get("nav").find("li").eq(2).find("a").click();
    //     cy.get(".card").eq(0).find("img").click();
    //     cy.get("svg[data-icon=arrow-circle-left]").click();
    //     cy.url().should("not.include", `/movies/${movieId}`);
    //     cy.get("h2").contains("Favorite Movies");
    // });
  });

});
