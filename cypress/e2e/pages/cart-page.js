import elementsValue from '../inputs/elements-value'
class CartPage {
    elements = {
        pageTitle: () => cy.get('[data-test="title"]'),
        cartQuantityLabel: () => cy.get('[data-test="cart-quantity-label"]'),
        cartDescriptionLabel: () => cy.get('[data-test="cart-desc-label"]'),
        inventoryItem: () => cy.get('[data-test="inventory-item"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        
    };

    // validating the page title
    validateTitle() {
        this.elements.pageTitle().should('have.text', elementsValue.cartPageTitle);
    };

    // validating cart page table items
    validateListOfProducts() {
        this.elements.cartQuantityLabel().should('exist')
        this.elements.cartDescriptionLabel().should('exist')
        this.elements.inventoryItem().should('have.length.at.least', 1)
        this.elements.inventoryItem().contains('Remove').should('exist')
    }

    checkoutItems(){
        this.elements.checkoutButton().click();
    }
}
export default new CartPage();