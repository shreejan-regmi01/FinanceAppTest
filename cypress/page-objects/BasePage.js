export default class BasePage {
  static continueBtn = "//button[normalize-space()='Continue']";

  static continue() {
    cy.xpath(this.continueBtn).click({ timeout: 6000 });
  }
}
