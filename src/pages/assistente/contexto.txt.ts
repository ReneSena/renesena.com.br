import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { phases, certifications, stats, formatPeriod, phaseLocation } from '../../data/career';
import { stack } from '../../data/stack';
import { cases } from '../../data/highlights';
import { services, formats } from '../../data/services';
import { ui, site } from '../../i18n/ui';

// Base de conhecimento do assistente do site: gerada no build a partir do mesmo conteúdo das páginas,
// e lida pela função netlify/functions/chat.mts. Todo o conteúdo já é público no site.

const plain = (s: string) => s.replace(/\[([^\]]+)\]/g, '$1').replace(/\{years\}/g, String(stats.journeyYears));
const pick = (prefixes: string[]) =>
  Object.entries(ui.pt)
    .filter(([k]) => prefixes.some((p) => k.startsWith(p)))
    .map(([, v]) => `- ${plain(v)}`)
    .join('\n');

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const origin = siteUrl?.origin ?? 'https://www.renesena.com.br';
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const sections = [
    `# Sobre o Rene Sena (${origin})`,
    pick(['hero.', 'manifesto.', 'journey.headline', 'journey.intro', 'contact.intro', 'services.intro']),
    `Números: ${stats.devYears} anos como desenvolvedor, ${stats.techYears} anos em tecnologia, ${stats.journeyYears} anos de trajetória profissional, ${stats.techs} tecnologias usadas.`,
    `Contato: formulário em ${origin}/#contato · LinkedIn ${site.linkedin} · GitHub ${site.github}`,
    `Páginas: início ${origin}/ · trajetória ${origin}/trajetoria/ · blog ${origin}/blog/ · versão em inglês ${origin}/en/`,

    '# Trajetória (da mais antiga para a atual)',
    phases
      .map((p) =>
        [
          `## ${p.company}${p.client ? ` (cliente: ${p.client})` : ''} · ${formatPeriod(p, 'pt')} · ${phaseLocation(p, 'pt')}`,
          `Cargos: ${p.roles.map((r) => `${r.title.pt} (${r.start} até ${r.end ?? 'hoje'})`).join('; ')}`,
          p.summary.pt,
          ...p.bullets.pt.map((b) => `- ${b}`),
          p.techs.length ? `Tecnologias: ${p.techs.join(', ')}` : '',
        ]
          .filter(Boolean)
          .join('\n'),
      )
      .join('\n\n'),
    `Certificações: ${certifications.join('; ')}`,

    '# Cases em destaque',
    cases
      .map((c) => `## ${c.title.pt} (${c.tag}, ${c.year})\nDor: ${c.pain.pt}\nPapel do Rene: ${c.decision.pt}\nSolução: ${c.solution.pt}\nTags: ${c.tags.join(', ')}`)
      .join('\n\n'),

    '# Stack',
    stack.map((g) => `- ${g.label.pt}: ${g.items.join(', ')}`).join('\n'),

    '# Serviços para projetos pontuais',
    services.map((s) => `## ${s.title.pt}\n${s.pain.pt}\n${s.items.pt.map((i) => `- ${i}`).join('\n')}`).join('\n\n'),
    `Formatos: ${formats.map((f) => `${f.title.pt} (${f.text.pt})`).join('; ')}`,

    '# Artigos do blog',
    posts
      .map(
        (p) =>
          `## ${p.data.title}\nURL: ${origin}/blog/${p.id}/ · ${p.data.date.toISOString().slice(0, 10)} · ${p.data.category}\n${p.data.description}\n\n${p.body ?? ''}`,
      )
      .join('\n\n---\n\n'),
  ];

  return new Response(sections.join('\n\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
