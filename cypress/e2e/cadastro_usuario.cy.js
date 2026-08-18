/// <reference types="cypress" />
const invalidData = require ('../fixtures/invalid_data.json')
const validData = require ('../fixtures/valid_data.json')
import commum_pages from '../support/pages/commum_pages'
import cadastro_usuario_pages from '../support/pages/cadastro_usuario_pages'

//instalar faker js: npm install @faker-js/faker --save-dev
import { faker } from '@faker-js/faker'

describe ('Cadastro de usuário', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const senha = faker.internet.password()
    beforeEach('Acessar cadastro de usuário', () =>{
        commum_pages.acessarCadastroUsuario()
    })

    it ('Campo nome vazio', () =>{
        cadastro_usuario_pages.clicarCadastrar();
        cadastro_usuario_pages.verificarMensagemErro('O campo nome deve ser prenchido')

    }),

    it ('Campo E-mail vazio', () => {

        cadastro_usuario_pages.preencherCampoNome(nome);
        cadastro_usuario_pages.clicarCadastrar();
        cadastro_usuario_pages.verificarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    }),

    it ('Campo E-mail inválido', () => {
        cadastro_usuario_pages.preencherCampoNome(nome);
        cadastro_usuario_pages.preencherCampoEmail(invalidData.person[0].email);
        cadastro_usuario_pages.clicarCadastrar();
        cadastro_usuario_pages.verificarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    }),
    it ('Campo senha vazio', () => {
        cadastro_usuario_pages.preencherCampoNome(nome);
        cadastro_usuario_pages.preencherCampoEmail(email);
        cadastro_usuario_pages.clicarCadastrar();
        cadastro_usuario_pages.verificarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it ('Campo senha inválido', () => {
        cadastro_usuario_pages.preencherCampoNome(nome);
        cadastro_usuario_pages.preencherCampoEmail();
        cadastro_usuario_pages.preencherCampoSenha(invalidData.person[0].senha);
        cadastro_usuario_pages.clicarCadastrar();
        cadastro_usuario_pages.verificarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    }),

    it ('Cadastro com sucesso', async () => {
        const name2 = await faker.person.fullName()

        cadastro_usuario_pages.preencherCampoNome(name2);
        cadastro_usuario_pages.preencherCampoEmail(email);
        cadastro_usuario_pages.preencherCampoSenha(senha);
        cadastro_usuario_pages.clicarCadastrar();
        cadastro_usuario_pages.verificarCadastroEfetudoSucesso(nome);

    })

})