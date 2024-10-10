import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps"
import CheckoutCompletePage from '../pages/checkout-complete-page'


When(`I click on back home button`, () => {
    CheckoutCompletePage.clickBackHomeButton();
 });

Then(`I should see the title of the checkout complete page`, () => {
    CheckoutCompletePage.validateTitle();
 });

Then(`I should see order complete information`, () => {
    CheckoutCompletePage.validateCompleteOrderInfo();
 });



