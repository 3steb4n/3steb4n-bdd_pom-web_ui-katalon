package pages

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.exception.StepFailedException
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class SignupPage {
	private static final TestObject INPUT_USERNAME = findTestObject('Signup_Page/inputUsername');
	private static final TestObject INPUT_PASSWORD = findTestObject('Signup_Page/inputPassword');
	private static final TestObject BUTTON_SIGNUP = findTestObject('Signup_Page/buttonSignup');

	public static void inputUsername(String username) {
		WebUI.sendKeys(INPUT_USERNAME, username);
	}

	public static void inputPassword(String password) {
		WebUI.setEncryptedText(INPUT_PASSWORD, password);
	}

	public static void clickSignupButton() {
		WebUI.click(BUTTON_SIGNUP);
	}

	public static String getAlertMessage() {
		try {
			//Wait to if the alert message return
			WebUI.verifyAlertPresent(5);
			return WebUI.getAlertText();
		} catch (StepFailedException e) {
			System.out.println("Error to get the alert message: " + e.getMessage());
			return "";
		}
	}
}
