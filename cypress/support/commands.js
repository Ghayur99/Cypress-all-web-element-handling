/* eslint-disable no-undef */



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaApi', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://daggerapi.mltitans.com/login',
    failOnStatusCode: false,
    form: true,
    body: {
      username,
      password

    }
  }).then((response) => {
    if (response.status >= 400) {
      cy.log('response status', response.body)
      // resolve(false)
      return false
    } else {
      window.localStorage.setItem('token', response.body.access_token)
      // var token = response.body.access_token

      // // this code is decording the token into json
      //  //**********************************************************************************/
      // var base64Url = token.split('.')[1];
      // var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      // var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      //     }).join(''));
      // var parsejson = JSON.parse(jsonPayload);
      // //**********************************************************************************/

      // window.localStorage.setItem('user_id', parsejson.id)
      return cy.wrap(response)
    }
  })
})

//custom command to click on link
Cypress.Commands.add('clickLink', (linkText) => {
  cy.get('a').contains(linkText).click()
})

Cypress.Commands.add('getWithExtendedTimeout', { prevSubject: true }, (subject, selector, timeout) => {
  return cy.wrap(subject).find(selector, { timeout });
});