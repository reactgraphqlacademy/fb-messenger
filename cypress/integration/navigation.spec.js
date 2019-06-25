describe("Navigation", function() {
  it("navigates to messenger", function() {
    cy.visit("/login");

    cy.contains("Messenger").click();

    cy.url().should("include", "/messages");
  });
});
