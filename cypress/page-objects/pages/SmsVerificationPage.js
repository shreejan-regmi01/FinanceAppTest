import BasePage from "../BasePage";

export default class SmsVerificationPage extends BasePage {
  static firstInputField = "(//input)[1]";

  static navigatedToPage() {
    cy.url({ timeout: 6000 }).should("contain", "/mobile-verify-3");
  }

  static inputCode(code) {
    cy.xpath(this.firstInputField)
      .should("be.visible")
      .click()
      .type(code, { delay: 30 });
  }
}
