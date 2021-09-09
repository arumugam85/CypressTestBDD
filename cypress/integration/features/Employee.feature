@e2e
Feature: Add Employee Details to Orange HRM Application

              I want to log into Orange HRM login page
        Background: Open HRM Application
            Given I open Orange HRM login page
             When I enter "admin" and "admin123" details

        @e2e
        Scenario Outline: Update Employee details to the page
              And Click Pim Module Link
              And Select employee "<lastname>" from the table
             When Click Edit Button for the employee
             Then Update Blood "<bloodtype>" for the employee
              And Click Save Button
        Examples:
                  | firstname | lastname | bloodtype |
                  | Dominic   | Chase    | B+        |

        @e2e
        Scenario Outline: Update Contact details to the page
              And Click Pim Module Link
              And Select employee "<lastname>" from the table
             When Click Contact Details
             When Click Edit Button
              And Update Alternate Email "<otheremail>" for the employee
              And Click Save Button
        Examples:
                  | firstname | lastname | otheremail         |
                  | Dominic   | Chase    | dominicc@gmail.com |

        @e2e
        Scenario Outline: Add Timesheet to the employee
              And Click Time Module Link
              And Search employee name "<empname>"
             When Click View link
             When Click Add Timesheet Button for the employee
             Then Select time period "2020-12-24" for the timesheet
              And verify message "Timesheet Already ExistsClose" in timesheet page
             When Click Add Timesheet Button for the employee
             Then Select time period "2021-01-05" for the timesheet
              And verify message "Failed to Create: Future Timesheets Not AllowedClose" in timesheet page
             Then Click Edit Button
              And  Select project "<projectname>" and activity name "    Project Management    " for the timesheet
              And Enter working hours "<hours>" for the week
             When Click Save Button
             Then Click Submit Button
        Examples:
                  | empname         | timedate   | hours | projectname                                    | activity   |
                  | Russel Hamilton | 2020-12-24 | 8.00  | Global Corp and Co - Global Software phase - 1 | QA Testing |


        @e2e
        Scenario Outline: Employee Report for Timesheet
              And Click Time Module Link
              And Click "Reports" menu Link
             Then Select "Employee Reports" menu for the timesheet
              And Search employee name "<empname>" for report
       # And  Select Project "<projectname>" for report
       # And Select Activity name "Project Management" for report
             Then Select FromDate "2020-12-24" for the timesheet
             Then Select ToDate "2020-12-24" for the timesheet
             When Click "Only Include Approved Timesheets" checkbox for the employee
             When Click View link
             Then Verify employee name "<empname>" for the report details
        Examples:
                  | empname       | fromdate   | todate     | projectname                                    | activity   |
                  | Paul Collings | 2020-12-01 | 2020-12-25 | Global Corp and Co - Global Software phase - 1 | QA Testing |


        @e2e
        Scenario Outline: Employee Trackers for Timesheet
              And Click "Performance" Module Link
              And Click "Employee Trackers" menu Link
              And Select employee "<empname>" from the trackers table
             When Click Add Button
              And Enter Performance Tracker Log Details in the tracker page
        #And  Select Achievement "<achievement>" for report
        #And Enter Comments "Project Management" in the tracker page
             Then Click Save Button
             Then Verify Added Date "<addeddate>" for the tracker

        Examples:
                  | empname     | loginfo      | achievement | logcomments               | addeddate  |
                  | Fiona Grace | Deliverables | Positive    | Delivered project on time | 2020-12-28 |

        @e2e
        Scenario Outline: Search Employee Details from the Directory

              And Click Directory Module Link
              And Search "<empname>" in the directory page
             When Click Search Button
              And  Select Job Title "<jobtitle>" from the dropdown
              And  Select Location "<location>" from the dropdown
             Then Verify "<empinfo>" is displayed in the directory page

        Examples:
                  | empname        | jobtitle    | location              | domain            | email               | empinfo                                                                                |
                  | Charlie Carter | QA Engineer | New York Sales Office | Quality Assurance | charlie1@osohrm.com | Charlie Carter QA Engineer New York Sales Office Quality Assurance charlie1@osohrm.com |
