import BasePage from "../BasePage";

export default class CreditHistoryPage extends BasePage {
  static container = "[opendropdowntitle='Credit history']";

  static selectFirstScore() {
    cy.get(this.container).children().eq(1).click();
  }
}
