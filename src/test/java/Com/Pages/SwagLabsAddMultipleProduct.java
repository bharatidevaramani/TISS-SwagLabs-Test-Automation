package Com.Pages;
import Com.UtilClass.Util;
import org.openqa.selenium.By;
public class SwagLabsAddMultipleProduct {

        private static final By SwagLab_Username= By.id("user-name");
        private static final By SwagLabPwd=By.id("password");
        private static final By SwagLoginBtn= By.id("login-button");
        private static final By HomePageLogoVerify=By.xpath("//select[@class='product_sort_container']");
        private static final By ClickAddToCart=By.xpath ("//*[@id=\"inventory_container\"]/div/div[1]/div[3]/button");
        private static final By ClickAddToCartSecondButton=By.xpath("//div[3]//div[3]//button[1]");
        private static final By CheckOutCart=By.xpath("//*[name()='path' and contains(@fill,'currentCol')]");
        private static final By CheckOutButton=By.xpath("//a[@class='btn_action checkout_button']");
        private static final By FirstName=By.id("first-name");
        private static final By ContinueButton=By.xpath("//*[@id=\"checkout_info_container\"]/div/form/div[2]/input");
        private static final By LastName=By.id("last-name");
        private static final By PostCode=By.id("postal-code");
        private static final By FinishButton=By.xpath("//*[@id=\"checkout_summary_container\"]/div/div[2]/div[8]/a[2]");
        private static final By OrderSuccessfulMessage=By.cssSelector("#checkout_complete_container > h2");

        public static void enterUserName() {
            Util.enterFieldText(SwagLab_Username, "standard_user");
        }
        public static void enterPassword(){
            Util.enterFieldText(SwagLabPwd, "secret_sauce");
        }
        public static void ClkLoginBtn () {
            Util.clickWebElement(SwagLoginBtn);
        }
        public static void assertSwagLabHomePage() {
            Util.clickWebElement(HomePageLogoVerify);
        }
        public static void ClkAddToCartButtonForOne () {
            Util.clickWebElement(ClickAddToCart);
        }
        public static void ClkAddToCartButtonForSecond() {
            Util.clickWebElement(ClickAddToCartSecondButton);
        }
        public static void ClickCheckOutCartButton () {
            Util.clickWebElement(CheckOutCart);
        }
        public static void ClickCheckOutButton () {
            Util.clickWebElement(CheckOutButton);
        }
        public static void enterFirstName() {
            Util.enterFieldText(FirstName, "John");
        }
        public static void enterLastName(){
            Util.enterFieldText(LastName, "smith");
        }
        public static void enterPostCode(){
            Util.enterFieldText(PostCode, "So152px");
        }
        public static void ClkContinueButton() {
            Util.clickWebElement(ContinueButton);
        }
        public static void ClkFinishButton() {
            Util.clickWebElement(FinishButton);
        }
        public static void assertOrderSuccessful() {Util.assertWebElementContains(OrderSuccessfulMessage, "THANK YOU FOR YOUR ORDER");}

    }
