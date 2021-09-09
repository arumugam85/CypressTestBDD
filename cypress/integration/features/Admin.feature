@e2e
Feature: Admin Role for the Application

              I want to log into Orange HRM login page
        Background: Open HRM Application
            Given I open Orange HRM login page
             When I enter "Admin" and "admin123" details

        @e2e
        Scenario Outline: Orange HRM Login

              And Validate the Page Title as "OrangeHRM"
             Then Validate welcome message as "Welcome Paul"

        Examples:
                  | username | password |
                  | admin    | admin123 |

        @e2e
        Scenario Outline: Add Admin role to users

             When I click admin link
              And I click Add Button to admin role
              And User selects UserRole "<userrole>"
              And User enters EmpName "<empname>"
              And User enters UserName "<username>"
              And User enters Password "<password>"
              And User enters confirm password "<confirmassword>"
             Then Click Save Button
              And Logout from the application

        Examples:
                  | userrole | empname       | username         | password    | confirmassword |
                  | Admin    | Anthony Nolan | anthonynolan1234 | anthony@123 | anthony@123    |
                  | ESS      | Dominic Chase | dominicchase1234 | dominic@123 | dominic@123    |

        @e2e
        Scenario Outline: Edit Admin users

             When I click admin link
              And Search Username "<username>" from the table
             When Click Search Button
              And Select the "<username>" from the user list
             Then Click Edit Button
              And Update the password "<password>" and "<confirmassword>" for the user
             Then Click Save Button

        Examples:
                  | username      | password      | confirmassword |
                  | Anthony.Nolan | anthony@12356 | anthony@12356  |

        @e2e
        Scenario Outline: Remove user from the list

             When I click admin link
              And Search Username "<username>" from the table
             When Click Search Button
              And Remove the "<username>" from the user list
             When Cick Delete button
              And Validate Modal window message "OrangeHRM - Confirmation Required" for Delete
             Then Click Confirm to delete button
             

        Examples:
                  | username   |
                  | John.Smith |

