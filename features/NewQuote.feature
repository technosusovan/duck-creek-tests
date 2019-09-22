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