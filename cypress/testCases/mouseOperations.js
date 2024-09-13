// Import cypress-real-events (if you choose to use it)
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
// Example of triggering a hover event using JavaScript
describe('',()=>{
    beforeEach(()=>{
        cy.visit("http://the-internet.herokuapp.com/hovers")
    })
    it('handles hover action', () => {
    // Select the element you want to hover over
    webElement.hoverElement.trigger('mouseover')
    
    // Asserting after hover 
    webElement.hoveredText.then(element=>{
        var e = element.text()
        expect(e).to.contains('user')

        /*
        right click
          webElement.hoverElement.trigger('contexmenu')
          //Approch two
          webElement.hoverElement.rightclick()
        
        double click
           webElement.hoverElement.trigger('dblclick')
           //Aproch two
           webElement.hoverElement.dblclick() 
    */  })

    });
})