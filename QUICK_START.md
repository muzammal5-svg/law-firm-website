# Quick Start Guide

Get the Counsel & Clarity website up and running in 5 minutes.

## Installation (2 min)

```bash
# Navigate to project
cd counsel-clarity

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

## Configure (2 min)

Edit `.env.local`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_WHATSAPP_NUMBER=447700900123
```

**Get Formspree Endpoint:**
1. Go to https://formspree.io
2. Sign up / Sign in
3. Create new form
4. Copy endpoint (e.g., `https://formspree.io/f/abc123`)
5. Paste in `.env.local`

## Run (1 min)

```bash
npm run dev
```

Open browser to [http://localhost:5173](http://localhost:5173)

✅ **Done!** Your site is running locally.

## Test Everything

### Contact Form
- Go to Contact page
- Fill and submit form
- Should see success message
- Check Formspree inbox for email

### Consultation Booking
- Go to "Book Consultation"
- Select future date and time
- Fill form and submit
- Check leads in Admin Dashboard

### Admin Dashboard
- Go to [http://localhost:5173/admin/dashboard](http://localhost:5173/admin/dashboard)
- See all leads submitted
- Change lead status
- Delete/contact leads

### Blog
- Go to Blog page
- Search/filter posts
- Click individual posts
- View related articles

### Mobile
- Open DevTools (F12)
- Enable device toolbar (Ctrl+Shift+M)
- Test responsiveness
- Test mobile consultation bar

## Build & Deploy (5 min total)

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to Vercel
1. Push to GitHub (see DEPLOYMENT.md)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import GitHub repo
4. Add environment variables
5. Click Deploy
6. Done! 🎉

## Customize

### Change Site Info
Edit `src/data/site.js`:
- Phone, email, address
- Navigation links
- Site name

### Add Blog Post
Edit `src/data/blogPosts.json`:
- Add new post object
- Restart dev server
- Post appears immediately

### Add FAQ
Edit `src/data/faqData.js`:
- Add category with items
- Rebuild/restart
- FAQ displays

### Update Practice Areas
Edit `src/data/practiceAreas.js`:
- Modify existing areas
- Add new areas
- Update descriptions

## Troubleshooting

### "Cannot find module" Error
```bash
rm -rf node_modules
npm install
```

### Styles not showing
```bash
# Clear cache and rebuild
npm run build
npm run preview
```

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Environment not loading
- Restart dev server
- Check `.env.local` exists and is saved
- Ensure no spaces around `=`

## Next Steps

1. **Customize Content**
   - Update about/practice areas
   - Add your own blog posts
   - Customize colors in `tailwind.config.js`

2. **Deploy**
   - Follow DEPLOYMENT.md
   - Set up custom domain
   - Test production site

3. **Monitor**
   - Check admin dashboard for leads
   - Monitor Formspree for emails
   - Track Vercel analytics

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing |
| `src/pages/` | All pages (Home, About, etc) |
| `src/data/` | Content (blog, practice areas, etc) |
| `src/components/` | Reusable components |
| `tailwind.config.js` | Style configuration |
| `.env.local` | Environment variables |

## Commands Cheat Sheet

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run linter
npm install         # Install dependencies
npm update          # Update dependencies
```

## Support

- Full documentation: See README.md
- Deployment guide: See DEPLOYMENT.md
- File structure: See README.md Project Structure
- Customization: See README.md Customization Guide

---

**Ready to launch?** Follow DEPLOYMENT.md to deploy to Vercel! 🚀
