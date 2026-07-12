## SouthDevs

Marketing landing page for SouthDevs — rebuilt in Next.js (App Router) + TypeScript + Tailwind CSS, recreated from the original Ionic Vue site.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Deploy

Deploys to [Vercel](https://vercel.com/new) out of the box — no extra configuration needed. Push to a Git repo and import it in Vercel, or run:

```bash
npx vercel
```

### Notes

- Update `src/app/favicon.ico`, `src/app/icon.png`, and `src/app/apple-icon.png` with the final logo (currently placeholders from the old site).
- `metadataBase` / canonical URLs in `src/app/layout.tsx` and `src/app/sitemap.ts` assume `https://southdevs.net` — update if the production domain differs.
- The "Book a free consultation" button links to `/contact-us`, matching the original site's link, which is not currently a built page.
