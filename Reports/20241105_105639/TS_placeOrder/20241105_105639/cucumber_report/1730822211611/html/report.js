$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/JuanG/Desktop/bdd_pom-web_ui-katalon/Include/features/auth/SuccessfulLogin.feature");
formatter.feature({
  "name": "Successful signup with valid information",
  "description": "  I want to registration a new user in the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successful login with valid information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter my login credentials for login \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I submit the login form",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the \u003cusername\u003e into the Home Page.",
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
  "name": "Successful login with valid information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Valid"
    }
  ]
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "SuccessfulLoginSteps.joinToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my login credentials for login fx33d33d34 and df3434344",
  "keyword": "When "
});
formatter.match({
  "location": "SuccessfulLoginSteps.fillUserAndPasswordFieldLogin(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the login form",
  "keyword": "And "
});
formatter.match({
  "location": "SuccessfulLoginSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the fx33d33d34 into the Home Page.",
  "keyword": "Then "
});
formatter.match({
  "location": "SuccessfulLoginSteps.validateWelcomeUsernameMessage(String)"
});
formatter.result({
  "status": "passed"
});
});