# Ayomide Adepomola — DevOps & Cloud Portfolio

A responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, Lucide icons, and Framer Motion dependency available for future enhancements.

## Requirements
- Node.js 20 or newer
- npm
- Git and a GitHub account
- Vercel account for deployment

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production check
```bash
npm run build
npm start
```

## Before publishing — important checklist
1. Search for `your-domain.vercel.app` and replace it with the actual deployed domain in:
   - `app/layout.tsx`
   - `app/robots.ts`
   - `app/sitemap.ts`
2. Confirm every project repository URL is correct and public. Verify every project repository URL before publishing; any project without a dedicated public repository links to your GitHub profile. The portrait is stored at `public/ayomide-adepomola.jpg`.
3. Review the experience section carefully before publishing, especially role titles, dates, mentorship names, and responsibilities. Keep only details that accurately reflect your work and any permissions required by the organisations.
4. Add only certifications actually earned and education information you want public.
5. Confirm `adepomolaayomide6@gmail.com` is the preferred public email.
6. Add a CV PDF to `public/` only after reviewing it for personal information you do not want public.
7. Test all links and the mobile navigation on a phone.

## Deploy to Vercel
1. Push this folder to a new GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the default Next.js framework settings and deploy.
5. Add your custom domain if you own one, then update the domain in the metadata, sitemap, and robots files.
6. Redeploy after updating the domain.

## Google Search
1. Verify the live domain in Google Search Console.
2. Submit `/sitemap.xml`.
3. Inspect the homepage URL and request indexing.
4. Keep useful project READMEs linked from the portfolio. Indexing and ranking are not guaranteed and may take time.

## Contact form
The current version uses a `mailto:` button and does not store submissions. If you want a working web form, connect a form provider or implement a server-side endpoint before launch. Never place private API keys in frontend code.
