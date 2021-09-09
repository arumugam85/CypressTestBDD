
@e2e
Feature: Apply Leave for the Employee

              I want to log into Orange HRM login page
        Background: Open HRM Application
            Given I open Orange HRM login page
             When I enter "admin" and "admin123" details
             
                  | username | password |
                  | admin    | admin123 |

        @e2e
        Scenario Outline: Apply Leave for the employee
              And Click Leave Module Link
             When Click Apply Leave link
              And Select "<leavetype>" from the dropdown
             When I enter "<fromdate>" and "<todate>" for leave
             Then Click Apply Button
              And Verify the No of hours "<leavehrs>" for Leave and Date "<fromdate>"
        Examples:
                  | leavetype     | fromdate   | todate     | leavehrs |
                  | US - Personal | 2020-12-24 | 2020-12-24 | 8.00     |

      #   @e2e
      #   Scenario Outline: Add Timesheet to the employee
      #         And Click Time Module Link
      #         And Search employee "<empname>" from the table
      #        When Click View link
      #        When Click Add Timesheet Button for the employee
      #        Then Fill timesheet "<timedate>" for the employee
      #         And verify message "Timesheet Already Exists" in page
      #        Then Select time period "<timedate>" for the timesheet
      #         And verify message "Failed to Create: Future Timesheets Not Allowed" in page
      #        Then Click Edit Button for the Timesheet
      #         And Enter timesheet for the employee
      #        When  Click Save Button
      #        Then Click Submit Button


      #   Examples:
      #             | firstname | lastname | bloodtype |
      #             | Dominic   | Chase    | B+        |