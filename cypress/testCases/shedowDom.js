
describe('',()=>{


    it('shedow dom',()=>{

        cy.visit('https://the-internet.herokuapp.com/shadowdom')
        
        cy.get("my-paragraph").eq(0).shadow().find('p').should('contain.text','My default text')


    })


})