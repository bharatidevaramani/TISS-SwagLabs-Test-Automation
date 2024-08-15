Feature:02 SwagLab add One product to cart and complete Order

  Scenario:02_SwagLabs Add one product
    Given Iam on the SwagLab home page
    When I am entering SwagUsername
    Then I am entering SwagPassword
    And I clicked on Login button
    And I have assert the HomePage
    And I click to addCartButton
    And I have to click CheckOutCartButton
    And I click to Button to checkout
    And I enter FirstName
    And I enter LastName
    And I enter PostCode
    And I click continue button
    And I click Finish button
    And I verify order successful
    Then I would close the SwagApp