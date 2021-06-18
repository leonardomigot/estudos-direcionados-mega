# CSS

CSS é a linguagem que utilizamos para dar estilo as páginas WEB.

> Cascading Style Sheets

## Referência no código
```
<style>
    ...
</style>
```
ou
```
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
---

Seletor | Exemplo | Descrição
---- | ---- | ----
\#id | #firstname | Seleciona por ID
.class | .intro | Seleciona pela classe
element.class | p.intro | Seleciona elemento com a classe especificados
\* | * | Seleciona tudo
element | p | Seleciona todo elemento
element,element,.. | div, p | Seleciona vários itens


## Propriedades

#### Alinhar:

`align-content: stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit;`

`align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit;`

`align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit;  `

#### Mudar valores de todos os elementos

`all: initial|inherit|unset;`

#### Animação

`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

#### Visibilidade do verso do `<div>`

`backface-visibility: visible|hidden|initial|inherit;`

#### Background

`background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;`

`background-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity;`

#### Bordas

``` 
border: border-width border-style border-color|initial|inherit;
border-bottom: border-width border-style border-color|initial|inherit;
border-collapse: separate|collapse|initial|inherit;
border-image: source slice width outset repeat|initial|inherit;
border-left: border-width border-style border-color|initial|inherit;
border-right: border-width border-style border-color|initial|inherit;
border-spacing: length|initial|inherit;
border-top: border-width border-style border-color|initial|inherit;
```

#### Posicionamento

```
bottom: auto|length|initial|inherit;
clip: auto|shape|initial|inherit;
left: auto|length|initial|inherit;
position: static|absolute|fixed|relative|sticky|initial|inherit;
right: auto|length|initial|inherit;
top: auto|length|initial|inherit;
z-index: auto|number|initial|inherit;
```

#### Configurações tipo Box

```
box-decoration-break: slice|clone|initial|inherit|unset;
box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;
box-sizing: content-box|border-box|initial|inherit;
```

#### Break

```
break-after: auto|all|always|avoid|avoid-column|avoid-page|avoid-region|column|left|page|recto|region|right|verso|initial|inherit;
break-before: auto|all|always|avoid|avoid-column|avoid-page|avoid-region|column|left|page|recto|region|right|verso|initial|inherit;
break-inside: auto|all|always|avoid|avoid-column|avoid-page|avoid-region|column|left|page|recto|region|right|verso|initial|inherit;
```

#### Descrição de tabela

`caption-side: top|bottom|initial|inherit;`

#### Cor do cursor de texto

`caret-color: auto|color|initial|inherit;`

#### Charset

`@charset "charset";`

#### Float

`clear: none|left|right|both|initial|inherit;`
`float: none|left|right|initial|inherit;`

#### Texto

`color: color|initial|inherit;`

`hanging-punctuation: none|first|last|allow-end|force-end|initial|inherit;`

#### Colunas 

```
columns: auto|column-width column-count|initial|inherit;
column-count: number|auto|initial|inherit;
column-fill: balance|auto|initial|inherit;
column-gap: length|normal|initial|inherit;
column-rule: column-rule-width column-rule-style column-rule-color|initial|inherit;
column-span: none|all|initial|inherit;
column-width: auto|length|initial|inherit;
```

#### Inserir conteúdo

```
content: normal|none|counter|attr|string|open-quote|close-quote|no-open-quote|no-close-quote|url|initial|inherit;
counter-reset: none|name number|initial|inherit;
counter-increment: none|id|initial|inherit;
```

#### Cursor

`cursor: value;`

#### Direção do parágrafo

`direction: ltr|rtl|initial|inherit;`

#### Display

```
display: value;

inline
block
contents
flex
grid
inline-block
inline-flex
inline-grid
inline-table
list-item
run-in
table
table-caption
table-column-group
table-header-group
table-footer-group
table-row-group
table-cell
table-column
table-row
none
initial
``` 

#### Células vazias Hiden

`empty-cells: show|hide|initial|inherit;`

#### Filter

`filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();`

#### Flex

`flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;`

`order: number|initial|inherit;`



#### Fontes

```
font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;

@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}

font-feature-settings: normal|feature-value;

font-kerning: auto|normal|none;

font-size-adjust: number|none|initial|inherit;

font-stretch: ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|initial|inherit;
```

#### Grid

```
column-gap
gap
grid
grid-area
grid-auto-columns
grid-auto-flow
grid-auto-rows
grid-column
grid-column-end
grid-column-gap
grid-column-start
grid-gap
grid-row
grid-row-end
grid-row-gap
grid-row-start
grid-template
grid-template-areas
grid-template-columns
grid-template-rows
row-gap
```

#### Dimensões

`height: auto|length|initial|inherit;`

`width: auto|value|initial|inherit;`

#### Hifenização

`hyphens: none|manual|auto|initial|inherit;`

#### importação de recursos

`@import url|string list-of-mediaqueries;`

#### Isolação de elemento

`isolation: auto|isolate|initial|inherit;`

#### Justificar texto

`justify-content: flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit;`

#### KEYFRAMES

```
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
```

#### Linhas e letras

```
letter-spacing
line-break
line-height
list-style
list-style-image
list-style-position
list-style-type
```

#### Margens

`margin: length|auto|initial|inherit;`

#### Limites

```
max-width: none|length|initial|inherit;
max-height: none|length|initial|inherit;
min-height: length|initial|inherit;
min-width: length|initial|inherit;
```

## Propriedades de objeto

```
img.a {
  width: 200px;
  height: 400px;
  object-fit: none;
  object-position: 5px 10%;
  border: 5px solid red;
}
```

#### Transparência

`opacity: number|initial|inherit;`

#### Outline

`outline: outline-width outline-style outline-color|initial|inherit;`

#### Overflow

`overflow: visible|hidden|scroll|auto|initial|inherit;`

#### Padding

`padding: length|initial|inherit;`

#### Quebra de página

`page-break-after: auto|always|avoid|left|right|initial|inherit;`
`page-break-before: auto|always|avoid|left|right|initial|inherit;`
`page-break-inside: auto|avoid|initial|inherit;`

#### 3D

```
#div1 {
  perspective: 100px;
  perspective-origin: left;
}
```
#### Links

`pointer-events: auto|none;`

#### Tamanho
```
div {
  resize: both;
  overflow: auto;
}
```
#### Quotes

`quotes: none|string|initial|inherit;` 

#### Opções para scroll

`scroll-behavior: auto|smooth|initial|inherit;`

#### Tabela

`table-layout: auto|fixed|initial|inherit;`

#### Tamanho tabulação

`tab-size: number|length|initial|inherit;`

#### Alinhamento de texto

```
div.a {
  text-align: center;
}

div.b {
  text-align: left;
}

div.c {
  text-align: right;
}

div.c {
  text-align: justify;
}
```

#### Texto

```
text-align-last
text-combine-upright
text-decoration
text-decoration-color
text-decoration-line
text-decoration-style
text-indent
text-justify
text-orientation
text-overflow
text-shadow
text-transform
text-underline-position
```
#### Transform
```
div.a {
  transform: rotate(20deg);
}

div.b {
  transform: skewY(20deg);
}

div.c {
  transform: scaleY(1.5);
}
```

#### Tempo

`transition: property duration timing-function delay|initial|inherit;`

#### Efeito

Inverter texto:

`unicode-bidi` 

#### User 

`vertical-align: baseline|length|sub|super|top|text-top|middle|bottom|text-bottom|initial|inherit;`

#### Visibilidade 

`visibility: visible|hidden|collapse|initial|inherit;`

#### Espaços entre paragrafos

`white-space: normal|nowrap|pre|pre-line|pre-wrap|initial|inherit;`

#### Quebra linha

`word-break: normal|break-all|keep-all|break-word|initial|inherit;`

#### Index sobreposição

`z-index: auto|number|initial|inherit;` 


## Seletores

Seletor | Exemplo | Descrição
---- | ---- | ----
`.class` | `.intro` | Seleciona todos elementos da classe
`.class1.class2 `| `.name1.name2` | Todas as classes no mesmo elemento
`.class1 .class2`	| `.name1 .name2` | O segundo elemento seja descendente do primeiro
`#id` | `#firstname`	| O elemento com o ID
`*` | `*` | Todos
`element` |` div` | Seleciona todos elementos `div`
`element.class `| `div.intro` | Todos `div` com intro
`element,element` | `div, p` | Vários elementos distintos simultaneamente
`element element` | `div p` | todos p dentro de `div`s
`element>element` | `div > p` | todos os `p` onde `div` é o pai
`element+element` |` div + p` | primeiro `p` depois de `div`
`element~element `| `p ~ ul` | todo `ul` precedido de `p`

Atributos

Seletor | Exemplo | Descrição
---- | ---- | ----
`[atributo]` | `[target]` | Todos elemento com o atributo
`[atributo=valor]` | `[target=_blank]` | Todos com o atributo `_blank`
`[atributo~=valor]` |` [title~=flower]` | Todos contendo a palavra `flower` no título
`[atributo|=valor]` | `[lang|=en]` | Todos começando por `en`
`[atributo^=valor]` | `a[href^="https"]` | Todos `a` que começarem por `https`
`[atributo$=valor] `| `a[href$=".pdf"]` | Todos `a` que terminarem por `.pdf`
`[atributo*=valor]` | `a[href*="w3schools"]` | Todos `a` que contem a string

Outros

Seletor | Exemplo | Descrição
---- | ---- | ----
`:active` | `a:active`| Todo link ativo (Enquanto clicado)
`::after` | `p::after` | Utilizar com `content`
`::before` | `::before`| ==
`:checked` | `input:checked` | Todo `checked input`
`:default` | `input:default` | Todo `default input`
`:disabled` | `input:disabled` | Todo `disabled input`
`:empty` | `p:empty`| Todo `p` sem filhos 
`:enabled` | `input:enabled` | Todo `enabled input`
`:first-child` | `p:first-child` | Todo `p` que é o primeiro filho
`::first-letter` | `p::first-letter` | A primeira letra do `p`
`::first-line` | `p::first-line` | A primeira linha do `p`
`:first-of-type`|	`p:first-of-type` | Todo `p` é o primeiro `p` do seu pai
`:focus` | `input:focus` | O input que tem o foco
`:fullscreen` | `:fullscreen` | Elemento que estiver fullscreen
`:hover` | `a:hover` | Mouse em cima
`:in-range` | `input:in-range` | Representa um range
`:indeterminate` |	`input:indeterminate` | Todo input indeterminado
`:invalid` |	`input:invalid` | Todos com valor inválido
`:lang(language)` | `	p:lang(it)` | Todo com linguagem `it`
`:last-child` | `p:last-child` | Todo `p` que é ultimo filho
`:last-of-type` |	`p:last-of-type` | Todo `p` do ultimo tipo
`:link` | `a:link` | Todos o links nao visitados
`::marker` |	`::marker` | Todos marcadores
`:not(selector)` | `:not(p)`	| Seleciona todo que não for
`:nth-child(n)` |	`p:nth-child(2)` | Todo filho numero 2
`:nth-last-child(n)` |	`p:nth-last-child(2)` | = de tras pra frente
`:nth-last-of-type(n)` |`	p:nth-last-of-type(2)` |	Todo elemento do tipo `p` na posicao `2` de tras pra frente. 
`:nth-of-type(n)` |	`p:nth-of-type(2)` |	Todo `p` que é o 2 do tipo
`:only-of-type` |	`p:only-of-type` |	Todo p que for unico do tipo no `parent`
`:only-child` |	`p:only-child` |	Todo filho único
`:optional` |	`input:optional` |	`Input` sem atributos obrigatórios
`:out-of-range`	| `input:out-of-range` |	`Input` com valores fora do `range`
`::placeholder` |	`input::placeholder` |	Selects input elements with the "placeholder" attribute specified ?
`:read-only` |	`input:read-only`	| Input com RO definido
`:read-write` | `input:read-write` | == nao definido
`:required` |	`input:required` |	Especifica o atributo solicitado
`:root` |	`:root` |	Elemento raiz
`::selection` | `::selection` |	O que foi selecionado pelo usuário
`:target` |	`#news:target` |	Selects the current active #news element (clicked on a URL containing that anchor name) ?
`:valid` |	`input:valid` |	Elementos com valor válido
`:visited` |	`a:visited` | Links visitados

## Funções

Comando | Desc 
---- | ----
`attr()` | Retorna valor do atributo
`calc()` |	Ex: `calc(100% - 100px)`
`cubic-bezier()` |	Curva de Bezier para animações
`hsl()`	| Cor pelo HSL
`hsla()` | = (HSLA)
`linear-gradient()` |	Gradiente linear
`radial-gradient()` | Gradiente radial
`repeating-linear-gradient()` |	Repete um `linear gradient`
`repeating-radial-gradient()` |	Repete um `radial gradient`
`rgb()` | RGB
`rgba()` |	RGBA
`var()` | Retorna o valor de uma `var`