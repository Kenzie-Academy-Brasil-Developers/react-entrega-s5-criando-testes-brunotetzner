const cypress = require("cypress");

context("Search ceps", () => {
  it("Should be search for ceps", () => {});
  cy.visit("http://localhost:3000");
  cy.viewport(1440, 900);
  cy.get("input[Insira o CEP=Insira o CEP]").type("23545037");
  cy.contains("Buscar pelo CEP").click();
});
