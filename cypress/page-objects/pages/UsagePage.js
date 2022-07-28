import BasePage from "../BasePage";

export default class UsagePage extends BasePage {
  static personalUse = "//div[normalize-space()='Personal use']";
  static businessUse = "//div[normalize-space()='Business use']";

  static clickPersonalUse() {
    cy.xpath(this.personalUse).first().click();
  }
}
