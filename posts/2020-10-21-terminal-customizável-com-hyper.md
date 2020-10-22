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

```
cd ~ / Downloads
 

```

Dentro da pasta de `Downloads`, certifique-se se existe um arquivo chamado `hyper_3.0.2_amd64.deb` *(a versão em questão está suscetível a mudanças dependendo da época acessada).* A após a verificação do arquivo, iremos realizar a instalação do pacote com o comando: 

```
sudo apt install ./ hyper_3.0.2_amd64.deb
```