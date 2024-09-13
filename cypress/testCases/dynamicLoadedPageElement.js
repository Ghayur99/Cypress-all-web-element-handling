describe('',()=>{
    before(() => {
        cy.config('defaultCommandTimeout', 10000); // Set the timeout to 20 seconds (20000 milliseconds)
      });
    it('Dynamically Loaded Page Elements',()=>{
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading/1')
        
        cy.get('#start > button').click()
        cy.get('#finish').getWithExtendedTimeout('h4', 120000).should('be.visible');
        cy.get('#finish').contains('Hello World!')


    })

})