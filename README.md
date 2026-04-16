# 牧 信介 — Portfolio

Personal portfolio website for Shinsuke Maki, Full-Stack Engineer.

Built with Next.js 16, Tailwind CSS v4, and next-intl for bilingual (日本語/English) support.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **i18n**: next-intl (JP/EN)
- **Email**: Resend
- **Deploy**: Vercel

## Pages

| Path | Description |
|------|-------------|
| `/` | Home |
| `/about` | About |
| `/skills` | Skills |
| `/experience` | Work Experience |
| `/projects` | Projects |
| `/projects/[slug]` | Project Detail |
| `/blog` | Blog |
| `/blog/[slug]` | Blog Post |
| `/contact` | Contact Form |

## Content Management

All content is managed in TypeScript files — no CMS or database required.

| File | Content |
|------|---------|
| `src/data/personal.ts` | Name, location, social links |
| `src/data/skills.ts` | Skills and proficiency levels |
| `src/data/experience.ts` | Work history |
| `src/data/projects.ts` | Project list |
| `src/content/blog/` | Blog posts (MDX, per locale) |
| `src/messages/en.json` | English UI strings |
| `src/messages/ja.json` | Japanese UI strings |

## Blog Posts

Add a new post by creating a folder under `src/content/blog/`:

```
src/content/blog/
  my-new-post/
    en.mdx    ← English version
    ja.mdx    ← Japanese version
```

Frontmatter format:
```yaml
---
title: "Post Title"
date: "2025-01-01"
excerpt: "Short description..."
tags: ["Tag1", "Tag2"]
---
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Set `RESEND_API_KEY` in `.env.local` (get from [resend.com](https://resend.com)).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY` — your Resend API key
   - `FROM_EMAIL` — (optional) verified sender email from Resend

> **Note**: For the contact form to send to any email, verify your domain on Resend and set `FROM_EMAIL`. Without this, `onboarding@resend.dev` is used which only works when sending to the Resend account owner's email.
