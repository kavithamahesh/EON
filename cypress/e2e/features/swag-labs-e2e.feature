Feature: Purchasing Products
    This Scenario tests the end user journey of logging in and adding couple of products to cart and checkout successfully
    Scenario:  purchasing products using standard_user
        # Home page
        Given I am on the homepage
        Then I should see login information page
        When I logged in using "standardUser"
        # Landing page or Inventory page
        Then I should see inventory page with title and products
        When I sorted the products by "high-to-low"
            And I add the "last" costliest product
        Then the text of the selected "last" product button should be changed
            And I should see '1' products in the basket
        When I add the "second" costliest product
         # expected values are stripped from scenario and maintained in e2e/inputs/elements-value.js file
        Then the text of the selected "second" product button should be changed
            And I should see '2' products in the basket
        # Cart page
        When I open the basket
        Then I should see the title of the cart page
            And I should see the list of products with remove button
        When I click on checkout button
        # checkout page
        Then I should see the title of the checkout page
        When I enter the required information to continue the checkout
        # checkout overview page
        Then I should see the title of the checkout overview page
            And I should see the list of products without remove button
            And I should see payment information
            And I should see shipping information
            And I should see price information
            And I should see the subtotal is calculated correctly
        When I click on finish button
        # checkout complete page
        Then I should see the title of the checkout complete page
            And I should see order complete information
        # home page 
        When I click on back home button
        Then I should see inventory page with title and products