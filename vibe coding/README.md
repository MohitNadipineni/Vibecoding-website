# Aroha Technologies - Enterprise IT Solutions Website

A professional, high-end Next.js 16 landing page built with Tailwind CSS and modern Glassmorphism design. Features enterprise-grade cloud solutions, data analytics, and SAP implementations.

## ✨ Features

- **Professional Design**: Dark navy (#002147) and vibrant blue (#0080ff) color palette with glassmorphism effects
- **Responsive Layout**: Mobile-first approach with seamless desktop experience
- **Sticky Navigation**: Transparent to solid transition on scroll with Get Started CTA
- **Glassmorphism Hero**: 2035-style design with backdrop blur and gradient overlays
- **3-Column Services**: Cloud, Data & Analytics, and SAP Solutions showcase
- **Clean Contact Form**: Professional form using shadcn/ui components with validation
- **Office Locations**: 4-column footer with Hyderabad and USA office information
- **Smooth Animations**: Hover effects and transitions throughout
- **TypeScript**: Full type safety support
- **Optimized Performance**: Next.js 16 with automatic optimization

## 🎨 Design System

- **Primary Color**: Deep Navy (#002147)
- **Secondary Color**: Vibrant Blue (#0080ff)
- **Accent**: Cyan-400 gradients
- **Typography**: Professional sans-serif with bold headings
- **Effects**: Glassmorphism, smooth transitions, gradient overlays

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main landing page (assembled components)
│   └── globals.css       # Global styles with CSS variables
├── components/
│   ├── Navbar.tsx        # Sticky navigation with scroll detection
│   ├── hero.tsx          # Dark navy hero with glassmorphism
│   ├── services.tsx      # 3-column grid (Cloud, Data, SAP)
│   ├── ContactForm.tsx   # Professional contact form
│   ├── footer.tsx        # 4-column footer with office info
│   ├── team.tsx          # Team members showcase
│   ├── testimonials.tsx  # Client testimonials
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
└── lib/
    └── utils.ts          # Utility functions (cn)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to project directory:
```bash
cd "c:\Users\mohit\vibe coding"
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in browser

## 📦 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🎯 Components Overview

### Navbar
- Sticky positioning with scroll-based transparency effect
- Responsive mobile menu with hamburger toggle
- Logo with gradient branding
- "Get Started" call-to-action button
- Navigation links to Services and Contact

### Hero
- Full-height background with dark navy gradient
- Glassmorphism card elements with blur effects
- Large headline with gradient text accent
- Two primary CTAs (Get Started, Explore Solutions)
- Statistics cards (250+ Clients, 98% Retention, 15+ Years)
- Floating glass-effect icons

### Services
- 3-column responsive grid
- **Cloud Solutions**: Multi-cloud architecture, cost optimization, security
- **Data & Analytics**: Data warehouse, BI, AI/ML, real-time analytics
- **SAP Solutions**: S/4HANA migration, implementation, optimization
- Interactive hover effects with icon scaling

### ContactForm
- Professional contact form with validation
- Contact information cards (Email, Phone, Locations)
- Form fields: Name, Email, Company, Subject dropdown, Message
- Success/error messaging
- Responsive layout

### Footer
- 4-column grid layout
- **Column 1**: Brand, description, social links
- **Column 2**: Solutions links
- **Column 3**: Hyderabad office details (address, phone, email)
- **Column 4**: USA office details (address, phone, email)
- Copyright and legal links

## 🎨 Customization

### Color Scheme
Edit CSS variables in `src/app/globals.css`:
```css
--navy-dark: #002147
--blue-vibrant: #0080ff
```

### Company Information
Update in these files:
- `src/components/navbar.tsx` - Logo and branding
- `src/components/hero.tsx` - Hero content
- `src/components/footer.tsx` - Office locations and contact info
- `src/app/layout.tsx` - Page metadata

### Add/Remove Sections
1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation links in Navbar

## 📊 Technologies Used

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4.0
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Build**: PostCSS, Autoprefixer

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js settings
- `tailwind.config.ts` - Tailwind CSS theming
- `postcss.config.ts` - PostCSS plugins
- `eslint.config.js` - Code linting rules

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## 🚀 Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- CSS minification via Tailwind
- Component-level code splitting
- Static generation where possible
- Font optimization with next/font

## 📝 Environment Variables

Create `.env.local` for any environment-specific settings:
```env
NEXT_PUBLIC_API_URL=
```

## 📞 Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 🎓 Learning Resources

- Modern CSS with Tailwind utilities
- React hooks (useState, useEffect)
- Next.js App Router pattern
- Component composition and reusability
- Responsive design principles

## 📄 License

This project is available for commercial use. Modify and customize as needed for your business.

---

**Built for Aroha Technologies** - Enterprise IT Solutions Provider

