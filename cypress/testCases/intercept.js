describe("Intercept practice as usage",()=>{


it("simple API Intercept/ wait with the intercept @smoke",()=>{ 

    cy.visit('https://dummyapi.io/explorer')

    cy.intercept('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10').as('getComment')

    cy.get('div[class= "flex flex-wrap -m-1"]').click()

    // waiting for the intercept to happen another way of waiting other than cy.wait(2000)
    // Also we can get the response body from the intercept and do assertion
    cy.wait('@getComment').then((interception)=>{
        cy.log(interception.response.statusCode)
        expect(interception.response.statusCode).to.equal(200)
    })
    // Now verifing the comment of Anaelle on UI
    cy.get('div[class= "bg-white rounded shadow p-4 overflow-hidden"] div div').each('',(e,l,index)=>{
        let comment = e.text()
        if(comment.includes('Anaelle')){
            expect(e.parent().next().text()).equals('Nice pic')    
        }
    })
})


it('use intercept to stub the response of the API and the verify on UI',()=>{ 

    cy.visit('https://dummyapi.io/explorer')

    // Stubbing the response of the API using intercept
    cy.intercept('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', 
    {fixture:"/intercepts/comments.json"}).as('getComment')

    cy.get('div[class= "flex flex-wrap -m-1"]').click()

    // waiting for the intercept to happen another way of waiting other than cy.wait(2000)
    // Also we can get the response body from the intercept request and do assertion
    cy.wait('@getComment').then((interception)=>{
        cy.log(interception.response.statusCode)
        expect(interception.response.statusCode).to.equal(200)
    })
    // Now verifing the stubed comment of Ghayur on UI
    cy.get('div[class= "bg-white rounded shadow p-4 overflow-hidden"] div div').each('',(e,l,index)=>{
        let comment = e.text()
        if(comment.includes('Ghayur')){
            expect(e.parent().next().text()).equals('This is a stub comment')    
        }
    })
})


})