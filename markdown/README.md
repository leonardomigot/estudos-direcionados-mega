# Markdown

## Hierarquia de títulos:

Código:

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

Resultado:

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## Formatação de ênfase;

Código:

```
Normal
*Itálico*
**Negrito**
**Itálico e _Negrito_**
~~Riscado~~
```

Resultado:

Normal

*Itálico*

**Negrito**

**Itálico e _Negrito_**

~~Riscado~~

---

## Listas

Código:
```
1. Item um;
2. Item dois;
* Não ordenado;
* Outro não ordenado;
```
Resultado:

1. Item um;
2. Item dois;
* Não ordenado;
* Outro não ordenado;

---

## Links

Código:

```
[Texto do link](https://www.google.com "Descrição")
[Link referência][link1]
[link1]: www.google.com
```

Resultado:

[Texto do link](https://www.google.com "Descrição")

---

## Imagens

Código:

```
![alt text][logo]

[logo]: https://th.bing.com/th/id/Rd8e1a462f9c0fa31451aed6301f012d5?rik=mob7YrVZ%2fkBPkw&pid=ImgRaw "Logo Title Text 2"
```

Resultado:

![alt text][logo]

[logo]: https://th.bing.com/th/id/Rd8e1a462f9c0fa31451aed6301f012d5?rik=mob7YrVZ%2fkBPkw&pid=ImgRaw "Logo do Google"

---

## Códigos

Utiliza três acentos, podendo utilizar o nome da linguagem correspondente:

```
Estes: ```
Ou: java```
```

```java
public static void main(String[] args) {
    System.out.println("Show");
}
```
---

## Tabelas 

Tabelas devem utilizar Pipelines:

Código:

```
|Preço | Less | Pretty|
|--------: | ---- | ----- |
|*380,00*  | `renders` | **nicely** |
| 4,80       | 2    | 3     |
```

|Preço | Less | Pretty|
|--------: | ---- | ----- |
|*380,00*  | `renders` | **nicely** |
| 4,80       | 2    | 3     |


## Citações

Citações utilizam o siimbolo maior:

Código:

```
> Este.
```

Resultado:

> Era uma vez...

> Muitos exemplos.

---

HTML Tags:

Código:

```
<b> legal </b>

<strong> muito legal </strong>

<ol>
    <li>Nome</li>
    <li>Telefone</li>
    <li>Endereço</li>
    <li>País</li>
</ol>
```

<b> legal </b>

<strong> muito legal </strong>

<ol>
    <li>Nome</li>
    <li>Telefone</li>
    <li>Endereço</li>
    <li>País</li>
</ol>