import BasePage from "../BasePage";

export default class LoanDetailsPage extends BasePage {
  static purchasePriceField = "input[name='approximate-purchase-price']";
  static depositAmtField = "input[name='deposit']";
  static balloonField = "input[name='balloon']";

  static typePurchasePrice(price) {
    cy.get(this.purchasePriceField).clear().type(price);
  }

  static typeDepositAmount(amt) {
    cy.get(this.depositAmtField).clear().type(amt);
  }

  static inputBalloon(percent) {
    cy.get(this.balloonField).clear().type(percent);
  }

  static fillOutLoanDetails(purchasePrice, depositAmt, balloonPercent) {
    this.typePurchasePrice(purchasePrice);
    this.typeDepositAmount(depositAmt);
    this.inputBalloon(balloonPercent);
  }
}
