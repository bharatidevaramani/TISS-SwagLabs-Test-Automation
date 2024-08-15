package Com.StepDeftn;

import Com.Browser.Hook;
import Com.Pages.SwagLabAddOneProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SwagLab_AddOneProduct {
    @Given("^Iam on the SwagLab home page$")
    public void am_on_the_SwagLab_home_page() throws Throwable {
        Hook.setup().get("https://www.saucedemo.com/v1/");
    }
    @When("^I am entering SwagUsername$")
    public void i_enter_username() throws Throwable {
        SwagLabAddOneProductPage.enterUserName();
    }

    @Then("^I am entering SwagPassword$")
    public void i_enter_password() throws Throwable {
        SwagLabAddOneProductPage.enterPassword();
    }

    @And("^I clicked on Login button$")
    public void i_click_the_Login_button() throws Throwable {
        SwagLabAddOneProductPage.ClkLoginBtn();
    }

    @And("^I have assert the HomePage$")
    public void i_verify_the_HomePage() throws Throwable {
        SwagLabAddOneProductPage.assertSwagLabHomePage();
    }

    @And("^I click to addCartButton$")
    public void i_click_addToCart() throws Throwable {
        SwagLabAddOneProductPage.ClkAddToCartButtonForOne();
    }

    @And("^I have to click CheckOutCartButton$")
    public void i_click_checkoutToCart() throws Throwable {
        SwagLabAddOneProductPage.ClickCheckOutCartButton();
    }

    @And("^I click to Button to checkout$")
    public void i_test_checkout_swagLab_app() throws Throwable {
        SwagLabAddOneProductPage.ClickCheckOutButton();
    }

    @When("^I enter FirstName$")
    public void i_enter_firstname() throws Throwable {
        SwagLabAddOneProductPage.enterFirstName();
    }

    @When("^I enter LastName$")
    public void i_enter_lastname() throws Throwable {
        SwagLabAddOneProductPage.enterLastName();
    }

    @When("^I enter PostCode$")
    public void i_enter_postcode() throws Throwable {
        SwagLabAddOneProductPage.enterPostCode();
    }

    @And("^I click continue button$")
    public void i_click_continue() throws Throwable {
        SwagLabAddOneProductPage.ClkContinueButton();
    }

    @And("^I click Finish button$")
    public void i_click_finish_button() throws Throwable {
        SwagLabAddOneProductPage.ClkFinishButton();
    }

    @And("^I verify order successful$")
    public void i_verify_order_success() throws Throwable {
        SwagLabAddOneProductPage.assertOrderSuccessful();
    }

    @Then("^I would close the SwagApp$")
    public void i_click_logout_swagLab_app() throws Throwable {
        Hook.teardown();
    }

}
