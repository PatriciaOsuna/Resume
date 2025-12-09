A clean and modern web app that renders a minimalist CV/Resume with a print-friendly layout.

## Features

**Single Config File** - Update all your resume data in [one place]
**Minimalist Design** - Clean, professional layout focused on content
**Responsive** - Looks great on all devices, from mobile to desktop
**Print Optimized** - Specially designed print styles for physical copies
**Keyboard Navigation** - Press `Cmd/Ctrl + K` to quickly navigate through sections
**Fast Performance** - Built with Next.js 14 and optimized for Core Web Vitals
**Auto Layout** - Sections automatically adjust based on your content
**GraphQL API** - Access your resume data programmatically at `/graphql`
**SEO Friendly** - Optimized metadata for better search visibility
**Docker Support** - Easy containerized deployment

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **GraphQL**: [Apollo Server](https://www.apollographql.com/) + [TypeGraphQL](https://typegraphql.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)


### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Main resume page
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── icons/       # Icon components
├── data/            # Resume data configuration
│   └── resume-data.tsx
├── images/          # Static assets
│   └── logos/       # Company logos
└── apollo/          # GraphQL server setup
    ├── resolvers.ts
    └── type-defs.ts
```

### Styling

The app uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Print styles are defined separately for optimal printing

### Using Docker directly

```bash
# Build the image
docker build -t cv-app .

# Run the container
docker run -p 3000:3000 cv-app
```

<p align="center">
  Made with ❤️ by <a href="https://github.com/PatriciaOsuna"> Patricia Osuna</a>
</p>