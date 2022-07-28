import BasePage from "../BasePage";

export default class MobileVerificationPage extends BasePage {
  static numberField = "input[type='number']";
  static confirmationChkBox = "#consent";

  static typeNumber(number) {
    cy.get(this.numberField).clear().type(number);
  }

  static checkConfirmation() {
    cy.get(this.confirmationChkBox).check({ force: true }).should("be.checked");
  }
}
