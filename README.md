# Rohit Sharma — Portfolio

A production-ready personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start (Local Development)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
rohit-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        ← Fixed top navigation + dark/light toggle
│   │   ├── Hero.tsx          ← Animated typing hero + code card
│   │   ├── About.tsx         ← About me + 4 engineering pillars
│   │   ├── Skills.tsx        ← 5 skill groups with color-coded cards
│   │   ├── Projects.tsx      ← 3 featured project cards (problem + architecture + achievements)
│   │   ├── Highlights.tsx    ← Animated counters (DSA, APIs, Projects, Java version)
│   │   ├── Timeline.tsx      ← Learning journey timeline
│   │   ├── GitHubStats.tsx   ← GitHub stats via github-readme-stats
│   │   ├── Contact.tsx       ← Contact form + direct links
│   │   └── Footer.tsx        ← Footer with social links
│   ├── globals.css           ← Tailwind + custom CSS variables + glass effects
│   ├── layout.tsx            ← SEO metadata + font imports
│   └── page.tsx              ← Main page assembling all sections
├── public/
│   └── resume.pdf            ← PUT YOUR RESUME HERE (rename your PDF to resume.pdf)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 📄 Important: Add Your Resume

1. Take your resume PDF
2. Rename it to `resume.pdf`
3. Put it inside the `public/` folder

The Download Resume button in the Hero section will then work automatically.

---

## 🌐 Deploy to Vercel (Free — 2 minutes)

### Step 1 — Push to GitHub

In VS Code terminal (inside the rohit-portfolio folder):

```bash
git init
git add .
git commit -m "initial portfolio"
```

Then go to [github.com/new](https://github.com/new), create a new repo called `rohit-portfolio` (don't add README), then run:

```bash
git remote add origin https://github.com/rohitsharma2256/rohit-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click **"Add New Project"**
4. Select your `rohit-portfolio` repository
5. Click **Deploy** (all settings are auto-detected)
6. Done! You get a URL like `rohit-portfolio.vercel.app`

---

## 🔧 Customization Checklist

- [ ] Add `resume.pdf` to `public/` folder
- [ ] Update GitHub links in `Projects.tsx` with actual repo URLs
- [ ] Replace contact form submit handler in `Contact.tsx` with Formspree or EmailJS
- [ ] Update `next.config.js` image domains if needed

### Connect a real contact form (optional but recommended)

Sign up at [formspree.io](https://formspree.io) → get a form endpoint → replace the `handleSubmit` function in `Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('sending')
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setStatus(res.ok ? 'sent' : 'error')
}
```

---

## Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — type safety throughout
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — smooth animations and scroll-triggered reveals
- **Lucide React** — clean, consistent icons
- **GitHub Readme Stats** — live GitHub activity cards

---

Built by Rohit Rajendra Sharma · [rohitsharma250602@gmail.com](mailto:rohitsharma250602@gmail.com)
