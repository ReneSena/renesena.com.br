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

#### :not

O seletor :not é muito útil, ele faz uma negação de um seletor simples, provavelmente você já deve ter usado ele alguma vez. Poderia falar que ele é mágico haha, por que em tese ele nos permite economizar muitas linhas de código CSS, além de aplicarmos um pouco de lógica nas estruturas que estamos montando.

Exemplo de aplicação:

```html
<!-- Somente Vscode e Atom terão a cor verder aplicada -->
<ul>
  <li>Vscode</li>
  <li class="ide">Sublime</li>
  <li>Atom</li>
</ul>
```

```css
/*A classe .ide não receberá nesse caso*/
li:not(.ide){
  color: green;
}
```

#### **::placeholder**

Já se perguntou como mudar a cor, font de um placeholder, é aquela famosa "dica" que fica dentro de inputs e selects, a felicidade é que existe um o pseudo elemento ::placeholder e que nos ajuda a dar uma cara mais bonita pro elementos de entrada de dados. 

Exemplo de aplicação:

```html
<input type="text" placeholder="Digíte sua música favorita">
```

```css
input::placeholder {
  color: blue;
  font-size: 14px;
  font-style: italic;
}
```

#### **:read-write / :read-only**

Essas pseudo classes são bem bacana por nos dar a possibilidade de conseguir diferenciar quando um campo é somente leitura ou editável. Geralmente usado em formulários pra identificar qual campo pode ser altera do ou não, vale ressaltar que é necessário ter o atributo readonly no input pra indicar somente leitura.

Exemplo de aplicação:

```html
<input type="text" value="John" readonly />
<input type="text" value="Moro no Brasil" />  
```

```css
input:read-only {
	background-color: #e4e4e4;
}
input:read-write {
	background-color: green;
}
```

#### **::selection**

Esse seletor nos permite alterar a cor e o background de texto selecionados, isso é bem bacana pra diferenciar do padrão que temos no navegador.

Exemplo de aplicação:

```html
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting 
  industry. Lorem Ipsum has been the industry's standard dummy text ever 
  since the 1500s,including versions of Lorem Ipsum
</p>
```

```css
p::selection {
  background-color: #e4e4e4;
  color: blue;
}
```