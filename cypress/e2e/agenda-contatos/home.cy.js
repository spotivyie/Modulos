/// <reference types="cypress" />

describe('Teste para a pagina', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('input[type="text"]').type('Eduarda Cardoso')
        cy.get('input[type="email"]').type('eduardacardoso@hotmail.com')
        cy.get('input[type="tel"]').type('11 12345679')
        cy.get('.adicionar').click()
    })
    
    it('Deve editar o contato do formulário de inscrição', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Ana Paula')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('anapaula@outlook.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('22 12345678')
        cy.get('.alterar').click()
    })
    
    it('Deve cancelar o editar do contato do formulário de inscrição', () => {
            cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
            cy.get('.cancelar').click()
        })
    
    it('Deve remover o contato do formulário de inscrição', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})