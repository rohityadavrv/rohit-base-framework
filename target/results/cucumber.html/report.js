$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/functionalTests/EndtoEnd.feature");
formatter.feature({
  "name": "To test End to End Book Store API",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User generates token for Authorization",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ApiSteps.i_am_authorized_user()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test an authenticated user is able to add a book from book store and delete it later",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A list of books are available",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.ApiSteps.listOfBooksAreAvailable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a book to my reading list",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ApiSteps.addBookInList()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The book is added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ApiSteps.bookIsAdded()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c401\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepDefinitions.ApiSteps.bookIsAdded(ApiSteps.java:67)\r\n\tat ✽.The book is added(file:///C:/d/My%20Data/inter/rohitbaseframework/src/test/resources/functionalTests/EndtoEnd.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I remove a book from my reading list",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.ApiSteps.removeBookFromList()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The book is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.ApiSteps.bookIsRemoved()"
});
formatter.result({
  "status": "skipped"
});
});