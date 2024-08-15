package Com.Pages;
import Com.UtilClass.Util;
import org.openqa.selenium.By;

public class SwagLabs_RemoveProduct_BackTo_HomePage {
        private static final By SwagLab_Username= By.id("user-name");
        private static final By SwagLabPwd=By.id("password");
        private static final By SwagLoginBtn= By.id("login-button");
        private static final By HomePageLogoVerify=By.xpath("//select[@class='product_sort_container']");
        private static final By ClickAddToCart=By.xpath ("//*[@id=\"inventory_container\"]/div/div[1]/div[3]/button");
        private static final By CheckOutCart=By.xpath("//*[name()='path' and contains(@fill,'currentCol')]");
        private static final By CheckOutButton=By.xpath("//a[@class='btn_action checkout_button']");
        private static final By RemoveButton=By.xpath("//button[@class='btn_secondary cart_button']");
        private static final By ContinueShoppingButton=By.xpath("//a[@class='btn_secondary']");


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
        public static void ClickCheckOutCartButton () {

            Util.clickWebElement(CheckOutCart);
        }
        public static void ClickRemoveButton () {

        Util.clickWebElement(RemoveButton);

        }
        public static void ClickContinueShoppingButton () {

        Util.clickWebElement(ContinueShoppingButton);

        }
        public static void assertSwagLabHomePage1() {

            Util.clickWebElement(HomePageLogoVerify);
    }





    }
