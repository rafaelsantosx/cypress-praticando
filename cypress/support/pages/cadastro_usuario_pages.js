/// <reference types="cypress" />

const elements = {
    buttons: {
        cadastrar: '#btnRegister'
    },
    fields: {
        nome: '#user',
        email: '#email',
        senha: '#password'
    },
    messages: {
        error: '.errorLabel',
        succesTitle: '#swal2-title',
        succesSubtitle: '#swal2-html-container'
    }
}

export default {
    clicarCadastrar () {
        cy.get(elements.buttons.cadastrar)
            .click()
    },

    preencherCampoNome(nome){
        cy.get(elements.fields.nome)
            .type(nome)
    },
    preencherCampoEmail(email){
        cy.get(elements.fields.email)
            .type(email)
    },
    preencherCampoSenha (senha) {
        cy.get(elements.fields.senha)
            .type(senha)
    },

    // Fazer assert por 'expect'
    // verificarMensagemErro (message){
    //     cy.get('.errorLabel').then((element) =>{
    //         expect(element).to.be.visible
    //         expect(element.text()).equals(message)
    //     })
    // }

    verificarMensagemErro (message){
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
    },

    verificarCadastroEfetudoSucesso(name){
        cy.get(elements.messages.succesTitle, )
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.succesSubtitle)
            .should('be.visible')
            .should('have.text',`Bem-vindo ${name}`)
    }
}
