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
        "fx33d3434",
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
  "name": "I enter my signup credentials fx33d3434 and df3434344",
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Actual object \u0027Sign up successful.\u0027 and expected object \u0027This user already exist.\u0027 are not equal\r\n\tat com.kms.katalon.core.keyword.builtin.VerifyEqualKeyword$_verifyEqual_closure1.doCall(VerifyEqualKeyword.groovy:58)\r\n\tat com.kms.katalon.core.keyword.builtin.VerifyEqualKeyword$_verifyEqual_closure1.call(VerifyEqualKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.VerifyEqualKeyword.verifyEqual(VerifyEqualKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.VerifyEqualKeyword.execute(VerifyEqualKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.verifyEqual(BuiltinKeywords.groovy:146)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat steps.SuccessfulSignupSteps.validateAlertMessage(SuccessfulSignupSteps.groovy:71)\r\n\tat ✽.I should see the follow message: Sign up successful.(C:/Users/JuanG/Desktop/bdd_pom-web_ui-katalon/Include/features/auth/SuccessfulSignup.feature:28)\r\n",
  "status": "failed"
});
});