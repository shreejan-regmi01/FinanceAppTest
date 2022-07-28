import CarInMindPage from "../page-objects/pages/CarInMindPage";
import LoanDetailsPage from "../page-objects/pages/LoanDetailsPage";
import PurchaseInformationPage from "../page-objects/pages/PurchaseInformationPage";

describe("Finance Application", function () {
  before(() => {
    cy.fixture("data.json").then((data) => (this.data = data));
    cy.visit("/");
  });

  it("should fill out the whole application form", () => {
    const {
      purchasePrice,
      depositAmount,
      balloon,
      carCondition,
      purchaseHurry,
      buyingFrom,
    } = this.data;

    //1st page
    LoanDetailsPage.fillOutLoanDetails(purchasePrice, depositAmount, balloon);
    LoanDetailsPage.continue();

    //2nd page
    CarInMindPage.clickYes();
    CarInMindPage.continue();

    /*
     *3rd page
     *selects on this page is based on the value specified in the fixtures
     * */
    PurchaseInformationPage.selectCarCondition(carCondition.used);
    PurchaseInformationPage.selectPurchaseHurry(purchaseHurry.asap);
    PurchaseInformationPage.selectBuyingFrom(buyingFrom.dealership);
    PurchaseInformationPage.continue();

    /*
     *4th page
     *selects on this page is based on the value specified in the fixtures
     * */
  });
});
