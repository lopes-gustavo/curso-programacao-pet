# Curso de Programação PET Elétrica UFJF

Repositório com os arquivos das aulas ministradas aos alunos do PET Elétrica UFJF


## Aula 1

- Introdução ao HTML
  - Tags
  - Conceito `pai/filho`
  - headers (`h1`, `h2`, ..., `h6`)
  - `div`, `span`
  - `input`

- Introdução ao CSS Inline
  - `display: block/inline`
  - `background`
  - `margin/border/padding`


### Referências:
  - HTML:
    - https://developer.mozilla.org/en-US/docs/Web/HTML
    - https://www.w3schools.com/tags/default.asp

  - CSS:
    - https://developer.mozilla.org/en-US/docs/Web/CSS
    - https://www.w3schools.com/css/default.asp



## Aula 2
  - IDEs
    - [Webstorm](https://www.jetbrains.com/webstorm/)
    - [VS Code](https://code.visualstudio.com/)
    
  - CSS como arquivo separado
  ```html
  <head>
    <link rel="stylesheet" href="meuestilo.css">
  </head>
  ```

  - Bootstrap
    - Fornece classes e componentes pra gente automaticamente (`.d-flex`, `.jumbotron`, etc)

  - Usar fontes externas (ex: google fonts)

  - Flexbox
    - Usa o conceito de caixas
    - Torna o nosso site mais responsivo, usando:
      - Alinhamentos (início, centro, etc)
      - Espaçamento (sem espaço, espaço no meio, espaço nas bordas)

  - Backed (servidor), frontend (browser)
    - Servidor (backend) que entrega as páginas
    - Todo servidor é um IP, que se transforma em um domínio
      - Exemplo `https://google.com` é mais simples que `https://15.123.3.28`

  - Node.js
    - Runtime (executor) de aplicações javascript
    - Utiliza conceito de pacotes (packages), com o `npm`
    - Para instalar um pacote, utiliza o comando:
    ```
    npm install -g <nome do pacote>
    ```

  - `live-server`
    - É um pacote do npm
    - Cria um servidor local na porta `8080`
      - Servidor local: `http://127.0.0.1:8080`
      - Pode ser traduzido para `http://localhost:8080`
    - Pode rodar na porta 80 (default do browser, onde ele não mostra a porta na url)
      - Aí é simplesmente `http://localhost`
    - Cria um `autoreload`
      - Sempre que alterar um arquivo, o site é atualizado automaticamente
    - Para instalar:
    ```
    npm install -g live-server
    ```
    - Para executar
      - Entre na pasta que estão os arquivos
      ```
      cd C://caminho/da/minha/pasta
      ```

      - Execute o comando
      ```
      live-server --port=80
      ```

  - `git` & `Github`
    - Controle de versão de código
    - Elimina criar vários `arquivo-1.zip`, `arquivo-2.zip`, `arquivo-final.zip`
    - Github é um produto. Esse produto:
      - Oferece um servidor (`hub`) de `gits`
      - Controle de projetos
      - É de graça para a maioria das coisas

### Referências:
  - CSS em arquivo separado
    - https://www.w3schools.com/tags/tag_link.asp
  - Bootstrap
    - https://getbootstrap.com
  - Google Fonts
    - https://fonts.google.com
  - Flexbox
    - https://www.w3schools.com/css/css3_flexbox.asp
    - https://css-tricks.com/snippets/css/a-guide-to-flexbox
  - Frontend/backend
    - https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end
    - https://www.treinaweb.com.br/blog/o-que-e-front-end-e-back-end
  - Node.js
    - https://nodejs.org
    - https://www.npmjs.com
  - `live-server`
    - https://github.com/tapio/live-server
    - https://www.npmjs.com/package/live-server
  - `git`
    - https://git-scm.com/downloads
    - https://github.com/theandersonn/comandos-git/blob/master/comandos/guia-simplificado.md
  - Github
    - https://github.com
