
import elementsValue from '../inputs/elements-value'
class InventoryPage {
    //definition of page elememts
    elements = {
        pageTitle: () => cy.get('[data-test="title"]'),
        inventoryList: () => cy.get('[data-test="inventory-list"]'),
        inventoryListItem: () => cy.get('[data-test="inventory-item"]'),
        productSortContainer: () => cy.get('[data-test="product-sort-container"]'),
        inventoryItemName: () => cy.get('[data-test="inventory-item-name"]'),
        addToCartButton: () => cy.get('[data-test*="add-to-cart"]'),
        removeButton: () => cy.get('[data-test*="remove"]'),
        shoppingCartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
        backToProducts: () => cy.get('[data-test="back-to-products"]'),

    };

    // validating the page title
    validateTitle() {
        this.elements.pageTitle().should('have.text', elementsValue.inventoryPageTitle);
    };

    // validate that the iventory list exists and atleaset contains a product to choose
    validateListOfProducts() {
        this.elements.inventoryList().should('exist')
        this.elements.inventoryListItem().should('have.length.at.least', 1)
    }

    // sorting the products using the param value
    sortProductBy(sortingType) {

        switch (sortingType) {
            case "a-to-z":
                this.elements.productSortContainer().select('az');
                break;
            case "z-to-a":
                this.elements.productSortContainer().select('za');
                break;
            case "high-to-low":
                this.elements.productSortContainer().select('hilo');
                break;
            case "low-to-high":
            default:
                this.elements.productSortContainer().select('lohi');
                break;
        }
    }

    //adding the product to basket by clicking the add to cart button
    addProduct(productNumber) {

        switch (productNumber) {
            case "first":
                this.elements.addToCartButton().first().click();
                break;
            case "second":
                this.elements.addToCartButton().eq(1).click();
                break;
            case "last":
                this.elements.addToCartButton().last().click();
                break;
        }

    }

    //validating the add to cart button text post action
    validateCartButtonText(productNumber) {

        switch (productNumber) {
            case "first":
                this.elements.inventoryListItem().first().contains(elementsValue.addToCartButtonTextPostAction).should('exist')
                break;
            case "second":
                this.elements.inventoryListItem().eq(1).contains(elementsValue.addToCartButtonTextPostAction).should('exist')
                break;
            case "last":
                this.elements.inventoryListItem().last().contains(elementsValue.addToCartButtonTextPostAction).should('exist')
                break;
        }

    }

    //validating cart value after adding an item
    validateCartValue(cartValue) {
        
        this.elements.cartBadge().then(($value)=>{
            let actualCartValue = $value.text();
            cy.task('log', 'current cart count value--->' + actualCartValue)
            expect(actualCartValue).to.be.equal(cartValue);
        })
    }

    //clicking on the cart link 
    openBasketPage(){
        this.elements.shoppingCartLink().click();
    }

}
export default new InventoryPage();