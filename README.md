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

` json-server --watch db.json `

### Angular

Para instalar as depedências do projeto é necessário usar o comando na raiz do projeto angular:

`npm install `

Para a interface foram usados o framework bootstrap e bootswatch, as demais dependências são citadas junto as funcionalidades

Para compilar e subir a aplicação:

`ng serve `

## Funcionalidades

O objetivo desse projeto é a criação de uma página de visualização dos dados presentes no arquivo db.json e outra página com a funções de edição e adição dos elementos.

O modelo item contém a interface com os atributos do elemento esperado no arquivo json db.Json

A página inicial chama-se "Listar Dados", que usa o listComponent e listService e requisita a listagem dos daods, tratando dos dados de data da publicação. O listService contêm os metodos de requisição GET, POST, PUT e DELETE para o server contendo o banco de dados.

A página de "Editar Dados" usa o createEditComponent e o listService para realizar as requisição de listagem dos dados e de edição, deleção e adição desses itens. 

As APIs HttpClientModule e FormsModule foram usadas para as requisições e o formulário de adição/edição, respectivamente. O ngForm permite a validação dos inputs.

## Spinner

Foi implementado, o overlay aparece a cada requisição mas o loading não.

Durante as requisições http uma tela de loading é mostrada, isso é atingido com o SpinnerInterceptor que chama o spinnerService sempre que acontece uma requisição HTTP,
o SpinerService que mostra e esconde o spinner em um overlay e por fim o componente spinner que usa o mat-progress-spinner. Para isso foram usadas as APIs BrowserModule, BrowserAnimationsModule, MatProgressSpinnerModule e OverlayModule.
