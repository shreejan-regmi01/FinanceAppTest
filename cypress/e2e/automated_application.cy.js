import CarInMindPage from "../page-objects/pages/CarInMindPage";
import CarSelectPage from "../page-objects/pages/CarSelectPage";
import CreditHistoryPage from "../page-objects/pages/CreditHistoryPage";
import HelpBuyingCarPage from "../page-objects/pages/HelpBuyingCarPage";
import LoanDetailsPage from "../page-objects/pages/LoanDetailsPage";
import PurchaseInformationPage from "../page-objects/pages/PurchaseInformationPage";
import RelationshipPage from "../page-objects/pages/RelationshipPage";
import ResidencyPage from "../page-objects/pages/ResidencyPage";
import UsagePage from "../page-objects/pages/UsagePage";
import WorkDetailsPage from "../page-objects/pages/WorkDetailsPage";

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
      monthlyIncome,
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
     *selects on this page is arbitrary - it selects the first option (based on the argument provided) regardless of its value
     * */
    CarSelectPage.selectMake(1);
    CarSelectPage.selectModel(1);
    CarSelectPage.selectYear(1);
    CarSelectPage.selectModelType(1);
    CarSelectPage.continue();

    //5th page
    UsagePage.clickPersonalUse();
    UsagePage.continue();

    //6th page
    WorkDetailsPage.selectStatus(1);
    WorkDetailsPage.inputMonthlyIncome(monthlyIncome);
    WorkDetailsPage.continue();

    //7th page
    ResidencyPage.selectStatus(1);
    ResidencyPage.selectLivingSituation(1);
    ResidencyPage.continue();

    //8th page
    RelationshipPage.selectRelationshipStatus(1);
    RelationshipPage.selectLivingSituation(1);
    RelationshipPage.continue();

    //9th page
    CreditHistoryPage.selectFirstScore();
    CreditHistoryPage.continue();

    //10th page
    HelpBuyingCarPage.selectYes();
    HelpBuyingCarPage.continue();
  });
});
