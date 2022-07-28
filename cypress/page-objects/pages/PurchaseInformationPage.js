import BasePage from "../BasePage";

export default class PurchaseInformationPage extends BasePage {
  static firstSection = "//div[@option-key][1]";
  static secondSection = "//div[@option-key][2]";
  static thirdSection = "//div[@option-key][3]";

  static selectCarCondition(condition) {
    cy.xpath(this.firstSection).find(".select--container").click();
    cy.xpath(this.firstSection)
      .xpath(`.//li[normalize-space()='${condition}']`)
      .click();
  }

  static selectPurchaseHurry(hurry) {
    cy.xpath(this.secondSection).find(".select--container").click();
    cy.xpath(this.secondSection)
      .xpath(`.//li[normalize-space()='${hurry}']`)
      .click();
  }

  static selectBuyingFrom(from) {
    cy.xpath(this.thirdSection).find(".select--container").click();
    cy.xpath(this.thirdSection)
      .xpath(`.//li[normalize-space()='${from}']`)
      .click();
  }
}
