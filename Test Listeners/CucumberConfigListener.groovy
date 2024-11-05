import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.annotation.BeforeTestSuite
import com.kms.katalon.core.context.TestSuiteContext
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW

class CucumberConfigListener {
	/**
	 * Executes before every test suite starts.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@BeforeTestSuite
	void sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {
		CucumberKW.GLUE = ['steps']
	}
}