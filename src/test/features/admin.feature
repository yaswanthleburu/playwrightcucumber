Feature: admin tests
  
    Background:
        Given User navigates to the application
    
    Scenario Outline: create User management
        Then User enter the username as "<username>"
        Then User enter the password as "<password>"
        Given User search for a "<Admin>"
        When User click on the admin
        When User click on the add
        Then User click on the userRole dropdown
        Then User click on the admin
        Then User enter the Employee Name as "<Virat Kohli>"
        When User click on the status dropdown
        Then User click on the Enabled
        Then User enter the userName as "<Vikii>"
        Then User enter the password as "<Vikii@1234>"
        Then User enter the conform password as "<Vikii@1234>"
        When User click on the save
        Then User adding should be success
       

    Examples:
        | username | password      |
        | Admin    | admin123      | 