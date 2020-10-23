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

Será perguntado se você deseja continuar a instalação você digite `Y` 

imagem

E finalmente conseguimos concluir a instalação do Hyper, agora precisamos de fato verificar seu funcionamento, procure em seus aplicativos o Hyper e clique para abrir. Caso não encontre, vá em seu terminal e escreva: 

```
Hyper
```

 Aguarde alguns segundos e logo abrirá nosso novo terminal bonitão, abaixo o seu visual padrão.

![](/assets/img/checkbox_off.png)

Bom, agora que temos o terminal instalado, vamos realizar algumas configurações, acessando o menu hambúrguer localizado ao lado esquerdo do terminal, clique em `Edit e em seguida Preferences`, ou se preferir use o atalho `CTRL + I`.

![Abrindo o menu de configurações do terminal Hyper](/assets/img/abrindo_menu_terminal.gif)

Irá abrir um arquivo `.txt`, com todas as definições do terminal, você pode alterar aquilo que você achar necessário, abaixo deixo algumas configurações como exemplo.

```json
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1.2,

    // letter spacing as a relative unit
    letterSpacing: 1,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#121212',

    // terminal selection color
    selectionColor: 'rgba(248,28,229,0.3)',

    // border color (window, tabs)
    borderColor: '#333',

    // custom CSS to embed in the main window
    css: '',

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
```

Dentre as alterações, mudei a fonte, tamanho da letra, espaçamento entre a linhas e letras e background, você comparando com seu arquivo poderá perceber o que foi alterado e ajustar do seu jeito. Todas as alterações que forem realizadas você deve salvar, e recarregar o terminal com `CTRL+SHIFT+F5`, dessa forma você garante a conclusão das alterações.

É bacana observar que existe um atributo chamado `plugins` e ele vem vazio por padrão, aqui irá ficar tudo aquilo que você instalar, seja um tema ou funcionalidades de terceiros. Pois bem, vou mostrar a instalação do tema Drácula e veja como é simples, abra seu terminal hyper e rode:

```shell
hyper install hyper-dracula
```

Após a conclusão, dê um `reload` no terminal apertando `CTRL+SFHIT+F5`, apenas realizado essa ação o tema já é aplicado, perceba que agora plugins está com preenchido.

```json
plugins: ["hyper-dracula"]
```