class signupPage {

    get fistName(){ return cy.xpath('//input[@name="first_name"]')}
    get lastName () {return cy.xpath('//input[@name="last_name"]')}
    get userName () {return cy.xpath('//input[@name="username"]')}
    get email () {return cy.xpath('//input[@name="email"]')}
    get password () {return cy.xpath('//input[@name="password"]')}
    get confirmPassword () {return cy.xpath('//input[@name="confirm_password"]')}
    get registerButton () {return cy.get('[type="submit"]')}
    get signInButton () {return cy.get('[type="submit"]')}





}
export default signupPage;