# Counsel & Clarity - Legal Advocacy Website

A modern, production-ready React + Vite + Tailwind CSS website for Advocate Julian Thorne's legal practice. Features fully functional consultations, contact forms, blog, practice areas, and admin dashboard.

## Features

### Core Features
- ✅ **Responsive Design**: Mobile-first approach with full mobile-to-desktop responsiveness
- ✅ **Multiple Pages**: Home, About, Practice Areas, Consultations, FAQ, Blog, Contact, Admin Dashboard
- ✅ **Contact Forms**: Working contact and consultation booking forms with validation
- ✅ **Email Integration**: Formspree integration for form submissions
- ✅ **Date Picker**: React DatePicker for consultation scheduling
- ✅ **WhatsApp Integration**: Dynamic WhatsApp button with page-context messages
- ✅ **Blog System**: Dynamic blog with posts, categories, search, and individual post pages
- ✅ **Admin Dashboard**: Lead management, status tracking, and contact information
- ✅ **Animations**: Smooth scroll animations using Framer Motion
- ✅ **SEO**: Helmet-Async for meta tags per page
- ✅ **Loading States**: Form skeleton loaders and success modals
- ✅ **Persistent Storage**: Leads stored in localStorage with Context API

### Design Features
- Beautiful Material Design color palette
- Consistent spacing and typography
- Smooth transitions and hover states
- Mobile consultation bar (sticky on scroll)
- Floating WhatsApp button
- Success/error modals
- Professional typography (Inter font)
- Custom Material Icons

## Tech Stack

- **Frontend Framework**: React 19.2.7
- **Build Tool**: Vite 8.1.1
- **Styling**: Tailwind CSS 4.3.2 with @tailwindcss/vite
- **Routing**: React Router DOM 7.18.1
- **Animations**: Framer Motion 12.42.2
- **Forms**: React DatePicker 9.1.0
- **SEO**: React Helmet Async 3.0.0
- **Linting**: Oxlint 1.71.0
- **Deployment**: Vercel

## Project Structure

```
counsel-clarity/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx          # Main layout wrapper
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Footer.jsx          # Footer
│   │   │   ├── WhatsAppButton.jsx  # Floating WhatsApp button
│   │   │   ├── CTABanner.jsx       # Call-to-action sections
│   │   │   └── MobileConsultBar.jsx # Mobile sticky bar
│   │   └── ui/
│   │       ├── MaterialIcon.jsx    # Material icon wrapper
│   │       ├── PageMeta.jsx        # SEO meta tags
│   │       ├── SuccessModal.jsx    # Success confirmation
│   │       ├── FormSkeleton.jsx    # Loading skeleton
│   │       └── AnimateOnScroll.jsx # Scroll animations
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── About.jsx               # About Julian
│   │   ├── PracticeAreas.jsx       # Practice areas overview
│   │   ├── PracticeAreaDetail.jsx  # Individual practice area
│   │   ├── Consultation.jsx        # Booking page
│   │   ├── FAQ.jsx                 # FAQs
│   │   ├── Blog.jsx                # Blog listing
│   │   ├── BlogPost.jsx            # Individual post
│   │   ├── Contact.jsx             # Contact form
│   │   └── AdminDashboard.jsx      # Lead management
│   ├── context/
│   │   └── LeadsContext.jsx        # Lead management state
│   ├── data/
│   │   ├── site.js                 # Site config
│   │   ├── practiceAreas.js        # Practice areas data
│   │   ├── faqData.js              # FAQ data
│   │   └── blogPosts.json          # Blog posts
│   ├── hooks/
│   │   └── useScrollPosition.js    # Scroll hook
│   ├── utils/
│   │   ├── validation.js           # Form validation
│   │   ├── formspree.js            # Form submission
│   │   └── whatsapp.js             # WhatsApp URL builder
│   ├── App.jsx                     # Main app with routing
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── .env.example                    # Environment variables template
├── vercel.json                     # Vercel deployment config
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
├── package.json
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- Git (optional, for version control)

### Local Development

1. **Clone or download the repository**
   ```bash
   cd counsel-clarity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables**
   Edit `.env.local`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   VITE_WHATSAPP_NUMBER=447700900123
   ```

   **To set up Formspree:**
   1. Go to [formspree.io](https://formspree.io)
   2. Create a new form
   3. Copy your form endpoint and paste it in `.env.local`

5. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

6. **Build for production**
   ```bash
   npm run build
   ```
   Output files will be in the `dist/` directory.

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form endpoint for email submissions | `https://formspree.io/f/xyzabc123` |
| `VITE_WHATSAPP_NUMBER` | WhatsApp business number (optional) | `447700900123` |

## Usage

### Add Blog Posts
Edit `src/data/blogPosts.json` to add new blog posts:

```json
{
  "id": "unique-id",
  "slug": "url-friendly-slug",
  "title": "Post Title",
  "excerpt": "Short description",
  "category": "Category Name",
  "readTime": "5 min read",
  "date": "2024-03-12",
  "image": "https://image-url.com/image.jpg",
  "imageAlt": "Image description",
  "content": "<p>HTML content here</p>"
}
```

### Customize Practice Areas
Edit `src/data/practiceAreas.js` to modify or add practice areas.

### Update FAQ
Edit `src/data/faqData.js` to add or modify FAQs.

### Change Site Config
Edit `src/data/site.js` for phone, email, address, and other site info.

## Deployment to Vercel

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub account (recommended)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Add environment variables:
     - `VITE_FORMSPREE_ENDPOINT`
     - `VITE_WHATSAPP_NUMBER`
   - Click Deploy

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain

### Post-Deployment Checklist
- [ ] Update `SITE_URL` in meta tags
- [ ] Test all forms
- [ ] Verify WhatsApp link works
- [ ] Check mobile responsiveness
- [ ] Test consultation booking
- [ ] Verify email submissions (check Formspree inbox)

## Features Explained

### Contact Forms
- **Validation**: Email, phone, required fields
- **Submission**: Sends to Formspree endpoint
- **Leads Tracking**: Stored in localStorage via Context
- **Success Modal**: Confirmation message after submission

### Consultation Booking
- **Date Picker**: Select future dates only (weekdays available)
- **Time Slots**: Pre-defined morning/afternoon slots
- **Validation**: All fields required
- **Calendar Integration**: Uses react-datepicker library
- **Email Confirmation**: User receives booking confirmation

### Blog System
- **Dynamic Posts**: Load from JSON file
- **Search & Filter**: Filter by category, search by title/excerpt
- **Auto-generated URLs**: Uses slug for routing
- **Related Posts**: Shows 3 similar posts by category
- **Read Time**: Displays estimated reading time

### Admin Dashboard
- **Lead Management**: View all form submissions
- **Status Tracking**: New → Contacted → Booked
- **Search & Sort**: Find leads easily
- **Bulk Actions**: Update status, delete, contact via email/phone
- **Statistics**: Total leads, new, contacted, booked counts
- **Persistent Storage**: Data saved in localStorage

### Animations
- **Scroll Animations**: Components fade/slide in on scroll
- **Hover Effects**: Buttons, cards, and links
- **Loading States**: Skeleton screens during form submission
- **Transitions**: Smooth color and opacity changes

### Mobile Optimization
- **Responsive Grid**: Adapts 1→2→3 columns
- **Touch-Friendly**: Large buttons and spacing
- **Mobile Menu**: Hamburger navigation
- **Sticky Bar**: Consultation CTA on scroll
- **Viewport Meta**: Proper viewport configuration

## Performance Optimization

- **Code Splitting**: Route-based splitting with React Router
- **Image Optimization**: Lazy loading with browser optimization
- **CSS Optimization**: Tailwind purges unused styles in production
- **Asset Caching**: Long-term caching for static assets
- **CDN Delivery**: Vercel's global CDN

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Common Issues & Solutions

### Forms Not Submitting
- **Issue**: "Failed to submit"
- **Solution**: Check `VITE_FORMSPREE_ENDPOINT` in `.env.local`

### WhatsApp Link Not Working
- **Issue**: WhatsApp doesn't open
- **Solution**: Ensure phone number format is correct (country code + digits only)

### Dates Not Selectable in Consultation
- **Issue**: Date picker is empty
- **Solution**: Clear browser cache, ensure JavaScript is enabled

### Admin Dashboard Shows No Leads
- **Issue**: Empty dashboard
- **Solution**: Leads are stored locally; submit a form to create a test lead

### Tailwind Styles Not Applied
- **Issue**: Classes not working in production
- **Solution**: Run `npm run build` to rebuild; check PurgeCSS config

## Customization Guide

### Change Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  // ...
}
```

### Modify Layout
- **Navbar**: Edit `src/components/layout/Navbar.jsx`
- **Footer**: Edit `src/components/layout/Footer.jsx`
- **Spacing**: Adjust custom spacing values in `tailwind.config.js`

### Update Typography
Edit `tailwind.config.js` font sizes and line heights.

## SEO Checklist

- [ ] Update meta titles and descriptions per page
- [ ] Add Open Graph tags for social sharing
- [ ] Create sitemap (Vercel auto-generates)
- [ ] Add robots.txt (optional)
- [ ] Submit to Google Search Console
- [ ] Test with Lighthouse
- [ ] Ensure mobile-friendly design

## Maintenance

### Regular Updates
```bash
npm update
```

### Add New Dependencies
```bash
npm install package-name
```

### Rebuild for Production
```bash
npm run build
```

### Run Linter
```bash
npm run lint
```

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Formspree](https://formspree.io)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel Deployment](https://vercel.com/docs)

## License

This project is provided as-is for Counsel & Clarity. All content and design are the property of Advocate Julian Thorne.

## Contact

---

**Last Updated**: July 2026
**Version**: 1.0.0
