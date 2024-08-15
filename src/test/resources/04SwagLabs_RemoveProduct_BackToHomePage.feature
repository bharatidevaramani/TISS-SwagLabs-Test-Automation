Feature:04 SwagLab: Remove product from cart and go back to HomePage

  Scenario:04_SwagLabs remove item from cart and back to Home page
    Given Iam on the SwagLab homepage
    When I enter SwagLabUsername
    Then I enter SwagLabPassword
    And I click on SwagLogin button
    And I verify SwagLab HomePage
    And I click addCartButton swagLab
    And I click swag CheckOutCartButton
    And I click remove Button
    And I click ContinueShopping Button
    And I check shopping page for SwagLab
    And I have click close the SwagApp