/// <reference types="cypress" />
import signupPage from "../main/signup";

const signup = new signupPage()
describe('signup test suit',()=>{
    beforeEach("",()=>{
        cy.visit("/signup")

    })
    it('signup with different emails each time',()=>{

        cy.fixture("/signup/signup.json").then((payload)=>{
        signup.fistName.type(payload.firstName)
        signup.lastName.type(payload.lastName)
        signup.email.type(Date.now()+payload.email)
        signup.userName.type(Date.now()+payload.userName)
        signup.password.type(payload.password)
        signup.confirmPassword.type(payload.confirmPassword)

        signup.registerButton.click()

        cy.wait(10000)
    })

    })







})

