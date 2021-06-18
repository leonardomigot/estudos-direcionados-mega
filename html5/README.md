# HTML5

## `<html>`

Representa a raiz da página. Elemento será pai de todos os outros.

---

# Metadados

## `<base>` 

Define o URL base para todos os URLs relativos no documento.

Atributo | Descrição 
---- | ---- 
`href` | Define um link 
`target` | Local padrão para exibir o resultado

---

## `<head>`

Esta tag define os metadados da página, dados como título da página, links de scripts e links de CSS. 

---

## `<link>`

Destinado a retornar recursos externos.

Atributo | Descrição
---- | ---- 
`crossorigin` |  Define como o elemento lida com as requisições.
`href` | URL do recurso
`hreflang` | Define a lingua do texto linkado
`media` | Indica a mídia a qual o recurso é vinculado
`rel` | Indica a relação entre o documento linkado e o atual
`sizes` | Define altura e largura
`type` | define o tipo de mídia

---

## `<meta>`

Define informações de metadados. Esta tag está dentro de `<head>`.

Atributo | Descrição 
---- | ---- 
`charset` | Ex: "UTF-8"
`name` | Ex: "Palavras-chave"
`content` | Ex: "TI, Pesquisa, Ciência"
`http-equiv` | Entrega ao cabeçalho HTTP o conteúdo do atributo

---

# `<style>`

Define as informações de estilo da página

Atributo | Descrição 
---- | ---- 
`type` | Define a linguagem de estilo como MIME
`media` | Define a mídia para ser aplicada ao estilo

---

# `<title>`

Define o titulo do documento

---

# Separação de conteúdo

## `<address>`

Fornecer informação de contato de uma empresa no header da página

## `<article>`

Representa uma composição independente em um documento.

## `<aside>` 

Representa uma seção de uma página que está relacionado ao texto principal mas está separado do conteúdo. Pode conter algum parágrafo. 

## `<footer>` 

Representa o rodapé do conteúdo, onde se encontram os dados sobre o autor da seção, direitos autorais e links relacionados

## `<header>`

Representa um grupo de suporte introdutório e pode conter logo e formulário de pesquisa.

## `<h1>`

Define cabeçalhos do H1 ao H6.

## `<main>`

Define o conteúdo principal dentro do body. Não inclui elementos periféricos

## `<nav>`

Seção com link de navegação para as outras páginas

## `<section>` 

Define uma seção no documento.

---

# Tags de conteúdo de texto

## `<blockquote>`

Este item indica uma citação.

Atributo | Descrição 
---- | ---- 
`cite` | Indica a URL do recurso citado

---

## Listas

`<ul>`	Define uma lista desordenada

`<ol>`	Define uma lista ordenada

* `<li>`	Defines a list item

Lista descritiva:

`<dl>`	Defines a description list

* `<dt>`	Defines a term in a description list

    * `<dd>`	Describes the term in a description list

---

## `<div>`

Tem como objetivo servir de *container* para agrupar elementos, para utilização de *styles*.

---

## `<figure>`

Esta tag indica um conteúdo independente como um diagrama, trecho de código ou uma imagem.

`<figcaption>`

Representa uma legenda para uma figura.

---

## `<hr>`

Indica uma quebra de tema e deve separar conteúdos da página.

---

## `<p>`

Parágrafos.

Atributo | Descrição 
---- | ---- 
`href` | Define um link 

---

## `<pre>`

Define um texto pré-formatado.


# Semântica Textual

## `<a>` 

Define um hiperlink, chamado de ponto âncora, na página.

Atributo | Descrição 
---- | ---- 
`download` | Determina o arquivo alvo para ser baixado
`href` | Determina a URL alvo
`hreflang` | Determina a linguagem do documento linkado
`media` | Determina para qual dispositivo a mídia é otimizada
`ping` | Uma lista de URLs separadas por espaços
`referrerpolicy` | Determina qual informação enviar para o link
`rel` | Indica a relação entre o documento linkado e o atual
`target` | Determina como abrir o documento linkado
`type` | Determina o tipo de mídia do documento

---

## `<abbr>`

Representa uma abreviação ou sigla, como: HTML, CSS...

Atributo | Descrição 
---- | ---- 
`title` | Apresentar a descrição completa quando passar o mouse

## `<b>`

Usado para destacar palavras-chaves em um resumo, sem outra importância extra.

## `<bdi>`

Este tag isola uma parte do texto que pode ser formatada em uma direção difente.

## `<bdo>`

É utilizado para sobreescrever a direção do texto.

## `<br>`

Este tag é uma quebra de linha.

## `<cite>`

Define uma referência (o nome) a um trabalho criativo.

## `<code>`

Indica um trecho de código.

## `<data>`

Indica um elemento que contem dados de baixo nível, que são interpretados por *machine*.

## `<dfn>`

Representa uma instancia de definição de termos.

Atributo | Descrição 
---- | ---- 
`title` | Apresentar a descrição completa quando passar o mouse

## `<em>`

Define uma ênfase de texto.

## `<i>`

Representa uma alternancia do texto que caracteriza-se por ser uma ênfase diferente das outras TAGs.

## `<kbd>`

Define um comando do teclado do computador.

## `<mark>`

Define um trecho em destaque.

## `<q>`

Indica um pequena citação.

Atributo | Descrição 
---- | ---- 
`cite` | Define uma URL para o conteúdo citado.

## `<ruby>`

Indica uma anotação Ruby, de caracteres para tipografias Asiáticas.

* `rp`
    * `rt` 

## `<s>`

Ênfase de texto cortado.

## `<samp>`

Representa uma saida - *Output* -  de um programa de computador.

## `<small>`

Define um texto pequeno para comentários.

## `<span>`

Representa um container para marcação de uma parte do texto.

## `<strong>`

Ênfase de texto de forte importância.

## `<sub>`

Indica um trecho subsescrito.

## `<sup>`

Indica um trecho sobre-escrito.

## `<time>`

Representa uma data, tanto hora quanto dia do calendário.

Atributo | Descrição 
---- | ----
`datetime` | Indica que o elemento deve ser uma string válida de tempo.

## `<u>`

Representa um texto diferente do normal.

## `<var>`

Define uma variável matemática.

## `<wbr>`

Indica onde o texto pode ser quebrado.

*Word Break Opportunity*

# Multimídia

## `<area>`

Define uma mapa de coordenadas de áreas clicáveis.

Atributo | Descrição 
---- | ---- 
`alt` | =
`coords` | Coordenadas.
`download` | Arquivo/Recurso a ser baixado.
`href` | URL alvo.
`hreflang` | Determina a linguagem da URL alvo.
`media` | =
`refferpolicy` | =
`rel` | =
`shape` | Determina o *Shape* da área.
`target` | =
`type` | =

## `<audio>`

Determina um recurso de áudio.

Atributo | Descrição 
---- | ---- 
`autoplay` | Será executado após carregar.
`controls` | Controles são exibidos.
`loop` | =
`muted` | =
`preload` | Como o recurso deve ser carregado.
`src` | =

## `<img>`

Imagens.

Atributo | Descrição 
---- | ---- 
`alt` | Texto alternativo  
`crossorigin` | Permite que o recursos seja acessado a partir de sites de terceiros.
`width` | Largura
`height` | Altura
`ismap` | Boolean, indica que a imagem é parte do mapa de cordenadas, onde os dados são enviados para o *server*.
`loading` | Especifica que o browser deve carregar o recurso imediatamente ou após uma determinada condição.
`longdesc` | Determina uma URL para definir uma imagem.
`referrerpolicy` | Determina uma informação para acessar um recurso de imagem.
`sizes` | Determina as dimensões de uma imagem.
`src` | Local do arquivo.
`srcset` | Lista de URLs de imagens para utilizar em diferentes situações.
`usemap` | Determina uma imagem como mapa de imagem no lado servidor.

## `<map>`

Define um mapa de imagem clicável.

Atributo | Descrição 
---- | ---- 
`name` | Nome do mapa para que possa ser referênciado.

## `<track>`

Determina mapeamento de texto para elementos de audio e video.

Atributo | Descrição 
---- | ---- 
`default` | Determina o recuso *default*
`kind` | Determina o tipo de legendas.
`label` | Determina o título do recurso.
`src` | URL
`srclang` | Determina a língua do recurso.

## `<video>`

Indica um recurso de vídeo.
Atributo | Descrição 
---- | ---- 
`autoplay` | =
`controls` | =
`height` | =
`loop` | =
`muted` | =
`poster` | URL da imagem de thumbnail.
`preload` | =
`src` | URL
`width` | =

# Conteúdo *Embed*

## `<embed>`

Determina um container para um recurso externo, como outra página.

Atributo | Descrição 
---- | ---- 
`height` | =
`src` | URL
`type` | =
`width` | =

## `<iframe>`

Determina um *inline frame*, utilizado para adicionar um outro documento HTML na página atual.

Atributo | Descrição 
---- | ---- 
`allow` | Determina uma política.
`allowfullscreen` | *Boolean*
`allowpaymentrequest` | *Boolean*
`height` | =
`loading` | =
`name` | =
`refferpolicy` | Determina uma informação para acessar um recurso
`sandbox` | Permite restrições extras para os conteúdos do iframe
`src` | =
`srcdoc` | Determina o conteúdo do iframe.
`width` | = 

## `<object>`

*Tag* para recursos externos de qualquer tipo.

Atributo | Descrição 
---- | ---- 
`data` | URL
`form` | ID 
`height` | =
`name` | =
`type` | Tipo de mídia
`typemustmatch` | *Boolean* Verifica se o conteúdo atual deve ser compativel.
`usemap` | Especifica o nome do mapa de imagem.
`width` | =

## `<param>`

Define parâmetros para um `<object>`.

Atributo | Descrição 
---- | ---- 
`name` | =
`value` | =

## `<picture>`

É um contâiner para indicar múltiplos elementos de um `img`.

## `<portal>`

Parecido com um iframe, mas com menos recursos.

## `<source>`

Determina múltiplos recursos de mídia como audio e video.

Atributo | Descrição 
---- | ---- 
`media` | Propriedades de mídia
`sizes` | =
`src` | URL
`srcset` | URL
`type` | MIME 

# Scripting

## `<canvas>`
 
É utilizado para desenhar gráficos através de JS.

Atributo | Descrição 
---- | ---- 
`height` | =
`width` | =

## `<noscript>`

Define uma seção da página que só será inserida se scripts estiverem desabilitados no browser.

## `<script>`

Inclui scripts executáveis.

Atributo | Descrição 
---- | ---- 
`async` | Determina que o script é assíncrono. 
`crossorigin` | =
`defer` | Determina que o script só será executado quando terminar á leitura da página.
`integrity` | Verifica o hash do ódigo para garantir que não houve uma modificação.
`nomodule` | O script não deve ser executado em browser que suportam ES20015.
`refferpolicy` | =
`src` | URL
`type` | Tipo de script

# Demarcação

## `<del>`

Determina uma parte do texto que foi deletada.

Atributo | Descrição 
---- | ---- 
`cite` | Explicação da deleção do trecho.
`datetime` | Quando foi deletado.

## `<ins>`

Determina uma parte do texto que foi adicionada a página.

Atributo | Descrição 
---- | ---- 
`cite` | Explicação da adição do trecho.
`datetime` | Quando foi adicionado.

# Conteúdo tabulado

## `<caption>`

Representa o nome de uma tabela.

## `<colgroup>`

Define um grupo de colunas.

* `<col>`

Determina as propriedades para cada coluna.

## `<table>`

Representa uma tabela de dados em duas dimensões.

```
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

* `<td>`
* `<tr>`
* `<th>`

## `<tbody>`

Representa o corpo de uma tabela.

## `<tfoot>`

Rodapé da tabela.

# Formulários

## `<button>`

Rasteriza um botão.

Atributo | Descrição 
---- | ---- 
`autofocus` | =
`disabled` | =
`form` | ID
`formaction` | URL
`formenctype` | Método de códificação
`formmethod` | Get ou Post
`formnovalidate` | Não validar
`formtarget` | Onde mostrar a resposta (blank, self)
`type` | Tipo do botão
`value` | Texto

## `<datalist>`

Determina uma lista de opções pré-definidas.

```
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

* `<option>` : Item.

## `<fieldset>`

Utilizado para relacionar os elementos em um `form`, formulário.

* `legend`.

## `<form>`

Cria um formulário normal.

```
<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```

* `<input>` : Recebe dados do usuário.
* `<label>` : Rótulo.

## `<meter>`

Representa um valor dentro de uma escala definida.

## `<optgroup>`

Agrupamento de seções dentro de um `<select>`.

Atributo | Descrição 
---- | ---- 
`disabled` | =
`label` | Text

```
<select>
  <optgroup label="Grupo 1">
    <option>Opção 1.1</option>
  </optgroup>
  <optgroup label="Grupo 2">
    <option>Opção 2.1</option>
    <option>Opção 2.2</option>
  </optgroup>
  <optgroup label="Grupo 3" disabled>
    <option>Opção 3.1</option>
    <option>Opção 3.2</option>
    <option>Opção 3.3</option>
  </optgroup>
</select>
```
* `<option>`

## `<output>` 

Representa um resultado de uma equação.

Atributo | Descrição 
---- | ---- 
`for` | ID
`form` | ID
`name` | Nome

## `<progress>`

Representa uma barra de progresso.

```
<progress value="70" max="100">70 %</progress>
```

## `<select>`

Representa um menu de opções.

```
<select name="select">
  <option value="valor1">Valor 1</option>
  <option value="valor2" selected>Valor 2</option>
  <option value="valor3">Valor 3</option>
</select>
```

Atributo | Descrição 
---- | ---- 
`autofocus` | =
`disabled` | =
`form` | ID
`multiple` | Determina quantas opções podem ser escolhidas.
`name` | Nome
`required` | Validar
`size` | Numero de opções visíveis.

## `<textarea>`

Define uma entrada de dados de texto.

Atributo | Descrição 
---- | ---- 
`autofocus` | =
`cols` | Numero de colunas
`dirname` | ?
`disabled` | =
`form` | ID
`maxlength` | Máximo de caracteres
`name` | Nome
`placeholder` | Dica do que é esperado
`readonly` | =
`required` | Area é obrigatória.
`rows` | Numero de linhas da área.
`wrap` | Determina como o texto será encaminhado no formulário.

# Elementos interativos

## `<details>`

Cria um widget com descrições bem detalhadas de um assunto. É oculto por default.

<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

* `<summary>`

Atributo | Descrição 
---- | ---- 
`open` | Se o widget deve estar aberto por default.

## `<dialog>`

Cria uma dialogo para o usuário.

Atributo | Descrição 
---- | ---- 
`open` | Se o widget deve estar aberto por default.

## `<menu>`

Cria uma lista de comandos, por exemplo, botão direito.

## `<template>`

```
<template>
  <div>Name:
    <slot name="username"></slot>
  </div>
  <div>Birthday:
    <slot name="birthday"></slot>
  </div>
</template>
```

* `<slot>`
.