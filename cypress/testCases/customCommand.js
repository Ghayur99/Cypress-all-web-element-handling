
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('custom command practice',()=>{
it('custom command practice',()=>
{ 
cy.visit("https://demo.nopcommerce.com/")
//using custom command
cy.clickLink('Apple MacBook Pro 13-inch')
})

it('OverWriting custom command',()=>
{ 

    
})
})