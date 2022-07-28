# FinanceAppTest (Bonus Section Included)

## Documentation (Including how to setup and run)

* Clone this repository: ```git clone https://github.com/shreejan-regmi01/FinanceAppTest.git```
* Go to project directory: ```cd FinanceAppTest```
* Install project dependencies: ```npm install```

Now there are two ways to run the test:

1. Run using Cypress GUI (headed mode):
* In project directory, open a terminal and run ```npm run cy:open```. This will open up the cypress GUI.
* Select ```E2E Testing > Chrome > Start E2E Testing in Chrome```. This will open up an instance of chrome browser.
* Click on ```automated_application.cy.js``` file. This will run the automation script.

2. Run headlessly:
* In project directory, open a terminal and run ```npm run cy:run```. This will run the script ```automated_application.cy.js```.
* After the run is complete, the results are displayed in the terminal.
* You can also find a recorded video session of the latest run under directory ```cypress/videos```.

**Some info:** 

I have used my own project structure following Page Object Model (POM) for code reusability. In POM, we exact a specific cypress code block into a reusable 
function that does a specific task and the function is kept inside a relevant page class . This function can be called from any test.

The test script is located in `cypress/e2e/automated_application.cy.js`

Selectors for some input elements (eg. options in dropdown) are based on the specific data defined in fixtures. Some are arbitrarily selected, based on position. I have used both of these approaches for selecting input elements. Which is better depends on the kind of test we are writing.

## How long did it take to create the application?
It took me roughly 2hr 50 mins of on and off coding to create the application only (not including the time to write this documentation). 


## Any queries that need resolving?
There were few places in the form where there would already be data in the input fields when the page loaded. This would be, for example, Personal Details page - all the fields except the state select would already be filled up when the page load completed, so I did not write code to select/input values for those fields.


## Any improvements you would make to your implementation?
Of course, I could have written a custom command in ```commands.js``` file to select option from the drop down elements that follow similar html structure. 

Or I could have used alias (`@Selector`) for referencing the same element again in the same `it` block. 

I could also have stubbed some network requests, but it seems unnecessary to do that for this project.

## Any bugs that you found?



