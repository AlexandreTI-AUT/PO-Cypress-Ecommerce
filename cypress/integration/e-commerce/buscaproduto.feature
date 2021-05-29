Feature: Busca de produtos

Este cenário valida a busca de um livro no site da Amazon e verifica o retorno da busca está de acordo com a entrada.

Scenario Outline: Fazer busca do BDD Books 1
Given Quando eu acessar o site Amazon.com
And Quando eu digitar no campo busca <book>
And Eu vejo o retorno da minha Busca
Then Eu seleciono o resultado da Busca

Examples:

| book          |
| "BDD Books 1" |
