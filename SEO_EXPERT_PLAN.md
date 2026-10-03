# Virtus — Expert SEO architecture

## Implemented
- Canonical URLs per language.
- `hreflang` alternates for 10 languages + `x-default`.
- XML sitemap with language alternates for homepage, information pages, 38 treatments and 7 team profiles.
- `Organization` + `Dentist`/`MedicalBusiness` graph on the site.
- `WebSite` / `WebPage` / `MedicalWebPage` graph per route.
- `Service` structured data on treatment pages.
- Breadcrumb structured data on internal pages.
- `robots.txt` points to the generated sitemap.
- Unique treatment URL architecture: `/treatments/{slug}` and localized equivalents.

## Next deployment steps
1. Set `VITE_SITE_URL` to the real HTTPS domain.
2. Run `npm run build`.
3. Submit `/sitemap.xml` in Google Search Console.
4. Validate representative pages with URL Inspection and Rich Results Test.
5. Connect Google Business Profile to the exact clinic address and keep NAP information identical across official profiles.
6. Publish medically reviewed, genuinely useful guides targeting patient questions in each priority language.
