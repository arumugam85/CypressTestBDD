export default class LoginPage {
     // Create variables for element locators
    usernameInput = "input[name=txtUsername]";
    passwordInput = "input[name=txtPassword]";
    submitBtn = "input[name=Submit]";
    signOffLink = "a[contains(text(),'Logout')]";
    successMsg = "a[id=welcome]";

    navigateToURL() {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    }
    fillUserName(username) {
        cy.get(this.usernameInput).clear()
        cy.get(this.usernameInput).type(username)
    }
    fillPassword(password) {
        cy.get(this.passwordInput).clear()
        cy.get(this.passwordInput).type(password)
    }
    clickSubmit() {
        cy.get(this.submitBtn).click()
    }
    clickSignOff() {
        cy.wait(5000)
        cy.contains(/Welcome .*/).click()
        cy.contains('Logout').click()
        cy.log('logout link clicked')
    }
    validatePageTitle(titleText) {
        return cy.title().should('include', titleText)
    }
    validateMessage() {
        cy.wait(3000)
        cy.get(this.successMsg).should('have.text', 'Welcome Paul')
    }
}
