# 🌟 InspoLog

<div align="center">
  <h3>Collect your daily spark!</h3>
  <p>A modern, beautiful web application for saving, exploring, and journaling inspirational quotes, thoughts, and life lessons.</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page - Quote of the Day
*Beautiful, minimalist design with daily inspiration*

![Home Page](./screenshots/home-page.png)

### 🔍 Explore Quotes - Browse & Discover
*Paginated collection of inspiring quotes from various authors*

![Explore Page](./screenshots/explore-page.png)

### 📖 Personal Journal - Your Saved Quotes
*Manage your personal collection of favorite quotes*

![Journal Page](./screenshots/journal-page.png)

### ✨ Add New Entry - Create Your Own
*Add custom quotes, thoughts, and tag them for organization*

![Add Entry](./screenshots/add-entry.png)

### 🌙 Dark Mode Support
*Beautiful dark/light theme with smooth transitions*

![Dark Mode](./screenshots/dark-mode.png)

### 📱 Mobile Responsive
*Optimized for all device sizes*

![Mobile View](./screenshots/mobile-view.png)

</div>

> **Note**: Screenshots will be added soon. Please check back for visual updates!

---

## ✨ Features

### Core Functionality
- 🎯 **Quote of the Day**: Fresh, random inspirational quote every day
- 🔍 **Explore Quotes**: Browse through extensive collection with pagination
- 💾 **Personal Journal**: Save favorite quotes to your personal collection
- ➕ **Custom Entries**: Add your own quotes, thoughts, and wisdom
- 🏷️ **Smart Tagging**: Organize entries with customizable tags
- 🗑️ **Delete & Undo**: Remove entries with convenient undo functionality
- 🔄 **Real-time Sync**: All changes saved to browser localStorage

### User Experience
- 🎨 **Dark/Light Mode**: Beautiful theme switching with system preference support
- 📱 **Fully Responsive**: Perfect experience on desktop, tablet, and mobile
- 🎭 **Smooth Animations**: Powered by Framer Motion for delightful interactions
- 🔔 **Toast Notifications**: Friendly feedback for all user actions
- ⚡ **Fast Performance**: Optimized with Next.js App Router and Turbopack
- ♿ **Accessibility**: Built with Radix UI for excellent accessibility support

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.4.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Perfect theme switching

### Animation & Interaction
- **[Framer Motion 12.23.9](https://www.framer.com/motion/)** - Production-ready motion library
- **[tw-animate-css](https://github.com/jjranalli/tw-animate-css)** - Additional CSS animations

### Utilities & Tools
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[class-variance-authority](https://github.com/joe-bell/cva)** - Component variants
- **[cmdk](https://cmdk.paco.me/)** - Command menu component
- **[Sonner](https://sonner.emilkowal.ski/)** - Beautiful toast notifications

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Turbopack](https://turbo.build/pack)** - Fast development builds

---

## 📦 Dependencies

### Core Dependencies
```json
{
  "next": "15.4.2",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "typescript": "^5"
}
```

### UI & Styling
```json
{
  "@radix-ui/react-dialog": "^1.1.14",
  "@radix-ui/react-popover": "^1.1.14",
  "@radix-ui/react-separator": "^1.1.7",
  "@radix-ui/react-slot": "^1.2.3",
  "tailwindcss": "^4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

### Animation & Interaction
```json
{
  "framer-motion": "^12.23.9",
  "cmdk": "^1.1.1"
}
```

### Icons & Notifications
```json
{
  "lucide-react": "^0.525.0",
  "sonner": "^2.0.6"
}
```

### Theme & Utilities
```json
{
  "next-themes": "^0.2.1"
}
```

---

## 🏗️ Project Structure

```
inspo-log/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📁 api/               # API Routes
│   │   │   ├── 📁 explore/       # Explore quotes endpoint
│   │   │   ├── 📁 new/           # Add new quote endpoint  
│   │   │   ├── 📁 quote/         # Quote of the day endpoint
│   │   │   └── route.ts          # Main API route
│   │   ├── 📁 explore/           # Explore page
│   │   ├── 📁 journals/          # Journal pages
│   │   │   ├── 📁 new/          # Add new entry page
│   │   │   └── page.tsx         # Main journal page
│   │   ├── favicon.ico           # App icon
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── 📁 components/            # React Components
│   │   ├── 📁 ui/               # shadcn/ui components
│   │   ├── ModeToggle.tsx       # Theme switcher
│   │   ├── PageHeader.tsx       # Navigation header
│   │   ├── QuoteListFetcher.tsx # Quote list component
│   │   ├── RandomQuoteFetcher.tsx # Random quote component
│   │   └── theme-provider.tsx   # Theme context
│   ├── 📁 lib/                  # Utilities
│   │   └── utils.ts             # Helper functions
│   └── 📁 types/                # TypeScript types
│       └── quotes.ts            # Quote interfaces
├── 📁 public/                   # Static assets
├── 📁 docs/                     # Documentation
├── 📁 screenshots/              # App screenshots
├── components.json              # shadcn/ui config
├── next.config.ts              # Next.js config
├── package.json                # Dependencies
├── postcss.config.mjs          # PostCSS config
├── tailwind.config.js          # Tailwind config
└── tsconfig.json               # TypeScript config
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MUMEi-28/inspo-log.git
   cd inspo-log
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

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development with Turbopack (fastest)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint codebase
npm run lint
```

---

## 🔧 Configuration

### shadcn/ui Configuration
The project uses shadcn/ui with the following configuration:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "slate",
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

### Theme Configuration
- **Default**: System preference
- **Options**: Light, Dark, System
- **Storage**: Browser localStorage
- **Transitions**: Smooth color transitions

---

## 📊 Data Models

### Quote (from ZenQuotes API)
```typescript
interface ZenQuote {
  id?: number;
  q: string;  // Quote text
  a: string;  // Author name
}
```

### Saved Quote (in Journal)
```typescript
interface SavedQuote {
  id: number;
  q: string;  // Quote text
  a: string;  // Author name
}
```

---

## 🌐 API Endpoints

| Endpoint | Method | Description | Response |
|----------|---------|-------------|----------|
| `/api/` | GET | Random quotes for home page | 6 random quotes |
| `/api/explore` | GET | All quotes for exploration | Complete quote collection |
| `/api/quote` | GET | Quote of the day | Single daily quote |
| `/api/new` | POST | Add new quote (WIP) | Success/Error status |

### External API
- **[ZenQuotes.io](https://zenquotes.io/)** - Inspirational quotes API
- **Rate Limiting**: Handled gracefully with fallbacks
- **Caching**: Browser-level caching for performance

---

## 🎨 Design System

### Color Palette
The app uses a sophisticated color system with:
- **Primary**: Slate-based colors for main UI elements
- **Background**: Dynamic light/dark backgrounds
- **Accents**: Subtle colors for interactive elements
- **Text**: High contrast ratios for accessibility

### Typography
- **Primary Font**: Geist Sans (optimized for readability)
- **Monospace**: Geist Mono (for code elements)
- **Font Loading**: Optimized with Next.js font loading

### Animations
- **Page Transitions**: Smooth fade and slide effects
- **Micro-interactions**: Hover states and button feedback
- **Theme Switching**: Seamless color transitions
- **Performance**: Hardware-accelerated animations

---

## 📱 Pages & User Flow

### 🏠 Home (`/`)
- **Purpose**: Display quote of the day and app introduction
- **Features**: Random quote, quick navigation, animated introduction
- **CTA**: Explore more quotes or start journaling

### 🔍 Explore (`/explore`)
- **Purpose**: Browse and discover quotes from the collection
- **Features**: Pagination, search, save to journal, responsive grid
- **Data**: Fetches from ZenQuotes.io API

### 📖 Journals (`/journals`)
- **Purpose**: Manage personal collection of saved quotes
- **Features**: View saved quotes, delete with undo, empty state
- **Storage**: Browser localStorage

### ➕ Add Entry (`/journals/new`)
- **Purpose**: Create custom inspirational entries
- **Features**: Quote input, author field, tag system, validation
- **UX**: Form validation and success feedback

---

## 🔄 State Management

### Local Storage
- **Saved Quotes**: Persistent quote collection
- **Theme Preference**: User's chosen theme
- **App Settings**: User preferences and configurations

### React State
- **UI State**: Loading states, modals, notifications
- **Form State**: Input validation and submission
- **Theme State**: Current theme with next-themes

---

## ♿ Accessibility

### Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Color Contrast**: WCAG AA compliance
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy

### Tools Used
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built accessible components
- **ESLint**: Accessibility linting rules

---

## 🚀 Performance

### Optimizations
- **Next.js App Router**: Faster navigation and loading
- **Turbopack**: Ultra-fast development builds
- **Font Optimization**: Automatic font loading optimization
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading

### Metrics
- **Core Web Vitals**: Optimized for excellent scores
- **Bundle Size**: Minimized with tree shaking
- **Load Time**: Fast initial page load
- **Runtime Performance**: Smooth 60fps animations

---

## 🔒 Security

### Best Practices
- **Input Sanitization**: Safe handling of user inputs
- **XSS Prevention**: Proper content escaping
- **CSRF Protection**: Built-in Next.js protections
- **Dependencies**: Regular security updates

---

## 🌍 Browser Support

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Progressive Enhancement
- **Core Features**: Work without JavaScript
- **Enhanced Experience**: Full features with JavaScript
- **Graceful Degradation**: Fallbacks for older browsers

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Code formatting (coming soon)
- **TypeScript**: Strict type checking enabled
- **Commits**: Use conventional commit messages

---

## 📈 Roadmap

### Upcoming Features
- [ ] **User Authentication** - Save quotes across devices
- [ ] **Quote Categories** - Filter by topics and themes  
- [ ] **Search Functionality** - Search through saved quotes
- [ ] **Export Options** - PDF, JSON, and other formats
- [ ] **Quote Sharing** - Share favorite quotes on social media
- [ ] **Mobile App** - React Native mobile application
- [ ] **Offline Support** - PWA with offline capabilities
- [ ] **Advanced Filtering** - Filter by author, date, tags
- [ ] **Quote Analytics** - Insights into your reading habits
- [ ] **Community Features** - Share and discover user quotes

### Technical Improvements
- [ ] **Database Integration** - Move from localStorage to database
- [ ] **API Rate Limiting** - Implement proper rate limiting
- [ ] **Performance Monitoring** - Add analytics and monitoring
- [ ] **Testing Suite** - Comprehensive test coverage
- [ ] **CI/CD Pipeline** - Automated testing and deployment
- [ ] **Docker Support** - Containerization for deployment

---

## 🐛 Known Issues

- Custom quote creation currently uses localStorage only
- Theme transitions may flicker on initial load
- Mobile keyboard may overlap input fields on some devices

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### APIs & Services
- **[ZenQuotes.io](https://zenquotes.io/)** - Providing inspirational quotes
- **[Vercel](https://vercel.com/)** - Hosting and deployment platform

### Open Source Libraries
- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[shadcn](https://ui.shadcn.com/)** - Beautiful component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives
- **[Framer](https://www.framer.com/motion/)** - Smooth animations
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

### Inspiration
- **Quotes Community** - For the wisdom and inspiration
- **Open Source Community** - For the tools and knowledge

---

## 📞 Support

### Get Help
- 📧 **Email**: [support@inspolog.com](mailto:support@inspolog.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/MUMEi-28/inspo-log/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/MUMEi-28/inspo-log/discussions)

### Links
- 🌐 **Live Demo**: [inspolog.vercel.app](https://inspolog.vercel.app)
- 📱 **GitHub**: [github.com/MUMEi-28/inspo-log](https://github.com/MUMEi-28/inspo-log)
- 📖 **Documentation**: [docs.inspolog.com](https://docs.inspolog.com)

---

<div align="center">
  <h3>💡 Save the moments, words, and wisdom that inspire you. One quote at a time.</h3>
  
  <p>Built with ❤️ by the InspoLog Team</p>
  
  <p>
    <a href="https://github.com/MUMEi-28/inspo-log">⭐ Star this repo</a> •
    <a href="https://github.com/MUMEi-28/inspo-log/issues">🐛 Report Bug</a> •
    <a href="https://github.com/MUMEi-28/inspo-log/pulls">🚀 Request Feature</a>
  </p>
</div>
