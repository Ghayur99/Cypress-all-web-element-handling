//Parity with testrail
/// <reference types="cypress" />
import foamPage from '../main/foamPractice'

const foam = new foamPage()

describe('login', () => {
  beforeEach('',()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
  })


  it('1st test case', () => {
    
    // Use should() with a retry to wait for the element to become visible
    foam.name.then(name=>{
    let t = name.text()
    expect(t).to.equal('Name')
    })
  })

  it('Fill the foam and submit', () => {
    
    // Use should() with a retry to wait for the element to become visible
    cy.fixture("foam/foam.json").then((payload) => {
    foam.nameField.type(payload.Name)
    foam.emailField.type(payload.email)
    foam.passwordField.type(payload.password)
    foam.genderDropdown.select(payload.gender)
    foam.dateOfBirth.type(payload.dateOfBirth)

    foam.submitButton.click()
    foam.toastMessage.then('',(element)=>{
      let t = element.text()
      expect(t).to.contain("Success")

        })
      })
    }) 
  it('Getting value entered in the field', () => {
    
    // Use should() with a retry to wait for the element to become visible
    foam.nameField.type('ghayur')
    foam.twoWayData.should('have.value', 'ghayur')
    foam.twoWayData.invoke('val').should('equal', 'ghayur')  
  }) 

  it('verifing that the check box and radio button is checked', () => {
    
    // Use should() with a retry to wait for the element to become visible
    foam.checkbox.click().should('be.checked')
    foam.studentRadioButton.click().should('be.checked')
    foam.employeeRadioButton.click().should('be.checked')
    foam.studentRadioButton.should('not.be.checked')
      
  })
  it('checking the radio button is disabled or not', () => {
    
    // Use should() with a retry to wait for the element to become visible
    foam.disabledRadioButton.should('be.disabled')
      
  })
  



}) 
