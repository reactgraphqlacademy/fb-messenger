describe("fb messenger", function() {
  it("loads the login page", function() {
    cy.visit("/");
    cy.get("h2").should("have.text", "Please sign in");
  });
});
