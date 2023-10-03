Feature: User authentication tests
  
  Background:
    Given User navigates to the application

  Scenario: Login should be success
    And User enter the username as "userName"
    And User enter the password as "password"
    When User click on the login button
    Then Login should be success
    
  Scenario: Login should not be success  
    Given User enter the username as "userName1"
    Given User enter the password as "password1"
    When User click on the login button
    But Login should fail

 