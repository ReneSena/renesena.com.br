---
title: Terminal customizável com Hyper, torne sua experiência de linha de
  comando mais amigável
description: Você conhece algum terminal que é possível modificar suas
  configurações visuais de formas simples? Bom, nesse post vou lhe apresentar o
  Hyper, um terminal feito em Electron e que nos permite dar nosso toque
  pessoal.
date: 2020-10-21 01:08:11
image: /assets/img/hyper.png
category: MISC
background: "#353b48"
---
![Uma imagem da logo do terminal Hyper e suas tecnologias de criação, que são html, css e javascript.](/assets/img/hyper.png)

Hey, guys!! Tudo jóia com você?!

Bom pessoal, nós que sempre que estamos codando, geralmente temos preferencias em relação a ambientes que utilizamos, seja IDE, ferramentas de organização, gerenciamento de tempo e afins. Com o terminal não é diferente, mas nem todos nós, inclusive eu (risos), não gostamos do visual padrão do terminal que vem no sistema operacional, e a boa noticia é que temos alternativas para mudar essa situação e deixar o terminal mais amigável e bonito com o **Hyper**. 

## Introdução

O Hyper é um terminal feito em [Electron](https://www.electronjs.org/) e que utiliza as principais linguagens da web (HTML, CSS e Javascript) na sua criação, seu intuito é permitir que os usuários adeptos da linha de comando tenham uma experiência agradável e que os ajudem a ter mais produtividade. A configuração é bem simples, e nos da flexibilidade para alterar cores, fontes, fazer integrações através de plugins e o mais bacana que é [`open source`](https://canaltech.com.br/produtos/O-que-e-open-source/). Ele está disponível pra Linux, Windows e MacOs, porém hoje vou mostrar a instalação no Linux, mais especificamente na distro Ubuntu. No final do post, deixarei referências para instalação dos demais sistemas operacionais. 

## Instalação

Primeiramente vamos acessar o site oficial do hyper [`https://hyper.is/`](https://hyper.is/) e navegar até a aba de `Downloads`, ao clicar no link somos direcionados para as versões disponíveis dos sistemas operacionais. Iremos escolher a opção `Debian(.deb)` e realizar o download. \
Após a conclusão do download, abra o seu terminal e rode o comando:

```shell
sudo apt update
```

Isso fará com que os pacotes e dependências locais de sua de sua máquina sejam atualizados, e após a conclusão, em seu terminal rode:

```shell
sudo apt upgrade
```

Essa ação atualizará completamente todos os novos pacotes e dependências que foram criados e que ainda não tinham sido atualizados. Finalizamos a etapa inicial, e agora precisamos acessar a pasta de `Downloads` do seu computador, onde o Hyper foi baixado. Em seu terminal acesse:

```shell
cd ~ / Downloads
```

Dentro da pasta de `Downloads`, certifique-se se existe um arquivo chamado `hyper_3.0.2_amd64.deb` *(a versão em questão está suscetível a mudanças dependendo da época acessada).* A após a verificação do arquivo, iremos realizar a instalação do pacote com o comando: 

```shell
sudo apt install ./hyper_3.0.2_amd64.deb
```

Será perguntado se você deseja continuar a instalação, digite `Y` 

![](/assets/img/background_css.jpg)

E finalmente conseguimos concluir a instalação do Hyper, agora precisamos de fato verificar seu funcionamento, procure em seus aplicativos o Hyper e clique para abrir. Caso não encontre, vá em seu terminal e escreva: 

```
Hyper
```

 Aguarde alguns segundos e logo abrirá nosso novo terminal bonitão, abaixo o seu visual padrão.

![](/assets/img/checkbox_off.png)

## Configuração

Bom, agora que temos o terminal instalado, vamos realizar algumas configurações, acessando o menu hambúrguer localizado ao lado esquerdo do terminal, clique em `Edit e em seguida Preferences`, ou se preferir use o atalho `CTRL + I`.

![Abrindo o menu de configurações do terminal Hyper](/assets/img/abrindo_menu_terminal.gif "dsds")

Irá abrir um arquivo `.txt`, com todas as definições do terminal, você pode alterar aquilo que você achar necessário, abaixo deixo algumas configurações como exemplo.

```json
/*Dentro do objeto module.exports, altere com os seguites valores */

fontSize: 14,
fontFamily: 'monospace',
fontWeight: 'normal',
fontWeightBold: 'bold',
lineHeight: 1.2,
letterSpacing: 1,
foregroundColor: '#fff',
backgroundColor: '#121212',
```

Dentre as alterações, mudei a fonte, tamanho da letra, espaçamento entre a linhas e letras e background, você comparando com seu arquivo poderá perceber o que foi alterado e ajustar do seu jeito. Todas as alterações que forem realizadas você deve salvar, e recarregar o terminal com `CTRL+SHIFT+F5`, dessa forma você garante a conclusão das alterações.

É bacana observar que existe um atributo chamado `plugins` e ele vem vazio por padrão, aqui irá ficar tudo aquilo que você instalar, seja um tema ou funcionalidades de terceiros. Pois bem, vou mostrar a instalação do tema [Dracula](https://draculatheme.com/hyper) e veja como é simples, abra seu terminal hyper e rode:

```shell
hyper install hyper-dracula
```

Após a conclusão, dê um `reload` no terminal apertando `CTRL+SFHIT+F5`, apenas realizado essa ação o tema já é aplicado, perceba que agora `plugins` está com preenchido.

```json
plugins: ["hyper-dracula"]
```

Outra alteração bacana que podemos realizar é alterar o estilo dos controles de maximizar, minimizar e fechar. Um visual bem popular é os controles do terminal do macOs, o processo também é fácil, basta rodar:

```
hyper i hyper-mac-controls
```

`Tema Dracula + Controles modificados`

Imagem do resultado final

Essas foram algumas configurações bem básicas perto do que da pra inserir no terminal, vou deixar um repositório com várias funcionalidades e customizações pra vocês testarem, acesse [awesome-hyper](https://github.com/bnb/awesome-hyper). Testem e adaptem o terminal pro dia a dia de vocês, acredito que será uma experiência bem bacana.

## Conclusão

O Hyper é um terminal muito dinâmico, e você consegue fazer várias integrações com ele, geralmente o pessoal gosta de instalar o [ZSH](https://ohmyz.sh/), para ajudar na produtividade, e recomendo vocês darem uma conferida, pois tem muito conteúdo sobre. Sendo assim, minha experiência está sendo bem produtiva com o novo terminal, e cada dia que passa vou adaptando para o meu uso, acredito que essa seja uma das grandes vantagens de usá-lo.

Bem pessoal, espero que vocês tenham gostado da dica de hoje, e qualquer duvida, sugestão, crítica ou elogio, deixem nos comentários, não deixem de compartilhar a opinião de vocês sobre o assunto. Até a próxima!! :)

## Referências

* Site oficial do Hyper: [https://hyper.is](https://hyper.is/#installation)
* Configuração do Hyper pro Windows, acesse [aqui](<* https://medium.com/collabcode/hyper-no-windows10-instala%C3%A7%C3%A3o-configura%C3%A7%C3%A3o-integra%C3%A7%C3%A3o-vscode-cf80ad4a696d>).
* Repositório com libs pro Hyper: <https://github.com/bnb/awesome-hyper>
* Instalação por vídeo da Rockeseat: <https://www.youtube.com/watch?v=5zl6ufeyGHE>
* Theme Dracula - <https://draculatheme.com/hyper>
* Instalação do ZSH por vídeo: <https://www.youtube.com/watch?v=Y769Tn7DYiQ>
* Site oficial do ZSH: <https://ohmyz.sh/>