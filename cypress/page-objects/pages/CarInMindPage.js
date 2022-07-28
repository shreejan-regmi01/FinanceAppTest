import BasePage from "../BasePage";

export default class CarInMind extends BasePage {
  static yes = "//div[normalize-space()='Yes']";
  static stillDeciding = "//div[normalize-space()='Yes']";

  static clickYes() {
    cy.xpath(this.yes).first().click();
  }
}
