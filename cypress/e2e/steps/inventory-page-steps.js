import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import InventoryPage from "../pages/inventory-page";


When(`I sorted the products by {string}`, (sortingOrder) => {
   InventoryPage.sortProductBy(sortingOrder);
});

When(`I add the {string} costliest product`, (productNumber) => {
   InventoryPage.addProduct(productNumber);
});

When(`I open the basket`, () => {
    InventoryPage.openBasketPage();
});

Then(`I should see {string} products in the basket`, (cartValue) => {
    InventoryPage.validateCartValue(cartValue);
 });

Then(`the text of the selected {string} product button should be changed`, (productNumber) => {
    InventoryPage.validateCartButtonText(productNumber);
 });

Then(`I should see inventory page with title and products`, () => {
    InventoryPage.validateTitle();
    InventoryPage.validateListOfProducts();
});