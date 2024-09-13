//Parity with testrail
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('dropdowns',()=>{
    beforeEach('',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      })    

    it('static dropdown',()=>{
        // selecting the option from dropdown
        webElement.staticDropdown.select("Option1").should('have.value', 'option1')
       })
    
    it('dynamic dropdown testing',()=>
    {   
        // User will enter city name in the field and select the option suggested in dropdown
        webElement.dynamicDropdownField.type('ind')

        webElement.dynamicDropdownSuggetions.each(($suggestiveElements)=>{
            cy.log($suggestiveElements)
            if ($suggestiveElements.text() == 'India')
            {
                cy.wrap($suggestiveElements).click()
            }
            

        })
        webElement.dynamicDropdownField.should('have.value', 'India')
    })

    
})