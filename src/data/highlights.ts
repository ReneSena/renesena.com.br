// Cases da seção Destaques (também alimentam o assistente do site)
export const cases = [
  {
    tag: 'TCS · Ticket',
    year: '2024 —',
    title: { pt: 'Backoffice pós-Oracle R12', en: 'Post-Oracle R12 backoffice' },
    pain: {
      pt: 'A migração do Oracle R11 para o R12 deixou um módulo crítico sem substituto — e a operação não podia parar.',
      en: 'Migrating Oracle R11 to R12 left a critical module with no replacement — and operations could not stop.',
    },
    decision: {
      pt: 'Com autonomia sobre layout e UX, desenhei os fluxos a partir da rotina de quem opera e garanti a entrega com testes unitários e de ponta a ponta.',
      en: 'Owning layout and UX decisions, I designed the flows around operators’ routines and backed each delivery with unit and end-to-end tests.',
    },
    solution: {
      pt: 'Novos módulos de Contratos e Clientes pensados a partir da rotina de quem opera, para que a troca de sistema não travasse o dia a dia.',
      en: 'New Contracts and Customers modules designed around operators’ routines, so the system switch wouldn’t stall the day-to-day.',
    },
    tags: ['Micro Front-ends', 'React', 'TypeScript', 'E2E'],
  },
  {
    tag: 'NTT DATA · BEES',
    year: '2021 — 2024',
    title: { pt: 'Backoffice BEES / Ambev', en: 'BEES / Ambev backoffice' },
    pain: {
      pt: 'Usuários internos dependiam de outras equipes para tarefas do dia a dia na plataforma B2B.',
      en: 'Internal users depended on other teams for day-to-day tasks on the B2B platform.',
    },
    decision: {
      pt: 'Construí as telas e a camada que entrega a elas só o necessário, acompanhei o uso de cada feature e apoiei quem estava chegando no time.',
      en: 'I built the screens and the layer that feeds them only what they need, tracked how each feature was used and backed up newcomers on the team.',
    },
    solution: {
      pt: 'Ferramentas internas que devolveram autonomia a quem opera a plataforma, sem depender de outros times para o básico.',
      en: 'Internal tools that gave platform operators their autonomy back, without depending on other teams for the basics.',
    },
    tags: ['React Query', 'NestJS', 'Azure DevOps', 'Jest'],
  },
  {
    tag: 'Docket',
    year: '2018 — 2021',
    title: { pt: 'Design System do zero', en: 'Design System from scratch' },
    pain: {
      pt: 'Telas inconsistentes e features legadas difíceis de evoluir em HTML/Thymeleaf.',
      en: 'Inconsistent screens and legacy features that were hard to evolve in HTML/Thymeleaf.',
    },
    decision: {
      pt: 'Lado a lado com o design, construí e mantive os componentes do Design System — e ajudei a escolher quem chegaria ao time, conduzindo entrevistas técnicas.',
      en: 'Side by side with design, I built and maintained the Design System components — and helped choose who’d join the team by running technical interviews.',
    },
    solution: {
      pt: 'Um Design System criado junto com o time de design, dando uma linguagem única às telas e um caminho para modernizar o legado.',
      en: 'A Design System built with the design team, giving screens a single language and a path to modernize the legacy.',
    },
    tags: ['Storybook', 'Design System', 'Styled Components'],
  },
];
