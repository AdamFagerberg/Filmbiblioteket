describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("https://filmbiblioteket.vercel.app");
  });

  it("should display loading", () => {
    cy.contains("Loading...").should("be.visible");
  });

  it("should display trending movies", () => {
    cy.get("ul li").should("have.length.greaterThan", 0);
    cy.get("h1").should("contain.text", "TRENDING");
  });

  it("should navigate to the movie details page when clicked", () => {
    cy.get("ul li").first().click();
    cy.url().should("include", "/movie/");
  });

  it("should have a favourite button", () => {
    cy.get("ul li")
      .first()
      .within(() => {
        cy.get("svg")
          .invoke("attr", "fill")
          .then((fill) => {
            if (fill === "red") {
              cy.get("button").click();
              cy.get("svg").should("have.attr", "fill", "transparent");
            }

            cy.get("button").click();
            cy.get("svg").should("have.attr", "fill", "red");
          });
      });
  });
});
