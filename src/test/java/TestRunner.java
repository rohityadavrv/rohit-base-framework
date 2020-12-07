import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty",
                "html:target/results/cucumber.html",
                "json:target/results/cucumber-report.json",
                "junit:target/results/cucumber.xml"},
        features = "src/test/resources/functionalTests",
        glue = {"stepDefinitions"},

        monochrome = true
)
public class TestRunner {
}