import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscaProduto from './buscaprodutoPage';

Given('Quando eu acessar o site Amazon.com', () => {
    BuscaProduto.acessarSite();

})

And('Quando eu digitar no campo busca {string}', (book) => {
    BuscaProduto.digitarProduto();

})

And('Eu vejo o retorno da minha Busca', () => {
    BuscaProduto.retornoBusca();

})

Then('Eu seleciono o resultado da Busca', () => {
    BuscaProduto.resultadoBusca();

})