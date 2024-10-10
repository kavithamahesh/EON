import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps"
import CheckoutOverviewPage from '../pages/checkout-overview-page'


When(`I click on finish button`, () => {
    CheckoutOverviewPage.clickFinish();
 });

Then(`I should see the title of the checkout overview page`, () => {
    CheckoutOverviewPage.validateTitle();
 });

Then(`I should see the list of products without remove button`, () => {
    CheckoutOverviewPage.validateListOfProducts();
 });

Then(`I should see payment information`, () => {
    CheckoutOverviewPage.validatePaymentInfo();
 });

Then(`I should see shipping information`, () => {
    CheckoutOverviewPage.validateShippingInfo();
 });

Then(`I should see price information`, () => {
    CheckoutOverviewPage.validatePriceInfo();
 });

Then(`I should see the subtotal is calculated correctly`, () => {
    CheckoutOverviewPage.validateSubTotalInfo();
 });
