Feature: To Create New Quote

@CucumberScenario
Scenario: User Create New Quote
Given I Am On Duck Creek Login Page
When I Enter Username "jThir"
And I Enter Password "zoo9999!"
And I Click On Login Button
And I Click On New Quote Link
And I Select PartyType "Person"
And I Select SearchType "Name and Address"
And I Enter First Name "Susovan"
And I Enter Last Name "Dutta"
And I Select Location State "CT"
And I Click On Run Clearance Button
And I Click On New Quote Button

@CucumberScenarioOutline
Scenario Outline: User Create New Quote
Given I Am On Duck Creek Login Page
When I Enter Username "jThir"
And I Enter Password "zoo9999!"
And I Click On Login Button
And I Click On New Quote Link
And I Select PartyType "Person"
And I Select SearchType "Name and Address"
And I Enter First Name "<First Name>"
And I Enter Last Name "<Last Name>"
And I Select Location State "<State>"
And I Click On Run Clearance Button
And I Click On New Quote Button
And I Click On Logout Link

Examples:
| First Name | Last Name | State    |
| Susovan    | Dutta     | CT       |
| Milon      | Panda     | AR       |