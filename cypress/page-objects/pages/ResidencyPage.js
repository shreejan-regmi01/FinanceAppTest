import BasePage from "../BasePage";

export default class ResidencyPage extends BasePage {
  static firstSection = "(//div[@option-key='value'])[1]";
  static secondSection = "(//div[@option-key='value'])[2]";

  static selectStatus(position) {
    cy.xpath(this.firstSection).find(".select--container").click();
    cy.xpath(this.firstSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }

  static selectLivingSituation(position) {
    cy.xpath(this.secondSection).find(".select--container").click();
    cy.xpath(this.secondSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }
}
