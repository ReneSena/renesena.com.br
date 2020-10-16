---
title: "Criando input checkbox personalizado "
description: É muito comum termos que modificar estilos dos elementos nativos do
  navegador no nosso dia a dia, sendo assim, trago algumas dicas de hack's de
  como vocês podem estar fazendo essa personalização.
date: 2020-10-14 10:43:41
image: /assets/img/background_css.jpg
category: CSS
background: "#0097e6"
---
Hey Guys! Tudo jóia com vocês?!!

Vou abordar pra vocês alguns hackzinhos que podemos usar pra deixar o input de checkbox mais apresentável e agradável para os seus projetos. :)

## Introdução

É muito comum no nosso dia a dia, termos que modificar elementos nativos do navegador para atender algum layout do projeto em que estamos trabalhando, porém, nem sempre é possível conseguir realizar essas alterações, pois o próprio browser, não nos da essa permissão de customização de certos elementos do HTML. Sabemos que por padrão, o input de checkbox não aceita customização radicais de estilo, além do mais, cada navegador implementa os elementos de uma forma diferente, o famoso `default do browser`. A seguir irei mostrar algumas abordagens que podemos utilizar pra conseguir ter uma resultado bacana.

## Utilizando imagens

Nesse primeiro exemplo, vamos usar as imagens como estilo do nosso `input`,  a seguir criaremos a seguinte estrutura HTML:

```html
<div class="field-checkbox1">
    <input type="checkbox" class="field" id="exemple1" />
    <label for="exemple1" class="description">Checkbox com imagem</label>
</div>
```

Nessa estrutura, vemos que tanto o `input e o label`, estão envolvidos por uma `div`, onde tem a função de agrupar os elementos. Vale lembrar que o input e o label, devem estar sempre conectados com seus respectivos atributos `for e id`, pois, é essa ligação que vai fazer com que seja possível acionar o campo quando ele estiver escondido. Com a estrutura pronta, podemos partir para o estilo,  e a primeira classe que vamos atacar vai ser a `field-checkbox1`.

```css
.field-checkbox1 {
    position: relative;
}
```

Adicionamos `position relative` no nosso container, para conseguirmos posicionar o `input` original por baixo da nossa imagem que vamos adicionar em breve. Agora, iremos posicionar o nosso `input original`, ao lado do nosso `label` e adicionaremos uma opacidade nele, para que o elemento não fique visível. 

```css
.field-checkbox1 .field {
    position: absolute;
    left: 2px;
    top: 2px;
    opacity: 0;
}
```

Você verá, que agora temos só o `label` visível, podemos então, adicionar a nossa tão esperada imagem que fará o papel do input checado e não checado,  ficará da seguinte forma: 

```css
.field-checkbox1 .field:not(:checked) + .description::before {
    content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/unchecked_checkbox.png");
}

.field-checkbox1 .field:checked + .description::before {
    content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/checked_checkbox.png");
}
```

A sacada está aqui, utilizamos a *pseudo-classe* `:not() para verificar quando o checkbox não está ativo, usando o seletor irmão representado por +,` onde através do `pseudo-elemento ::before`, usamos o valor `url` da propriedade `content` para atribuir o caminho da imagem que queremos adicionar, e todo esse processo também vale para o checkbox ativo, a diferença é que precisamos otimitir o `:not()` .

Bom, estamos terminando esse primeiro exemplo, falta apenas dois ajustes, alinhar o checkbox e a label, e dar um espaçamento entre eles. Fica da seguinte forma: 

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

![Resultado final de como ficou implementado o input de checkbox personalizado.](/assets/img/checkbox_com_imagem.png)

## Utilizando símbolos

Para essa abordagem utilizamos os mesmo conceitos da anterior, a diferença é que vamos ter que construir a estrutura do checkbox, ou seja, a parte visual, o que não acontece no caso da imagem. Bom, como já temos a estrutura pronta, vou apenas copiar o que já criamos:

`HTML`

```html
<div class="field-checkbox2">
    <input type="checkbox" class="field" id="exemple2" />
    <label for="exemple2" class="description">Me selecione 2</label>
</div>
```

 `CSS`

```css
.field-checkbox2 .field {
    position: absolute;
    left: 2px;
    top: 2px;
    opacity: 0;
}

.field-checkbox2 .field:not(:checked) + .description,
.field-checkbox2 .field:checked + .description {
   display: flex;
   align-items: center;
}

.field-checkbox2 .field:not(:checked) + .description::before,
.field-checkbox2 .field:checked + .description::before {
    margin-right: 10px;
} 
```

Agora já temos o que precisamos, vamos estilar o checkbox quando o mesmo não está ativo, usando as mesmas regras css anteriores, porém criando nosso próprio estilo.

```css
.field-checkbox2 .field:not(:checked) + .description::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid #000;
}
```

Note que deixei o `content` vazio, justamente para eu conseguir criar o meu próprio elemento, tendo isso em mente vamos dar um `display block`, para que de fato ele seja um bloco, inserimos largura e altura para dimensionarmos o tamanho que queremos do checkbox, e por fim, adicionamos uma borda pra dar a impressão de não selecionado. O resultado fica assim: 

![Resultado da segunda implementação do checkbox, personalizado.](/assets/img/checkbox_off.png)

E para finalizar, quando o checkbox estiver ativo, vamos acrescentar um símbolo de check para o nosso `content`, alinhando ele ao centro e adicionando um background para representar o input checado. Fica da seguinte forma:

```css
.field-checkbox2 .field:checked + .description::before {
    content: "✔";
    width: 10px;
    height: 10px;
    border: 2px solid #000;
    color: #FFF;  
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

Eu mantive as mesma propriedades do checkbox não ativo, porém adicionei as propriedades de alinhamento, background e color para conseguir chegar nesse resultado: 

![Resultado da segunda implementação do checkbox, personalizado.](/assets/img/checkbox_on.png)

Link com o código completo e demonstrando o funcionamento: <https://codepen.io/ReneSena/pen/jOrqyOy>

## Conclusão

As duas abordagens funcionam muito bem, mas na minha opinião, aconselho o uso da primeira, justamente por ser mais simples e manter o padrão de estilo em todos os browsers que você for usar, assim possuindo mais flexibilidade e padrão no layout. Ambos, permitem que leitores de tela, identifiquem os campos, mesmo eles se mantendo escondidos, auxiliando na acessibilidade. Essas são apenas, uma das formas de personalizar um checkbox, temos a possibilidade também, de no lugar de imagens, usar fontes de ícones personalizadas de acordo com o seu projeto e inserir usando o mesmo contexto da imagem, porém você vai precisar  adicionar as propriedades da fonte, para conseguir usá-las. Use o que melhor se enquadrar no seu projeto. :)

Uma observação a se considerar é que esse mesmo conceito, vale pra o `input radio,` e pra outras situações que você considere válida que não são necessariamente inputs, por exemplo as famosas `Tabs`, usando esse mesmo conceito da pra conseguir um resultado bacana sem usar javascript.

Bom pessoal, espero que tenham gostado dessas dicas, se vocês tiverem duvidas, sugestões, elogios ou críticas deixem nos comentários, e se por um acaso vocês tenham outras formas de fazer esses hack's, conta pra gente, não deixem de compartilhar com a comunidade. Até a próxima. :)  

## Referências

* Pseudo-classes: <https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes>
* Pseudo-elementos: <https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elementos>
* Seletores: <https://developer.mozilla.org/pt-BR/docs/Web/CSS/Seletores_CSS>