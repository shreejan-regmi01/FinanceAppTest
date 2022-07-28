import BasePage from "../BasePage";

export default class RelationshipPage extends BasePage {
  static selectContainer = ".select--container";
  static SelectDropdown = ".select--dropdown";

  static selectRelationshipStatus(position) {
    cy.get(this.selectContainer).first().click();
    cy.get(this.SelectDropdown).first().xpath(`.//li[${position}]`).click();
  }

  static selectLivingSituation(position) {
    cy.get(this.selectContainer).eq(1).click();
    cy.get(this.SelectDropdown).eq(1).xpath(`.//li[${position}]`).click();
  }
}
