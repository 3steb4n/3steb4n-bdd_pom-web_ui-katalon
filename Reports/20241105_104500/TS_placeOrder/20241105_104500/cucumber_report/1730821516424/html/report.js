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
        "fx33d3434",
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter my login credentials for login fx33d3434 and df3434344",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: \"I enter my login credentials for login fx33d3434 and df3434344\" matches more than one step definition:\n  \"I enter my (.+) and (.+)\" in SuccessfulSignupSteps.fillUserAndPasswordField(String,String)\n  \"I enter my login credentials for login (.+) and (.+)\" in SuccessfulLoginSteps.fillUserAndPasswordFieldLogin(String,String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:89)\r\n\tat cucumber.runner.Runner.addTestStepsForPickleSteps(Runner.java:73)\r\n\tat cucumber.runner.Runner.createTestCaseForPickle(Runner.java:63)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:43)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:110)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:274)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.Closure.call(Closure.java:412)\r\n\tat groovy.lang.Closure.call(Closure.java:406)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:77)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:256)\r\n\tat org.codehaus.groovy.vmplugin.v8.IndyInterface.fromCache(IndyInterface.java:318)\r\n\tat Script1730817536341.run(Script1730817536341.groovy:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:150)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:180)\r\n\tat org.codehaus.groovy.vmplugin.v8.IndyInterface.fromCache(IndyInterface.java:318)\r\n\tat TempTestSuite1730821500711.run(TempTestSuite1730821500711.groovy:35)\r\n\tat groovy.lang.GroovyShell.runScriptOrMainOrTestOrRunnable(GroovyShell.java:254)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:360)\r\n\tat groovy.lang.GroovyShell.run(GroovyShell.java:349)\r\n\tat groovy.ui.GroovyMain.processOnce(GroovyMain.java:652)\r\n\tat groovy.ui.GroovyMain.run(GroovyMain.java:398)\r\n\tat groovy.ui.GroovyMain.access$1400(GroovyMain.java:68)\r\n\tat groovy.ui.GroovyMain$GroovyCommand.process(GroovyMain.java:322)\r\n\tat groovy.ui.GroovyMain.processArgs(GroovyMain.java:142)\r\n\tat groovy.ui.GroovyMain.main(GroovyMain.java:115)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.rootLoader(GroovyStarter.java:117)\r\n\tat org.codehaus.groovy.tools.GroovyStarter.main(GroovyStarter.java:39)\r\n",
  "status": "ambiguous"
});
formatter.step({
  "name": "I submit the login form",
  "keyword": "And "
});
formatter.match({
  "location": "SuccessfulLoginSteps.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the fx33d3434 into the Home Page.",
  "keyword": "Then "
});
formatter.match({
  "location": "SuccessfulLoginSteps.validateWelcomeUsernameMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});