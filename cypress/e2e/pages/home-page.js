import testData from '../inputs/test-data'
class HomePage{
    elements = {
        userName: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        loginCredentials: () => cy.get('[data-test="login-credentials"]'),
        loginPassword: () => cy.get('[data-test="login-password"]'),


    };
    // navigating to base url of the site which is managed in cypress.config.js file
    navigate(){
        cy.visit(Cypress.env('base_url'));
    };

        // validating the login information elements
        validateLoginInformation() {
            this.elements.userName().should('exist')
            this.elements.password().should('exist')
            this.elements.loginButton().should('exist')
            this.elements.loginCredentials().should('exist')
            this.elements.loginPassword().should('exist')
        };
    //entering credentials to login to the site
    enterCredentials(userType){
        //values are manitained in e2e/inputs/elements-value.js file
        this.elements.userName().type(testData[userType].userName);
        this.elements.password().type(testData[userType].password);
        this.elements.loginButton().click();
    }

}
export default new HomePage();