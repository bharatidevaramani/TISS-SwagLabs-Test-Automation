package Com.StepDeftn;
import Com.Browser.Hook;
import Com.Pages.SwagLabAddOneProductPage;
import Com.Pages.SwagLabsAddMultipleProduct;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SwagLabAddMultipleProduct {

        @Given("^I access SwagLab home page$")
        public void i_am_on_the_SwagLab_home_page() throws Throwable {
            Hook.setup().get("https://www.saucedemo.com/v1/");
        }
        @When("^I entered SwagUsername$")
        public void i_entered_username() throws Throwable {
            SwagLabsAddMultipleProduct.enterUserName();
        }

        @Then("^I entered SwagPassword$")
        public void i_entered_password() throws Throwable {
            SwagLabsAddMultipleProduct.enterPassword();
        }

        @And("^I press Login button$")
        public void i_press_the_Login_button() throws Throwable {
            SwagLabsAddMultipleProduct.ClkLoginBtn();
        }

        @And("^I asserted the HomePage$")
        public void i_asserted_the_HomePage() throws Throwable {
            SwagLabsAddMultipleProduct.assertSwagLabHomePage();
        }

        @And("^I clicked to addToCartButton$")
        public void i_submit_addToCart() throws Throwable {
            SwagLabsAddMultipleProduct.ClkAddToCartButtonForOne();
        }
        @And("^I clicked to addToCart SecondItem$")
        public void i_clicked_addToCart_secondOne() throws Throwable {
            SwagLabsAddMultipleProduct.ClkAddToCartButtonForSecond();
        }
        @And("^I clicked to CheckOutCartButton$")
        public void i_clicked_checkoutToCart() throws Throwable {
            SwagLabsAddMultipleProduct.ClickCheckOutCartButton();
        }

        @And("^I clicked to CheckOutButton$")
        public void i_clicked_check_out_button() throws Throwable {
            SwagLabsAddMultipleProduct.ClickCheckOutButton();
        }

        @When("^I entered FirstName$")
        public void i_entered_firstname() throws Throwable {
            SwagLabsAddMultipleProduct.enterFirstName();
        }

        @When("^I entered LastName$")
        public void i_entered_lastname() throws Throwable {
            SwagLabsAddMultipleProduct.enterLastName();
        }

        @When("^I entered PostCode$")
        public void i_entered_postcode() throws Throwable {
            SwagLabsAddMultipleProduct.enterPostCode();
        }

        @And("^I clicked continue button$")
        public void i_clicked_continue() throws Throwable {
            SwagLabsAddMultipleProduct.ClkContinueButton();
        }

        @And("^I clicked Finish button$")
        public void i_clicked_finish_button() throws Throwable {
            SwagLabsAddMultipleProduct.ClkFinishButton();
        }

        @And("^I verified order successful$")
        public void i_verified_order_success() throws Throwable {
            SwagLabsAddMultipleProduct.assertOrderSuccessful();
        }

        @Then("^I had close the SwagApp$")
        public void i_closed_application() throws Throwable {
            Hook.teardown();
        }

    }
