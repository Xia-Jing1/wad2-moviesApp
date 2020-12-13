let movieId = null
let movies;
let reviews;
describe("Watch list ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
    })

  beforeEach(() => {
    cy.visit(`/`);
    cy.get("#upcoming-link").click()
    cy.contains("Add to Watch List").click();
    cy.get("#watchlist-link").click()
  });

  describe("review test", () => {
    it("write a review correctly", () => {
      cy.get("h2").contains("Watch List");
      cy.get(".badge").contains(1);
      cy.contains("Write a Review").click();
      const String = '1234'
      cy.get("input").clear().type(String) ;
      const textString = 'qwertyuiop'
      cy.get("textarea").clear().type(textString) ;
      cy.contains("Submit").click();
      cy.url().should("include", `/watchlist`);
    });



    it("write a review incorrectly", () => {
      cy.get("h2").contains("Watch List");
      cy.get(".badge").contains(1);
      cy.contains("Write a Review").click();
      const String = '1234'
      cy.get("input").clear().type(String) ;
      const textString = 'q'
      cy.get("textarea").clear().type(textString) ;
      cy.contains("Submit").click();
      cy.get("p").contains("Review is too short");
    });
  })


  

});