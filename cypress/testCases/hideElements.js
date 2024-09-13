//Parity with testrail
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('',()=>{
    before(()=>{        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })            

    it('hide and show element verification',()=>{

        webElement.hideButton.click()
        // checking the style attribute have value display: none which means it's disabled;
        webElement.hideShowField.should('have.attr', 'style', 'display: none;')
        // another way is checking the visibility 
        webElement.hideShowField.should('not.be.visible')
    
        webElement.showButton.click()
        // checking the style attribute have value display: block;
        webElement.hideShowField.should('have.attr', 'style', 'display: block;')
        // another way is checking the visibility 
        webElement.hideShowField.should('be.visible')
    
       })
    
})