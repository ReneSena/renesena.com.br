export type Lang = 'pt' | 'en';
type L = Record<Lang, string>;

export interface Role {
  title: L;
  start: string; // YYYY-MM
  end?: string; // undefined = atual
}

export interface Phase {
  id: string;
  company: string;
  client?: string;
  kind: 'origin' | 'education' | 'work' | 'teaching';
  location: string | L; // string = igual nos dois idiomas
  roles: Role[];
  summary: L;
  bullets: Record<Lang, string[]>;
  techs: string[];
}

export const phases: Phase[] = [
  {
    id: 'itaipu',
    company: 'Legião Mirim · Grupo Itaipu',
    kind: 'origin',
    location: 'Mogi das Cruzes, SP',
    roles: [
      { title: { pt: 'Aprendiz — Legião Mirim', en: 'Apprentice — Legião Mirim' }, start: '2011-11', end: '2013-05' },
      { title: { pt: 'Auxiliar Administrativo Júnior', en: 'Junior Administrative Assistant' }, start: '2013-06', end: '2015-05' },
      { title: { pt: 'Auxiliar de Estoque', en: 'Stock Assistant' }, start: '2015-05', end: '2017-09' },
    ],
    summary: {
      pt: 'O primeiro salto. Quase seis anos entre papéis, planilhas e estoque — onde aprendi processo, disciplina e a olhar para a dor de quem opera o dia a dia.',
      en: 'The first jump. Almost six years among paperwork, spreadsheets and inventory — where I learned process, discipline and to see the pain of the people running the day-to-day.',
    },
    bullets: {
      pt: ['Começo como aprendiz pela Legião Mirim', 'Rotinas administrativas e controle de estoque', 'Base de responsabilidade e visão de operação'],
      en: ['Started as an apprentice through Legião Mirim', 'Administrative routines and inventory control', 'Foundation in responsibility and operations'],
    },
    techs: [],
  },
  {
    id: 'etec',
    company: 'Etec Presidente Vargas',
    kind: 'education',
    location: 'Mogi das Cruzes, SP',
    roles: [{ title: { pt: 'Técnico em Edificações', en: 'Building Construction Technician' }, start: '2014-02', end: '2015-12' }],
    summary: {
      pt: 'Arquitetura e tecnologia sempre foram minhas paixões. Em paralelo ao trabalho, o curso técnico em Edificações me ensinou a projetar antes de construir — e, mais tarde, a escolher qual dos dois caminhos seguir.',
      en: 'Architecture and technology were always my passions. Alongside work, a technical course in Building Construction taught me to design before building — and, later, to choose which of the two paths to follow.',
    },
    bullets: {
      pt: ['Curso técnico em Edificações', 'Desenho técnico, projeto e planejamento de obras', 'Conciliado com o trabalho administrativo'],
      en: ['Technical course in Building Construction', 'Technical drawing, design and construction planning', 'Balanced with administrative work'],
    },
    techs: [],
  },
  {
    id: 'umc',
    company: 'Universidade de Mogi das Cruzes',
    kind: 'education',
    location: 'Mogi das Cruzes, SP',
    roles: [{ title: { pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', en: 'Technologist in Systems Analysis & Development' }, start: '2016-08', end: '2018-07' }],
    summary: {
      pt: 'A virada de rota: conciliando o estoque com a faculdade, descobri no código uma forma de resolver as dores que eu via de perto todos os dias.',
      en: 'The change of course: balancing inventory work with college, I found in code a way to solve the pain points I saw up close every day.',
    },
    bullets: {
      pt: ['Graduação em Análise e Desenvolvimento de Sistemas', 'Primeiro contato com HTML, CSS e JavaScript'],
      en: ['Degree in Systems Analysis and Development', 'First contact with HTML, CSS and JavaScript'],
    },
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'industrialleds',
    company: 'Industrialleds do Brasil',
    kind: 'work',
    location: 'Mogi das Cruzes, SP',
    roles: [{ title: { pt: 'Estagiário de Desenvolvimento Web', en: 'Web Development Intern' }, start: '2018-03', end: '2018-07' }],
    summary: {
      pt: 'Primeiro emprego na área. O estágio de quem faz de tudo um pouco — e a confirmação de que eu tinha escolhido a rota certa.',
      en: 'First job in tech. The kind of internship where you do a bit of everything — and the confirmation I’d picked the right course.',
    },
    bullets: {
      pt: [
        'Landing pages de produtos com HTML, CSS e JS',
        'Manutenção de sites e plataformas WordPress e Prestashop',
        'Anúncios para Mercado Livre no Photoshop',
        'Suporte interno aos usuários',
      ],
      en: [
        'Product landing pages with HTML, CSS and JS',
        'Maintained WordPress and Prestashop sites and platforms',
        'Created Mercado Livre ads in Photoshop',
        'Internal user support',
      ],
    },
    techs: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    id: 'docket',
    company: 'Docket Brasil',
    kind: 'work',
    location: 'São Paulo, SP',
    roles: [
      { title: { pt: 'Assistente de TI', en: 'IT Assistant' }, start: '2018-08', end: '2019-07' },
      { title: { pt: 'Front-end Developer I', en: 'Front-end Developer I' }, start: '2019-07', end: '2020-01' },
      { title: { pt: 'Front-end Developer II', en: 'Front-end Developer II' }, start: '2020-01', end: '2020-09' },
      { title: { pt: 'Front-end Developer III', en: 'Front-end Developer III' }, start: '2020-09', end: '2021-07' },
    ],
    summary: {
      pt: 'Três anos, quatro cargos. Entrei pelo suporte de TI e saí como Front-end III — crescendo junto com o time, lado a lado com design e ajudando a escolher quem chegaria depois.',
      en: 'Three years, four titles. I came in through IT support and left as Front-end III — growing with the team, side by side with design and helping choose who’d join next.',
    },
    bullets: {
      pt: [
        'Criação do Design System junto ao time de design, com componentes no Storybook',
        'Novo sistema baseado em micro front-ends com React',
        'Migração de features legadas para React e Styled Components',
        'Back-offices com HTML, CSS, JS, Webpack e Thymeleaf; style guides com designers',
        'Entrevistas técnicas para o time de desenvolvimento',
      ],
      en: [
        'Built the Design System with the design team, components in Storybook',
        'New micro front-end based system with React',
        'Migrated legacy features to React and Styled Components',
        'Back-offices with HTML, CSS, JS, Webpack and Thymeleaf; style guides with designers',
        'Ran technical interviews for the dev team',
      ],
    },
    techs: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Webpack', 'React', 'Styled Components', 'Storybook', 'Micro Front-ends', 'Design System', 'Scrum'],
  },
  {
    id: 'alura',
    company: 'Alura',
    kind: 'education',
    location: { pt: 'Remoto', en: 'Remote' },
    roles: [{ title: { pt: 'Bootcamp Front-end JAMStack', en: 'Front-end JAMStack Bootcamp' }, start: '2021-02', end: '2021-05' }],
    summary: {
      pt: 'Checagem de equipamento: uma pausa intencional para estudar e voltar mais preparado para o próximo salto.',
      en: 'Gear check: a deliberate pause to study and come back better prepared for the next jump.',
    },
    bullets: {
      pt: ['Imersão em JAMStack e no ecossistema React', 'Base para a próxima fase: front-end em escala'],
      en: ['Deep dive into JAMStack and the React ecosystem', 'Groundwork for the next phase: front-end at scale'],
    },
    techs: ['React', 'JavaScript'],
  },
  {
    id: 'bees',
    company: 'NTT DATA',
    client: 'BEES · Ambev',
    kind: 'work',
    location: 'Campinas / São Paulo, SP',
    roles: [
      { title: { pt: 'Front-end Developer', en: 'Front-end Developer' }, start: '2021-07', end: '2022-07' },
      { title: { pt: 'Software Engineer I', en: 'Software Engineer I' }, start: '2022-07', end: '2023-07' },
      { title: { pt: 'Software Engineer II', en: 'Software Engineer II' }, start: '2023-08', end: '2024-11' },
    ],
    summary: {
      pt: 'Mais de três anos construindo o backoffice de quem faz a operação da Ambev acontecer. Aprendi a pensar em escala — de produto, de time e de autonomia para quem está do outro lado da tela.',
      en: 'Over three years building the backoffice for the people who keep Ambev’s operation running. I learned to think at scale — product, team and autonomy for whoever is on the other side of the screen.',
    },
    bullets: {
      pt: [
        'Micro front-ends com React, TypeScript, Styled Components, Material UI, React Query',
        'BFF com NestJS/Node.js para enviar só o necessário ao client',
        'Testes unitários com Jest e React Testing Library',
        'Monitoramento com New Relic e métricas de features com Segment.io',
        'Pipelines CI/CD no Azure DevOps',
        'Design System / Storybook e protótipos do Figma em interfaces reais',
        'Apoio aos membros menos experientes do time',
      ],
      en: [
        'Micro front-ends with React, TypeScript, Styled Components, Material UI, React Query',
        'BFF with NestJS/Node.js to send only what the client needs',
        'Unit tests with Jest and React Testing Library',
        'Monitoring with New Relic and feature metrics with Segment.io',
        'CI/CD pipelines on Azure DevOps',
        'Design System / Storybook and Figma prototypes into real interfaces',
        'Supported less experienced teammates',
      ],
    },
    techs: [
      'React', 'TypeScript', 'Styled Components', 'Material UI', 'React Query', 'NestJS', 'Node.js', 'Jest',
      'React Testing Library', 'New Relic', 'Segment', 'Azure DevOps', 'Storybook', 'Figma', 'Micro Front-ends', 'Design System', 'Scrum',
    ],
  },
  {
    id: 'algaworks',
    company: 'AlgaWorks',
    kind: 'teaching',
    location: { pt: 'Remoto', en: 'Remote' },
    roles: [{ title: { pt: 'Tutor', en: 'Tutor' }, start: '2022-05', end: '2023-04' }],
    summary: {
      pt: 'Em paralelo, retribuindo: como tutor, ajudei quem estava começando a dar os primeiros saltos — e aprendi ensinando.',
      en: 'In parallel, paying it forward: as a tutor, I helped beginners take their first jumps — and learned by teaching.',
    },
    bullets: {
      pt: ['Dúvidas no fórum sobre HTML, CSS, JavaScript e React', 'Compartilhar conhecimento como forma de aprender'],
      en: ['Answered forum questions on HTML, CSS, JavaScript and React', 'Sharing knowledge as a way of learning'],
    },
    techs: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 'c6',
    company: 'NTT DATA',
    client: 'C6 Bank',
    kind: 'work',
    location: 'São Paulo, SP',
    roles: [{ title: { pt: 'Front-end Developer', en: 'Front-end Developer' }, start: '2024-05', end: '2024-11' }],
    summary: {
      pt: 'Uma passagem curta pelo mercado financeiro, evoluindo o CRM e a sessão que os times do banco usam todo dia — entendendo rápido o contexto de cada squad para entregar sem atrito.',
      en: 'A short stint in banking, evolving the CRM and the session the bank’s teams use every day — quickly understanding each squad’s context to deliver without friction.',
    },
    bullets: {
      pt: [
        'Melhorias na sessão do usuário logado',
        'Evolução de features do CRM usado pelos times do banco',
        'Demandas front-end para diferentes squads, conforme a necessidade de cada time',
      ],
      en: [
        'Improvements to the logged-in user session',
        'Enhancements to CRM features used by the bank’s teams',
        'Front-end requests for different squads, as each team needed',
      ],
    },
    techs: ['React', 'TypeScript'],
  },
  {
    id: 'tcs',
    company: 'Tata Consultancy Services',
    client: 'Ticket',
    kind: 'work',
    location: 'São Paulo, SP',
    roles: [{ title: { pt: 'Senior Front-end Developer', en: 'Senior Front-end Developer' }, start: '2024-11' }],
    summary: {
      pt: 'Pouso atual: levar uma operação crítica para um novo backoffice sem travar o dia a dia — decidindo a experiência de quem usa a ferramenta.',
      en: 'Current landing: moving a critical operation to a new backoffice without stalling its day-to-day — owning the experience of the people who use the tool.',
    },
    bullets: {
      pt: [
        'Interfaces dos módulos de Contratos e Clientes, com autonomia sobre layout e UX',
        'Novos módulos que centralizam informações críticas do negócio',
        'Arquitetura de micro front-ends para escalar e desacoplar',
        'Cache e gerenciamento de estado reduzindo tempo de resposta',
        'Testes automatizados unitários e end-to-end (Playwright)',
        'Observabilidade com Datadog',
      ],
      en: [
        'Built the Contracts and Customers modules, owning layout and UX decisions',
        'New modules centralizing business-critical information',
        'Micro front-end architecture for scale and decoupling',
        'Caching and state management cutting response times',
        'Automated unit and end-to-end tests (Playwright)',
        'Observability with Datadog',
      ],
    },
    techs: ['React', 'TypeScript', 'Micro Front-ends', 'React Query', 'Jest', 'Playwright', 'Datadog', 'Node.js', 'Scrum'],
  },
];

export function phaseYears(p: Phase) {
  const start = p.roles[0].start.slice(0, 4);
  const last = p.roles[p.roles.length - 1];
  const end = last.end ? last.end.slice(0, 4) : null;
  return { start, end };
}

export function phaseLocation(p: Phase, lang: Lang) {
  return typeof p.location === 'string' ? p.location : p.location[lang];
}

export function formatPeriod(p: Phase, lang: Lang) {
  const { start, end } = phaseYears(p);
  const now = lang === 'pt' ? 'hoje' : 'now';
  if (!end) return `${start} — ${now}`;
  return start === end ? start : `${start} — ${end}`;
}

const yearsSince = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  const now = new Date();
  return Math.floor((now.getFullYear() - y) + (now.getMonth() + 1 - m) / 12);
};

export const stats = {
  devYears: yearsSince('2018-03'),
  techYears: yearsSince('2016-08'),
  journeyYears: yearsSince(phases[0].roles[0].start),
  techs: new Set(phases.flatMap((p) => p.techs)).size,
};

export const certifications = [
  'Engenharia de Usabilidade pra Sistemas Web',
  'Acessibilidade web parte 1: tornando seu front-end inclusivo',
  'Bootcamp Front-end JAMStack',
];
