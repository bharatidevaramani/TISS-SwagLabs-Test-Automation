Feature:01 SwagLab application Login functionality

  Scenario:01_SwagLab application Login
    Given am on the SwagLab home page
    #When I enter "<SwagUsername>"
    #|SwagUsername|
    #|standard_user|
    #|locked_out_user|
    #|problem_user|
    #|performance_glitch_user|
    When I enter SwagUsername
    Then I enter SwagPassword
    And I click the Login button
    And I verify the HomePage
    Then I close the SwagApp

    #Examples:
    #|SwagUsername|            |SwagPassword|
    #|standard_user|           |secret_sauce|           |
    #|locked_out_user|         |secret_sauce|
    #|problem_user|            |secret_sauce|
    #|performance_glitch_user| |secret_sauce|