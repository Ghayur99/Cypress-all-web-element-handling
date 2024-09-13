describe('',()=>{
    it('',()=>{
        //JQuery UI Menus are a nice UI element from a user perspective, but poses an 
        //interesting automation challenge since it requires mouse operations and synchronization between them.
        cy.visit('http://the-internet.herokuapp.com/jqueryui/menu#')

        cy.get('#ui-id-2').trigger('mouseover') // mouseover on enabled menu
        
        cy.get('#ui-id-4').trigger('mouseover') // mouseover on download menu
        
        cy.get('#ui-id-4').next().invoke('attr','style','display: block;')
         // verify the pdf menu is visible
        cy.get('#ui-id-6').should('be.visible').should('have.text','PDF')
       


        
    })
})