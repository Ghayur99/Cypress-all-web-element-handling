//Parity with testrail
/// <reference types="cypress" />
import webElementPractice from '../main/webElementPractice'

let webElement = new webElementPractice()
describe('Tables handlig',()=>{
    beforeEach('',()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
    })
    it('Handling tables verifing one row data',()=>{
        
        webElement.table1AllRows.find('td:nth-child(1)').each(($el,index)=>{
            cy.log($el.text()) 
            if($el.text()=='Doe')
            {   //cy.wrap($el).next().then((lastName)=>{ another way
                webElement.table1AllRows.find('td:nth-child(2)').eq(index).then((lastName)=>{
                    expect(lastName.text()).to.equal('Jason')
                })
                // using nextall() to get all siblings =
                cy.wrap($el).nextAll().eq(1).then((email)=>{
                    expect(email.text()).to.equal('jdoe@hotmail.com')
                })
                cy.wrap($el).nextAll().eq(2).then((due)=>{
                    expect(due.text()).to.equal('$100.00')
                })
                cy.wrap($el).nextAll().eq(3).then((web)=>{
                    expect(web.text()).to.equal('http://www.jdoe.com')
                })
                cy.wrap($el).nextAll().eq(4).then((action)=>{
                    expect(action.text()).to.include('edit')
                })
              
            }
        })
    
      })
      it('verified whole table data in this small code according to last names',()=>{ 
       
        var arr = []
    
        // Pushig all last names into arry
        webElement.table1AllRows.find('td:nth-child(1)').each((el)=>{
            var t = el.text()
            arr.push(t)
        })
        //verifing each row of the table is valid according to last name
        webElement.table1AllRows.find('td:nth-child(1)').each(($el,index)=>{
            cy.log($el.text())
            // using the for loop to iterate through the lastname array
            for (let i in arr){ 
                if($el.text()== arr[i])
                {   
                    //fixture data is also arraged in a way that it maps according to the lastname arr index
                    cy.fixture('table/tableData.json').then((data)=>{
                        webElement.table1AllRows.find('td:nth-child(1)').eq(index).then((lastName)=>{
                            expect(lastName.text()).to.equal(data.lastName[i])
                        })
                        // using nextall() to get all siblings
                        cy.wrap($el).nextAll().eq(1).then((email)=>{
                            expect(email.text()).to.equal(data.email[i])
                        })
                        cy.wrap($el).nextAll().eq(2).then((due)=>{
                            expect(due.text()).to.equal(data.due[i])
                        })
                        cy.wrap($el).nextAll().eq(3).then((web)=>{
                            expect(web.text()).to.equal(data.webSite[i])
                        })
                    
                        })   
                    }
                }
        
            })
    
    
      })
})