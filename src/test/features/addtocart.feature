Feature: Products tests
  
    Background:
        Given User navigates to the application
        And User click on the login link

   
    Scenario Outline: Add to cart
        And User enter the username as "<username>"
        And User enter the password as "<password>"
        And User search for a "<book>"
        When User click on the login button
        And User add the book to the cart
        Then the cart badge should get updated

    Examples:
        | username | password  | book            |
        | ortoni   | Pass1234$ | Roomies         |
        | ortonikc | Pass1234  | The Simple Wild |
  