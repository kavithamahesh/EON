import elementsValue from '../inputs/elements-value'
import testData from '../inputs/test-data'
class CheckoutPage {
    elements = {
        pageTitle: () => cy.get('[data-test="title"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        
    };

    // validating the page title
    validateTitle() {
        this.elements.pageTitle().should('have.text', elementsValue.checkoutPageTitle);
    };

    // Entering checkout info based on the value type
    enterCheckoutInfo() {
        this.elements.firstName().type(testData['defaultCheckoutInfo'].firstName)
        this.elements.lastName().type(testData['defaultCheckoutInfo'].lastName)
        this.elements.postalCode().type(testData['defaultCheckoutInfo'].postalCode)
        this.elements.continueButton().click()
    }

}
export default new CheckoutPage();