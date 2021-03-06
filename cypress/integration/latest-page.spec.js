describe("Latest Page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#latest-link").click()
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Latest Movies");
        cy.get(".badge").contains(1);
      });
    })

    it("after click the button, the movie number will reduce", () => {
      cy.contains("Add to Like List").click();
      cy.get(".badge").contains(0);
    });
  })