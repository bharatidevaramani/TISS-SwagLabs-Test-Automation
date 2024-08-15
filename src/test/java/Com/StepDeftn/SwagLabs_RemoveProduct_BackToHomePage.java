package Com.StepDeftn;

import Com.Browser.Hook;
import Com.Pages.SwagLabAddOneProductPage;
import Com.Pages.SwagLabs_RemoveProduct_BackTo_HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SwagLabs_RemoveProduct_BackToHomePage {

        @Given("^Iam on the SwagLab homepage$")
        public void am_on_the_SwagLab_homepage() throws Throwable {
            Hook.setup().get("https://www.saucedemo.com/v1/");
        }
        @When("^I enter SwagLabUsername$")
        public void i_enter_swag_username() throws Throwable {
            SwagLabs_RemoveProduct_BackTo_HomePage.enterUserName();
        }
        @Then("^I enter SwagLabPassword$")
        public void i_enter_swag_password() throws Throwable {
            SwagLabs_RemoveProduct_BackTo_HomePage.enterPassword();
        }
        @And("^I click on SwagLogin button$")
        public void i_click_on_swagLogin_button() throws Throwable {
            SwagLabs_RemoveProduct_BackTo_HomePage.ClkLoginBtn();
        }
        @And("^I verify SwagLab HomePage$")
        public void i_verifySwagLab_HomePage() throws Throwable {
            SwagLabs_RemoveProduct_BackTo_HomePage.assertSwagLabHomePage();
        }
        @And("^I click addCartButton swagLab$")
        public void i_click_addToCart() throws Throwable {
            SwagLabs_RemoveProduct_BackTo_HomePage.ClkAddToCartButtonForOne();
        }
        @And("^I click swag CheckOutCartButton$")
        public void i_click_checkoutToCart() throws Throwable {
            SwagLabs_RemoveProduct_BackTo_HomePage.ClickCheckOutCartButton();
        }
        @And("^I click remove Button$")
        public void i_click_removeToCart() throws Throwable {
        SwagLabs_RemoveProduct_BackTo_HomePage.ClickRemoveButton();
        }
        @And("^I click ContinueShopping Button$")
        public void i_click_continues_hopping_button() throws Throwable {
        SwagLabs_RemoveProduct_BackTo_HomePage.ClickContinueShoppingButton();
        }
        @And("^I check shopping page for SwagLab$")
        public void i_check_shopping_page() throws Throwable {
        SwagLabs_RemoveProduct_BackTo_HomePage.assertSwagLabHomePage1();
        }
        @Then("^I have click close the SwagApp$")
        public void i_close_swagLab_application() throws Throwable {
            Hook.teardown();
        }

    }
