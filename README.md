# Financial Consultant Landing Page

A premium, high-converting single-page portfolio built for financial consultants. Designed with a focus on trust, conversion, and absolute clarity.

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-e60067?logo=framer)

---

## ✨ Features

- **Premium Aesthetic:** Warm cream backgrounds, high-contrast dark typography, and burnt orange accents.
- **Conversion-Optimized Layout:** Designed with clear CTAs, trust metrics, and strategic user flow.
- **Smooth Animations:** Powered by Framer Motion, featuring elegant scroll-reveal entrance animations for every section.
- **Infinite Marquee:** A CSS-powered infinite bidirectional scrolling logo wall for banking partners.
- **Mega Menu Navigation:** Complex, hover-triggered dropdowns providing quick access to specific services.
- **Responsive Design:** Completely fluid layout utilizing CSS Grid and Flexbox, constrained to a 1600px maximum width for ultrawide screens.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── globals.css         # Global styles and Tailwind v4 configuration
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page assembling all sections
├── components/
│   ├── layout/             # Structural components (Navbar, Topbar, Footer, ScrollReveal)
│   └── sections/           # Individual page sections (Hero, About, Services, etc.)
└── lib/                    # Utility functions
```

---

## 🚀 Getting Started

First, ensure you have Node.js installed on your machine. 

### 1. Clone the repository
```bash
git clone https://github.com/muhammedshamilmt/abin-portfolio.git
cd abin-portfolio
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🎨 Customization

### Modifying Content
All section text, images, and data are directly located inside their respective component files in `src/components/sections/`. 
Simply locate the component (e.g., `Hero.tsx` or `About.tsx`) and update the hardcoded text or image URLs.

### Changing Global Colors
The color palette is managed via CSS variables in `src/app/globals.css`. Modify the hex codes in the `:root` block to update the theme across the entire application instantly.

```css
:root {
  --background: #f4f0e6;
  --foreground: #1c1b1a;
  --accent-orange: #c75b39;
  --muted-text: #8b8a88;
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
