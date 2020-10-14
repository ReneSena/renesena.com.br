---
title: "Criando input checkbox personalizado "
description: É muito comum termos que modificar estilos dos elementos nativos do
  navegador no nosso dia a dia, sendo assim, trago algumas dicas de hack's de
  como vocês podem estar fazendo essa personalização.
date: 2020-10-13 09:34:28
image: assets/img/css.jpg
category: CSS
background: "#F22"
---
Hey Guys! Tudo jóia com vocês?!!

Vou abordar pra vocês alguns hackzinhos que podemos usar pra deixar o input de checkbox mais apresentável e agradável para os seus projetos. :)

## Introdução

É muito comum no nosso dia a dia, termos que modificar elementos nativos do navegador para atender algum layout do projeto em que estamos trabalhando, porém, nem sempre é possível conseguir realizar essas alterações, pois o próprio browser, não nos da essa permissão de customização de certos elementos do HTML. Sabemos que por padrão, o input de checkbox não aceita customização radicais de estilo, além do mais, cada navegador implementa os elementos de uma forma diferente, o famoso `default do browser`.

## Utilizando imagens

Nesse primeiro exemplo, vamos usar as imagens como estilo do nosso `input`,  a seguir criaremos a seguinte estrutura HTML:

```html
<div class="field-checkbox1">
    <input type="checkbox" class="field" id="exemple1" />
    <label for="exemple1" class="description">Me selecione 1</label>
</div>
```

Nessa estrutura, vemos que tanto o `input e o label`, estão envolvidos por uma `div`, que tem a função de agrupar os elementos. Com a estrutura pronta, podemos partir para o estilo,  e a primeira classe que vamos atacar vai ser a `field-checkbox1`.

```css
.field-checkbox1 {
    position: relative;
}
```

Adicionamos `position relative` no nosso container, para conseguirmos posicionar o `input` original por baixo da nossa imagem que vamos adicionar em breve. Agora iremos posicionar o nosso input original, ao lado do nosso label e adicionaremos uma opacidade nele, para que o elemento não fique visível. 

```css
.field-checkbox1 .field {
    position: absolute;
    left: 2px;
    top: 2px;
    opacity: 0;
}
```

Você verá, que agora temos só o `label` visível, podemos então, adicionar a nossa tão esperada imagem que fará o papel do input checado e não checado, então fica da seguinte forma: 

```css
.field-checkbox1 .field:not(:checked) + .description::before {
    content: url(/images/checkbox_off.svg);
}

.field-checkbox1 .field:checked + .description::before {
    content: url(/images/checkbox_on.svg);
}
```

A sacada está aqui, utilizamos a *[pseudo-classe](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elementos)* `:not() para verificar quando o checkbox não está ativo, usando o seletor irmão representado por ``+`*[`pseudo-elemento`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)*` ::before.` Através do content, usamos o valor `url` para atribuir o caminho da imagem que queremos adicionar, e todo esse processo também vale para o checkbox ativo, a diferença é que precisamos otimitir o `:not()` .

Bom, estamos estamos terminando esse primeiro exemplo, falta apenas dois ajustes, alinhar o checkbox e a label, e dar um espaçamento entre eles. Ficaria da seguinte forma: 

```css
.field-checkbox1 .field:not(:checked) + .description,
.field-checkbox1 .field:checked + .description {
   display: flex;
}

.field-checkbox1 .field:not(:checked) + .description::before,
.field-checkbox1 .field:checked + .description::before {
    margin-right: 10px;
}
```

Resultado final: