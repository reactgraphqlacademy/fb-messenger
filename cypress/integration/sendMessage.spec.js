describe("Send message", function() {
  beforeEach(() => {
    cy.visit("/login");
    cy.login();
  });

  const clickMessenger = () => {
    cy.get("h1 > a")
      .contains("Messenger")
      .click();
  };

  it("clicking 'Messenger' navigates to a correct url", function() {
    clickMessenger();
    cy.url().should("include", "/messages");
  });

  it("shows the messenger with  initial messages", function() {
    clickMessenger();
    cy.get("[data-cy=thread]").click();
    cy.get("[data-cy=chat]")
      .contains("Hi!")
      .should("have.text", "Hi! how do you find the React course?");
  });

  it("sends messages", function() {
    const TEST_MESSAGE = "test text";
    clickMessenger();
    cy.get("[data-cy=thread]").click();
    cy.get("[data-cy=messageBox]").type(TEST_MESSAGE);
    cy.get("button").click();
    cy.get('[data-cy="message 2"]').should("have.text", TEST_MESSAGE);
  });
});
