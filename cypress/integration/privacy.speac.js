Cypress._.times(3, function(){
    it.only('testa a página da politica de privacidade de forma indepente', function (){
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    })
})