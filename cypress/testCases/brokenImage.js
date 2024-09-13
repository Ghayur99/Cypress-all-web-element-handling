//Parity with testrail
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('Test suit for web element practice', ()=>{
    beforeEach('',()=>{
        cy.visit('https://the-internet.herokuapp.com/broken_images')
      })

   it('test broken images',{ tags: '@smoke' },()=>{
    
    // 1. Select all image (`img`) elements on the page.
    cy.get('.example img').each(($img,index) => {
    //2. Scroll the image into view and check if it's visible.
    cy.wrap($img).scrollIntoView().should('be.visible');

    // 3. Ensure the natural width and height is greater than 0.
    cy.wrap($img).then(($img) => {
        // as index two image is broken so it's natural height will be 0
        if (index === 2) {
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        } else {
          expect($img[0].naturalHeight).to.not.be.greaterThan(0);
        }
      })
    })
  })
  
})
