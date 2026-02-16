# PixelStack Landing Page

🚀 **[View Live Site](https://matinsanei.github.io/Pixelstack/)**

Enterprise-grade landing page for PixelStack Digital Experience Platform.

## 🎯 Features

- **Modern Design**: Dark theme with glassmorphism effects
- **Fully Animated**: Smooth transitions with Framer Motion
- **Performance Optimized**: Next.js 14 with static site generation
- **Responsive**: Mobile-first design that scales beautifully
- **SEO Ready**: Complete meta tags and Open Graph support
- **GitHub Pages**: Auto-deployed via GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

Visit `http://localhost:3000` to see the site.

## 📦 Project Structure

```
pixelstack-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Main landing page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navbar.tsx        # Navigation header
│       ├── HeroSection.tsx   # Hero with stats
│       ├── ArchitectureSection.tsx  # System visualization
│       ├── FeaturesSection.tsx      # Capabilities showcase
│       ├── ComparisonSection.tsx    # Competitor comparison
│       ├── CTASection.tsx    # Call to action
│       └── Footer.tsx        # Site footer
├── public/               # Static assets
├── next.config.js       # Next.js configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#38bdf8 - #0ea5e9)
- **Background**: Dark Navy (#0f172a - #020617)
- **Accent**: Gradient overlays with blur effects

### Typography
- **Font**: Inter (sans-serif)
- **Headings**: Bold with gradient text
- **Body**: Regular weight for readability

### Components
- **Glass Effect**: Backdrop blur with semi-transparent backgrounds
- **Gradients**: Smooth color transitions for visual interest
- **Animations**: Entrance animations on scroll, hover effects

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: < 100KB initial load
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

## 🔧 Configuration

### GitHub Pages Setup

1. Enable GitHub Pages in repository settings
2. Select "GitHub Actions" as the source
3. Push changes to trigger automatic deployment

### Custom Domain (Optional)

Add a `CNAME` file to the `public` directory with your domain:

```
landing.pixelstack.com
```

## 📝 License

Proprietary - PixelStack Development Group

---

Built with ❤️ and TypeScript
