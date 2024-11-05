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
  "name": "I enter my \u003cusername\u003e and \u003cpassword\u003e",
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
        "fdfd343434",
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/Home_Page/ahrefSignup\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:117)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:43)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:659)\r\n\tat pages.HomePage.clickHrefSignup(HomePage.groovy:20)\r\n\tat steps.SuccessfulSignupSteps.joinToSignupPage(SuccessfulSignupSteps.groovy:55)\r\n\tat ✽.I am on the signup page(C:/Users/JuanG/Desktop/bdd_pom-web_ui-katalon/Include/features/auth/SuccessfulSignup.feature:25)\r\nCaused by: org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"nav-link\" href\u003d\"#\" id\u003d\"signin2\" data-toggle\u003d\"modal\" data-target\u003d\"#signInModal\" style\u003d\"display: block;\"\u003e...\u003c/a\u003e is not clickable at point (1352, 37). Other element would receive the click: \u003cdiv class\u003d\"modal fade show\" id\u003d\"signInModal\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"signInModalLabel\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d130.0.6723.92)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-U369KU2\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.7\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 130.0.6723.92, chrome: {chromedriverVersion: 130.0.6723.69 (3ec172b971b9..., userDataDir: C:\\Users\\JuanG\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57484}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 64cf851e1014aed2d13795ffb96764a0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy30.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:417)\r\n\tat org.openqa.selenium.WebElement$click.call(Unknown Source)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.clickUntilSuccessWithTimeout(ClickKeyword.groovy:81)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.clickUntilSuccessWithTimeout(ClickKeyword.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:67)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:35)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:40)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:659)\r\n\tat pages.HomePage.clickHrefSignup(HomePage.groovy:20)\r\n\tat steps.SuccessfulSignupSteps.joinToSignupPage(SuccessfulSignupSteps.groovy:55)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:72)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:54)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy:110)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFile_closure1.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:77)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFile.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFile(CucumberBuiltinKeywords.groovy:256)\r\n\tat TC_doSignup_success.run(TC_doSignup_success:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\r\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:150)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:180)\r\n\tat TempTestSuite1730819341362.run(TempTestSuite1730819341362.groovy:35)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter my fdfd343434 and df3434344",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I submit the signup form",
  "keyword": "And "
});
formatter.match({
  "location": "SuccessfulSignupSteps.clickSignupButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the follow message: Sign up successful.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});