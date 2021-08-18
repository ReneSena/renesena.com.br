---
title: Criando preview de imagem com input file
description: E bem comum na maioria dos sites e apps termos a opcao de colocar
  mos nossas fotos pessoais que geralmente denominamos de avatar, a seguir vou
  mostar uma forma que podemos implementar essa funcionalidade.
date: 2021-08-18 01:32:03
image: /assets/img/sintaxe_css.jpg
category: JS
background: "#8c7ae6"
---
Hey, Guys! Beleza?

Aqui nesse post venho trazer para voces, uma forma de criar um preview basico de imagens para as suas aplicacoes. Para isso, precisaremos de duas coisas: um `input do tipo file` onde sera capturado o valor da imagem e uma tag `img` que representara a imagem a ser exibida.

Dessa forma iniciaremos com a seguinte estrutura HTML:

```
<div>
  <input type="file" />
  <img src="url da imagem" />
</div>
```