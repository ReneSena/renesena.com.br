---
title: "Inversão de dependência no Design System: trocar de biblioteca mexendo em um arquivo só"
description: Quando vários micro front-ends consomem o mesmo Design System, trocar uma biblioteca vira um projeto. Uma tomada, um adaptador e quatro passos mudam isso.
date: 2026-10-13
image: /assets/img/inversao-dependencia.png
category: Arquitetura
---

Apresentei este tema para o meu time há pouco tempo, e a conversa rendeu tanto que resolvi transformar em texto. O ponto de partida é uma pergunta simples: **quanto custa trocar uma biblioteca que o seu Design System usa por baixo?**

Se a resposta for "depende de quantos times usam o componente", este artigo é para você.

## Antes do código, uma história

Pense num abajur. Ele só quer energia. Não sabe se ela vem de uma hidrelétrica, de um painel solar ou de um gerador, e nem precisa saber: ele conhece **a tomada**, o padrão combinado. Se a tomada da parede for diferente, você usa **um adaptador**. Ninguém troca o abajur.

| No mundo real | No Design System |
| --- | --- |
| Abajur | O componente |
| Tomada | O contrato |
| Adaptador | O adapter |
| Usina | A biblioteca |

Troca a usina, o abajur fica. É exatamente essa a ideia.

## O problema: o abajur soldado no fio da usina

Num Design System consumido por vários micro front-ends, é comum o componente conhecer os detalhes da biblioteca que usa por baixo. E aí cada detalhe vaza para quem consome.

**1. Trocar a lib quebra os MFEs.** Cada biblioteca de máscara escreve o padrão de um jeito. Se o componente expõe isso numa prop, todo MFE que usa a prop teria que mudar junto:

```tsx
// hoje, no MFE
<Input maskCustom="99/99/9999" />

// com outra lib, teria que virar
<Input maskCustom="00/00/0000" />
```

**2. Às vezes a troca tem prazo.** O `react-input-mask` é um bom exemplo: a v3 nunca saiu de alpha, e a biblioteca depende do `findDOMNode`, uma API que o React 19 removeu. Não é "se" vai precisar trocar, é "quando".

**3. As regras ficam presas à lib.** Formatação de CPF, CNPJ e moeda acaba escrita no formato que a biblioteca entende. Não dá para reaproveitar essas regras sem ela, nem testar sem ela.

Quanto mais MFEs usam o Design System, mais cara fica cada troca.

## A solução tem nome: inversão de dependência

Inverter a dependência é colocar uma tomada no meio.

```text
Hoje (dependência direta):
  Componente ──► Biblioteca

Proposta (dependência invertida):
  Componente ──► Contrato ◄── Adapter ──► Biblioteca
```

Hoje o componente conhece os detalhes da biblioteca: se ela muda, ele quebra junto. Na proposta, o componente e o adapter só conhecem o contrato. A biblioteca fica escondida atrás do adapter, e dá para trocá-la sem mexer no componente.

A ideia não é nova. É o "D" do SOLID, o princípio formulado por Robert C. Martin nos anos 90, e nasceu da mesma dor: mexer num detalhe quebrava a parte importante.

> O componente conhece **o que** precisa. O adapter conhece **como** fazer.

## Em código, com um Modal

Antes, o abajur soldado na usina:

```tsx
import ReactModal from 'react-modal';

export function Modal({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </ReactModal>
  );
}
```

Depois, com tomada e adaptador. Primeiro a tomada, que é o que o Modal precisa, escrito no vocabulário do Design System:

```tsx
// contracts/dialog.ts
import type { ComponentType, ReactNode } from 'react';

export type DialogEngine = ComponentType<{
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}>;
```

Depois o adaptador, **o único arquivo que conhece a biblioteca**:

```tsx
// adapters/ReactModalEngine.tsx
import ReactModal from 'react-modal';
import type { DialogEngine } from '../contracts/dialog';

export const ReactModalEngine: DialogEngine = ({ open, onClose, children }) => (
  <ReactModal isOpen={open} onRequestClose={onClose}>
    {children}
  </ReactModal>
);
```

O componente recebe o contrato de fora e não sabe qual biblioteca está do outro lado:

```tsx
// Modal/createModal.tsx
import type { ReactNode } from 'react';
import type { DialogEngine } from '../contracts/dialog';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

export function createModal(Engine: DialogEngine) {
  return function Modal({ isOpen, onRequestClose, children }: ModalProps) {
    return (
      <Engine open={isOpen} onClose={onRequestClose}>
        {children}
      </Engine>
    );
  };
}
```

E um único arquivo escolhe qual adapter está em uso:

```tsx
// Modal/index.ts
import { createModal } from './createModal';
import { ReactModalEngine } from '../adapters/ReactModalEngine';

export const Modal = createModal(ReactModalEngine);
```

Para quem consome, nada mudou: continua sendo `<Modal isOpen onRequestClose>`.

### Trocando a usina

Imagine que o time decide sair do `react-modal` e usar o `<dialog>` nativo do navegador. A troca é escrever um adapter novo:

```tsx
// adapters/NativeDialogEngine.tsx
import { useEffect, useRef } from 'react';
import type { DialogEngine } from '../contracts/dialog';

export const NativeDialogEngine: DialogEngine = ({ open, onClose, children }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onCancel={(event) => {
        // o Esc pede para fechar; quem decide é o estado de quem usa o Modal
        event.preventDefault();
        onClose();
      }}
    >
      {children}
    </dialog>
  );
};
```

E mudar duas linhas no arquivo que escolhe o adapter:

```diff
- import { ReactModalEngine } from '../adapters/ReactModalEngine';
- export const Modal = createModal(ReactModalEngine);
+ import { NativeDialogEngine } from '../adapters/NativeDialogEngine';
+ export const Modal = createModal(NativeDialogEngine);
```

Nenhum MFE muda. E se der problema em produção, voltar são as mesmas duas linhas.

## A receita: quatro passos para qualquer componente

1. **Escreva o contrato:** o que o componente precisa, no vocabulário do Design System.
   `type DialogEngine = ComponentType<{ open; onClose; children }>`
2. **Faça o componente receber o contrato de fora.**
   `function createModal(Engine: DialogEngine) { … }`
3. **Mova a biblioteca para um adapter.**
   `adapters/ReactModalEngine.tsx` passa a ser o único import de `'react-modal'`.
4. **Escolha o adapter em um único arquivo.**
   `export const Modal = createModal(ReactModalEngine);`

## Testes que valem para qualquer biblioteca

Os testes usam a API pública do componente, do jeito que a pessoa usuária usa, sem citar a biblioteca:

```tsx
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

it('mostra o conteúdo quando está aberto', () => {
  render(
    <Modal isOpen onRequestClose={() => {}}>
      <p>Contrato salvo</p>
    </Modal>,
  );

  expect(screen.getByRole('dialog')).toHaveTextContent('Contrato salvo');
});
```

Trocou a biblioteca, os mesmos testes dizem se o componente continua funcionando. Isso vale também para atualizar uma versão major. (Um cuidado prático: o ambiente de teste precisa suportar o que o adapter usa. No jsdom, por exemplo, o `<dialog>` nativo pode precisar de um polyfill.)

## E as regras de negócio?

No caso das máscaras, o ganho é ainda maior. Quando as regras saem de dentro da lib, CPF, CNPJ e moeda viram **funções puras**:

```ts
// rules/documents.ts — nenhuma biblioteca aqui
const onlyDigits = (value: string) => value.replace(/\D/g, '');

export function formatCPF(value: string) {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}
```

Com teste unitário simples, sem renderizar nada:

```ts
expect(formatCPF('12345678901')).toBe('123.456.789-01');
expect(formatCPF('123.456.789-01')).toBe('123.456.789-01');
```

E o MFE passa a falar a língua do Design System, não a de cada biblioteca: `<Input mask="cpf" />` no lugar de `maskCustom="999.999.999-99"`. Qual lib aplica a máscara na tela, e como ela lida com o cursor, vira assunto do adapter.

## O que ganhamos (e quanto custa)

- **Troca concentrada:** biblioteca nova é um adapter e duas linhas. Nenhum MFE muda.
- **Atualização segura:** os mesmos testes validam uma lib nova ou uma versão major.
- **Reversão barata:** deu problema em produção? Voltar são as mesmas duas linhas.
- **API estável:** quem consome aprende a API do Design System, não a de cada biblioteca.
- **Regras testáveis:** CPF e CNPJ viram funções puras, com teste unitário simples.

**O preço:** é um seguro. Custa uma camada a mais agora e paga quando houver troca. Por isso não faz sentido aplicar em tudo. Vale para as dependências com **risco real de troca**: bibliotecas paradas, com breaking changes à vista ou que vazam a própria API para quem consome.

## Para fechar

Inversão de dependência costuma aparecer em aula de back-end, com repositórios e bancos de dados. Mas a dor é a mesma no front: quando um detalhe muda, a parte importante não deveria quebrar junto. Num Design System que vários times consomem, essa tomada no meio é o que separa "trocar uma biblioteca" de "abrir um projeto em cada MFE".

O abajur só precisa conhecer a tomada.
