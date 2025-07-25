# InspoLog

Collect your daily spark! InspoLog is a modern web app for saving, exploring, and journaling inspirational quotes, thoughts, and lessons. Built with Next.js, React, and Tailwind CSS, it offers a beautiful, responsive, and themeable user experience.

---

## 🚀 Features

- **Quote of the Day**: Get a fresh, random inspirational quote every day.
- **Explore Quotes**: Browse and paginate through a large collection of quotes.
- **Save to Journals**: Save your favorite quotes to your personal journal (stored in your browser).
- **Add Custom Entries**: Add your own quotes, authors, and tags to your journal.
- **Tagging**: Organize entries with tags like motivation, inspiration, leadership, etc.
- **Delete & Undo**: Remove saved quotes with an option to undo.
- **Dark/Light Mode**: Toggle between beautiful dark and light themes.
- **Responsive UI**: Works great on desktop and mobile.
- **Toast Notifications**: Friendly feedback for actions (save, delete, errors, etc).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- **UI**: [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **State & Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Radix UI**: Dialog, Popover, Separator
- **Other**: TypeScript, ESLint, PostCSS, localStorage (for journals)

---

## 📚 Data Model

### Quote (from API)
```ts
interface ZenQuote {
  q: string; // The quote text
  a: string; // The author
}
```

### Saved Quote (in Journal)
```ts
interface SavedQuote {
  id: number;
  q: string; // The quote text
  a: string; // The author
}
```

### Custom Entry (dummy data example)
```ts
interface InspoEntry {
  id: string;
  quote: string;
  author: string;
  image?: string;
  date: string;
  tags: string[];
}
```

---

## 🌐 API Endpoints

- **GET `/api/`**: Returns 6 random quotes from [zenquotes.io](https://zenquotes.io/).
- **GET `/api/explore`**: Returns the full list of quotes from zenquotes.io.
- **GET `/api/quote`**: Returns the quote of the day from zenquotes.io.
- **POST `/api/new`**: (WIP) Intended for adding new entries (currently uses localStorage on the client).

---

## 🖥️ Pages & User Flow

- `/` — Home: See the quote of the day, quick start to journaling.
- `/explore` — Explore: Browse and paginate all quotes, save favorites.
- `/journals` — Journals: View, manage, and delete your saved quotes.
- `/journals/new` — Add Entry: Add your own quote, author, and tag.

---

## 🎨 Theming & UI

- **Dark/Light Mode**: Toggle with the sun/moon button (top right).
- **shadcn/ui**: Modern, accessible UI components.
- **Tailwind CSS**: Utility-first styling, custom color palette, and smooth transitions.

---

## ⚡ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/inspo-log.git
   cd inspo-log
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn or pnpm
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📝 Scripts

- `npm run dev` — Start dev server (with Turbopack)
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint codebase

---

## 📦 Dependencies

- next, react, react-dom, tailwindcss, next-themes, lucide-react, sonner, @radix-ui/react-*, shadcn/ui, class-variance-authority, clsx, cmdk, tailwind-merge, typescript, eslint, postcss, tw-animate-css

---

## 📄 License

MIT (or your preferred license)

---

## 🙏 Credits

- [ZenQuotes API](https://zenquotes.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Sonner](https://sonner.emilkowal.ski/)

---

## 💡 Inspiration

Save the moments, words, and wisdom that inspire you. One quote at a time.
