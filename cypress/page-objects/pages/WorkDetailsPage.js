import BasePage from "../BasePage";

export default class WorkDetailsPage extends BasePage {
  static firstSection = "div[option-key='value']";
  static monthlyIncomeField = "[name='monthly-income']";

  static selectStatus(position) {
    cy.get(this.firstSection).find(".select--container").click();
    cy.get(this.firstSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }

  static inputMonthlyIncome(amt) {
    cy.get(this.monthlyIncomeField).clear().type(amt);
  }
}
