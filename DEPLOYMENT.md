# Deployment Guide - Counsel & Clarity

Complete step-by-step guide to deploy the Counsel & Clarity website to Vercel.

## Prerequisites

- Vercel account (sign up free at [vercel.com](https://vercel.com))
- GitHub account (recommended for easy updates)
- Formspree account for form submissions ([formspree.io](https://formspree.io))

## Option 1: Deploy from GitHub (Recommended)

### Step 1: Set Up GitHub Repository

1. **Initialize Git** (if not already done)
   ```bash
   cd counsel-clarity
   git init
   git add .
   git commit -m "Initial commit: Counsel & Clarity website"
   ```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `counsel-clarity`
   - Choose "Private" for privacy
   - Click "Create repository"
   - Follow GitHub's instructions to push your code

3. **Push to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/counsel-clarity.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import GitHub Repository**
   - Click "Import Git Repository"
   - Authorize GitHub access
   - Select `counsel-clarity` repository
   - Click "Import"

3. **Configure Project**
   - Framework: Should auto-detect as "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Continue"

4. **Set Environment Variables**
   - Add these variables in Vercel Dashboard:
     - **VITE_FORMSPREE_ENDPOINT**: Your Formspree endpoint
     - **VITE_WHATSAPP_NUMBER**: `447700900123` (or your number)
   - Click "Deploy"

5. **Wait for Deployment**
   - Vercel will build and deploy automatically
   - You'll see a live URL when complete
   - Check the deployment logs if any issues occur

## Option 2: Deploy Directly to Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
cd counsel-clarity
vercel
```

### Step 3: Follow Prompts

- Confirm project name: `counsel-clarity`
- Confirm framework: Press enter for Vite
- Confirm output directory: `dist`
- Set environment variables when prompted
- Wait for deployment

## Set Up Formspree for Form Submissions

### Step 1: Create Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up with email or GitHub
3. Create a new form
4. Copy the form endpoint (e.g., `https://formspree.io/f/xyzabc123`)

### Step 2: Add to Vercel Environment

1. Go to Vercel Dashboard → Your Project → Settings
2. Go to Environment Variables
3. Add new variable:
   - **Name**: `VITE_FORMSPREE_ENDPOINT`
   - **Value**: Your Formspree endpoint
   - **Environments**: Production, Preview, Development
4. Click "Save"

### Step 3: Redeploy

1. In Vercel Dashboard, go to Deployments
2. Find the latest deployment
3. Click the three dots → "Redeploy"
4. Select "Use Existing Deployments"

Forms should now be working!

## Configure Custom Domain

### Step 1: Add Domain in Vercel

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `www.counselclarity.com`)
4. Click "Add"

### Step 2: Update DNS Records

Follow Vercel's instructions to update your domain's DNS:

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Go to DNS Settings
3. Add the records Vercel provides (usually CNAME and A records)
4. Wait 15-30 minutes for DNS to propagate

### Step 3: Set Primary Domain (Optional)

1. In Vercel → Domains
2. Find your domain
3. Check "Redirect to this domain" if desired

## Set Up SSL Certificate

Vercel automatically provides free SSL certificates via Let's Encrypt. Once your domain is added, SSL is automatically enabled.

## Monitor Your Deployment

### View Logs

1. Vercel Dashboard → Deployments
2. Click on a deployment
3. See build logs and real-time activity

### Test Deployment

- Open your domain in browser
- Test contact forms
- Verify WhatsApp button
- Check mobile responsiveness
- Test consultation booking

### Performance Metrics

- Vercel provides insights at Dashboard → Analytics
- Check Core Web Vitals scores
- Monitor traffic and errors

## Enable Automatic Deployments

### GitHub Integration

1. Every push to `main` branch auto-deploys
2. Vercel runs build automatically
3. If build fails, deployment is skipped (main stays live)

### Preview Deployments

1. Every pull request gets a preview URL
2. Useful for testing before merging
3. Share preview links with clients

## Troubleshooting

### "Build Failed" Error

1. Check build logs in Vercel Dashboard
2. Ensure all environment variables are set
3. Run `npm run build` locally to test
4. Check for TypeScript/syntax errors

**Common causes:**
- Missing environment variables
- Node version mismatch
- Missing dependencies
- Typos in file paths

### Forms Not Submitting

1. Verify `VITE_FORMSPREE_ENDPOINT` is correct
2. Test endpoint in browser: visit the URL directly
3. Check Formspree dashboard for submissions
4. Ensure form endpoint is public (not protected by auth)

### WhatsApp Button Not Working

1. Check phone number format (country code + digits)
2. Ensure `VITE_WHATSAPP_NUMBER` is set
3. Test URL manually: `https://wa.me/447700900123?text=Hello`
4. Verify on different browsers/devices

### Styles Not Loading

1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check CSS bundle in browser DevTools
4. Verify Tailwind build completed (check `dist/assets/`)

### 404 Errors on Routes

1. Vercel needs rewrites for SPA routing
2. Check `vercel.json` is in root directory
3. Ensure routes section redirects to `/index.html`
4. Redeploy after configuration change

## Performance Optimization

### Image Optimization

1. Use image CDN (Vercel provides automatic optimization)
2. Lazy load images below fold
3. Use modern formats (WebP when possible)
4. Compress before uploading

### Code Splitting

Already implemented with React Router. Pages load on demand.

### Caching

Vercel automatically caches:
- Static assets (1 year)
- HTML pages (24 hours, stale-while-revalidate)

## Monitoring & Analytics

### Vercel Analytics

1. Enable in Settings → Analytics
2. Free plan includes Core Web Vitals
3. Premium plan adds detailed usage metrics

### Set Up Monitoring

1. Add Sentry for error tracking (optional)
2. Use Vercel's built-in error alerts
3. Set up email notifications for deployments

## Database Setup (Optional - For Advanced Features)

If adding user authentication or complex data:

1. **Supabase** (PostgreSQL + Auth + Real-time)
   - Go to [supabase.com](https://supabase.com)
   - Create project
   - Add environment variables to Vercel
   - Update code to use Supabase SDK

2. **Firebase** (Real-time database + Auth)
   - Go to [firebase.google.com](https://firebase.google.com)
   - Create project
   - Add to Vercel environment
   - Install Firebase SDK

Current implementation uses localStorage (no server needed).

## Maintenance & Updates

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
npm audit fix

# Rebuild and test locally
npm run build
npm run preview

# Push changes
git add .
git commit -m "Update dependencies"
git push origin main
```

Vercel will auto-deploy when you push.

### Add New Content

1. Update data files (`src/data/`)
2. Modify components as needed
3. Test locally: `npm run dev`
4. Push to GitHub
5. Vercel auto-deploys

## Backup & Recovery

### Backup Data

1. **Leads Data**: Stored in localStorage (export via admin dashboard)
2. **Blog Posts**: Version control via Git
3. **Static Assets**: Stored in `public/` and source control
4. **Configuration**: Stored in Vercel project settings

### Recovery

1. All code changes tracked in Git
2. Rollback by selecting previous deployment in Vercel
3. Redeploy any previous version with one click

## Security Checklist

- [ ] Use HTTPS (automatic with Vercel)
- [ ] Keep dependencies updated
- [ ] Use strong, unique API keys
- [ ] Never commit `.env` files
- [ ] Use environment variables for secrets
- [ ] Set up firewall rules if needed
- [ ] Monitor error logs
- [ ] Regular security audits

## Support

### Common Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **React Router**: [reactrouter.com](https://reactrouter.com)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Formspree Help**: [formspree.io/help](https://formspree.io/help)

### Getting Help

1. Check Vercel logs for error details
2. Test locally with `npm run dev`
3. Verify environment variables
4. Contact Vercel Support (paid plans)

---

**Last Updated**: July 2026
**Version**: 1.0.0

Congratulations on your deployed website! 🎉
