// https://docs.cypress.io/api/introduction/api.html

describe("Contact form", () => {
  it("Should have a 'Contact Us' link on honme page", () => {
    cy.visit("/");

    cy.get("a")
      .contains("Contact Us")
      .should("have.attr", "href", "/contact");
  });

  it("Should show a contact form", () => {
    cy.visit("/contact");

    expect(cy.get(`input[placeholder='First Name']`)).to.exist;
    expect(cy.get(`input[placeholder='Last Name']`)).to.exist;
    expect(cy.get(`input[placeholder='Email']`)).to.exist;
    expect(cy.get(`textarea[placeholder='Message Us']`)).to.exist;
    expect(cy.get(`button > span`).contains("Submit")).to.exist;
  });

  it("Should allow a user to submit the contact form", () => {
    cy.visit("/contact");

    // Fill in the form
    cy.get(`input[placeholder='First Name']`).type("Bob");
    cy.get(`input[placeholder='Last Name']`).type("Saget");
    cy.get(`input[placeholder='Email']`).type("test@noahsarc.org");
    cy.get(`textarea[placeholder='Message Us']`).type("Test message");

    cy.get(`button > span`)
      .contains("Submit")
      .click();
  });
});
