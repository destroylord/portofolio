# 🚀 Modern Portfolio Website

A high-performance, accessible, and modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features beautiful animations, dark/light theme support, and optimized for SEO and performance.

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX** with smooth animations using Framer Motion
- **Dark/Light theme** with system preference detection
- **Responsive design** that works on all devices
- **Accessibility-first** approach with ARIA labels and keyboard navigation
- **Beautiful gradients** and modern design patterns

### ⚡ Performance
- **Optimized images** with Next.js Image component
- **Code splitting** and lazy loading for better performance
- **Bundle optimization** with tree shaking
- **Caching strategies** for static assets
- **Web Vitals monitoring** ready

### 🔧 Technical Features
- **TypeScript** for type safety
- **Custom hooks** for reusable logic
- **Error boundaries** for graceful error handling
- **Loading states** and skeleton screens
- **SEO optimized** with proper meta tags and structured data
- **Security headers** and CSP policies

### 🎯 Components
- **Hero Section** with animated text and call-to-action
- **Experience Timeline** with interactive cards
- **Portfolio Gallery** with project showcases
- **Contact Form** with validation
- **Footer** with social links and quick navigation
- **Header** with theme toggle and navigation

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Iconify React
- **Fonts:** Inter & JetBrains Mono
- **State Management:** Zustand
- **Deployment:** Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update the `.env.local` file with your information:
   ```env
   NEXT_PUBLIC_SITE_NAME="Your Portfolio"
   NEXT_PUBLIC_AUTHOR_NAME="Your Name"
   NEXT_PUBLIC_AUTHOR_EMAIL="your.email@example.com"
   NEXT_PUBLIC_GITHUB_URL="https://github.com/yourusername"
   NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/in/yourusername"
   ```

4. **Update your data**
   
   Edit `public/data/data.json` with your personal information, experiences, and projects.

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── common/           # Shared utilities and types
│   │   ├── constants.ts   # App constants and configuration
│   │   ├── types.ts       # TypeScript type definitions
│   │   └── hooks.ts       # Custom React hooks
│   ├── components/        # React components
│   │   ├── ErrorBoundary.tsx
│   │   ├── Loading.tsx
│   │   ├── SEO.tsx
│   │   └── ...
│   ├── providers/         # Context providers
│   │   └── ThemeProvider.tsx
│   ├── store/            # State management
│   ├── utlis/            # Utility functions
│   │   ├── accessibility.ts
│   │   └── performance.ts
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
public/
├── data/
│   └── data.json         # Portfolio data
├── images/               # Static images
└── ...
```

## 🎨 Customization

### Theme Colors

Update your brand colors in `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
}
```

### Content

1. **Personal Information:** Update `public/data/data.json`
2. **Images:** Replace images in `public/images/`
3. **Resume:** Add your resume PDF to `public/`
4. **Favicon:** Replace favicon files in `public/`

### Components

All components are modular and can be easily customized:

- **Hero Section:** `src/app/components/Hero.tsx`
- **About:** `src/app/components/About.tsx`
- **Experience:** `src/app/components/Experiences.tsx`
- **Portfolio:** `src/app/components/Portfolio.tsx`
- **Contact:** `src/app/components/Contact.tsx`

## 📊 Performance Optimization

### Built-in Optimizations

- **Image Optimization:** Automatic WebP/AVIF conversion
- **Code Splitting:** Automatic route-based splitting
- **Tree Shaking:** Unused code elimination
- **Compression:** Gzip/Brotli compression
- **Caching:** Aggressive caching for static assets

### Bundle Analysis

Analyze your bundle size:

```bash
ANALYZE=true npm run build
```

### Performance Monitoring

The app includes Web Vitals monitoring. You can integrate with:

- **Vercel Analytics**
- **Google Analytics**
- **Sentry Performance**

## 🔒 Security

### Security Headers

The app includes security headers:

- **CSP (Content Security Policy)**
- **X-Frame-Options**
- **X-Content-Type-Options**
- **Referrer-Policy**
- **Permissions-Policy**

### Environment Variables

Never commit sensitive data. Use environment variables for:

- API keys
- Database URLs
- Third-party service credentials

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-app)

### Other Platforms

- **Netlify:** `npm run build && npm run export`
- **GitHub Pages:** Use `next export` for static deployment
- **Docker:** Dockerfile included for containerized deployment

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for beautiful animations
- **Iconify** for the comprehensive icon library

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me at [your.email@example.com](mailto:your.email@example.com)
- Connect with me on [LinkedIn](https://linkedin.com/in/yourusername)

---

**Made with ❤️ and lots of ☕**
