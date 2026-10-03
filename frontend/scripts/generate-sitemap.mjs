import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TREATMENT_CATALOG } from '../src/data/siteData.js';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(SCRIPT_DIR, '../public');

const rawSite = process.env.VITE_SITE_URL || '';
if (!rawSite || !/^https:\/\//i.test(rawSite) || /your-domain|example\.com/i.test(rawSite)) {
  console.error('Cannot generate production sitemap: set VITE_SITE_URL to the real HTTPS canonical domain.');
  process.exit(1);
}
const site = rawSite.replace(/\/$/, '');
const langs = ['fr','en','it','es','de','pt','ru','ar','sq','zh'];
const infoSlugs = ['about','dental-tourism','before-after','virtual-tour','blog','contact'];
const treatmentSlugs = TREATMENT_CATALOG.map((item) => item.slug);
const doctorSlugs = ['arnold-mboqe','armando-becoku','nela-mataj','ester-rina','adela-dajlani','paola-qefa','iris-kurti'];

const langUrl = (lang, suffix='') => `${site}${lang === 'fr' ? '' : `/${lang}`}${suffix}`;
const variants = (suffix='') => langs.map((lang) => ({ lang, href: langUrl(lang, suffix) }));
const block = (lang, suffix, priority = '0.7') => {
  const loc = langUrl(lang, suffix);
  const links = variants(suffix).map(({lang: l, href}) => `<xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`).join('');
  return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority>${links}<xhtml:link rel="alternate" hreflang="x-default" href="${langUrl('fr', suffix)}"/></url>`;
};

const blocks = [];
blocks.push(...langs.map((lang) => block(lang, '', '1.0')));
for (const suffix of infoSlugs.map((slug) => `/${slug}`)) blocks.push(...langs.map((lang) => block(lang, suffix, suffix === '/dental-tourism' ? '0.9' : '0.7')));
for (const slug of treatmentSlugs) blocks.push(...langs.map((lang) => block(lang, `/treatments/${slug}`, '0.8')));
for (const slug of doctorSlugs) blocks.push(...langs.map((lang) => block(lang, `/team/${slug}`, '0.6')));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${blocks.join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\n\nSitemap: ${site}/sitemap.xml\n`);
console.log(`Generated sitemap for ${site}: ${blocks.length} URLs across ${langs.length} languages, ${treatmentSlugs.length} treatments and ${doctorSlugs.length} profiles.`);
