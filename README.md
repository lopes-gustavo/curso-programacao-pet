# Curso de Programação PET Elétrica UFJF

Repositório com os arquivos das aulas ministradas aos alunos do PET Elétrica UFJF

Veja em mais em: https://github.com/lopes-gustavo/curso-programacao-pet


#### Conteudo

<!-- toc -->

- [Aula 1](#aula-1)
  * [Introdução ao HTML](#introducao-ao-html)
  * [Introdução ao CSS Inline](#introducao-ao-css-inline)
  * [Referência](#referencia)
    + [HTML](#html)
    + [CSS](#css)
- [Aula 2](#aula-2)
  * [IDEs](#ides)
  * [CSS como arquivo separado](#css-como-arquivo-separado)
  * [Bootstrap](#bootstrap)
  * [Fontes externas](#fontes-externas)
  * [Flexbox](#flexbox)
  * [Backed (servidor), frontend (browser)](#backed-servidor-frontend-browser)
  * [Node.js](#nodejs)
  * [live-server](#live-server)
  * [git & Github](#git--github)
  * [Referências](#referencias)
    + [CSS em arquivo separado](#css-em-arquivo-separado)
    + [Bootstrap](#bootstrap-1)
    + [Fonts](#fonts)
    + [Flexbox](#flexbox-1)
    + [Frontend/backend](#frontendbackend)
    + [Node.js](#nodejs-1)
    + [`live-server`](#live-server)
    + [`git`](#git)
    + [Github](#github)
- [Aula 3](#aula-3)
  * [Página default: index.html](#pagina-default-indexhtml)
  * [README.md](#readmemd)
  * [Javascript](#javascript)
    + [Ponto e vírgula](#ponto-e-virgula)
    + [Print](#print)
    + [Variáveis](#variaveis)
      - [Principais tipos](#principais-tipos)
    + [Aspas](#aspas)
  * [`"use strict"`](#use-strict)
  * [Clique de botão](#clique-de-botao)
  * [Callback](#callback)
    + [`setTimeout` | `setInterval`](#settimeout--setinterval)
  * [Usos do `document.getElementById`](#usos-do-documentgetelementbyid)
  * [Referências](#referencias-1)
    + [Markdown](#markdown)
    + [Javascript](#javascript-1)
    + [Template literals](#template-literals)
- [Aula 4](#aula-4)
  * [Emmet](#emmet)
  * [Javascript como arquivo separado](#javascript-como-arquivo-separado)
  * [Objetos com funções dentro](#objetos-com-funcoes-dentro)
  * [Spread operator "..."](#spread-operator-)
  * [Lambda](#lambda)
  * [Igualdade com `==` e `===`](#igualdade-com--e-)
  * [Referências](#referencias-2)
    + [Emmet](#emmet-1)
    + [Javascript como arquivo separado](#javascript-como-arquivo-separado-1)
    + [Objetos](#objetos)
    + [Spread operator](#spread-operator)
    + [Lambda](#lambda-1)
    + [Igualdade](#igualdade)

<!-- tocstop -->

-----------

## Aula 1

### Introdução ao HTML

- Tags
- Conceito `pai/filho`
- headers (`h1`, `h2`, ..., `h6`)
- `div`, `span`
- `input`

### Introdução ao CSS Inline
- `display: block/inline`
- `background`
- `margin/border/padding`


### Referência

#### HTML
- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://www.w3schools.com/tags/default.asp

#### CSS
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://www.w3schools.com/css/default.asp

-----------

## Aula 2

### IDEs
- [Webstorm](https://www.jetbrains.com/webstorm/)
- [VS Code](https://code.visualstudio.com/)
    
### CSS como arquivo separado
```html
<head>
  <link rel="stylesheet" href="meuestilo.css">
</head>
```

### Bootstrap
- Fornece classes e componentes pra gente automaticamente (`.d-flex`, `.jumbotron`, etc)

### Fontes externas 
- Google fonts
- Font Awesome

### Flexbox
- Usa o conceito de caixas
- Torna o nosso site mais responsivo, usando
  - Alinhamentos (início, centro, etc)
  - Espaçamento (sem espaço, espaço no meio, espaço nas bordas)

### Backed (servidor), frontend (browser)
- Servidor (backend) que entrega as páginas (nesse caso é chamado de hosting)
- Todo servidor está em um IP, que se transforma em um domínio
  - Exemplo `https://172.217.162.174` se transforma em `https://google.com`

### Node.js
- Runtime (executor) de aplicações javascript
- Utiliza conceito de pacotes (packages), com o `npm`
- Para instalar um pacote, utiliza o comando:
```
npm install -g <nome do pacote>
```

### live-server
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

### git & Github
- Controle de versão de código
- Elimina criar vários `arquivo-1.zip`, `arquivo-2.zip`, `arquivo-final.zip`
- Github é um produto. Esse produto:
  - Oferece um servidor (`hub`) de `gits`
  - Controle de projetos
  - É de graça para a maioria das coisas

### Referências

#### CSS em arquivo separado
- https://www.w3schools.com/tags/tag_link.asp

#### Bootstrap
- https://getbootstrap.com

#### Fonts
- https://fonts.google.com
- https://fontawesome.com

#### Flexbox
- https://www.w3schools.com/css/css3_flexbox.asp
- https://css-tricks.com/snippets/css/a-guide-to-flexbox

#### Frontend/backend
- https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end
- https://www.treinaweb.com.br/blog/o-que-e-front-end-e-back-end

#### Node.js
- https://nodejs.org
- https://www.npmjs.com

#### `live-server`
- https://github.com/tapio/live-server
- https://www.npmjs.com/package/live-server

#### `git`
- https://git-scm.com/downloads
- https://github.com/theandersonn/comandos-git/blob/master/comandos/guia-simplificado.md

#### Github
- https://github.com

-----------

## Aula 3

### Página default: index.html
- Em um hosting, a página default é a `index.html`. Não é necessário digitar ela na URL

### README.md
- Todo projeto deveria ter um arquivo chamado `README.md`
- Esse arquivo é responsável por explicar o projeto, como roda ele, como desenvolve, como instala, etc
- É escrito em `markdown`, uma linguagem simples que é renderizada

### Javascript
- Javascript é uma linguagem de programação
- Responsável pela "ação" de uma página HTML
- Também pode ser usado para escrever aplicações de backend (usando `Node JS`)

#### Ponto e vírgula
- Ponto e vírgula no final da linha (o termo em inglês é "statement") é opcional.
- Há bastante discussão sobre isso, porém, seja consistente no seu código (se começou a usar, continue)

#### Print
- O "print" do javascript é
 ```javascript
 console.log("o que você quer printar");
 ```

#### Variáveis
- Variáveis podem ser:
  - "sem nada"
  - `var`
  - `let`
  - `const`

- Só vamos usar `let` e `const`
  - `const` não deixa você atualizar a variável (o termo em inglês é "reassign")
  - `let` por outro lado, deixa
  - De preferência, usar `const`. O uso do `let` deve ser em pouquíssimos casos

##### Principais tipos
- String
    ```javascript
    const minhaVariavel = "Olá, mundo";
    console.log(minhaVariavel);
    ```

- Number
    ```javascript
    const minhaVariavel = 5;
    console.log(minhaVariavel);
    ```

- Bool
    ```javascript
    const minhaVariavel = true;
    console.log(minhaVariavel);
    ```

- Object
    ```javascript
    const minhaVariavel = {
      minhaChaveNumber: 10,
      minhaChaveString: "olá",
      minhaChaveObj: {
        chaveDeDentro: true,
      },
      chaveDeFuncao: () => console.log("wow"),
    };
    console.log(minhaVariavel);
    
    // Funções podem ser executadas normalmente (é assim que o console.log funciona)
    minhaVariavel.chaveDeFuncao();    
    ```

- Funções
  - Há várias formas de escrever uma função em javascript

 ```javascript
 function minhaFuncao() {
   console.log("ola, mundo");
 }

 function minhaFuncaoComParametro(parametro) {
   console.log(parametro);
 }
  
 const funcaoEmVariavel = function() {
   console.log("ola, mundo (from funcaoEmVariavel)");
 }
  
 const funcaoArrowFunction = () => {
   console.log("ola, mundo (from funcaoEmVariavel)");
 }
  
 const funcaoArrowFunctionInline = () => console.log("ola, mundo");
 ```
  
  - Para chamar uma função, adicione parênteses no final dela, com os parêmetros que deseja passar

  ```javascript
  minhaFuncao();
  minhaFuncaoComParametro("olá");
  funcaoEmVariavel();
  funcaoArrowFunction();
  funcaoArrowFunctionInline();
  ```
  
  - Para fazer uma função retornar um valor, adicione um `return`;
  
  ```javascript
  function minhaFuncao(x) {
      return 2 * x;
  }
  const minhaFuncaoConst = (x) => {
      return 2 * x;
  }
  const minhaFuncaoConstInline = (x) => 2 * x;
  ```
  
  Funções `const` (o termo é "function expression") inline não precisam (e não podem) 
  ter o termo `return`. Por natureza, ela retorna o que a expressão retornar.
  
  Também são conhecidas pelo termo `lambda`.


#### Aspas
- Javascript aceita tanto aspas duplas `"dupla"`, como aspas simples `'simples'`.
- É obrigatório que, se abrir com um tipo, feche com esse mesmo tipo
- É recomendado que se use, durante todo o código, o mesmo tipo de aspas
- Existe um terceiro tipo de aspas que é a "crase" (`` `crase` ``). 
   - Esse tipo permite colocar código dentro da string (chamado de `template literals`) usando `${}`
   ```javascript
   const idade = 21;
   const nome = "João";
   console.log(`Meu nome é ${nome}. Tenho ${idade} anos`);
   ```
   - Esse tipo também permite strings multiline
   ```javascript
   const poema = `
      Olá, mundo.
      Eu tenho várias linhas
         E espaçamento variável
   `;
   console.log(poema);
   ```

### `"use strict"`
- String especial que faz o browser dar vários erros que não dariam normalmente
- Obrigam o uso de código mais limpo
- É recomendado usar sempre
- Simplesmente adicione esse texto na primeira linha do seu javascript
   ```javascript
   "use strict"
   ```

### Clique de botão
- Para "ouvir" o clique de um botão, usamos javascript
- Há 2 maneiras principais de fazer isso:
  - Usando `onClick`:
      ```html
      <button onclick="onButtonClick()">Clica aqui!</button>
      <script>
      function onButtonClick() {
        alert('botão clicado');
      }
      </script>
      ```

  - Usando `addEventListener`:
      ```html
      <button id="meuBotao">Clica aqui!</button>
      <script>
      function onButtonClick() {
        alert('botão clicado');
      }
      document.getElementById('meuBotao').addEventListener('click', () => onButtonClick());
      </script>
      ```

### Callback
- É extremamente comum em javascript usar o conceito de callbacks
- Callbacks são funções anônimas (sem nome), que são executadas quando algum evento acontece
  - Ex: Quando o botão for apertado, a função será executada
  ```javascript
  document.getElementById('meuBotao').addEventListener('click', function() {
      onButtonClick()
  });  
  ```

#### `setTimeout` | `setInterval`
- Dois exemplos que usam callbacks são `setTimeout` e `setInterval`
- `setTimeout` vai executar o seu callback depois de `x` milissegundos
   ```javascript
   console.log("tempo 0");
   setTimeout(() => console.log("1000ms depois"), 1000)
   ```
- `setInterval` vai executar o seu callback a cada `x` milissegundos
   ```javascript
   console.log("tempo 0");
   setInterval(() => console.log("eu repito a cada 1000ms"), 1000)
   ```
  
### Usos do `document.getElementById`
- Ouvir eventos
  ```javascript
  const callback = () => console.log("clicou");
  document.getElementById("meuId").addEventListener("click", () => callback())
  ```

- Editar style (css)
   ```javascript
   document.getElementById("meuId").style.padding = "10px";
   ```

- Adicionar texto/html
   ```javascript
   document.getElementById("meuId").innerText = "Fui adicionado como texto";
   document.getElementById("meuId").innerHTML = "<h2>Fui adicionado como html</h2>";
   ```

- Pegar o valor de um input
   ```javascript
   const inputValue = document.getElementById("meuInput").value;
   console.log(inputValue);
   ```

### Referências

#### Markdown
- https://www.markdownguide.org/getting-started/
- https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

#### Javascript
- https://www.w3schools.com/js/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

#### Template literals
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

-----------

-----------

## Aula 4

### Emmet
- São comandos que preenchem uma boa parte do código repetido (boilerplate) pra você

### Javascript como arquivo separado
- Crie um arquivo com extensão `.js`
- Adicione no seu html
```html
<script src="script.js"></script>
```

### Objetos com funções dentro
- Um objeto pode ter qualquer tipo de propriedade. Inclusive uma função
- `console.log()` é um objeto `console` que uma chave `log`, que é uma função

### Spread operator "..."
- Para receber um número variável de parâmetros numa função, pode usar o spread operator (`...`)
```js
function sum(...n) {
  let out = 0;
  for (let i = 0; i < n.length; i++) {
    out += n[i];
  }
  return out;
}
```

### Lambda
- Lambda são arrow funçtions de uma linha apenas
```js
const add = (a, b) => a + b;
```

### Igualdade com `==` e `===`
- `==` compara os objetos como se fossem string
- `===` compara os objetos levando em consideração o tipo
- Sempre usar 3 iguais `===`


### Referências

#### Emmet
- https://emmet.io/
- https://code.visualstudio.com/docs/editor/emmet
- https://www.jetbrains.com/help/webstorm/settings-emmet.html

#### Javascript como arquivo separado
- https://www.w3schools.com/tags/att_script_src.asp

#### Objetos
- https://www.w3schools.com/js/js_objects.asp

#### Spread operator
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

#### Lambda
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

#### Igualdade
- https://www.w3schools.com/js/js_comparisons.asp
- https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a

-----------

## Aula 5

### Loops

#### `for..of`
```js
const arr = [1, 2, 3];
for (const elem of arr) {
  console.log(elem); //1 -> 2 -> 3
}
```

#### `.foreach()`
```js
const arr = [1, 2, 3];
arr.forEach((elem => {
  console.log(elem); // 1 -> 2 -> 3
}));
```

#### `.map()`
```js
const arr = [1, 2, 3];
const out = arr.map((elem => {
  return elem * 2;
}));
console.log(out); //[2, 4, 6]
```

#### `.filter()`
```js
const arr = [1, 2, 3, 4];
const out = arr.filter((elem => {
  return elem > 2;
}));
console.log(out); //[3, 4]
```

### Classes
- Classes são uma forma de criar objetos
```js
class MyClass {
  constructor(valorInicial) {
    this.algumValor = valorInicial;
  }
  duplica() {
    return this.algumValor * 2;
  }
  soma(x) {
    return this.algumValor + x;
  }
}
const meuObjeto = MyClass(5);
const dobro = meuObjeto.duplica(); // 10
const somado = meuObjeto.soma(2); // 7
```

### Query Parameters
- Query parameters (também chamado de query params ou search params)
são argumentos passados na URL, com finalidade de passar/buscar dados
- Utilizam o conceito de classe
- Ex: `meusite.com/pagina.html?param1=valor1&param2=valor2&param3=valor3`

```js
const urlParams = new URLSearchParams();
urlParams.append('nome', 'meuNome');
urlParams.append('dataNascimento', '01-01-1991');

// Para fazer redirect
location.href = "./outra-pagina.html" + "?" + urlParams.toString();
```

### Referências
#### Loops
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

#### Classes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class

#### Query Parameters
- https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

