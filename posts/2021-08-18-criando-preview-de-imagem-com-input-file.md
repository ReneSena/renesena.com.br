---
title: Criando preview de imagem com HTML, CSS e JS
description: É bem comum na maioria dos sites e apps termos a opção de
  colocar-mos nossas fotos pessoais que geralmente denominamos de avatar, a
  seguir vou mostar uma forma que podemos implementar essa funcionalidade de uma
  maneira simples.
date: 2021-08-18 01:32:03
image: /assets/img/sintaxe_css.jpg
category: JS
background: "#8c7ae6"
---
Hey, Guys! Beleza?!

Aqui nesse post venho trazer para vocês, uma forma de criar um preview básico de imagem para as suas aplicações. Para isso, precisaremos de duas coisas: um `input do tipo file` onde será capturado o valor da imagem e uma tag `img` que representará a imagem a ser exibida.

Dessa forma iniciaremos com a seguinte estrutura HTML:

```html
<div class="preview-container">
  <img src="https://i.pravatar.cc/100" class="avatar" />
  <input type="file" class="field" />
</div>
```

Após montar a estrutura do HTML, precisamos identificar cada parte do nosso código com identificadores, sendo assim, utilizaremos classes para esse fim. Também colocaremos uma imagem padrão para representar nosso avatar inicial utitlizando o site [Pravatar](https://pravatar.cc/). Teremos algo como a imagem abaixo:

![](/assets/img/screenshot-2021-08-19-at-00-04-20-basic-an-avatar-preview.png)