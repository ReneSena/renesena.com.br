---
title: " Seletores curiosos do CSS"
description: "Nesse post trago alguns seletores CSS que podem te ajudar no seu
  dia a dia. :) "
date: 2020-12-10 02:39:28
image: /assets/img/sintaxe_css.png
category: CSS
background: "#0097e6"
---
Hey Guys! Tudo Jóia com vocês?!!

Sabemos que o CSS, é uma linguagem de estilos maravilhosa e que está sempre nos ajudando a compor nossos layouts no dia a dia, ele sempre está fazendo muito bem o seu papel e nos ajudando criar coisas incríveis desde layout's simples a animações complexas. Tempos atrás aprofundando meus estudos em CSS, descobri algumas coisas bem legais e que de alguma forma pode nos ajudar no dia a dia. Vou listar a seguir esses seletores e propriedades.

## **Os Seletores**

#### **:empty**

Esse pseudo seletor basicamente consegue identificar tag's que estão totalmente vazias e que podem causar estranheza no layout por n motivos, onde mesmo a tag estando vazia ela pode possuir propriedades como margin's, padding's entre outros, deixando o elemento "visível".

Exemplo de aplicação:

```html
<div></div>
<div>Tem conteúdo</div>
```

```css
/* Irá esconder essa div, evitando estranheza no layou */

div:empty {
	display: none;
}
```

#### ::marker

O :marker é muito interessante pelo fato de ajudar com estilização específicas para listas, o que faz esse pseudo seletor inibir o uso do :before para inserir algo diferente caso seja necessário do convencional, ele é bastante indicado pra fazer sumário.

```html
<ul>
  <li>Red</li>
  <li>Blue</li>
</ul>
```

```css
/*Como não temos o :before, o content faz esse papel, 
caso queira realizar uma contagem basta usar o counter-increment 
para referenciar o elemento a ser contato*/

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
/*A classe .ide não receberá estilo nesse caso*/

li:not(.ide){
  color: green;
}
```

#### **::placeholder**

Já se perguntou como mudar a cor, fonte de um placeholder?!; Aquela famosa "dica" que fica dentro de inputs e selects, a felicidade é que existe um o pseudo elemento ::placeholder e que nos ajuda a dar uma cara mais bonita pro elementos de entrada de dados. 

Exemplo de aplicação:

```html
<input type="text" placeholder="Digíte sua música favorita">
```

```css
/* Irá modificar a cor, tamanho e estilo */

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
/*Com os atributos nos inputs esses seletores já conseguem 
identificar o que é editável ou não para aplicar o estilo*/

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
<!-- Ao selecionar o texto, verá que estará diferente do padrão do navegador-->
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

Tendo em vista todas essas dicas, implementei cada uma delas, e você pode ver todos eles [aqui](https://codepen.io/ReneSena/full/VwKmLPG). :)\
\
Bom pessoal, foram as dicas de hoje, espero que vocês tenha gostado e se vocês tiverem sugestões, críticas deixem nos comentários ou podem me procurar em:

\- Github: [@ReneSena](https://github.com/ReneSena)\
- Linkedin: [@rene-sena](https://br.linkedin.com/in/rene-sena)\
\
Até a próxima guys! :) 

## Referências

https://css-tricks.com/almanac/\
https://cssreference.io/\
https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes\
https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elementos