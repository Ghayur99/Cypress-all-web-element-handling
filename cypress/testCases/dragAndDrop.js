/// <reference types="cypress" />
require ('@4tw/cypress-drag-drop')
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
// Example of triggering a hover event using JavaScript
describe('',()=>{
    beforeEach(()=>{
        cy.visit("http://the-internet.herokuapp.com/drag_and_drop")
    })
    it('drage and drop', () => {


        // cy.get('elemnt to be draged').drag('element on which it is going to drop')
        webElement.dragElement.drag("#column-b")
        webElement.dragElementDestimation.should('have.text', 'A')
    });
 
})