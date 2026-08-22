# 💼 Anchita's Developer Portfolio

> *A clean, responsive personal portfolio showcasing my skills, projects, and contact details — built with Next.js.*

**Live projects:** [Eventora](https://eventora-88bu.onrender.com) · [Interview Prep AI](https://interviewprep-ai-hazx.onrender.com/) · [Blipkart](https://anchita-biswas.github.io/Blipkart/) · [TinDog](https://anchita-biswas.github.io/TinDog_Dating-Website/)

---

## 👤 About

This is my personal developer portfolio website, designed to introduce myself as an aspiring Full Stack Developer. It highlights my technical skills, showcases my projects, and provides ways to get in touch.

---

## 📌 Sections

|Section|Description|
|-|-|
|**Navbar**|Skills, Work, and Contact anchors plus a "Hire me" mail link; collapses to a hamburger menu on small screens|
|**Hero**|Name, bio, profile photo, quick-navigation buttons, and social links|
|**Skills**|Tech stack displayed as icon cards with hover effects|
|**Projects**|Four project cards linking to the live sites|
|**Contact**|Social links (LinkedIn, GitHub, Email, Phone) + contact form|
|**Footer**|Brand and copyright|

---

## 🚧 Featured Projects

|Project|What it is|Stack|
|-|-|-|
|[**Eventora**](https://eventora-88bu.onrender.com)|Event booking platform — browse and book events end to end|React (Vite), Express, MongoDB|
|[**Interview Prep AI**](https://interviewprep-ai-hazx.onrender.com/)|Paste a job description and upload a resume to get a match score, tailored questions, skill gaps, and a prep roadmap|React, Node.js, Gemini AI, MongoDB|
|[**Blipkart**](https://anchita-biswas.github.io/Blipkart/)|Responsive e-commerce site for sports gear with dynamic product rendering and a cart|HTML, CSS, JavaScript|
|[**TinDog**](https://anchita-biswas.github.io/TinDog_Dating-Website/)|Tinder-inspired landing page for dogs, with pricing cards and testimonials|HTML, CSS, Bootstrap 5|

> Eventora and Interview Prep AI are hosted on Render's free tier, which sleeps after idle — the first load can take up to a minute to wake.

---

## 🛠️ Tech Stack

|Technology|Purpose|
|-|-|
|Next.js 16|App Router, static rendering, dev server|
|React 19|Component structure and UI state|
|CSS3|Styling, layout, animations, responsive design|
|Font Awesome 6|Icons throughout the page|
|Google Fonts|Outfit + Figtree typography|

> Single static page — no database, no API routes.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js      # html shell, metadata, font + icon links
│   ├── page.js        # the whole page (client component)
│   └── globals.css    # all styling
├── public/
│   └── Images/
│       ├── Display picture.png
│       ├── html.png
│       ├── css.png
│       ├── javascript.png
│       ├── node js.png
│       ├── react js.png
│       ├── Eventora.png
│       ├── Interview-prep-AI.png
│       ├── Blipkart.png
│       └── TinDog.png
└── package.json
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/anchita-biswas/Developer-Portfolio.git

# Navigate into the project
cd Developer-Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:3000`.

Production build:

```bash
npm run build
npm start
```

---

## 🌐 Deploying

**Vercel** — import the repo at [vercel.com/new](https://vercel.com/new); Next.js is detected automatically, no configuration needed.

**GitHub Pages** — needs a static export. Add to `next.config.mjs`:

```js
export default { output: 'export', images: { unoptimized: true } };
```

Then `npm run build` writes a deployable `out/` folder.

---

## 📱 Responsive Design

Two breakpoints, defined at the bottom of `app/globals.css`:

* **Desktop** — side-by-side hero, multi-column skills grid, split contact section
* **≤900px** — nav links swap for a hamburger menu, hero stacks and centres, contact grid drops to one column
* **≤480px** — smaller hero heading and photo, tighter card padding, full-width submit button

---

## 🎨 Design Highlights

* **Color palette** — deep blue-black background `#06090f` with a vibrant blue accent `#3d6ff5`
* **Project cards** — lift on hover with a blue glow, and the screenshot slowly zooms in
* **Skill cards** — lift and glow on hover with a blue border transition
* **Contact socials** — slide-right animation on hover for each social link tile
* **Scroll reveal** — skills, projects, socials, and form fields fade in as they enter the viewport, staggered by an `IntersectionObserver` in `app/page.js`

---

## 🔧 Customisation Guide

To make this your own — nearly everything lives in `app/page.js`:

* **Contact links** — the `EMAIL`, `GITHUB`, and `LINKEDIN` constants at the top of the file
* **Skills** — the `SKILLS` array; add an entry and drop the matching icon in `public/Images/`
* **Projects** — the `PROJECTS` array (live URL, screenshot, tags, title, description)
* **Hero bio** — the `.hero-sub` paragraph
* **Profile image** — replace `public/Images/Display picture.png` with your own photo
* **Colors** — the CSS variables in `:root` at the top of `app/globals.css`

> The contact form is presentational — it shows a success message and resets, but does not send anything. Wire it to a form service or a Next.js route handler to actually receive messages.

---
