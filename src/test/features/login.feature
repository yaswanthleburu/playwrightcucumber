Feature: User authentication tests
  
  Background:
    Given User navigates to the application

  Scenario: Login should be success
    Then User enter the username as "Admin"
    Then User enter the password as "admin123"
    When User click on the login button
    Then Login should be success
    
  Scenario: Login should not be success  
    Then User enter the username as "yaswanth"
    Then User enter the password as "yas1234"
    When User click on the login button
    Then Login should fail