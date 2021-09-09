export default class AdminPage{
//Add admin users
    btnAdmin      = "a[id=menu_admin_viewAdminModule]";
    btnAddAdmin   = "input[id=btnAdd]";
    selectRole    = "select[id='systemUser_userType']";
    enterEmpName  = "input[id='systemUser_employeeName_empName']"
    enterUserName = "input[id='systemUser_userName']";
    enterPassword = "input[id='systemUser_password']";
    enterConfPwd = "input[id='systemUser_confirmPassword']";
    btnAdminSave = "input[value=Save]";

    //Edit admin users
    txtSearch   =  "input[id='searchSystemUser_userName']";
    btnSearch   =  "input[id='searchBtn']";
    editHeader  ="h1[id='UserHeading']";
    btnEdit     = "input[value=Edit]";
    btnChkPassword = "input[id=systemUser_chkChangePassword]";
    linkUserName  = "table[@id='resultTable']/tbody/tr/td[2]/a";
    btnDelete   =  "input[id=btnDelete]";
    btnChkUser = "input[name='chkSelectAll']";
    btnDialogDelBtn = "input[id=dialogDeleteBtn]";
    modalWindow = "div[id='deleteConfModal']";
    txtModalMessage ="#deleteConfModal h3"
    
    
    clickAdminBtn(){
        cy.get(this.btnAdmin).click()
    }

    clickAddAdminBtn(){
        cy.get(this.btnAddAdmin).click()
    }
    typeEmpName(empname){
        cy.get(this.enterEmpName).clear()
        cy.get(this.enterEmpName).type(empname)
    }

    selectUserRoleDropdown(userrole){
       cy.get(this.selectRole).eq(0).select(userrole);      
       cy.log('Dropdown Selected')
    }

    typeUserName(UserName){
        cy.get(this.enterUserName).clear()
        cy.get(this.enterUserName).type(UserName)
    }

    typePassword(Password){
        cy.get(this.enterPassword).clear()
        cy.get(this.enterPassword).type(Password)
    }

    typeConfirmPassword(ConfirmPassword){
        cy.get(this.enterConfPwd).clear()
        cy.get(this.enterConfPwd).type(ConfirmPassword)
    }

    searchUser(username){
        cy.get(this.txtSearch).clear()
        cy.get(this.txtSearch).type(username)
    }

    clickSearhBtn(){
        cy.get(this.btnSearch).click()
    }
    clickSaveBtn(){
        cy.get(this.btnAdminSave).click({force:true})
    }

    clickEditBtn(){
        cy.wait(3000)
        cy.get(this.btnEdit).click()
    }

    clickChkPassword(){
        cy.get(this.btnChkPassword).click()
    }

    clickUserLink(username){
        cy.get(this.btnChkUser).click()
        cy.contains(username).click()
        //cy.get(this.linkUserName).click()
    }

    removeUserLink(username){
        cy.get(this.btnChkUser).click()
        
    }

    clickDeleteBtn(){
        cy.wait(3000)
        cy.get(this.btnAdminEdit).click()
    }

    clickRemoveBtn(){
        cy.wait(1000)
        cy.get(this.btnDelete).click()
    }

    clickConfirmBtn(){
        cy.wait(1000)
        cy.log('click ok button')
        if (cy.get('div[id=deleteConfModal]')) {
            cy.get('input[id=dialogDeleteBtn]').click();
        }
    }
   

    validateModalWindowMessage(message) {
        cy.wait(3000) 
        if (cy.get('div[id=deleteConfModal]')) {
            cy.log('Modal dialog displayed')
            cy.log(message)
            cy.get('#deleteConfModal h3').should('have.text', message)
            cy.log('Modal message verified')
            
        }
    }
    

    

}