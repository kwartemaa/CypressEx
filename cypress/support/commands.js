Cypress.Commands.add('logout', () => { 
    cy.get('ul[class="side_account_list"]').children().last().click()
})

