/// <reference types="Cypress" />

const url = 'https://www.amazon.com.br'
const enterBusca = '#twotabsearchtextbox'
const botaoBusca = '#nav-search-submit-button'
const retornoBusca = '.sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(1)'
const descricaoProduto = '[data-asin="B07C5R9PLV"]'
const clickProduto = 'img[data-image-index="1"]'
const tituloProduto = '#productTitle'
const precoProduto = '#kindle-price'
const detalheProduto = '#detailBulletsWrapper_feature_div > h2'

class BuscaProduto{

    static acessarSite(){
        //Acessar site amazon.com
        cy.visit(url);
}
    static digitarProduto() {
        //Digitar critério da busca
        cy.get(enterBusca).type('BDD Books 1');
        //Clicar no botão para fazer a pesquisa
        cy.get(botaoBusca).click();

    }

    static retornoBusca(){
        //Validar retorno da busca
        cy.get(retornoBusca).should('be.visible');   

    }

    static resultadoBusca(){
        //Validar descrição do produto
        cy.get(descricaoProduto).should('contain', 'Discovery: Explore behaviour using examples (BDD Books Book 1) (English Edition)');

        //Clicar no produto
        cy.get(clickProduto).click();

        //Validar título do produto
        cy.get(tituloProduto).should('contain','Discovery: Explore behaviour using examples (BDD Books Book 1) (English Edition)' );

        //Validar preço do produto
        cy.get(precoProduto).should('not.be.empty');

        //Validar detalhes do produto
        cy.get(detalheProduto).should('not.be.empty');
        

    }


}

export default BuscaProduto;