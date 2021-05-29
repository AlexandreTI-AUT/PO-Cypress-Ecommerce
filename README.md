# Objetivo

Automatizar busca de produto no site da amazon.com com a ferramenta Cypress/Cucumber

# Pré Requisitos

Nodjs instalado `https://nodejs.org/en/download/`


# Instalação

Abrir terminal na pasta do projeto:

Executar o comando `npm install --save-dev cypress`

Executar o comando `npm install -D cypress-cucumber-preprocessor`

Executar o comando `npx cypress open`

# Configuração Cypress / Cucumber

Adicione o trecho abaixo no arquivo de plugins

`cypress/plugins/index.js`

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
} 

Adicione o suporte a arquivos de feature em sua configuração do Cypress:

`cypress.json`

{ "testFiles": "**/*.feature"
}

Adicione configuração para o pluglin no `package.json`

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true 
}