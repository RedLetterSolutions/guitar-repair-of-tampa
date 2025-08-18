# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on http://127.0.0.1:5000
- `npm run build` - Build both client and server for production
- `npm run start` - Run production build
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes with Drizzle Kit

### VS Code Integration
- F5 to debug server
- Ctrl+Shift+P → "Tasks: Run Task" for build tasks
- Auto-formatting with Prettier on save

## Architecture Overview

### Full-Stack TypeScript Monorepo
The project uses a **client/server/shared** architecture:
- `client/` - React + Vite frontend with Wouter routing
- `server/` - Express.js API with Drizzle ORM
- `shared/` - Type definitions and business configuration

### Key Technologies
- **Frontend**: React 18, Wouter routing, TailwindCSS, Shadcn/ui components, TanStack Query, React Hook Form + Zod
- **Backend**: Express.js, Drizzle ORM + PostgreSQL, Zod validation
- **Shared**: TypeScript strict mode, shared schemas and types

### Database Architecture
Uses **Drizzle ORM** with PostgreSQL. Schema defined in `shared/schema.ts` generates both runtime validation and TypeScript types:
- `contactSubmissions` - Form submissions from contact/quote requests  
- `customGuitarInquiries` - Crackercaster custom guitar inquiries
- `blogPosts` - SEO content management
- `galleryItems` - Work showcase images
- `testimonials` - Customer reviews
- `users` - Admin authentication

### API Routes Structure
All API routes under `/api/`:
- `POST /contact` - Contact form submissions
- `POST /quotes` - Quote requests
- `POST /custom-guitar-inquiries` - Custom guitar inquiries
- `GET /blog`, `GET /blog/:slug` - Blog content
- `GET /gallery` - Gallery items
- `GET /testimonials` - Customer testimonials

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

### Business Configuration
All business data centralized in `shared/config.ts`:
- Contact information, hours, pricing disclaimer
- Service categories with pricing
- Team member profiles
- SEO metadata and social media links
- Used consistently across client and server

### State Management Pattern
- **TanStack Query** for server state (API caching, optimistic updates)
- **React Hook Form** for complex form state with Zod validation
- **Local component state** for UI interactions
- **No global React context** - architecture avoids prop drilling through component composition

### Form Handling Strategy
Heavy emphasis on form validation and user experience:
- Contact forms, quote requests, custom guitar inquiries
- File upload support (planned: Google Cloud Storage integration)
- Zod schemas provide both client and server validation
- Honeypot fields for spam protection
- Comprehensive error handling and user feedback

### Development Notes
- Server binds to `127.0.0.1` (not `0.0.0.0`) to avoid macOS network issues
- Strict TypeScript configuration across entire stack
- Mobile-first responsive design with TailwindCSS breakpoints
- WCAG AA accessibility compliance throughout
- SEO optimized with structured data for local business

### Current Status
- Complete frontend implementation with all pages and components
- Database schema and API structure defined
- Mock API responses in place (database integration pending)
- Production-ready foundation with comprehensive type safety