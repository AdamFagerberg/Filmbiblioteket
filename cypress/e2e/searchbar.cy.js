describe("Searchbar Component", () => {
  beforeEach(() => {
    cy.visit("https://filmbiblioteket.vercel.app");
  });

  it("should render the search input", () => {
    cy.get("input[type='text']")
      .should("be.visible")
      .and("have.attr", "placeholder", "Search");
  });

  it("should update query onChange", () => {
    const query = "Inception";

    cy.get("input[type='text']").type(query);
    cy.url().should("include", `/search/${query}`);
  });

  it("should navigate to home page if search is empty", () => {
    cy.get("input[type='text']").type("Inception");
    cy.get("input[type='text']").clear();

    cy.url().should("include", "/");
  });
});
