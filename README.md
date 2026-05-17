# Kailash Sangrila - Premium Pilgrimage Website

A modern, luxurious pilgrimage booking website built with Next.js 15, Tailwind CSS, and Framer Motion. Features a stunning dark theme with gold accents, smooth animations, and a complete booking system for Adikailash, Omparvat, and Kailash Yatra packages.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=flat-square)

## Features

- **Premium Dark Theme** - Luxurious black background with gold (#f59e0b) accents
- **Animated Hero Section** - Typewriter effect, floating particles, and gradient orbs
- **7 Tour Packages** - Complete package details with itineraries and pricing
- **Responsive Design** - Mobile-first approach with hamburger menu
- **Framer Motion Animations** - Smooth page transitions and scroll animations
- **WhatsApp Integration** - Floating chat button for instant inquiries
- **Booking System** - Complete booking form with package selection
- **Contact Forms** - Inquiry forms with validation
- **Trust Badges** - Social proof and credibility indicators
- **Batch Dates** - Upcoming departure dates with availability status
- **FAQ Section** - Accordion-style frequently asked questions
- **Back to Top** - Smooth scroll-to-top functionality
- **Scroll Progress** - Visual progress indicator
- **Magnetic Buttons** - Interactive cursor-following effect
- **SEO Optimized** - Meta tags and structured data ready

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 11
- **Icons:** Heroicons (SVG)
- **Deployment:** Vercel

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher - [Download](https://nodejs.org/)
- **npm** 9.x or higher (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/girish6j87/divya-darshan-website.git
cd divya-darshan-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Images (Simple!)

Just drop your images into `public/images/` folder. **Name them by package ID** - the code handles everything automatically!

| Filename | Package | Duration | Recommended Size |
|----------|---------|----------|------------------|
| `ex-dharchula-3d2n.jpg` | Adikailash from Dharchula | 3 Days / 2 Nights | 1920x1080 |
| `ex-pithoragarh-3d2n.jpg` | Adikailash from Pithoragarh | 3 Days / 2 Nights | 1920x1080 |
| `ex-kathgodam-direct-5d4n.jpg` | Direct from Kathgodam | 5 Days / 4 Nights | 1920x1080 |
| `ex-kathgodam-kumaon-6d5n.jpg` | With Kumaon Darshan | 6 Days / 5 Nights | 1920x1080 |
| `ex-kathgodam-darma-8d7n.jpg` | With Darma Valley | 8 Days / 7 Nights | 1920x1080 |
| `ex-delhi-direct-5d4n.jpg` | Direct from Delhi | 5 Days / 4 Nights | 1920x1080 |
| `ex-delhi-kumaon-8d7n.jpg` | Delhi with Kumaon | 8 Days / 7 Nights | 1920x1080 |

**How it works:**
- Images are automatically matched by package ID
- If an image is missing, a beautiful placeholder is shown
- No code changes needed - just add/replace images!

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
divya-darshan-website/
├── public/
│   └── images/              # Tour package images
├── src/
│   ├── app/
│   │   ├── about/           # About Us page
│   │   ├── booking/         # Booking page
│   │   ├── contact/         # Contact page
│   │   ├── packages/
│   │   │   ├── [id]/        # Dynamic package details
│   │   │   └── page.tsx     # All packages listing
│   │   ├── terms/           # Terms & Conditions
│   │   ├── globals.css      # Global styles & animations
│   │   ├── layout.tsx       # Root layout with Navbar/Footer
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── AnimatedCounter.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── AnnouncementBar.tsx
│   │   ├── BackToTop.tsx
│   │   ├── BatchDates.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── Footer.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── Navbar.tsx
│   │   ├── PremiumHero.tsx
│   │   ├── PremiumPackageCard.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── TypewriterText.tsx
│   │   └── VideoSection.tsx
│   └── data/
│       └── packages.ts      # Tour packages data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

### Changing Brand Colors

Edit `src/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --gold-primary: #f59e0b;    /* Main gold color */
  --gold-light: #fbbf24;      /* Light gold */
  --gold-dark: #d97706;       /* Dark gold */
}
```

### Updating Tour Packages

Edit `src/data/packages.ts`:

```typescript
export const tourPackages: TourPackage[] = [
  {
    id: "your-package-id",
    name: "Package Name",
    duration: "X Days",
    price: 00000,
    // ... other fields
  },
];
```

### Updating Contact Information

Contact details are in multiple files. Here's the complete list:

| File | What to Update |
|------|----------------|
| `src/components/Footer.tsx` | Phone, WhatsApp, Address |
| `src/components/FloatingWhatsApp.tsx` | WhatsApp number & message |
| `src/components/WhatsAppButton.tsx` | WhatsApp number |
| `src/app/contact/page.tsx` | Phone, Email, WhatsApp, Address |
| `src/app/booking/page.tsx` | Phone, WhatsApp |
| `src/app/packages/[id]/page.tsx` | Phone, WhatsApp |
| `src/app/page.tsx` | Phone number in CTA |

**Quick Find & Replace:**
```
Find: 919876543210          → Replace with: Your WhatsApp (without +)
Find: +91 98765 43210       → Replace with: Your display phone
Find: info@divyadarshan.com → Replace with: Your email
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` inside the folder
3. The route will automatically be available

Example for `/gallery`:
```
src/app/gallery/page.tsx
```

## How to Update & Deploy (Step-by-Step)

Follow these steps whenever you want to make changes to the website:

### Step 1: Make Your Changes

Edit the relevant files locally:
- **Contact details** → See "Updating Contact Information" above
- **Package prices/details** → Edit `src/data/packages.ts`
- **Images** → Add/replace in `public/images/`
- **Colors** → Edit `src/app/globals.css`

### Step 2: Test Locally (Optional but Recommended)

```bash
cd divya-darshan-website
npm run dev
```
Open http://localhost:3000 to preview changes.

### Step 3: Commit & Push to GitHub

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

### Step 4: Auto-Deploy

**That's it!** Vercel automatically detects the push and deploys your changes within 1-2 minutes.

Check deployment status at: https://vercel.com/dashboard

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click Deploy

Vercel automatically detects Next.js and configures everything.

### Deploy to Other Platforms

**Build the project:**

```bash
npm run build
```

**For Node.js hosting:**

```bash
npm run start
```

**For static export:**

Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

Then run:
```bash
npm run build
```

Static files will be in the `out/` directory.

## Environment Variables (Optional)

Create `.env.local` for environment-specific settings:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form API
NEXT_PUBLIC_FORM_API=https://your-form-api.com

# WhatsApp Number
NEXT_PUBLIC_WHATSAPP=919876543210
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance

The website is optimized for performance:

- **Lighthouse Score:** 90+ on all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

**All Rights Reserved** - This project is proprietary software owned by Kailash Sangrila Pilgrimage Services.

- No copying, modifying, or distributing without written permission
- For licensing inquiries, contact: info@divyadarshan.com

See the [LICENSE](LICENSE) file for full details.

## Support

For support, contact:
- Email: info@divyadarshan.com
- WhatsApp: +91 XXXXX XXXXX

---

Built with love for Kailash Sangrila Pilgrimage Services
