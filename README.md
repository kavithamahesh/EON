# Project: EON-Test

System Requirement:
    
     Node.js 18.x, 20.x, 22.x and above 

## Installation

- Run `yarn` or `npm install`

## Running Cypress E2E tests

- Run `yarn test` 

     choose Electron browser as I faced issues with Chrome randomlyly towards Home page landing

## Generate report

- Run `yarn report`

## Create a new feature file, 

    for example, "new-test.feature", in the /e2e/features/ folder.

    If needed, create a new steps file or update an existing one with new steps, located in the /e2e/steps/ folder.

    If necessary, create a new page file or modify an existing one with new methods under the /e2e/pages/ folder.

    Ensure that the step definitions file and the page file have the same name. Example:

    new-test-steps.js
    new-test-page.js

    Add new test data to /e2e/inputs/test-data.js.
    
    Add new expected data to /e2e/inputs/elements-value.js.