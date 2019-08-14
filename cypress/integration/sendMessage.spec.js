describe("Send message", function() {
  beforeEach(() => {
    cy.visit("/login");
    cy.get('[type="email"]').type("clone@facebook.com");
    cy.get('input[type="password"]').type("123");
    cy.get("[data-cy=submit-button]").click();
  });

  const clickMessenger = () => {
    cy.get("h1 > a")
      .contains("Messenger")
      .click();
  };

  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    clickMessenger();
    cy.url().should("include", "/messages");
  });

  it("shows the messenger with our initial messages", function() {
    clickMessenger();
    cy.get("[data-cy=thread]").click();
    cy.get("[data-cy=chat]")
      .contains("Hi!")
      .should("have.text", "Hi! how do you find the React course?");
  });
});
