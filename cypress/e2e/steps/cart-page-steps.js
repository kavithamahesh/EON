import { When, Then, Before} from "cypress-cucumber-preprocessor/steps"
import CartPage from '../pages/cart-page'

When(`I click on checkout button`, () => {
   CartPage.checkoutItems();
});

Then(`I should see the title of the cart page`, () => {
   CartPage.validateTitle();
});

Then(`I should see the list of products with remove button`, () => {
   CartPage.validateListOfProducts();
});

