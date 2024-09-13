import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('New tab and new windows handling and cross domain',()=>{
    beforeEach('',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      })

    it('open new tab and cross origin handling', ()=>{

        //remove target attr so it will oepn in same tab
        webElement.newTab.invoke('removeAttr', 'target').click()

        // we can use the prop function
            // webElement.newTab.then((t)=>{
	        // const url = t.prop('href')
            // cy.visit(url)
            // })

        
        // As new tab is from other origin means 
        //that the base URL is changes we have to handle origin 
        cy.origin('https://www.qaclickacademy.com/',()=>{
            // To use the webelements defined in sepraete file inside origin()
            const webElementPractice = Cypress.require('../main/webElementPractice')
            let webElement = new webElementPractice()
            
            // webelement access 
            webElement.aboutUs.click()
            
            //verifing the text
            webElement.aboutTitle.then(t=>{
            expect(t.text()).to.equal('Welcome to QAClick Academy ')

            })
            
        })
        // Now back to orignal url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.url().should('to.contain','rahulshettyacademy')    

    })

    it('verify new window and its URL', () => {
        
        //Verify the attribute 'onclick' is there with value 'openWindow()'
        webElement.newWindow.should('have.attr', 'onclick', 'openWindow()')
        
        // Now verify the url is working which is triggered when new wndow button clicked
        cy.visit('https://www.qaclickacademy.com/')

        //changing the origin to work on changed URL
        cy.origin('https://www.qaclickacademy.com/',()=>{
            
            // To use the webelements defined in sepraete file inside origin()
            const webElementPractice = Cypress.require('../main/webElementPractice')
            let webElement = new webElementPractice()
            
            // webelement access 
            webElement.aboutUs.click()
            
            //verifing the text
            webElement.aboutTitle.then((t)=>{
            expect(t.text()).to.equal('Welcome to QAClick Academy ')

            })
            
        })
    })
})