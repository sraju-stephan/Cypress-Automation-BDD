import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


// Test Case-1 //


Given('Vist MARS URL', function () 
{
    Cypress.session.clearAllSavedSessions;
    cy.visit("https://imarscrmdev.phxa.com/MARSWeb2/Login");

})

  When('Enter {string} and {string}', function (username,password) 
  {
    cy.get(".k-input-inner[placeholder='UserId']").clear 
    cy.get(".k-input-inner[placeholder='UserId']").type(username)   
    cy.get(".k-input-inner[type='password']").clear   
    cy.get(".k-input-inner[type='password']").type(password)

  })

  Then ('click login', function () 
  {
    cy.get("span:nth-child(2)#btnLogin").click()

  })

  Then('valid dashboard', function () 
  {
    cy.url().should('contain','Dashboard')
    cy.get("#dynamicModalLabel1").should('contain','Recurring Reports Expiring Soon')
    cy.get("#btnClose0").click()
    cy.get("#imgMarsLogo").should('have.attr','src','https://imarscrmdev.phxa.com/MARSWeb/images/Logo/HomePage_Logo.png')   
    
  })

// Test Case-2 //

  When('Click on Reports Menu', function () 
  {
    cy.wait(5000)
    cy.get("li[aria-label='Reports']").click();
  })

  
  Then('select EIS Reports', function ()
  {
    
    cy.get("li[aria-label='EIS'] a[role='presentation']").click()
    //cy.url().then(url => cy.log('Current URL is', url))

    
  })

  Then('verify EIS Report Title', function () 
  { 
    cy.get(".text-truncate[title='Report: EIS FIRM CY']").should('contain','EIS')


  })
// Test Case-3 //
  Given('Proceess dates', function () 
  {

    cy.get("app-banner-button[icon='play_arrow'] [class='banner-btn']").click()
    cy.wait(5000)

    cy.get("[title='Find: Report Criteria for Executive Information Summary - Firm - EIS FIRM CY']").should('contain','EIS FIRM CY')
    cy.wait(4000)
   // cy.pause()
    //cy.get('.align-items-end > :nth-child(1) > mars-daterange-ctrl > div.ng-star-inserted > .d-inline-flex > [style="width: 45%; min-width: 150px;"]').clear().type("Current Year")
    //cy.get(".k-floating-label-container[style='width: 45%; min-width: 150px;'][1]").should("be.enabled")
    //cy.get('.align-items-end > :nth-child(1) > mars-daterange-ctrl > div.ng-star-inserted > .d-inline-flex > [style="width: 25%; margin-right: 10px; margin-left: 10px; min-width: 130px;"] > .k-datepicker').clear().type("01/01/2024")
    cy.get("kendo-floatinglabel>kendo-combobox+label").contains(" Primary").type("{selectall}{backspace}").type("Current Year{Enter}")

    cy.pause()
  })

  Then('select display fields', function () 
  {
           cy.log("1")
  })

  Then('select criteria', function ()
  {
    cy.log("2")

  })

  Then('run report', function ()
  {
    cy.log("3")

  })