import elementsValue from '../inputs/elements-value'

class CheckoutCompletePage{
    elements = {
        pageTitle: () => cy.get('[data-test="title"]'),
        completeImage: () => cy.get('[data-test="pony-express"]'),
        completeHeader: () => cy.get('[data-test="complete-header"]'),
        completeText: () => cy.get('[data-test="complete-text"]'),
        backToHomePage: () => cy.get('[data-test="back-to-products"]')

    };
  
      // validating the page title
      validateTitle() {
        this.elements.pageTitle().should('have.text', elementsValue.checkoutCompletePageTitle);
    };

  // validating complete page items
  validateCompleteOrderInfo() {
    this.elements.completeImage().should('exist')
    this.elements.completeHeader().should('exist')
    this.elements.completeText().should('exist')
    this.elements.backToHomePage().should('exist')
  }

  clickBackHomeButton(){
    this.elements.backToHomePage().click()

  }
}

export default new CheckoutCompletePage();