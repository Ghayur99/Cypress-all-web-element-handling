
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('custom command practice',()=>{
it('custom command practice',()=>
{ 
cy.visit("https://ultimateqa.com/automation",  { failOnStatusCode: false })
//using custom command
//cy.get('<ul.mega-dropdown.Screen_1>').invoke('attr','style','display: block;')
cy.clickLink('Blog', {force: true})
cy.get('.et_pb_text_inner').contains('Blog').should('have.text', 'Blog')
})

})