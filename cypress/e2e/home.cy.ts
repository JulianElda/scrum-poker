describe("home page", () => {
  beforeEach(() => cy.visit("/"));

  it("displays home page texts", () => {
    cy.contains(/Julius Polar/);

    cy.get("[data-testid='home-new-game']");
    cy.get("[data-testid='author-github']");
    cy.get("[data-testid='author-repo']");
    cy.get("[data-testid='author-firebase']");
    cy.get("[data-testid='author-angular']");
    cy.get("[data-testid='author-nx']");
    cy.get("[data-testid='author-jest']");
    cy.get("[data-testid='author-cypress']");
    cy.get("[data-testid='author-storybook']");
    cy.get("[data-testid='author-tailwind']");
    cy.get("[data-testid='author-fontawesome']");
    cy.get("[data-testid='author-storybook']");
  });
});
