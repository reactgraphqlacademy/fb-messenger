// /// <reference types="Cypress" />

describe("Login", function() {
  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    cy.visit("/login");

    cy.get('[type="email"]').type("clone@facebook.com");
    cy.get('input[type="password"]').type("123");
    cy.get("[data-cy=submit-button]").click();
    cy.url().should("be", "/");
    cy.get("h1").should("contain.text", "Sorry the news feed");
  });
});
