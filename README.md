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

1. You cannot type negative numbers into the amount and percent fields but if you copy and paste negative numbers and hit continue, you are not shown any validation error message and you can proceed to the next page. This is present in multiple fields.
(here the deposit amount needs to be lesser than purchase price)

![image](https://user-images.githubusercontent.com/35588108/181466023-a004beba-6122-48c0-bc9f-d3f4c5c2d09b.png)



2. I could enter upto number 10^310 in the amount text field and could move to the next screen. For reference, the number of atoms in the universe is 10^82.

![image](https://user-images.githubusercontent.com/35588108/181467395-71803882-833a-4dc8-a714-15a50a31f799.png)

3. I could copy paste mobile number such as this and continue. The -ve sign was not displayed in the next screen and when we return to the same screen. Can be more of an enhancement than a bug. 

![image](https://user-images.githubusercontent.com/35588108/181468255-673ffcfd-636c-4bcb-a6c5-0970c5017202.png)

4. I could input name such as this and then move to the next screen

![image](https://user-images.githubusercontent.com/35588108/181469139-fe7b8b1c-cfd4-4ff1-a731-6720c097f63a.png)

5. No amount input field allow input of decimal numbers.




