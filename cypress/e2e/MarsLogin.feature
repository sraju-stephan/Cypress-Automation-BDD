Feature: Mars Login

Scenario: Valid Login to MARS
    Given Vist MARS URL
    When Enter "SFSMARSW" and "mars1"
    Then  click login
    Then valid dashboard

Scenario: Access Reports Menu
    When Click on Reports Menu
    Then select EIS Reports
    Then verify EIS Report Title

Scenario: RunAgain Report
    Given Proceess dates
    Then select display fields
    Then select criteria
    Then run report
