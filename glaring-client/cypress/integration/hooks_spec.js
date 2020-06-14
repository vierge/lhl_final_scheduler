describe("initData", () => {
  it("renders the page", () => {
    cy.visit("http://localhost:3001");
    cy.get("body").should("exist");
  });

  it("calls the api", () => {
    // cy.fixture("response_data.json").as("responsesJSON");
    cy.server();
    cy.route({
      method: "GET",
      url: "*/api/**",
      response: { users: { data: "heeey" }, groups: { data: "gurrrrl" } },
    }).as("api-call");

    cy.wait("@api-call");

    cy.get("[data-cy=db-response]").should("have.text", "@responsesJSON");
  });
});
