context("Search ceps", () => {
  it("Should be search for ceps - test 1", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("input").type("23545037");
    cy.contains("Buscar pelo CEP").click();
  });
});
