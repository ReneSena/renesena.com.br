// Executado só no build (frontmatter Astro): nenhum ícone vai para o JS do cliente.
import * as si from 'simple-icons';
import { iconSlug } from './stack';

type SimpleIcon = { slug: string; path: string; hex: string };
const bySlug = new Map<string, SimpleIcon>(
  Object.values(si as unknown as Record<string, SimpleIcon>)
    .filter((i) => i && typeof i === 'object' && 'slug' in i)
    .map((i) => [i.slug, i]),
);

/** Glyphs de traço próprios para conceitos/marcas sem ícone no pacote */
const custom: Record<string, { svg: string; hex: string }> = {
  'Micro Front-ends': {
    hex: '#F97316',
    svg: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="4"/>',
  },
  'Design System': {
    hex: '#F97316',
    svg: '<circle cx="7" cy="7" r="4"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><path d="M7 13.5 11 20.5H3z"/><path d="M13 17h8M17 13v8"/>',
  },
  Playwright: {
    hex: '#2EAD33',
    svg: '<path d="M3 6.5c3-1.6 6-1.6 9 0v6c0 3.6-2 6-4.5 6S3 16.1 3 12.5z"/><path d="M12 9.5c3-1.6 6-1.6 9 0v5c0 3.4-2 5.5-4.5 5.5-1.6 0-3-.9-3.8-2.4"/><path d="M5.5 10.5h1.2M8.6 10.5h1.2M5.8 14.2q1.7 1.4 3.4 0"/>',
  },
  Segment: {
    hex: '#52BD94',
    svg: '<path d="M3 9h12M9 15h12"/><path d="M18.5 9a7 7 0 0 0-12-3.5M5.5 15a7 7 0 0 0 12 3.5"/><circle cx="18.5" cy="9" r=".6" fill="currentColor"/><circle cx="5.5" cy="15" r=".6" fill="currentColor"/>',
  },
  'Azure DevOps': {
    hex: '#0078D7',
    svg: '<path d="M4 7.5 13 4l7 3.5v10L13 20l-9-3.5z"/><path d="M4 7.5 13 11l7-3.5M13 11v9"/>',
  },
  Scrum: {
    hex: '#009FDA',
    svg: '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4.5v4h-4"/><circle cx="12" cy="12" r="2.2"/>',
  },
};

export function techIcon(tech: string): { svg: string; hex: string } {
  const slug = iconSlug[tech];
  const icon = slug ? bySlug.get(slug) : undefined;
  if (icon) {
    return {
      hex: `#${icon.hex}`,
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${icon.path}"/></svg>`,
    };
  }
  const c = custom[tech];
  if (!c) throw new Error(`Ícone ausente para "${tech}"`);
  return {
    hex: c.hex,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${c.svg}</svg>`,
  };
}
