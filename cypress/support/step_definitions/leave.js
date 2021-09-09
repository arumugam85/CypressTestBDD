import { Given, When ,And ,Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../integration/pages/LoginPage'
import LeavePage from '../../integration/pages/LeavePage'

 const login =new LoginPage()
 const  leave =new LeavePage()

When('Click Leave Module Link', () => {
    leave.clickModuleLeave()
});

Then('Click Apply Button', () => {
    leave.clickApplyBtn()
});

When('Click Apply Leave link', () => {
    leave.clickApplyLeaveMenu()
});

When('I enter {string} and {string} for leave', (fromdate,todate) => { 
 
    leave.enterFromDate(fromdate)
    leave.enterToDate(todate)
    
});


When('Verify the No of hours {string} for Leave and Date {string}', (fromdate,leavehrs) => { 
 
    leave.validateLeaveDetails(fromdate,leavehrs);
    
   
});


When('Search employee name{string} from the table', (empName) => { 
 
    emp.typeSearchReportEmpName(empName)
    
   
});


When('Select {string} from the dropdown', (leavetype) => {
    cy.log('Select leave type')
    leave.selectLeaveTypeFromDropdown(leavetype);
});

