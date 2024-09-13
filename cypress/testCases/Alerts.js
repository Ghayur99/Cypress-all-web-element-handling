//Parity with testrail
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('Alerts handling suit',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('Handling alers',()=>{

        webElement.simpleAlertBtn.click()
        // //simple alert test verification
        cy.on('window:alert', (mess) => {
            expect(mess).to.equal('I am a JS Alert');
          });
        
        webElement.confirmALertBtn.click()
        
        //confirm alert to click confirm
        cy.on('window:confirm', () => {
           
            return true; // To accept the confirm dialog
            // return false; // To cancel the confirm dialog
          });
    
        // Handling the prompt alerts  
        //To enter string in the prompt textbox & return the value:
           
          cy.window().then(win => {
          cy.stub(win, 'prompt').returns('This is a test text')
          webElement.promptAlertBtn.click() 
          })


          //To ‘Cancel’ the prompt,by clicking ‘Cancel’ button:
          // it iss not worling here due to resson we are using stub in the same test case
        //   cy.window().should(win => {
        //   cy.stub(win, 'prompt').callsFake(() => null);
        //   webElement.promptAlertBtn.click()
        //   });
       })

    it('To Cancel the prompt,by clicking Cancel button',()=>{  
        // Had to do in another test case it was giving error
        //To ‘Cancel’ the prompt,by clicking ‘Cancel’ button:
        
        cy.window().then(win => {
            cy.stub(win, 'prompt').callsFake(() => null);
            webElement.promptAlertBtn.click()
            });
       })
    
})