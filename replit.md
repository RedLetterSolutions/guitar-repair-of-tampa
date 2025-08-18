# Guitar Repair of Tampa Bay - Website

## Overview

This is a comprehensive marketing website for Guitar Repair of Tampa Bay, a professional guitar repair shop in Florida. The site features 9 complete pages including services, custom guitars, blog, gallery, and contact forms. It's built as a full-stack application with a React frontend and Express backend, designed for production use with a focus on SEO optimization, accessibility (WCAG AA compliance), and performance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript** - Component-based UI with type safety
- **Wouter** - Lightweight client-side routing instead of React Router for minimal bundle size
- **TailwindCSS with Shadcn/ui** - Utility-first styling with high-quality pre-built components
- **React Hook Form + Zod** - Type-safe form handling with client-side validation
- **TanStack Query** - Server state management for API calls

### Backend Architecture
- **Express.js with TypeScript** - RESTful API server with type safety
- **Drizzle ORM with PostgreSQL** - Type-safe database operations using PostgreSQL as the database
- **Zod Schema Validation** - Shared validation schemas between client and server
- **File Upload Support** - Google Cloud Storage integration for image uploads

### Database Design
- **Users** - Basic user authentication (admin access)
- **Contact Submissions** - Form submissions from contact/quote requests
- **Custom Guitar Inquiries** - Specialized inquiries for Crackercaster guitars
- **Blog Posts** - Content management for SEO blog articles
- **Gallery Items** - Repair showcase images with categorization
- **Testimonials** - Customer reviews and feedback

### Key Design Patterns
- **Shared Type Definitions** - Common schemas in `/shared` folder used by both client and server
- **Component Composition** - Reusable UI components with consistent props interfaces
- **Form State Management** - Centralized form handling with validation and error states
- **Responsive Design** - Mobile-first approach with TailwindCSS breakpoints
- **SEO Optimization** - Structured data, meta tags, and semantic HTML throughout

### Performance Optimizations
- **Code Splitting** - Vite-based bundling with automatic chunking
- **Image Optimization** - Lazy loading and responsive images with proper alt text
- **Caching Strategy** - TanStack Query for client-side caching
- **Bundle Analysis** - Optimized imports and tree-shaking

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon (serverless PostgreSQL)
- **File Storage**: Google Cloud Storage for image uploads
- **Font Loading**: Google Fonts (Inter, DM Sans, Fira Code, Geist Mono)

### UI Components & Styling
- **Radix UI Primitives** - Accessible component primitives (@radix-ui/*)
- **Lucide Icons** - Icon library for consistent iconography
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### Form & File Handling
- **Uppy** - File upload widget with drag-drop support
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Zod integration for form validation

### Development Tools
- **Vite** - Development server and build tool
- **ESBuild** - Fast JavaScript bundler for production
- **TypeScript** - Type checking and compilation
- **Drizzle Kit** - Database migrations and schema management

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal** - Development error handling
- **@replit/vite-plugin-cartographer** - Development environment integration

### Business-Specific Integrations
- **Google Maps** - Location and directions functionality
- **Email Notifications** - Contact form submissions (to be implemented)
- **SEO Tools** - Structured data for local business optimization