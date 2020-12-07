Feature: To test End to End Book Store API

Background: User generates token for Authorization
  Given I am authorized user

  Scenario: To test an authenticated user is able to add a book from book store and delete it later
    Given A list of books are available
    When I add a book to my reading list
    Then The book is added
    When I remove a book from my reading list
    Then The book is removed
