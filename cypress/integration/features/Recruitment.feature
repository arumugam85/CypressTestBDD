@e2e
Feature: Recruitment Process for the candidate

              I want to log into Orange HRM login page
        Background: Open HRM Application
            Given I open Orange HRM login page
             When I enter "admin" and "admin123" details
             
                  | username | password |
                  | admin    | admin123 |

        @e2e
        Scenario Outline: Add candidates for the job posting

             When Click Recruitment Module Link
              And Click Add Button
              And Add candidate "<firstname>", "<lastname>", "<email>", "<phoneno>", "<jobvacancy>", "<keywords>","<comments>", "<applydate>" details for the job posting
             When Upload Resume for the job posting
             Then Click Save Button
              And Verify status "Status: Application Initiated" after apply for a job


        Examples:
                  | firstname | lastname | email                 | phoneno    | jobvacancy           | keywords               | comments                  | applydate  |
                  | John      | Brown    | johnbrowne@gmail.com  | 7045604667 | Associate IT Manager | Java development       | Develop Java Applications | 2020-12-29 |
                  | Mike      | Dennis   | mike_dennis@gmail.com | 9805604578 | Senior QA Lead       | Automation development | Develop Automation Script | 2020-12-29 |

        @e2e
        Scenario Outline: Download Resume of the candidate

             When Click Recruitment Module Link
              And Search candidate "<candidate>" from the table
             # And Add candidate "<firstname>", "<lastname>", "<email>", "<phoneno>", "<jobvacancy>", "<keywords>","<comments>", "<applydate>" details for the job posting
             #When Download File for the job posting
            

        Examples:
                  | candidate  | lastname | email                | phoneno    | jobvacancy           | keywords         | comments                  | applydate  |
                  | John Brown | Brown    | johnbrowne@gmail.com | 7045604667 | Associate IT Manager | Java development | Develop Java Applications | 2020-12-29 |
                  #| Mike       | Dennis   | mike_dennis@gmail.com | 9805604578 | Senior QA Lead       | Automation development | Develop Automation Script | 2020-12-29 |
