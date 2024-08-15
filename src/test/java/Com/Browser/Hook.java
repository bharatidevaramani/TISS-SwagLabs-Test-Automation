package Com.Browser;
import org.junit.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class Hook {
    public static WebDriver driver;
    public static WebDriver setup(){
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(100));
        return driver;
    }

    @After
    public static void teardown() {
        driver.quit();
    }
}
