# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start Vite development server 
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - TypeScript type checking with `tsc --noEmit`

## Architecture Overview

### Frontend-Only React Application
The project is a **static frontend application** deployed to Vercel:
- `client/` - React + Vite frontend with Wouter routing
- `shared/` - Business configuration and types
- `dist/` - Production build output

### Key Technologies
- **Frontend**: React 18, Wouter routing, TailwindCSS, Shadcn/ui components, TanStack Query, React Hook Form + Zod
- **Build**: Vite with TypeScript, path aliases, and Replit integration plugins
- **Deployment**: Vercel static site with SPA routing configuration

### Frontend Page Structure
9 main routes using Wouter:
- `/` - Home with hero and services overview
- `/guitar-repairs` - Services and pricing
- `/custom-guitars` - Crackercaster custom guitar line
- `/about` - Team profiles and company info
- `/gallery` - Work showcase
- `/blog` - SEO content with dynamic `/blog/:slug` routes
- `/contact` - Contact forms with file upload
- `/directions` - Location and Google Maps
- `/suppliers` - Supplier information

### Component Architecture
- `components/layout/` - Header, Footer (app-wide layout)
- `components/common/` - Business-specific reusable components (Hero, ContactForm, etc.)  
- `components/ui/` - 40+ Shadcn/ui components for consistent design system
- `pages/` - Route components
- `hooks/` - Custom React hooks (mobile detection, toast notifications)

### Path Aliases Configuration
TypeScript and Vite configured with path aliases:
- `@/` → `client/src/` (components, pages, hooks, lib)
- `@shared/` → `shared/` (business configuration)
- `@assets/` → `attached_assets/` (project assets)

### Business Configuration
All business data centralized in `shared/config.ts`:
- Contact information, hours, pricing disclaimer
- SEO metadata and social media links
- Exported as typed configuration object

### State Management Pattern
- **React Hook Form** for complex form state with Zod validation
- **Local component state** for UI interactions  
- **No global React context** - architecture avoids prop drilling through component composition

### Form Handling Strategy
Forms are frontend-only with client-side validation:
- Contact forms, quote requests, custom guitar inquiries
- Zod schemas provide client-side validation
- Honeypot fields for spam protection
- Forms currently display success messages (no backend integration)

### Development Notes
- Strict TypeScript configuration with path aliases
- Mobile-first responsive design with TailwindCSS breakpoints
- WCAG AA accessibility compliance throughout
- SEO optimized with structured data for local business
- Vercel deployment with SPA routing fallback to `/index.html`

### Current Status
- Complete frontend implementation with all pages and components
- Static site ready for deployment
- Forms functional with client-side validation
- Production-ready foundation with comprehensive type safety