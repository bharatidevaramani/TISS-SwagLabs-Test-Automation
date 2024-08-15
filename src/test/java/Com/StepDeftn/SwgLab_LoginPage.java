package Com.StepDeftn;
import Com.Browser.Hook;
import Com.Pages.SwagLabs_LoginPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SwgLab_LoginPage {
    @Given("^am on the SwagLab home page$")
    public void am_on_the_SwagLab_home_page() throws Throwable {
        Hook.setup().get("https://www.saucedemo.com/v1/");
    }

    @When("^I enter SwagUsername$")
    public void i_enter_username() throws Throwable {
        SwagLabs_LoginPage.enterUserName();
    }

   /* @When("^I enter \"([^\"]*)\"$")
    public void i_enter(String arg1, DataTable arg2) throws Throwable {
        SwagLabs_LoginPage.enterUserName(arg1);
    } */

    @Then("^I enter SwagPassword$")
    public void i_enter_password() throws Throwable {
        SwagLabs_LoginPage.enterPassword();
    }

    @And("^I click the Login button$")
    public void i_click_the_Login_button() throws Throwable {
        SwagLabs_LoginPage.ClkLoginBtn();
    }

    @And("^I verify the HomePage$")
    public void i_verify_the_HomePage() throws Throwable {
        SwagLabs_LoginPage.assertSwagLabHomePage();
    }



    @Then("^I close the SwagApp$")
    public void i_close_the_application() throws Throwable {
        Hook.teardown();
    }

}
