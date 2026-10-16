import type { Lang } from './career';

// Cada card parte de uma dor do cliente; a lista mostra o que entra no pacote
export const services: { title: Record<Lang, string>; pain: Record<Lang, string>; items: Record<Lang, string[]> }[] = [
  {
    title: { pt: 'Sites e landing pages', en: 'Websites and landing pages' },
    pain: { pt: 'Precisa de uma página que traga resultado de verdade?', en: 'Need a page that actually brings results?' },
    items: {
      pt: ['Landing pages e sites institucionais', 'Migração de sites antigos ou lentos', 'SEO, formulário de contato e métricas já configurados'],
      en: ['Landing pages and company websites', 'Migrating old or slow websites', 'SEO, contact form and analytics set up from day one'],
    },
  },
  {
    title: { pt: 'Check-up do seu site ou sistema', en: 'A check-up for your website or system' },
    pain: { pt: 'Não sabe se seu site está lento, difícil de usar ou vulnerável?', en: 'Not sure if your site is slow, hard to use or vulnerable?' },
    items: {
      pt: [
        'Performance: velocidade e Core Web Vitals',
        'Acessibilidade: WCAG e Lei Brasileira de Inclusão',
        'Segurança: HTTPS, dependências, formulários e dados pessoais (LGPD)',
        'Relatório com o que corrigir e em que ordem, e a correção, se você quiser',
      ],
      en: [
        'Performance: speed and Core Web Vitals',
        'Accessibility: WCAG guidelines',
        'Security: HTTPS, dependencies, forms and personal data',
        'A report of what to fix and in what order, plus the fix if you want it',
      ],
    },
  },
  {
    title: { pt: 'Automação e IA no dia a dia', en: 'Automation and AI for everyday work' },
    pain: { pt: 'Sua equipe perde horas com tarefas repetitivas?', en: 'Is your team losing hours to repetitive tasks?' },
    items: {
      pt: ['Integração entre planilhas, formulários, CRM e e-mail', 'Assistentes com IA para atendimento e documentos', 'Apoio para o time usar IA com segurança'],
      en: ['Connecting spreadsheets, forms, CRM and email', 'AI assistants for support and documents', 'Helping your team use AI safely'],
    },
  },
  {
    title: { pt: 'Ferramentas internas sob medida', en: 'Custom internal tools' },
    pain: { pt: 'Controla tudo em planilha e já não está dando conta?', en: 'Running everything on spreadsheets and it no longer keeps up?' },
    items: {
      pt: ['Painéis e dashboards', 'Pequenos sistemas de gestão', 'Pensados a partir de quem usa no dia a dia'],
      en: ['Dashboards and admin panels', 'Small management systems', 'Designed around the people who use them every day'],
    },
  },
];

export const formats: { title: Record<Lang, string>; text: Record<Lang, string> }[] = [
  {
    title: { pt: 'Diagnóstico', en: 'Assessment' },
    text: { pt: 'Escopo e prazo fechados, com relatório no final.', en: 'Fixed scope and deadline, with a report at the end.' },
  },
  {
    title: { pt: 'Projeto fechado', en: 'Fixed-scope project' },
    text: { pt: 'Entregas e prazo combinados antes de começar.', en: 'Deliverables and timeline agreed before we start.' },
  },
  {
    title: { pt: 'Consultoria', en: 'Consulting' },
    text: {
      pt: 'Uma segunda opinião, ajuda para escolher tecnologias ou revisar a arquitetura.',
      en: 'A second opinion, help choosing technologies or reviewing architecture.',
    },
  },
];
