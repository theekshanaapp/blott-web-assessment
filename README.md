# BLOTT - Finance News App

Stay updated with the latest financial news with BLOTT, a fast, modern, and responsive Next.js application. Built with TypeScript and Tailwind CSS, BLOTT gives you real-time financial headlines in a clean, user-friendly interface.

## 🚀 Key Features

* **🗪u Live Financial News** – Pulls the latest updates from Finnhub API.
* **🎨 Clean, Pixel-Perfect Design** – Matches Figma design exactly.
* **📱 Fully Responsive** – Looks great on mobile, tablet, and desktop.
* **⚡ Fast & Optimized** – Lazy loading, code splitting, and image optimization.
* **♿ Accessibility-Friendly** – ARIA labels and WCAG compliant.
* **🎯 TypeScript-Powered** – Strong type safety throughout.
* **🔍 SEO Ready** – Metadata and Open Graph tags included.
* **↻ Infinite Scroll** – Keep scrolling for more articles.
* **⏳ Smooth Loading States** – Skeletons for a better UX.
* **⚙️ Error Handling** – Retry logic and clear error messages.

---

## 📋 Requirements

* **Node.js** 18.0.0+
* **npm** 9.0.0+ (or yarn/pnpm)

---

## 🛠️ Getting Started

1. **Clone the repo**

   ```bash
   git clone <repository-url>
   cd blott-web-assessment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables** *(optional)*

   ```bash
   # By default, the API key is already set.
   # To use your own key, create a .env.local file:
   # FINNHUB_API_KEY=your_api_key_here
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
blott-web-assessment/
├── app/               # Next.js app pages and layouts
├── components/        # React components
│   ├── layout/        # Layout components
│   ├── news/          # News-specific components
│   └── ui/            # Reusable UI elements
├── hooks/             # Custom hooks
├── lib/               # Utilities and API
│   ├── api/           # API calls
│   └── utils/         # Helper functions
├── types/             # TypeScript types
├── public/            # Static files
└── ...config files    # Next.js, Tailwind, etc.
```

---

## 🎨 How Components Work

* **`Layout`** – Main page structure with header and footer
* **`NewsList`** – Displays news in a grid with infinite scroll
* **`NewsCard`** – Individual news article with optimized images
* **`SkeletonCard`** – Shows loading placeholders
* **`ErrorState`** – Friendly error messages

---

## 🔗 API Integration

* **Source:** [Finnhub Market News](https://finnhub.io/api/v1/news)
* **Category:** General news
* **Mapped Fields:**

  * `image` → `thumbnail`
  * `source` → `source`
  * `datetime` → `timestamp`
  * `headline` → `headline`
  * `url` → external link

All API calls are type-safe, with caching and retry logic built in.

---

## 🛠️ Scripts You Can Run

* `npm run dev` → Run development server
* `npm run build` → Build production app
* `npm run start` → Start production server
* `npm run lint` → Check for lint errors
* `npm run lint:fix` → Auto-fix lint issues
* `npm run format` → Prettier formatting
* `npm run type-check` → TypeScript checks

---

## 🎨 Design System

* **Colors:** Black background, white text, gray accents
* **Fonts:** Roboto (body), Roboto Mono (code), Noto Serif (headings)
* **Spacing:** 4px, 8px, 12px, 16px, …
* **Breakpoints:** sm 360px, md 768px, tablet 1024px, lg 1280px, xl 1366px, 2xl 1536px

---

## ⚡ Performance & UX

* Lazy loading & priority images
* Code splitting & dynamic imports
* Memoization for faster rendering
* Skeleton loaders for smooth UX
* Infinite scroll to avoid page reloads

---

## ♿ Accessibility

* Semantic HTML & ARIA labels
* Keyboard navigation
* Focus indicators
* Screen-reader friendly
* Color contrast compliant

---

## 🚒 Deployment

**Vercel (Recommended)**

* Push code to GitHub/GitLab
* Import project in Vercel
* Automatic deployment

**Other Platforms**

```bash
npm run build
npm run start
```

---

## 🤝 Contributing

* Follow existing code style
* Use meaningful commit messages
* Ensure TypeScript types are correct
* Test on multiple devices
* Run linter and formatter before committing

---

Built with Harendra Theekshana using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Finnhub API**
