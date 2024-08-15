package Com.StepDeftn;

import Com.Browser.Hook;
import Com.Pages.SwagLabAddOneProductPage;
import Com.Pages.SwagLabsAddMultipleProduct;
import Com.Pages.SwagLabs_Verify_CheckoutOneStepPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SwagLabs_Verify_CheckoutPage {

        @Given("^I land on SwagLab home page$")
        public void i_land_on_the_SwagLab_home_page() throws Throwable {
            Hook.setup().get("https://www.saucedemo.com/v1/");
        }
        @When("^I am submitting Username$")
        public void i_submit_username() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.enterUserName();
        }

        @Then("^I am submitting Password$")
        public void i_submit_password() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.enterPassword();
        }

        @And("^I submit click to Login button$")
        public void i_submit_click_the_Login_button() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.ClkLoginBtn();
        }

        @And("^I check the swag lab HomePage$")
        public void i_verify_the_HomePage() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.assertSwagLabHomePage();
        }

        @And("^I navigate to add Cart Button$")
        public void i_navigate_to_addToCart() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.ClkAddToCartButtonForOne();
        }

        @And("^I navigate to CheckOutCartButton$")
        public void i_navigate_checkoutToCart() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.ClickCheckOutCartButton();

        }

        @And("^I navigating to CheckOutButton$")
        public void i_navigating_check_out_button() throws Throwable {
        SwagLabs_Verify_CheckoutOneStepPage.ClickCheckOutButton();
        }

        @When("^I add FirstName to the field$")
        public void i_add_firstname() throws Throwable {
        SwagLabs_Verify_CheckoutOneStepPage.enterFirstName();
        }

        @When("^I add LastName to the field$")
        public void i_add_lastname() throws Throwable {
        SwagLabs_Verify_CheckoutOneStepPage.enterLastName();
        }

        @When("^I add PostCode to the field$")
        public void i_add_postcode() throws Throwable {
        SwagLabs_Verify_CheckoutOneStepPage.enterPostCode();
        }

        @And("^I navigating to continue button$")
        public void i_navigating_to_continue() throws Throwable {
        SwagLabs_Verify_CheckoutOneStepPage.ClkContinueButton();
        }

        @And("^I have verified the checkout information$")
        public void i_have_verified_the_checkout_info() throws Throwable {
            SwagLabs_Verify_CheckoutOneStepPage.assertOrderSuccessful();
        }

        @Then("^I logoff and close the SwagApp$")
        public void i_logoff_swagLab_app() throws Throwable {
            Hook.teardown();
        }
    }


