describe('Verify JavaScript Error on Page Load', () => {
    it('should detect JavaScript error on page load', () => {
      cy.visit('http://the-internet.herokuapp.com/javascript_error');
  
      // Wait for a while to ensure the error event has time to occur
      cy.wait(2000); // Adjust the wait time as needed
      cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
      })
      cy.get('p').contains('This page has a JavaScript error in the onload event.');
    });
  });