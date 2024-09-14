//Parity with testrail

import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('iframe',()=>{
beforeEach(()=>{ 
    cy.visit('http://the-internet.herokuapp.com/iframe')
}) 
it('approch one',()=>
{ 
//its() is use to get te document inside the frame

// This is used to get the iframe 
// we can also create it's custom command
    const iframe = cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
// clicking multiple checkboxs

iframe.clear().type('myname is ghayur').should('have.text', 'myname is ghayur')

})

it('using iframe plugin',()=>{ 

    cy.frameLoaded('#mce_0_ifr') // load the frame

    cy.iframe('#mce_0_ifr').clear().type('my name is ghayur').should('have.text', 'my name is ghayur')
    })
})
