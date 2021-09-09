import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"
import EmployeePage from '../../integration/pages/EmployeePage'
import AdminPage from '../../integration/pages/AdminPage'
const emp =new EmployeePage()


When('Click Pim Module Link', () => {

    emp.clickPimModuleLink();

});


When('Click Add Employee Button', () => {

    emp.clickAddEmpBtn();

});


When('Enter {string} and {string} in the page', (firstname,lastname) => { 
 
    emp.typeEmpFirstName(firstname)
    emp.typeEmpLastName(lastname)
   
});

When('Search employee name {string}', (empname) => { 
 
    emp.typeSearchEmpName(empname)
    
   
});


When('Enter {string},{string} and {string} in the page',(username,password,confirm_password) => { 
 
    emp.typeEmpUserName(username)
    emp.typeEmpPassword(password)
    emp.typeEmpConfirmPassword(confirm_password)
   
});

When('Click Create Login Check Box', () => {

    emp.clickChkLoginBtn();

});


When('Click Save Button', () => {
    emp.clickEmpSaveBtn()
});

When('Click Edit Button for the employee', () => {
    emp.clickEditEmpBtn()
});

When('Select employee {string} from the table', (lastname) => {
    cy.log('Select employee from table')
    emp.selectEmployeeFromTable(lastname);
    
});


When('Update Blood {string} for the employee', (bloodtype) => {
    cy.log('Select blood type')
    emp.selectBloodTypeDropdown(bloodtype);
});

When('Update Alternate Email {string} for the employee', (otheremail) => {
    cy.log('enter email')
      emp.typeAlternateEmailName(otheremail);
});

When('Click Contact Details', () => {
    emp.clickContactDetailsLink()
});


When('Click Time Module Link', () => {
    emp.clickTimeModuleLink()
});

When('Click View link', () => {
    emp.clickEmpViewLink()
});


When('User search EmpName {string}', () => {
    emp.typeSearchEmpName()
});

When('Click Add Timesheet Button for the employee', () => {
    emp.clickAddTimeSheetBtn()
});

When('Select time period {string} for the timesheet', (timedate) => {
    emp.addTimeSheetInModalWindow(timedate)
});

When('verify message {string} in timesheet page', (warnmsg) => {
    cy.wait(2000)
    cy.log('verify warning message')
    emp.verifyWarningMessage(warnmsg);
});

When('Enter working hours {string} for the week', (hours) => { 
 
    emp.enterTimeSheet(hours)
    //emp.typeEmpLastName(lastname)
   
});

When('Click Submit Button', () => {
    emp.clickSubmitBtn()
});

When('Select project {string} and activity name {string} for the timesheet', (projectname,activity) => {
    emp.typeEmpProjectName(projectname);
    emp.selectActivityNameDropdown(activity)
});

When('Click {string} Module Link', (moduleName) => { 
 
    emp.clickModuleLink(moduleName)
    //emp.typeEmpLastName(lastname)
   
});


When('Click {string} menu Link', (menuName) => { 
 
    emp.clickMenuLink(menuName)
    //emp.typeEmpLastName(lastname)
   
});


When('Select {string} menu for the timesheet', (menuName) => { 
 
    emp.clickEmpReportMenuLink(menuName)
    //emp.typeEmpLastName(lastname)
   
});


When('Search employee name {string} for report', (empName) => { 
 
    emp.typeSearchReportEmpName(empName)
    
   
});


When('Select FromDate {string} for the timesheet', (fromdate) => { 
 
    emp.typeFromDateReport(fromdate)
    //emp.typeEmpLastName(lastname)
   
});


When('Select ToDate {string} for the timesheet', (todate) => { 
 
    emp.typeToDateReport(todate)
    //emp.typeEmpLastName(lastname)
   
});


When('Click {string} checkbox for the employee', (chkBoxName) => { 
 
    emp.clickReportCheckBox(chkBoxName)
    //emp.typeEmpLastName(lastname)
   
});


When('Verify employee name {string} for the report details', (empname) => { 
 
    emp.verifyEmployeeName(empname)
    //emp.typeEmpLastName(lastname)
   
});

When('Click Add Button', () => {
    cy.log('click add btn')
    cy.wait(2000)
    cy.get('#btnAdd').click({force:true})
});

When('Select employee {string} from the trackers table', (empName) => {
    cy.log('Select employee from table')
    emp.selectEmployeeFromTrackerTable(empName);
    
});


When('Enter Performance Tracker Log Details in the tracker page', (empname) => { 
 
    emp.enterPerformanceLogReport(loginfo,achievement,logcomments)
    //emp.typeEmpLastName(lastname)
   
});

When('Verify Added Date {string} for the tracker', (addeddate) => { 
 
    emp.verifyAddedDateInTable(addeddate);
   
});

When('Verify {string} is displayed in the directory page', (empinfo) => { 
 
    emp.verifyEmployeeInfoInDirectory(empinfo);
   
});


When ('Search {string} in the directory page',(empname)=>{

    emp.searchEmployeeDirectory(empname);
})

When ('Click Directory Module Link',()=>{

    emp.clickDirectoryModuleLink();
})



When ('Select Job Title {string} from the dropdown',(jobtitle)=>{

    emp.selectJobTitleDropdown(jobtitle);
})


When ('Select Location {string} from the dropdown',(location)=>{

    emp.selectLocationDropdown(location);
})

