//Parity with testrail
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('',()=>{
    before(()=>{        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })  
    it('chck all check boxes',()=>
    {   
        // clicking multiple checkboxs
        webElement.checkBoxes.click({ multiple: true }).should('be.checked') 
    })
    
})