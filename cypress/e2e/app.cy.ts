describe("app root", () => {
  beforeEach(() => cy.visit("/"));

  it("displays common elements", () => {
    cy.get("h1").contains("Planning Poker");
    cy.get("[data-testid='footer-link']");
  });

  it("switch themes", () => {
    cy.get("[data-testid='footer-toggle-dark']").click();
    cy.get("html.dark");
    cy.get("[data-testid='footer-toggle-light']").click();
  });
});
