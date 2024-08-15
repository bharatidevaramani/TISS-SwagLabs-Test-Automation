package Com.Pages;
import Com.UtilClass.Util;
import org.openqa.selenium.By;

public class SwagLabs_LoginPage {
    private static final By SwagLab_Username= By.id("user-name");
    private static final By SwagLabPwd=By.id("password");
    private static final By SwagLoginBtn= By.id("login-button");
    private static final By HomePageLogoVerify=By.xpath("//select[@class='product_sort_container']");
    public static void enterUserName() {Util.enterFieldText(SwagLab_Username,"standard_user" );}
    public static void enterPassword(){
        Util.enterFieldText(SwagLabPwd, "secret_sauce");
    }
    public static void ClkLoginBtn () {
        Util.clickWebElement(SwagLoginBtn);
    }
    public static void assertSwagLabHomePage() {
        Util.clickWebElement(HomePageLogoVerify);
    }
}
