$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01SwagLabs_Login.feature");
formatter.feature({
  "line": 1,
  "name": "01 SwagLab application Login functionality",
  "description": "",
  "id": "01-swaglab-application-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "01_SwagLab application Login",
  "description": "",
  "id": "01-swaglab-application-login-functionality;01-swaglab-application-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#When I enter \"\u003cSwagUsername\u003e\""
    },
    {
      "line": 6,
      "value": "#|SwagUsername|"
    },
    {
      "line": 7,
      "value": "#|standard_user|"
    },
    {
      "line": 8,
      "value": "#|locked_out_user|"
    },
    {
      "line": 9,
      "value": "#|problem_user|"
    },
    {
      "line": 10,
      "value": "#|performance_glitch_user|"
    }
  ],
  "line": 11,
  "name": "I enter SwagUsername",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter SwagPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify the HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwgLab_LoginPage.am_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 277490100,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n\tat ✽.Given am on the SwagLab home page(01SwagLabs_Login.feature:4)\r\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @6f75e721\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_click_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_verify_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwgLab_LoginPage.i_close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("02SwagLabs_AddOneProduct.feature");
formatter.feature({
  "line": 1,
  "name": "02 SwagLab add One product to cart and complete Order",
  "description": "",
  "id": "02-swaglab-add-one-product-to-cart-and-complete-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "02_SwagLabs Add one product",
  "description": "",
  "id": "02-swaglab-add-one-product-to-cart-and-complete-order;02-swaglabs-add-one-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Iam on the SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am entering SwagUsername",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am entering SwagPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I clicked on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I have assert the HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to addCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I have to click CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to Button to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click Finish button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify order successful",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I would close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLab_AddOneProduct.am_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 969800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n\tat ✽.Given Iam on the SwagLab home page(02SwagLabs_AddOneProduct.feature:4)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @6f75e721 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_verify_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_addToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_checkoutToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_test_checkout_swagLab_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_enter_postcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_finish_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_verify_order_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLab_AddOneProduct.i_click_logout_swagLab_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("03SwagLabs_AddMultipleProduct.feature");
formatter.feature({
  "line": 1,
  "name": "03 SwagLab add multiple product to cart and complete Order",
  "description": "",
  "id": "03-swaglab-add-multiple-product-to-cart-and-complete-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "03_SwagLabs Add multiple product",
  "description": "",
  "id": "03-swaglab-add-multiple-product-to-cart-and-complete-order;03-swaglabs-add-multiple-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered SwagUsername",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I entered SwagPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I press Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I asserted the HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I clicked to addToCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked to addToCart SecondItem",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I clicked to CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I clicked to CheckOutButton",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I entered FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I entered LastName",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I entered PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I clicked continue button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I clicked Finish button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verified order successful",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I had close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_am_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 1103300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n\tat ✽.Given I access SwagLab home page(03SwagLabs_AddMultipleProduct.feature:4)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @6f75e721 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_press_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_asserted_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_submit_addToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_addToCart_secondOne()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_checkoutToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_check_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_entered_postcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_clicked_finish_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_verified_order_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabAddMultipleProduct.i_closed_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("04SwagLabs_RemoveProduct_BackToHomePage.feature");
formatter.feature({
  "line": 1,
  "name": "04 SwagLab: Remove product from cart and go back to HomePage",
  "description": "",
  "id": "04-swaglab:-remove-product-from-cart-and-go-back-to-homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "04_SwagLabs remove item from cart and back to Home page",
  "description": "",
  "id": "04-swaglab:-remove-product-from-cart-and-go-back-to-homepage;04-swaglabs-remove-item-from-cart-and-back-to-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Iam on the SwagLab homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter SwagLabUsername",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter SwagLabPassword",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on SwagLogin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify SwagLab HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click addCartButton swagLab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click swag CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click remove Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click ContinueShopping Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I check shopping page for SwagLab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I have click close the SwagApp",
  "keyword": "And "
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.am_on_the_SwagLab_homepage()"
});
formatter.result({
  "duration": 1186000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n\tat ✽.Given Iam on the SwagLab homepage(04SwagLabs_RemoveProduct_BackToHomePage.feature:4)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @6f75e721 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_enter_swag_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_enter_swag_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_on_swagLogin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_verifySwagLab_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_addToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_checkoutToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_removeToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_click_continues_hopping_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_check_shopping_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_RemoveProduct_BackToHomePage.i_close_swagLab_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("05SwagLabs_verify_CheckoutPage.feature");
formatter.feature({
  "line": 1,
  "name": "05 SwagLabs verify the checkout page",
  "description": "",
  "id": "05-swaglabs-verify-the-checkout-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "05_SwagLabs verify the checkout page",
  "description": "",
  "id": "05-swaglabs-verify-the-checkout-page;05-swaglabs-verify-the-checkout-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I land on SwagLab home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am submitting Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I am submitting Password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I submit click to Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I check the swag lab HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to add Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to CheckOutCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I navigating to CheckOutButton",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add FirstName to the field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add LastName to the field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add PostCode to the field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I navigating to continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I have verified the checkout information",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I logoff and close the SwagApp",
  "keyword": "Then "
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_land_on_the_SwagLab_home_page()"
});
formatter.result({
  "duration": 1015300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n\tat ✽.Given I land on SwagLab home page(05SwagLabs_verify_CheckoutPage.feature:4)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @6f75e721 [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_submit_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_submit_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_submit_click_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_verify_the_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigate_to_addToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigate_checkoutToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigating_check_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_add_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_add_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_add_postcode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_navigating_to_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_have_verified_the_checkout_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SwagLabs_Verify_CheckoutPage.i_logoff_swagLab_app()"
});
formatter.result({
  "status": "skipped"
});
});