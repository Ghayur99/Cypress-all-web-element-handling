class webElementPractice {
    get dynamicDropdownField(){return cy.get('[id="autocomplete"]')}
    get dynamicDropdownSuggetions(){return cy.get('[id="ui-id-1"] li')}
    get checkBoxes(){return cy.get('input[type="checkbox"]')}
    get newWindow(){return cy.get('#openwindow')}
    get newTab(){return cy.get('#opentab')}
    get staticDropdown(){return cy.get('#dropdown-class-example')}
    get hideButton(){return cy.get('#hide-textbox')}
    get showButton(){return cy.get('#show-textbox')}
    get hideShowField(){return cy.get('#displayed-text')}



    // https://www.qaclickacademy.com/ elements
    get aboutUs(){return cy.get('#navbarSupportedContent [href= "about.html"]')}
    get aboutTitle(){return cy.get('[class= "section-title mt-50"] h2')}

    //Herokuapp elements
    get simpleAlertBtn(){return cy.get('button:contains("Click for JS Alert")') }
    get confirmALertBtn(){return cy.get('button:contains("Click for JS Confirm")')}
    get promptAlertBtn(){return cy.get('button:contains("Click for JS Prompt")')}

    get table1AllRows(){return cy.get('#table1 tbody tr')}
    get hoverElement(){return cy.get('.figure').eq(0)}
    get hoveredText(){return cy.get('.figure').eq(0).find('div h5')}

    

    get dragElement(){return cy.get('#column-a')}
    get dragElementDestimation(){return cy.get('#column-b')}
    


}
export default webElementPractice