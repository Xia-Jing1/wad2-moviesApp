let people;    // List of movies from TMDB


  describe("Latest Page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#people-link").click()
    });
  
    
  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h2").contains("Actor List");
      cy.get(".badge").contains(20);
    });
  })
  it("should display actor details", () => {
    cy.get(".card").eq(2).find("img").click();
    cy.get("h4").contains("Overview");
    
  });
  
    
  
  });