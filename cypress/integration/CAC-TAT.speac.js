/// <reference types="Cypress" />

 
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')    
    })
  it('verifica o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preencher os campos obrigatórios e envia o formulário', function() {
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('victoremanueel23@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })
  it('exibir mensagem de erro ao submeter o formulário com um email com formatação', function() {
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('victoremanueel23@gmail,com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })
  it('campo telefone continua vazinho quando preenchido com valor não numero', function() {
    cy.get('#phone')
      .type('abcdefghij')
      .should('have.value', '')
  })
  it('exibir mensagem de erro quando o telefone se torna obrigatorio mas não é preenchido', function(){
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Filho')
    cy.get('#email').type('victoremanueel23@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })
  it('preenche e limpa os campos nome,sobrenome, email e telefone', function() {
    cy.get('#firstName')
    .type('Victor')
    .should('have.value', 'Victor')
    .clear()
    .should('have.value','')
    cy.get('#lastName')
    .type('Filho')
    .should('have.value', 'Filho')
    .clear()
    .should('have.value','')
    cy.get('#email')
    .type('victoremanueel23@gmail.com')
    .should('have.value', 'victoremanueel23@gmail.com')
    .clear()
    .should('have.value','')
    cy.get('#phone')
    .type('1234567890')
    .should('have.value', '1234567890')
    .clear()
    .should('have.value', '')
  })
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatorios',  function() {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('envia o formulario com sucesso usando um comando customizado', function() {
    cy.FillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

  it('Selecione um produto (youtube) por seu texto', function() {
      cy.get('#product').select('youtube')
        .should('have.value','youtube')
  })
  it('Selecione um produto (mentoria) por seu value', function() {
    cy.get('#product').select('mentoria')
      .should('have.value','mentoria')
})
  it('Selecione um produto (blog) por seu indice', function () {
  cy.get('#product').select(1).should('have.value', 'blog')

})
  it('marca o tipo de atendimento "feedback"', function () {
    cy.get('input[type="radio"][value="feedback"]').check()
    .should('have.value', 'feedback')
  })

  it.only('marca cada tipo de atendimento', function () {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })
  
  })  

})