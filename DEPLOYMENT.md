# Vercel Deployment Guide

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have an account
2. **GitHub Repository**: Your code should be pushed to GitHub (already done)
3. **Vercel CLI** (optional): `npm i -g vercel` for command line deployment

## Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Connect GitHub to Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your GitHub repository: `RedLetterSolutions/guitar-repair-of-tampa`

2. **Configure Project Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `.` (leave blank)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in the Vercel dashboard
   - Common variables: `DATABASE_URL`, `NODE_ENV=production`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - Future pushes to main branch will auto-deploy

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   vercel
   ```
   - Follow the prompts to configure your project
   - Choose default settings when prompted

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

## Important Notes

### Database Considerations
- Your current setup uses PostgreSQL with Drizzle ORM
- You'll need to set up a production database (Neon, PlanetScale, or Vercel Postgres)
- Update `DATABASE_URL` environment variable in Vercel dashboard
- Run `npm run db:push` to sync schema with production database

### Environment Variables
Set these in Vercel dashboard under Project Settings → Environment Variables:
```
NODE_ENV=production
DATABASE_URL=your_production_database_url
```

### File Structure
The deployment is configured to:
- Serve static files from `/dist` directory (React build output)
- Route API calls to serverless functions in `/server`
- Include shared types and config from `/shared` directory

### Troubleshooting

**Build Errors**:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `dependencies` (not `devDependencies`)
- Verify TypeScript types are resolving correctly

**API Route Issues**:
- API routes are available at `/api/*`
- Check serverless function logs in Vercel dashboard
- Ensure database connection is working in production

**Static Asset Issues**:
- Verify assets are building correctly with `npm run build:client`
- Check that file paths are relative, not absolute

## Post-Deployment Checklist

1. ✅ Site loads correctly
2. ✅ Navigation works between pages
3. ✅ Contact forms submit (check API logs)
4. ✅ Google Maps embeds display
5. ✅ Images and assets load properly
6. ✅ Mobile responsiveness works
7. ✅ Custom domain setup (if applicable)

## Custom Domain Setup

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown by Vercel
4. Wait for SSL certificate provisioning (automatic)

## Monitoring

- View deployment logs in Vercel dashboard
- Monitor function execution and errors
- Set up alerts for failed deployments
- Check Core Web Vitals and performance metrics

Your Guitar Repair of Tampa website is now ready for production deployment on Vercel!