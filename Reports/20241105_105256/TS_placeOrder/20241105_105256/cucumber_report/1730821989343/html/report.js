$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/JuanG/Desktop/bdd_pom-web_ui-katalon/Include/features/auth/SuccessfulSignup.feature");
formatter.feature({
  "name": "Successful signup with valid information",
  "description": "  I want to registration a new user in the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Signup"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successful signup with valid information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "I am on the signup page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter my signup credentials \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I submit the signup form",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the follow message: Sign up successful.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "fx33d33d34",
        "df3434344"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful signup with valid information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Signup"
    },
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "I am on the signup page",
  "keyword": "Given "
});
formatter.match({
  "location": "SuccessfulSignupSteps.joinToSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my signup credentials fx33d33d34 and df3434344",
  "keyword": "When "
});
formatter.match({
  "location": "SuccessfulSignupSteps.fillUserAndPasswordField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the signup form",
  "keyword": "And "
});
formatter.match({
  "location": "SuccessfulSignupSteps.clickSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the follow message: Sign up successful.",
  "keyword": "Then "
});
formatter.match({
  "location": "SuccessfulSignupSteps.validateAlertMessage(String)"
});
formatter.result({
  "status": "passed"
});
});