@e2e
Feature: Login to Orange HRM Application

              I want to log into Orange HRM login page
        Background: Open HRM Application
            Given I open Orange HRM login page
             When I enter "Admin" and "admin123" details

        @e2e
        Scenario: Orange HRM Login

              And Validate the Page Title as "OrangeHRM"
             Then Validate welcome message as "Welcome Paul"
