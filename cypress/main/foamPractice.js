/* eslint-disable no-undef */
/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
class foamPage {
    //fields 
    get name () {return cy.get('label:contains("Name")') }
    get nameField () {return cy.get('label:contains("Name")').next() }
    get emailField () {return cy.get('[name="email"]') }
    get passwordField () {return cy.get('[type="password"]') }
    get genderDropdown () {return cy.get('[id="exampleFormControlSelect1"]') }
    get dateOfBirth () {return cy.get('[name="bday"]') }
    get twoWayData () {return cy.get('[name="name"]').eq(1) }

    //Buttons 
    get submitButton () {return cy.get('[type="submit"]') }
    get checkbox () {return cy.get('input[id= "exampleCheck1"]') }
    get studentRadioButton () {return cy.get('input[id= "inlineRadio1"]') }
    get employeeRadioButton () {return cy.get('input[id= "inlineRadio2"]') }
    get disabledRadioButton () {return cy.get('input[id= "inlineRadio3"]') }


    //toast
    get toastMessage () {return cy.get('.alert') }
    
    // get nameField () {return cy.get('[name="email"]') }
    // get password () {return cy.get('input[name="password"]') }
    // get loginButton () {return cy.get('[type="submit"]') }
}

export default foamPage
