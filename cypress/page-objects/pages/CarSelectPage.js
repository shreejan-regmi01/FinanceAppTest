import BasePage from "../BasePage";

export default class CarSelectPage extends BasePage {
  static firstSection = "(//div[@filterlabel])[1]";
  static secondSection = "(//div[@filterlabel])[2]";
  static thirdSection = "(//div[@filterlabel])[3]";
  static forthSection = "(//div[@filterlabel])[4]";

  static selectMake(position) {
    cy.xpath(this.firstSection)
      .find(".select--container .select--input")
      .should("not.have.attr", "disabled");

    cy.xpath(this.firstSection).find(".select--container").click();
    cy.xpath(this.firstSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }

  static selectModel(position) {
    cy.xpath(this.secondSection)
      .find(".select--container .select--input")
      .should("not.have.attr", "disabled");

    cy.xpath(this.secondSection).find(".select--container").click();

    cy.xpath(this.secondSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }

  static selectYear(position) {
    cy.xpath(this.thirdSection)
      .find(`.select--container .select--dropdown`)
      .contains("No options available")
      .should("not.exist");

    cy.xpath(this.thirdSection).find(".select--container").click();

    cy.xpath(this.thirdSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }

  static selectModelType(position) {
    cy.xpath(this.forthSection)
      .find(`.select--container .select--dropdown`)
      .contains("No options available")
      .should("not.exist");

    cy.xpath(this.forthSection).find(".select--container").click();

    cy.xpath(this.forthSection)
      .find(`.select--container .select--dropdown`)
      .xpath(`.//li[${position}]`)
      .click();
  }
}
