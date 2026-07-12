# Launch Checklist - Counsel & Clarity

Complete this checklist before launching your law firm website.

## Pre-Launch Setup (Days 1-2)

### Local Development
- [ ] Clone/download project
- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env.local`
- [ ] Get Formspree endpoint (https://formspree.io)
- [ ] Add Formspree endpoint to `.env.local`
- [ ] Run `npm run dev`
- [ ] Test site at `http://localhost:5173`

### Customization
- [ ] Update `src/data/site.js` with your contact info
- [ ] Update `src/data/practiceAreas.js` with your practice areas
- [ ] Update `src/data/faqData.js` with your FAQs
- [ ] Update `src/data/blogPosts.json` with your blog posts
- [ ] Update images/hero backgrounds
- [ ] Customize colors in `tailwind.config.js` if desired
- [ ] Review all text content for accuracy

### Testing Locally
- [ ] Open homepage - looks good?
- [ ] Navigate all pages - no broken links?
- [ ] Test contact form - receives email?
- [ ] Test consultation booking - appears in admin?
- [ ] Test WhatsApp button - opens chat?
- [ ] Check mobile view - responsive?
- [ ] Verify forms validate - error messages show?
- [ ] Check success modals - appear correctly?
- [ ] Run `npm run build` - builds successfully?

## Deployment to Vercel (Day 3)

### GitHub Setup
- [ ] Create GitHub account (if needed)
- [ ] Initialize git: `git init`
- [ ] Create `.gitignore` (already in project)
- [ ] Stage files: `git add .`
- [ ] First commit: `git commit -m "Initial commit"`
- [ ] Create repository on GitHub
- [ ] Add remote: `git remote add origin ...`
- [ ] Push: `git push -u origin main`

### Vercel Deployment
- [ ] Sign up for Vercel account
- [ ] Go to https://vercel.com/new
- [ ] Import GitHub repository
- [ ] Select `counsel-clarity` repo
- [ ] Confirm framework: Vite
- [ ] Confirm build: `npm run build`
- [ ] Confirm output: `dist`
- [ ] Add environment variables:
  - [ ] `VITE_FORMSPREE_ENDPOINT` = your endpoint
  - [ ] `VITE_WHATSAPP_NUMBER` = your number
- [ ] Click "Deploy"
- [ ] Wait for build to complete
- [ ] Note your Vercel URL (e.g., counsel-clarity.vercel.app)
- [ ] Test live site works

### Custom Domain (Optional)
- [ ] Own a domain? (e.g., counselclarity.com)
- [ ] In Vercel, go to Settings → Domains
- [ ] Add your domain
- [ ] Copy DNS records from Vercel
- [ ] Update DNS in domain registrar:
  - [ ] Log into GoDaddy/Namecheap/etc
  - [ ] Find DNS settings
  - [ ] Add Vercel's records (CNAME and A)
  - [ ] Wait 30 mins for propagation
- [ ] Test: visit your domain in browser

## Pre-Launch Testing (Days 4-5)

### Functionality Tests
- [ ] All links work (no 404s)
- [ ] Forms submit successfully
- [ ] Contact form emails arrive
- [ ] Consultation bookings appear in admin
- [ ] Blog posts display correctly
- [ ] Search/filter work
- [ ] WhatsApp integration works
- [ ] Admin dashboard functions
- [ ] Can update lead status
- [ ] Animations play smoothly

### Performance Tests
- [ ] Page loads quickly (< 3s)
- [ ] Images load properly
- [ ] No console errors (F12 → Console)
- [ ] Mobile performance good (test on phone)
- [ ] Desktop performance good
- [ ] Tablet responsive
- [ ] All breakpoints work

### Browser Compatibility
- [ ] Chrome - works?
- [ ] Firefox - works?
- [ ] Safari - works?
- [ ] Edge - works?
- [ ] Mobile Safari (iPhone) - works?
- [ ] Chrome Mobile (Android) - works?

### Mobile Testing
- [ ] Hamburger menu works
- [ ] Touch targets large enough
- [ ] Text readable without zoom
- [ ] Forms easy to fill
- [ ] Consultation bar appears on scroll
- [ ] WhatsApp button accessible
- [ ] No horizontal scroll needed

### Security Checks
- [ ] HTTPS enabled (check URL lock icon)
- [ ] No console warnings/errors
- [ ] No sensitive data exposed
- [ ] Forms only submit to Formspree
- [ ] Environment variables not visible

### SEO Basics
- [ ] Page titles differ and descriptive
- [ ] Meta descriptions present
- [ ] Hero images have alt text
- [ ] All important content indexable
- [ ] Mobile friendly (test with Google)

## Content Quality Check

### Home Page
- [ ] Hero section compelling
- [ ] Practice areas clear
- [ ] Testimonials appropriate
- [ ] Blog preview shows latest posts
- [ ] CTAs clear and visible

### About Page
- [ ] Bio accurate and complete
- [ ] Timeline informative
- [ ] Credentials displayed
- [ ] Professional photo present
- [ ] Call to action clear

### Practice Areas
- [ ] All 5 practice areas listed
- [ ] Descriptions accurate
- [ ] Services listed for each
- [ ] Timeline realistic
- [ ] Detail pages work

### Consultation Page
- [ ] Date picker works
- [ ] Time slots available
- [ ] Form validates properly
- [ ] Submission works
- [ ] Confirmation appears

### FAQ Page
- [ ] All categories display
- [ ] Questions relevant
- [ ] Answers helpful
- [ ] Accordion expands/collapses
- [ ] Search/filter work

### Blog
- [ ] Posts display correctly
- [ ] Images load
- [ ] Read times accurate
- [ ] Categories filter properly
- [ ] Individual posts complete
- [ ] Related posts show

### Contact Page
- [ ] Contact info complete
- [ ] Form works
- [ ] Success message appears
- [ ] Email received

### Admin Dashboard
- [ ] Dashboard accessible
- [ ] Sample leads show (after testing)
- [ ] Status updates work
- [ ] Search functionality works
- [ ] Sort options functional

## Marketing Prep (Day 5-6)

### Content Creation
- [ ] Write 3-5 blog posts
- [ ] Prepare social media posts
- [ ] Create launch announcement
- [ ] Prepare email (if you have list)
- [ ] Write about/practice area descriptions

### Social Setup (Optional)
- [ ] Create LinkedIn company page
- [ ] Set up Twitter/X account
- [ ] Add social media links in footer
- [ ] Plan launch posts
- [ ] Schedule posts for launch day

### Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add to Vercel environment
- [ ] Test tracking works
- [ ] Set up goal for consultations

## Launch Day (Day 7)

### Final Checks (1 hour before)
- [ ] Site loads at custom domain
- [ ] All pages work
- [ ] Forms functional
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Admin dashboard works

### Launch Notifications
- [ ] Send launch email (if applicable)
- [ ] Post on social media
- [ ] Update LinkedIn
- [ ] Tell friends/contacts
- [ ] Ask for shares/reviews

### Monitor First 24 Hours
- [ ] Check form submissions come through
- [ ] Monitor site performance
- [ ] Check for error notifications
- [ ] Respond to inquiries promptly
- [ ] Thank people who visit

## Post-Launch (Week 1)

### Monitoring
- [ ] Daily check: forms working?
- [ ] Daily check: no errors?
- [ ] Review form submissions
- [ ] Respond to inquiries within 24h
- [ ] Monitor Vercel analytics

### Content Updates
- [ ] Update blog with new content
- [ ] Add client testimonials
- [ ] Update pricing/hours if needed
- [ ] Fix any typos found

### Feedback Collection
- [ ] Ask clients for feedback
- [ ] Fix any issues reported
- [ ] Test on different devices
- [ ] Get user testimonials

### Performance Review
- [ ] Check site speed (Google PageSpeed)
- [ ] Review Vercel analytics
- [ ] Check Google Analytics if added
- [ ] Plan improvements

## Ongoing Maintenance

### Weekly
- [ ] Check new form submissions
- [ ] Respond to inquiries
- [ ] Update admin dashboard status
- [ ] Scan for errors/issues

### Monthly
- [ ] Update blog with new post
- [ ] Review website analytics
- [ ] Check uptime status
- [ ] Update content as needed
- [ ] Keep dependencies updated

### Quarterly
- [ ] Update practice areas if needed
- [ ] Refresh testimonials
- [ ] Review and update FAQ
- [ ] Check security/compliance
- [ ] Plan feature improvements

### Annually
- [ ] Comprehensive security audit
- [ ] Design refresh if needed
- [ ] Update all content
- [ ] Plan next year improvements
- [ ] Renew domain/certificates

## Troubleshooting During Launch

### Site Down
- [ ] Check Vercel dashboard
- [ ] Check deployment status
- [ ] Look at build logs
- [ ] Redeploy if needed
- [ ] Contact Vercel support

### Forms Not Working
- [ ] Check Formspree endpoint
- [ ] Verify environment variables set
- [ ] Check Formspree inbox
- [ ] Redeploy and try again

### Emails Not Arriving
- [ ] Check Formspree spam folder
- [ ] Verify endpoint is correct
- [ ] Test Formspree directly
- [ ] Check form submission logs

### Performance Slow
- [ ] Check Vercel bandwidth usage
- [ ] Look at large assets
- [ ] Check for Vercel issues
- [ ] Use Google PageSpeed
- [ ] Optimize images if needed

## Contact Information

### Important Contacts
- **Vercel Support**: support@vercel.com (or dashboard)
- **Formspree Support**: support@formspree.io
- **Domain Registrar**: (your registrar's support)
- **GitHub Support**: help@github.com

### Resources
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com
- Formspree Help: https://formspree.io/help

## Notes & Custom Checklist Items

Add your own items here:

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

## Launch Sign-Off

- [ ] All checks completed
- [ ] Testing finished
- [ ] Ready for launch
- [ ] Domain active
- [ ] Forms tested
- [ ] Admin access verified

**Launch Date**: ___________
**Domain**: ___________
**Vercel URL**: ___________
**Form Submission Email**: ___________

---

**Status**: ⬜ Pre-Launch | 🟨 In Progress | 🟩 Launched

**Notes**:
```
[Add any custom notes or findings here]
```

---

Good luck with your launch! 🚀

For questions, refer to:
- README.md (setup & usage)
- DEPLOYMENT.md (deployment guide)
- QUICK_START.md (quick reference)
