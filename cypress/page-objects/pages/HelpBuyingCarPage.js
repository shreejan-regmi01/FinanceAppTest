import BasePage from "../BasePage";

export default class HelpBuyingCarPage extends BasePage {
  static yesOption = "//div[normalize-space()='Yes']";

  static selectYes() {
    cy.xpath(this.yesOption).first().click();
  }
}
