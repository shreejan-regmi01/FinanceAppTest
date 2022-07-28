import BasePage from "../BasePage";

export default class PersonalDetailsPage extends BasePage {
  static selectPlaceholder = "//div[normalize-space()='Select']";
  static fnameField = "[name='firstName']";
  static lnameField = "[name='lastName']";
  static emailField = "[name='email']";
  static statePlaceholder =
    "//div[normalize-space()='State' and contains(@class, 'select')]";

  static navigatedToPage() {
    cy.url({ timeout: 8000 }).should("contain", "/personal-details-2");
  }

  static selectState(position) {
    cy.xpath(this.statePlaceholder).first().click();
    cy.xpath(this.statePlaceholder)
      .parents(".select--container")
      .find(".select--dropdown")
      .xpath(`.//li[${position}]`)
      .click();
  }
}
