describe("game", () => {
  it("creates and joins game", () => {
    // start as moderator
    cy.session("moderator-session", () => {});

    // setup a new game
    cy.visit("/new");
    cy.get("[data-testid='input-name']").type("Moderator");
    cy.get("[data-testid='create-game']").click();
    cy.get("[data-testid='create-game-loading']");
    cy.get("[data-testid='participant-Moderator']");

    // moderator vote
    cy.get("[data-testid='card-8']").click();

    // find the game link
    cy.get("[data-testid='game-link']").then(
      ($gameLink: JQuery<HTMLElement>) => {
        // switch to player
        cy.session("player-session", () => {});
        cy.visit($gameLink.val() as string);
        // join as new player
        cy.get("[data-testid='input-name']").type("Player");
        cy.get("[data-testid='join-game']").click();
        cy.get("[data-testid='join-game-loading']");
        cy.get("[data-testid='participant-Player']");

        // player vote
        cy.get("[data-testid='card-13']").click();

        // reveal and assert result
        cy.get("[data-testid='moderator-action']").click();
        cy.get("[data-testid='result-Moderator-8']");
        cy.get("[data-testid='result-Player-13']");

        // reset game and assert empty votes
        cy.get("[data-testid='moderator-action']").click();
        cy.get("[data-testid='participant-Moderator-pending']");
        cy.get("[data-testid='participant-Player-pending']");
      }
    );
  });
});
