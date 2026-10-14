export interface StackGroup {
  id: string;
  label: { pt: string; en: string };
  items: string[];
}

/** Ordem = anel interno → anel externo do sistema planetário */
export const stack: StackGroup[] = [
  { id: 'core', label: { pt: 'Base', en: 'Core' }, items: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript'] },
  {
    id: 'react',
    label: { pt: 'Ecossistema React', en: 'React ecosystem' },
    items: ['React', 'React Query', 'Styled Components', 'Material UI'],
  },
  {
    id: 'arch',
    label: { pt: 'Arquitetura', en: 'Architecture' },
    items: ['Micro Front-ends', 'Design System', 'Storybook', 'Node.js', 'NestJS', 'Webpack'],
  },
  {
    id: 'quality',
    label: { pt: 'Qualidade & Observabilidade', en: 'Quality & Observability' },
    items: ['Jest', 'React Testing Library', 'Playwright', 'Datadog', 'New Relic', 'Segment'],
  },
  { id: 'flow', label: { pt: 'Fluxo', en: 'Workflow' }, items: ['Azure DevOps', 'Figma', 'Scrum', 'WordPress'] },
];

/** slug do pacote simple-icons; ausentes usam glyph próprio (ver icons.ts) */
export const iconSlug: Record<string, string> = {
  HTML: 'html5',
  CSS: 'css',
  Sass: 'sass',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  React: 'react',
  'React Query': 'reactquery',
  'Styled Components': 'styledcomponents',
  'Material UI': 'mui',
  Storybook: 'storybook',
  'Node.js': 'nodedotjs',
  NestJS: 'nestjs',
  Webpack: 'webpack',
  Jest: 'jest',
  'React Testing Library': 'testinglibrary',
  Datadog: 'datadog',
  'New Relic': 'newrelic',
  Figma: 'figma',
  WordPress: 'wordpress',
};
