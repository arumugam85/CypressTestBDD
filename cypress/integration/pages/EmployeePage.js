export default class EmployeePage {
  btnAddEmp = "a[id=menu_pim_addEmployee]";
  btnPIMModule = "a[id=menu_pim_viewPimModule]";
  txtFirstName = "input[id=firstName]";
  txtLastName = "input[id=lastName]";
  btnSave = "input[value=Save]";
  chkBtnLogin = "input[id=chkLogin]";
  txtEmpUserName = "input[id=user_name]";
  txtEmpPassword = "input[id=user_password]";
  txtRePassword = "input[id=re_password]";
  btnEditEmp = "input[id=btnEditCustom]";
  selectBloodType = "select[name='custom1']";
  txtOtherEmail = "input[id=contact_emp_oth_email]";
  btnContact = "#sidenav > li:nth-child(2) > a";
  //Timesheet details
  btnTimeModule = "a[id=menu_time_viewTimeModule]";
  btnView = "input[value=View]";
  btnAddTimeSheet = "a[id=btnAddTimesheet]";
  txtSearchEmp = "input[id=employee]";
  txtTimeDate = "input[id=time_date]";
  btnOk = "input[id=addTimesheetBtn]";
  msgWarning = "div[id=msgDiv]";
  btnSubmit = "input[value=Submit]";
  txtProjectName = "input[id=initialRows_0_projectName]";
  selectProjActivity = "select[id=initialRows_0_projectActivityName]";
  //Report Details
  txtSearchRepEmp = "input[id=employee_empName]";
  selectProjName = "select[id=time_project_name]";
  selectActivityName = "select[id=time_activity_name]";
  txtFromDate = "input[id=project_date_range_from_date]";
  txtToDate = "input[id=project_date_range_to_date]";
  chkApproveTimeSheets = "input[id=only_include_approved_timesheets]";
  linkReport = "a[id=menu_time_Reports]";
  menuEmpReport = "a[id=menu_time_displayEmployeeReportCriteria]";
  txtEmpReportName =
    "div.box:nth-child(1) div.inner div:nth-child(1) dl.search-params > dd:nth-child(2)";
  btnAddTracker = "input[id=btnAdd]";
  txtLogInfo = "input[id=addperformanceTrackerLog_achievement]";
  selectAchievement = "select[id=addperformanceTrackerLog_achievement]";
  txtLogComments = "input[id=addperformanceTrackerLog_comment]";
  btnSearchDir = "input[value=Search]";
  txtSearchDirectory = "input[id=searchDirectory_emp_name_empName]";
  selectJobTitle = "select[id=searchDirectory_job_title]";
  selectLocation = "select[id=searchDirectory_location]";
  linkDirectory = "a[id=menu_directory_viewDirectory]";

  clickPimModuleLink() {
    cy.get(this.btnPIMModule).click();
  }
  clickAddEmpBtn() {
    cy.get(this.btnAddEmp).click({ force: true });
  }
  clickEmpSaveBtn() {
    cy.get(this.btnSave).click({ multiple: true });
  }
  clickChkLoginBtn() {
    cy.wait(2000);
    cy.get(this.chkBtnLogin).click();
  }
  typeEmpUserName(user_name) {
    cy.get(this.txtEmpUserName).clear();
    cy.get(this.txtEmpUserName).type(user_name);
  }
  typeEmpPassword(password) {
    cy.get(this.txtEmpPassword).clear();
    cy.get(this.txtEmpPassword).type(password);
  }
  typeEmpConfirmPassword(confirm_password) {
    cy.get(this.txtRePassword).clear();
    cy.get(this.txtRePassword).type(confirm_password);
  }
  typeEmpFirstName(firstname) {
    cy.get(this.txtFirstName).clear();
    cy.get(this.txtFirstName).type(firstname);
  }
  typeEmpLastName(lastname) {
    cy.get(this.txtLastName).clear();
    cy.get(this.txtLastName).type(lastname);
  }
  selectEmployeeFromTable(lastname) {
    cy.wait(2000);
    cy.get("table[id=resultTable]")
      .contains("td", lastname)
      .should("be.visible");
    cy.log("empname is present in table");
    cy.get("table[id=resultTable]>tbody > tr >td:nth-child(4)").each(
      ($ele, index, $list) => {
        const text = $ele.text();
        cy.log(text);
        if (text.includes(lastname)) {
          cy.log("empname is available");
          cy.get("table[id=resultTable]>tbody > tr >td:nth-child(4)")
            .contains(lastname)
            .click();
          cy.log("empname is clicked");
        }
      }
    );
  }
  clickAddEmpBtn() {
    cy.get(this.btnSave).click();
  }
  clickEditEmpBtn() {
    cy.get(this.btnEditEmp).click();
  }
  selectBloodTypeDropdown(bloodtype) {
    // cy.get(this.selectBloodType).click({force:true})
    cy.wait(2000);
    cy.get(this.selectBloodType).eq(0).select(bloodtype);
    cy.log("Blood Type Selected");
  }
  clickContactDetailsLink() {
    cy.get(this.btnContact).click({ force: true });
    //cy.contains('Contact Details').click
  }
  typeAlternateEmailName(otheremail) {
    cy.get(this.txtOtherEmail).clear();
    cy.get(this.txtOtherEmail).type(otheremail);
  }
  clickTimeModuleLink() {
    cy.get(this.btnTimeModule).click();
  }
  clickEmpViewLink() {
    cy.get(this.btnView).click();
  }
  clickAddTimeSheetBtn() {
    cy.get(this.btnAddTimeSheet).click();
  }
  typeSearchEmpName(empname) {
    cy.get(this.txtSearchEmp).clear();
    cy.get(this.txtSearchEmp).type(empname);
  }

  addTimeSheetInModalWindow(timedate) {
    cy.wait(3000);
    if (cy.get("div[id=createTimesheet]")) {
      cy.log("Time Modal dialog displayed");
      cy.get(this.txtTimeDate).clear();
      cy.get(this.txtTimeDate).type(timedate);
      cy.log("Time period entered");
      cy.log("click confirm btn");
      if (cy.get("div[id=createTimesheet]")) {
        cy.get("input[id=addTimesheetBtn]").click();
      }
    }
  }

  clickOkBtn() {
    cy.wait(1000);
    cy.log("click ok button");
    if (cy.get("div[id=createTimesheet]")) {
      cy.get("input[id=addTimesheetBtn]").click();
    }
  }
  verifyWarningMessage(warnmsg) {
    cy.wait(2000);
    cy.get(this.msgWarning).should("have.text", warnmsg);
    cy.log("Warning message verified");
  }

  clickSubmitBtn() {
    cy.get(this.btnSubmit).click();
  }
  enterTimeSheet(hours) {
    cy.get("input[id=initialRows_0_0]").click();
    for (var i = 0; i <= 4; i++) {
      cy.log(i);
      cy.log("fill 8 hours");
      //cy.get('#initialRows_0_ + i + "]').type(hours)
      cy.get("#initialRows_0_" + i).type(hours);
      cy.log("Hrs entered for : " + i + " field");
    }
  }
  selectActivityNameDropdown(activity) {
    cy.wait(2000);

    //array.push(Cypress.$($option).text())
    //console.log(array[index]);
    cy.get("select#initialRows_0_projectActivityName >option").type(
      "QA Testing{enter}"
    );
    //cy.get('select#initialRows_0_projectActivityName >option').select('            QA Testing    ', { force: true })
  }
  typeEmpProjectName(projectname) {
    cy.get(this.txtProjectName).clear();
    cy.get(this.txtProjectName).type(projectname);
  }
  clickModuleLink(moduleName) {
    // cy.get('#menu_time_'+linkName).click()
    cy.contains("Performance").trigger("mouseover");
    cy.contains("Employee Trackers").click({ force: true });
    //cy.wait(2000)
    //cy.get('//a[contains(text(),'+menuName+')]').click();
  }
  clickMenuLink(menuName) {
    //cy.get('#menu_time_'+linkName).click()
    cy.log(menuName);
    cy.wait(2000);
    cy.get(this.linkReport).click({ force: true });
  }
  clickEmpReportMenuLink(menuName) {
    //cy.get('#menu_time_'+linkName).click()
    cy.log(menuName);
    cy.wait(2000);
    cy.get(this.menuEmpReport).click({ force: true });
  }
  clickReportCheckBox() {
    cy.get(this.chkApproveTimeSheets).click();
  }
  typeSearchReportEmpName(empname) {
    cy.get(this.txtSearchRepEmp).clear();
    cy.get(this.txtSearchRepEmp).type(empname);
    cy.get(".ac_even").click();
  }
  typeFromDateReport(empname) {
    cy.get(this.txtFromDate).clear();
    cy.get(this.txtFromDate).type(empname);
  }
  typeToDateReport(empname) {
    cy.get(this.txtToDate).clear();
    cy.get(this.txtToDate).type(empname);
  }
  verifyEmployeeName(empname) {
    cy.wait(2000);
    cy.log(empname);
    //cy.get(this.txtEmpReportName).contains(empname)
    cy.get("dd").contains(empname);
  }
  clickAddBtn() {
    cy.wait(2000);
    cy.log("click add btn");
    cy.get("#btnAdd").click({ force: true });
    cy.log("add btn clicked");
  }
  selectEmployeeFromTrackerTable(empName) {
    cy.get("table[id=resultTable]")
      .contains("td", empName)
      .should("be.visible");

    var i = 1;
    cy.get(
      "div.box:nth-child(1) div.inner table.table.hover tbody:nth-child(2) tr.odd:nth-child(1) td.left:nth-child(1) > a:nth-child(" +
        i +
        ")"
    ).each(($ele, $list, index) => {
      cy.log("index: " + index);
      const empText = $ele.text();
      cy.log(empText);
      if (empText.includes(empName)) {
        cy.log("index value: " + i);
        cy.get(
          "div.box:nth-child(1) div.inner table.table.hover tbody:nth-child(2) tr.odd:nth-child(1) td.left:nth-child(1) > a:nth-child(" +
            i +
            ")"
        ).click();
      }
    });
  }
  enterPerformanceLogReport(loginfo, achievement, logcomments) {
    cy.get(this.txtLogInfo).type(loginfo);
    cy.get(this.selectAchievement).eq(0).select(achievement);
    cy.get(this.txtLogComments).type(logcomments);
  }

  verifyAddedDateInTable(addeddate) {
    cy.wait(2000);
    cy.log(empname);
    //cy.get(this.txtEmpReportName).contains(empname)
    cy.get(
      "div.box:nth-child(3) div.inner div:nth-child(5) table.table.hover tbody:nth-child(2) tr.odd > td.left:nth-child(5)"
    ).contains(addeddate);
  }
  searchEmployeeDirectory(empname) {
    cy.get(this.txtSearchDirectory).type(empname);
    cy.get(this.btnSearchDir).click();
  }

  selectJobTitleDropdown(jobtitle) {
    // cy.get(this.selectBloodType).click({force:true})
    cy.wait(2000);
    cy.get(this.selectJobTitle).eq(0).select(jobtitle);
    cy.log("job title Selected");
  }

  selectLocationDropdown(location) {
    // cy.get(this.selectBloodType).click({force:true})
    cy.wait(2000);
    cy.get(this.selectLocation).eq(0).select(location);
    cy.log("job title Selected");
  }
  clickDirectoryModuleLink() {
    cy.get(this.linkDirectory).click({ force: true });
    cy.log("link clicked");
  }

  verifyEmployeeInfoInDirectory(empname,empinfo, jobtitle, location, domain, email) {
    cy.wait(2000);
    
    cy.get("#resultTable").then(($text) => {
      const emptxt = $text.text();
      cy.log("Emp Info:" + emptxt);

      let i = 1;
      cy.get("div.box:nth-child(2) div.inner table.table.hover:nth-child(2) tbody:nth-child(1) tr.odd:nth-child(2) td:nth-child(2) ul:nth-child(1) > li:nth-child(" + i +")").each(($elm) => {
        cy.log("###############  Verify Emp information   ##############");
        for (var i = 1; i <= 5; i++) {
          cy.log(i);
          cy.log("verify each row text");

          cy.get("table[id=resultTable] > tbody > tr.odd > td > ul > li:nth-child(" + i + ")").then(($ele) => {
            const acttext = $ele.text();
            cy.log("Actual Text:" + acttext);

            if (emptxt.includes(acttext)) {
              cy.log("Info Matched for:" + acttext);
            } 
            
            else {
              cy.log("Info not Matched for:" + acttext);
            }
          });
          
        }
    
      });
    });
  }
}
