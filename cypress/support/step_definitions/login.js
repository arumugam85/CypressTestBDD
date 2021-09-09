import { Given, When ,And ,Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../integration/pages/LoginPage'
 const login =new LoginPage()

Given('I open Orange HRM login page', () => {
     login.navigateToURL()
});
   

When('I enter {string} and {string} details', (username,password) => { 
 
    login.fillUserName(username)
    login.fillPassword(password)
    login.clickSubmit()
    
     })
And('Validate the Page Title as {string}',(title) => {
login.validatePageTitle(title)


})


Then('Validate the Page Title as {string}', titleText => {
  login.validatePageTitle(titleText)
})

Then('Validate welcome message as {string}', headlineText => {
  login.validateMessage(headlineText)

And('Logout from the application',() => {   
  login.clickSignOff()
  
  })
})