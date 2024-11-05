#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Signup
Feature: Successful signup with valid information
  I want to registration a new user in the application

  @Valid
  Scenario Outline: Successful signup with valid information
    Given I am on the signup page
    When I enter my signup credentials <username> and <password>
    And I submit the signup form
    Then I should see the follow message: Sign up successful.

    Examples: 
      | username | password |
      | fx33d32233d34 | Crv/MF9EVue8eOTWEAjflA== |