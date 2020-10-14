---
title: Uma alternativa para selecionar elementos do DOM com JavaScript
description: Nesse post, mostro como usar a função bind para
  selecionar   elementos de forma simples no Javascript.
date: 2020-10-13 12:00:14
image: assets/img/background_js.jpeg
category: JS
background: "#888"
---
Hey Guys! Tudo jóia com você?!!

Hoje venho trazer uma dica, sobre como selecionar elementos do DOM de uma forma mais feliz. :)

## Introdução

Você provavelmente já deve estar familiarizado com essa sintaxe que vou mostrar logo a seguir. Mas afinal, o que vamos abordar?

Bom, vamos falar sobre a função `querySelector` do JavaScript, sabemos que essa função é versátil e nos permite selecionar qualquer elemento do DOM independente do seletor. Por exemplo, vamos supor que queremos selecionar um classe do nosso HTML, ficaria do seguinte modo:

```javascript
let minhaVariavel = document.querySelector('.classe');
```

A a sintaxe acima, é a mais comum e mais usada por nós desenvolvedores. Vamos imaginar que iremos declarar mais de uma variável em nosso projeto, o mesmo ficaria assim:

```javascript
let minhaVariavel1 = document.querySelector('.classe1');
let minhaVariavel2 = document.querySelector('.classe2');
let minhaVariavel3 = document.querySelector('.classe3');
let minhaVariavel4 = document.querySelector('.classe4');
```

Perceba que a função document.querySelector aparece em todas elas, porém esse é um processo um tanto trabalhoso, e que acaba tornando nosso código um tanto repetitivo. Pensando nisso, que tal simplificarmos essa declaração afim de diminuir essas repetições, será que existe um alternativa para esse caso?

## A Função Bind

E a resposta é sim, nesse caso poderíamos atribuir a função document.querySelector a uma variável, fazendo associação o DOM. Exemplo:

```javascript
let $ = document.querySelector.bind(document);
```

Sim, isso é possível! Com a função `bind`, conseguimos manter a associação com o objeto document, assim não perdendo a referência da árvore de elementos.

Se por acaso o `bind` não for chamado na declaração, a função querySelector perder a referência do DOM e o mesmo não conseguirá ser executado. Com essa nova atribuição nossa seleção de elementos fica da seguinte forma:

```javascript
let variavel1 = $('.classe1');
let Variavel2 = $('#classe2');
```

## Conclusão

Criamos basicamente um micro Jquery, essa sintaxe se a assemelha a uma das bibliotecas mais famosas pelo mundo a fora e que agora, pode ser aplicada com JavaScript puro, é bem útil para quando você deseja evitar escrever a função querySelector muitas vezes, simplificando de forma ágil sua declaração. A função bind, ela tem muitas outras utilidades, recomendo a leitura da documentação que explica mais detalhadamente seu uso [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>.

Espero que vocês tenham gostado dessa dica, qualquer dúvida, sugestão, elogio e crítica, deixem nos comentários, até a próxima.