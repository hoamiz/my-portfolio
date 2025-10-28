# Copilot Instructions

This document provides instructions for AI coding agents to effectively contribute to this project.

## Project Overview

This is a portfolio website built with [Next.js](https://nextjs.org/) and the App Router. The main technologies used are:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack is used for both development and production builds.
- **Font**: [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) is used to automatically optimize and load the [Geist](https://vercel.com/font) font.

The project is structured with pages in the `app/` directory. The main entry point is `app/page.tsx`, and the global layout is defined in `app/layout.tsx`.

## Key Files and Directories

- `app/`: Contains all the pages and layouts of the application.
  - `app/layout.tsx`: The root layout, which includes the global styles and font definitions.
  - `app/page.tsx`: The main landing page of the portfolio.
  - `app/about/page.tsx`: The "About" page.
  - `app/contact/page.tsx`: The "Contact" page.
- `components/`: Contains reusable React components.
- `public/`: Contains static assets like images and SVGs.
- `next.config.ts`: The Next.js configuration file.
- `tailwind.config.mjs`: The Tailwind CSS configuration file.

## Developer Workflows

### Running the Development Server

To run the development server with Turbopack, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, also using Turbopack, run:

```bash
npm run build
```

### Linting

To check for linting errors, run:

```bash
npm run lint
```

## Conventions and Patterns

- **Component-Based Architecture**: New UI elements should be created as React components inside the `components/` directory.
- **Styling**: Use Tailwind CSS utility classes for styling. Global styles in `app/globals.css` should be kept to a minimum.
- **Routing**: Use the `next/link` component for navigation between pages to leverage client-side routing.
- **TypeScript**: All new code should be written in TypeScript, and types should be used where appropriate.
- **Fonts**: The project uses `next/font` to load the Geist font. See `app/layout.tsx` for the implementation.
