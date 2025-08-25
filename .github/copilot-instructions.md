# Guitar Repair of Tampa Bay - Frontend React Application

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Build Commands
**Run commands in this exact order:**
- `npm install` -- Installs dependencies in ~14 seconds (warnings about deprecated packages are normal)
- `npm run build` -- Builds production bundle in ~4.4 seconds. **NEVER CANCEL - Set timeout to 30+ seconds**
- `npm run lint` -- TypeScript checking in ~5.6 seconds. **Current behavior: Returns 34 TypeScript errors due to optional UI component dependencies - this is NORMAL and build still succeeds**

### Development Commands  
- `npm run dev` -- Starts Vite development server in ~210ms. Server runs on http://localhost:5173/
- `npm run preview` -- Starts production preview server on http://localhost:4173/

### Critical Timing Information
- **npm install**: ~14 seconds (warnings normal)
- **npm run build**: ~4.4 seconds (**NEVER CANCEL**, set timeout 30+ seconds minimum)
- **npm run lint**: ~5.6 seconds (TypeScript errors expected, build still works)
- **npm run dev**: ~210ms startup time
- **npm run preview**: ~1-2 seconds startup time

## Application Validation

### ALWAYS run these validation scenarios after making changes:
1. **Homepage Load Test**: Navigate to http://localhost:5173/ and verify:
   - Page loads with "The Best Guitar Shop in South Florida" heading
   - Alert bar shows "Current turnaround time: 7-10 business days"
   - Navigation menu works (Home, Repairs, Custom, About, Gallery, Contact)
   - Service cards display with pricing information
   - Testimonials section with navigation controls
   - Footer loads with contact information

2. **Navigation Test**: Click through all main pages:
   - `/guitar-repairs` - Pricing tables and service descriptions load
   - `/custom-guitars` - Crackercaster information displays
   - `/contact` - Contact form loads with all fields
   - `/about` - Team profiles display
   - `/gallery` - Work showcase images

3. **Contact Form Test**: On `/contact` page:
   - Fill Name, Email, Description fields
   - Check consent checkbox
   - Click "Send Quote Request" 
   - **Expected: 404 error is NORMAL** (no backend, frontend-only)
   - Form validation should work correctly

### Manual Testing Requirements
**ALWAYS test actual functionality by running complete user scenarios:**
- Load homepage and navigate between pages
- Test contact form interaction (validation, submission attempt)
- Verify responsive layout on different screen sizes if possible
- Check that all navigation links work correctly

## Project Architecture

### Frontend-Only React Application
- **Framework**: React 18 + Vite + TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: TailwindCSS + Shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **State**: Local component state, no global context
- **Deployment**: Vercel static site with SPA routing

### Key Directories
```
/client/src/
├── components/         # Reusable React components
│   ├── layout/        # Header, Footer (app-wide layout)
│   ├── common/        # Business-specific components (Hero, ContactForm)
│   └── ui/            # 40+ Shadcn/ui components
├── pages/             # Route components (9 main pages)
├── hooks/             # Custom React hooks
├── lib/               # Utilities and configuration
└── main.tsx           # Application entry point

/shared/               # Business configuration and types
├── config.ts          # All business data (contact, pricing, team)
└── schema.ts          # TypeScript interfaces

/attached_assets/      # Project assets and images
```

### Path Aliases (Configured in vite.config.ts and tsconfig.json)
- `@/` → `client/src/` (components, pages, hooks, lib)
- `@shared/` → `shared/` (business configuration)  
- `@assets/` → `attached_assets/` (project assets)

## Common Issues and Solutions

### TypeScript Errors Are Normal
- **Current state**: 34 TypeScript errors due to missing optional UI dependencies
- **These are SAFE TO IGNORE**: Build succeeds despite lint failures
- **Missing deps include**: react-day-picker, embla-carousel-react, recharts, cmdk, vaul, input-otp, react-resizable-panels
- **Reason**: Shadcn/ui components include optional dependencies not needed for core functionality

### Form Submission Behavior
- **Contact forms are frontend-only** with client-side validation
- **Expected behavior**: Form submission attempts will show 404 errors (no backend API)
- **This is NORMAL**: The application is designed as static frontend only
- **Validation works correctly**: Zod schemas provide client-side form validation

### Build Warnings
- **Browserslist warnings**: Normal, can be ignored
- **Large chunk warnings**: Expected for single-page app, can be ignored
- **Font loading errors in dev**: Normal due to domain blocking, doesn't affect functionality

## Development Workflow

### Before Making Changes
**ALWAYS run these commands first:**
```bash
npm install
npm run build  # Verify baseline works
npm run dev    # Start development server
```

### After Making Changes
**ALWAYS validate by running:**
```bash
npm run lint   # Check TypeScript (errors expected)
npm run build  # Ensure build still works  
# Test application manually as described in validation section
```

### File Structure Expectations
- **No test files**: Project currently has no test suite
- **No CI/CD workflows**: No GitHub Actions workflows present
- **Frontend-only**: No server, API, or database code
- **Static deployment**: Configured for Vercel with SPA routing fallback

## Business Configuration

### Centralized Data Location
**ALL business information is in `/shared/config.ts`:**
- Contact information (phone, email, address, hours)
- Service pricing and descriptions  
- Team member profiles
- SEO metadata
- Social media links

**ALWAYS update config.ts when changing business information instead of hardcoding in components.**

### Key Pages and Routes
**9 main pages using Wouter routing:**
- `/` - Homepage with hero and services overview
- `/guitar-repairs` - Services and detailed pricing
- `/custom-guitars` - Crackercaster custom guitar line
- `/about` - Team profiles and company information
- `/gallery` - Work showcase and portfolio
- `/contact` - Contact forms with file upload
- `/directions` - Location and Google Maps integration
- `/suppliers` - Supplier and brand information  
- `/quote` - Quote request form

## Deployment Information

### Vercel Configuration
- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **SPA routing**: All routes fallback to `/index.html`
- **No server functions**: Pure static site deployment

### Production Considerations
- **Asset optimization**: Vite handles bundling and optimization
- **Font loading**: Google Fonts via CDN (configured in index.html)
- **Image optimization**: Uses Unsplash URLs for demo content
- **No database**: All content is static or configured in shared/config.ts

## Quick Reference Commands

```bash
# Essential workflow
npm install                    # 14s - Setup dependencies
npm run build                  # 4.4s - Build for production  
npm run dev                    # 210ms - Start dev server
npm run lint                   # 5.6s - TypeScript check (expect 34 errors)
npm run preview                # 1-2s - Preview production build

# Common file locations
./shared/config.ts             # Business configuration
./client/src/App.tsx           # Main application routing
./client/src/pages/            # Page components
./vite.config.ts              # Build configuration
./vercel.json                 # Deployment settings
```

**Remember: This is a frontend-only static site. No backend, database, or API functionality exists.**