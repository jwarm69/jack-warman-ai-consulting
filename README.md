# Jack Warman AI Consulting Website

A modern, professional website for Jack Warman's AI consulting services, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with gradient backgrounds and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Performance Focused**: Static site generation with optimized images and minimal JavaScript
- **Conversion Focused**: Multiple call-to-action buttons for discovery calls throughout the site

## 📄 Pages

- **Home**: Hero section, value proposition, services overview, testimonials, and contact form
- **About**: Jack's background, journey, expertise areas, and certifications
- **Services**: Detailed breakdown of all AI consulting services with pricing and processes
- **Contact**: Comprehensive contact form and multiple ways to get in touch

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Font**: Inter (Google Fonts)
- **Icons**: Emoji-based icons for universal compatibility

## 🎨 Design System

### Colors
- **Primary Blue**: `#0369a1` (Trust, reliability)
- **Primary Teal**: `#0891b2` (Tech expertise) 
- **Accent Orange**: `#ea580c` (Energy, action CTAs)
- **Accent Green**: `#059669` (Success, growth)

### Typography
- **Font Family**: Inter
- **Hero Text**: `clamp(2.5rem, 5vw, 4rem)`
- **Section Titles**: `clamp(2rem, 4vw, 3rem)`
- **Body Large**: `1.125rem`

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/           # Header, Footer components
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components (Button, Card, etc.)
└── lib/                  # Utility functions (if needed)
```

## 🎯 Key Components

### UI Components
- **Button**: Primary, secondary, and outline variants
- **Card**: Hover effects and consistent styling
- **Section**: Background variants and responsive containers

### Sections
- **HeroSection**: Main landing section with CTAs
- **ValuePropositionSection**: AI expertise showcase
- **ServicesSection**: Service offerings overview
- **SocialProofSection**: Testimonials and stats
- **ContactSection**: Lead capture form

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Flexible grid layouts that adapt to screen size
- Touch-friendly buttons and navigation

## 🔧 Customization

### Adding New Services
1. Update the `services` array in `ServicesSection.tsx`
2. Add detailed service page in `src/app/services/page.tsx`

### Modifying Colors
1. Update CSS variables in `globals.css`
2. Modify Tailwind classes throughout components

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file with page component
3. Update navigation in `Header.tsx`

## 📈 SEO Features

- Semantic HTML structure
- Optimized meta tags and descriptions
- Open Graph and Twitter Card support
- Structured data ready
- Fast loading times
- Mobile-friendly design

## 🤝 Contact Integration

The contact forms are ready for integration with:
- Email services (SendGrid, Mailgun, etc.)
- CRM systems (HubSpot, Salesforce, etc.)
- Calendar booking (Calendly, Acuity, etc.)

## 📦 Deployment

Ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker containers**

## 📝 License

This project is proprietary and confidential. All rights reserved by Jack Warman AI Consulting.

---

Built with ❤️ for transforming SMBs with AI technology.
