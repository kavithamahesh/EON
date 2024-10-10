import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps"
import CheckoutPage from '../pages/checkout-page'



When(`I enter the required information to continue the checkout`, () => {
    CheckoutPage.enterCheckoutInfo();
 });

Then(`I should see the title of the checkout page`, () => {
    CheckoutPage.validateTitle();
 });
