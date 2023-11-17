it.only('testa a página da politica de privacidade de forma indepente', function (){
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
    cy.viewport('iphone-xr')
})