// removeAttr command drom JQuery
// invoke function from Cypress

describe("Elements Suite", () => {
  it.skip("Invoke child tab", () => {
    cy.visit(
      "https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/"
    );

    // invoke
    cy.get(
      "body > div:nth-child(1) > main:nth-child(5) > div:nth-child(1) > article:nth-child(1) > section:nth-child(4) > div:nth-child(1) > section:nth-child(1) > p:nth-child(36) > a:nth-child(1)"
    )
      .invoke("removeAttr", "target")
      .click();

    //verify
    cy.get(".landing-top").invoke("css", "border", "3px solid red");
    cy.wait(6000);
  });

  it.skip("Add CSS attribute", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    // invoke and verify
    cy.get("#post-501 > header > h1").invoke("css", "border", "3px solid red");
    cy.wait(6000);
  });

  it("Chaining assertions", () => {
    cy.visit("https://www.w3schools.com/css/default.asp");
    cy.get("#accept-choices").click();

    cy.get("#main > h1")
      .should("be.visible")
      .and("contain", "CSS Tutorial")
      .and("have.text", "CSS Tutorial")
      .and("have.property", "css");
  });
  it("expect test ", () => {
    expect(true).eq(false);
  });
});
