@login
Feature: Login to Orange HRM Application

              I want to log into Orange HRM login page
        Background: Open HRM Application
            Given I open Orange HRM login page
             When I enter "admin" and "admin124" details
             
      #   Examples:
      #             | username | password |
      #             | admin    | admin123 |

        @login
        Scenario: Orange HRM Login

              And Validate the Page Title as "OrangeHRM"
             Then Validate welcome message as "Welcome Paul"
