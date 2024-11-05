package pages

import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.exception.StepFailedException
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.testobject.TestObject

import internal.GlobalVariable

public class HomePage {
	private static final TestObject HREF_LOGIN = findTestObject('Object Repository/Home_Page/ahrefLogin');
	private static final TestObject HREF_SIGNUP = findTestObject('Object Repository/Home_Page/ahrefSignup');
	private static final TestObject TITLE_USERNAME = findTestObject('Object Repository/Home_Page/titleUsername');

	public static void clickHrefLogin() {
		WebUI.waitForElementVisible(HREF_LOGIN, 5)
		WebUI.click(HREF_LOGIN);
	}

	public static void clickHrefSignup() {
		WebUI.click(HREF_SIGNUP);
	}

	public static String getTitleUsername() {
		try {
			//Wait to if the 'Welcome username' element
			WebUI.waitForElementVisible(TITLE_USERNAME, 5);
			return WebUI.getText(TITLE_USERNAME);
		} catch (StepFailedException e) {
			System.out.println("Error to get the username: " + e.getMessage());
			return "";
		}
	}
}
