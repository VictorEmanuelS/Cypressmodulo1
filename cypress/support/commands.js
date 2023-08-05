Cypress.Commands.add('FillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('victoremanueel23@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})