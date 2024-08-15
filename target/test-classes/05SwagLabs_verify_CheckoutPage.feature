Feature:05 SwagLabs verify the checkout page

  Scenario:05_SwagLabs verify the checkout page
    Given I land on SwagLab home page
    When I am submitting Username
    Then I am submitting Password
    And I submit click to Login button
    And I check the swag lab HomePage
    And I navigate to add Cart Button
    And I navigate to CheckOutCartButton
    And I navigating to CheckOutButton
    And I add FirstName to the field
    And I add LastName to the field
    And I add PostCode to the field
    And I navigating to continue button
    And I have verified the checkout information
    Then I logoff and close the SwagApp