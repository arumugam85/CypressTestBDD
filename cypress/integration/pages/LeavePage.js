export default class LoginPage { // Create variables for element locators
    btnApply = "input[id=applyBtn]";
    linkLeave = "a[id=menu_leave_viewLeaveModule]";
    linkApplyLeave = "a[id=menu_leave_applyLeave]";
    txtFromDate = "input[id=applyleave_txtFromDate]";
    txtToDate = "input[id=applyleave_txtToDate]";
    selectLeaveType = "select#applyleave_txtLeaveType";
    txtComment = "textarea[id=applyleave_txtComment]";
    btnDatePicker = "li:nth-child(3) > .ui-datepicker-trigger";
    txtNoOfHrs = ".inner td:nth-child(2)";
    txtLeaveDate = ".inner td:nth-child(1)";
    txtSearchEmployee = "input[id=employee]";
    

    enterFromDate(fromdate) {
        cy.get(this.txtFromDate).clear()
        cy.get(this.txtFromDate).type(fromdate)
        cy.get(this.btnDatePicker).click()
    }
    enterToDate(todate) {
        cy.get(this.txtToDate).clear()
        cy.get(this.txtToDate).type(todate)
        cy.wait(2000)
        cy.get(this.btnDatePicker).click()
    }
    clickApplyBtn() {
        cy.wait(3000)
        cy.get(this.btnApply).click({force:true})
    }
    clickModuleLeave() {
        cy.get(this.linkLeave).click()
    }
    clickApplyLeaveMenu() {
        cy.get(this.linkApplyLeave).click({force: true})
    }
    selectLeaveTypeFromDropdown(leaveType) { // cy.get(this.selectBloodType).click({force:true})
        cy.wait(2000)
        cy.get(this.selectLeaveType).eq(0).select(leaveType);
        cy.log('Leave Type Selected')
    }

    typeSearchLeaveEmpName(empname) {
        cy.get(this.txtSearchRepEmp).clear();
        cy.get(this.txtSearchRepEmp).type(empname);
        cy.get(".ac_even").click();
      }

    validateLeaveDetails(fromdate,leavehrs) {
        cy.wait(3000)
        cy.get('.inner td:nth-child(1)').each(($ele, index, $list) => {
            const text = $ele.text()
            cy.log(text)
            expect(text).to.equal(leavehrs)
            cy.screenshot()
           
        })

        cy.get('.inner td:nth-child(2)').each(($ele, index, $list) => {
            const text = $ele.text()
            cy.log(text)
            expect(text).to.equal(fromdate)
            cy.screenshot()
           
        })
        
    }
}
