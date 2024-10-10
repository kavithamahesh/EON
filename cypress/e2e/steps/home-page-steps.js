import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps"
import homePage from '../pages/home-page'

Before( ()=>{
 cy.clearAllCookies();

});
Given(`I am on the homepage`, () => {
 homePage.navigate();
});

When(`I logged in using {string}`, (userType) => {
    homePage.enterCredentials(userType);
});

Then(`I should see login information page`, () => {
    homePage.validateLoginInformation();
});

