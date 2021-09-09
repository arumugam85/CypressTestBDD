import { Given, When ,And ,Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../integration/pages/LoginPage'
import AdminPage from '../../integration/pages/AdminPage'

 const login =new LoginPage()
const  admin =new AdminPage()

When('I click admin link', () => {
    admin.clickAdminBtn()
});


When('I click Add Button to admin role', () => {
    admin.clickAddAdminBtn()
});


When('Click Save button', () => {
    admin.clickSaveBtn()
});




When('User selects UserRole {string}',  function (userrole) {
   
    admin.selectUserRoleDropdown(userrole)
   
    })

When('User enters EmpName {string}',  function (empname) {
   
    admin.typeEmpName(empname)
   
    })

    
When('User enters UserName {string}',  function (username) {
    
       admin.typeUserName(username)
   
    })

    
When('User enters Password {string}',  function (password) {
   
    admin.typePassword(password)
    
    })

    
When('User enters confirm password {string}',  function (confirmpassword) {    
   
    admin.typeConfirmPassword(confirmpassword)
    })
When('Enter below user details for admin role',  function (empname) {
 
    cy.get("#systemUser_employeeName_empName").type(empname)
    
    })


When('Search Username {string} from the table',  function (username) {
    
    admin.searchUser(username)

 })

 Then('Click Search Button', () =>{
    admin.clickSearhBtn()
  })

  
When('Select the {string} from the user list',  function (username) {
    cy.log(username)
    admin.clickUserLink(username)    
    cy.log('user clicked successfully')
    
 
})

  
When('Remove the {string} from the user list',  function (username) {
    cy.log(username)
    admin.removeUserLink(username)  
    cy.log('user clicked successfully')
    
 
})
    
 Then('Click Edit Button', () =>{
    admin.clickEditBtn()
  })

  
When('Update the password {string} and {string} for the user',  (password,confirmpassword) => { 
    admin.clickChkPassword()
    cy.wait(3000)
    admin.typePassword(password)
    admin.typeConfirmPassword(confirmpassword)
})

When('Cick Delete button', () =>{
    admin.clickRemoveBtn()
   
    
  })

Then('Validate Modal window message {string} for Delete', message => {
    admin.validateModalWindowMessage(message)
  

  Then('Click Confirm to delete button', () =>{
   
        admin.clickConfirmBtn()
        
    
   
  })

})