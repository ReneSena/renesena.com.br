---
title: " Seletores curiosos do CSS"
description: "Nesse post trago alguns seletores CSS que podem te ajudar no seu
  dia a dia. :) "
date: 2020-12-10 02:39:28
image: /assets/img/sintaxe_css
category: CSS
background: "#0097e6"
---
Hey Guys! Tudo Jóia com vocês?!!

Sabemos que o CSS, é uma linguagem de estilos maravilhosa e que está sempre nos ajudando a compor nossos layouts no dia a dia, ele sempre está fazendo muito bem o seu papel e nos ajudando criar coisas incríveis desde layout's simples a animações complexas. Tempos atrás aprofundando meus estudos em CSS, descobri algumas coisas bem legais e que de alguma forma pode nos ajudar no dia a dia. Vou listar a seguir esses seletores e propriedades.

### **Seletores**

#### **:empty**

Esse pseudo seletor basicamente consegue identificar tag's que estão totalmente vazias e que podem causar estranheza no layout por n motivos, onde mesmo a tag estando vazia ela pode possuir propriedades como margin's, padding's entre outros, deixando o elemento "visível".

Exemplo de aplicação:

```html
<!-- HTML -->

<div></div>
<div>Tem conteúdo</div>
```

```css
div:empty {
	display: none;
}
```

#### ::marker

O :marker é muito interessante pelo fato de ajudar com estilização específicas para listas, o que faz esse pseudo seletor inibir o uso do :before para inserir algo diferente caso seja necessário do convencional, ele é bastante indicado pra fazer sumário.

```html
<!-- HTML -->
<ul>
  <li>Red</li>
  <li>Blue</li>
</ul>
```

```css
/* CSS */

li {
  counter-increment: counter;
}

li::marker {
  content: " # " counter(counter) " : ";
}
```