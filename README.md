# CRUD

Esse projeto é uma aplicação com um CRUD com tela de listagem e edição.

## Requisitos

- Angular CLI (v12.2.6)
- Node.js (v15.14.0)
- Json-server

### API rest

O HttpClient foi simulado utilizando uma API REST falsa com o json-server.

No diretório raiz e com os dados dentro de db.json no mesmo diretório:

` sudo npm install -g json-server `

` json-server --watch src/assets/data/db.json `

### Angular

Para instalar as dependÇencias do projeto é necessário usar o comando na raiz do projeto angular:

`npm install `

Para a aparencia foram usadas bootstrap e bootswatch, as demais são citadas junto as funcionalidades

Para iniciar a aplicação:

`ng serve `

## Funcionalidades

A página inicial é a de "Listar Dados", que usa o componente e service list.

A página de Editar Dados usa o componente createEdit e o service list para realizar as requisições de GET, POST e DELETE.

O modelo item contém a interface com os atributos do item esperado no arquivo json db.Json

As APIs HttpClientModule e FormsModule foram usadas para as requisições e o formulário de adição/edição, respectivamente.

## Spinner

Foi implementado, o overlay aparece a cada requisição mas o loading não.

Durante as requisições http uma tela de loading é mostrada, isso é atingido com o SpinnerInterceptor que chama o spinnerService sempre que acontece uma requisição HTTP,
o SpinerService que mostra e esconde o spinner em um overlay e por fim o componente spinner que usa o mat-progress-spinner. Para isso foram usadas as APIs BrowserModule, BrowserAnimationsModule, MatProgressSpinnerModule e OverlayModule.
