Feature:03 SwagLab add multiple product to cart and complete Order

  Scenario:03_SwagLabs Add multiple product
    Given I access SwagLab home page
    When I entered SwagUsername
    Then I entered SwagPassword
    And I press Login button
    And I asserted the HomePage
    And I clicked to addToCartButton
    And I clicked to addToCart SecondItem
    And I clicked to CheckOutCartButton
    And I clicked to CheckOutButton
    And I entered FirstName
    And I entered LastName
    And I entered PostCode
    And I clicked continue button
    And I clicked Finish button
    And I verified order successful
    Then I had close the SwagApp