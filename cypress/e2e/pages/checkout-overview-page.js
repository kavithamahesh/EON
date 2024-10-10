import elementsValue from '../inputs/elements-value'
class CheckoutOverviewPage {
   
    elements = {
        pageTitle: () => cy.get('[data-test="title"]'),
        cartQuantityLabel: () => cy.get('[data-test="cart-quantity-label"]'),
        cartDescriptionLabel: () => cy.get('[data-test="cart-desc-label"]'),
        inventoryItem: () => cy.get('[data-test="inventory-item"]'),
        paymentInfoLabel: () => cy.get('[data-test="payment-info-label"]'),
        paymentInfoValue: () => cy.get('[data-test="payment-info-value"]'),
        
        shippingInfoLabel: () => cy.get('[data-test="shipping-info-label"]'),
        shippingInfoValue: () => cy.get('[data-test="shipping-info-value"]'),
     
        totalInfoLabel: () => cy.get('[data-test="total-info-label"]'),
        subTotalLabel: () => cy.get('[data-test="subtotal-label"]'),
        taxLabel: () => cy.get('[data-test="tax-label"]'),
        totalLabel: () => cy.get('[data-test="total-label"]'),
        
        itemPrice: () => cy.get('[data-test="inventory-item-price"]'),
        
        cancelButton: () => cy.get('[data-test="cancel"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        removeButton: () => cy.contains('[data-test*="remove"]'),
        
    };

    // validating the page title
    validateTitle() {
        this.elements.pageTitle().should('have.text', elementsValue.checkoutOverviewPageTitle);
    };

    // validating overview page items
    validateListOfProducts() {
        this.elements.cartQuantityLabel().should('exist')
        this.elements.cartDescriptionLabel().should('exist')
        this.elements.inventoryItem().should('have.length.at.least', 1)
        this.elements.removeButton().should('not.exist');
    }

    // validating shipping info
    validateShippingInfo() {
        this.elements.shippingInfoLabel().should('exist')
        this.elements.shippingInfoValue().should('exist')
    }

    // validating total price info
    validatePriceInfo() {
       this.elements.totalInfoLabel().should('exist')
        this.elements.subTotalLabel().should('exist')
        this.elements.taxLabel().should('exist')
        this.elements.totalLabel().should('exist')

    }
    // validating total price info
    validateSubTotalInfo() {
        let firstValue=0;
        let secondValue=0;
    
        //getting item price
        this.elements.itemPrice().first().then(($firstItemPrice) =>{
             firstValue = ($firstItemPrice.text().replace('$', ""))
             cy.task('log', `first product value---> ${firstValue}`)
            this.elements.itemPrice().last().then(($secondItemPrice) =>{
             secondValue = ($secondItemPrice.text().replace('$', ""))
             cy.task('log', `second product value---> ${secondValue}`)

                this.elements.subTotalLabel().should(($value)=>{
                  expect ($value.text()).contains (parseFloat(firstValue) + parseFloat(secondValue));
                })
            })
        })    

    }

    // validating payment info
    validatePaymentInfo() {
        this.elements.paymentInfoLabel().should('exist')
        this.elements.paymentInfoValue().should('exist')
    }

    clickFinish(){
        this.elements.finishButton().click();
    }
}
export default new CheckoutOverviewPage();