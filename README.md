# 💼 Anchita's Developer Portfolio

> \*A clean, responsive personal portfolio showcasing my skills, projects, and contact details — built with Next.js.\*

\---


## 👤 About

This is my personal developer portfolio website, designed to introduce myself as an aspiring Full Stack Developer. It highlights my technical skills, showcases my projects, and provides ways to get in touch.

\---

## 📌 Sections

|Section|Description|
|-|-|
|**Navbar**|Greeting, GitHub, LinkedIn, and Email links|
|**Hero**|Introduction, bio, and quick-navigation links|
|**Skills**|Tech stack displayed as icon cards with hover effects|
|**Projects**|Two project cards with overlay hover effect (live site links)|
|**Contact**|Social links (LinkedIn, GitHub, Email, Phone) + contact form|
|**Footer**|Brand, tagline, social icons, and copyright|

\---

## 🛠️ Tech Stack

|Technology|Purpose|
|-|-|
|Next.js 16|App Router, static rendering, dev server|
|React 19|Component structure and UI state|
|CSS3|Styling, layout, animations, responsive design|
|Font Awesome 6|Icons throughout the page|
|Google Fonts|Outfit + Figtree typography|

> Single static page — no database, no API routes.

\---

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
│       ├── Blipkart.png
│       └── TinDog.png
└── package.json
```

\---

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

\---

## 🌐 Deploying

**Vercel** — import the repo at [vercel.com/new](https://vercel.com/new); Next.js is detected automatically, no configuration needed.

**GitHub Pages** — needs a static export. Add to `next.config.mjs`:

```js
export default { output: 'export', images: { unoptimized: true } };
```

Then `npm run build` writes a deployable `out/` folder.

\---

## 📱 Responsive Design

The layout is fully responsive across all screen sizes:

* **Desktop** — side-by-side hero, multi-column skills grid, split contact section
* **Tablet (≤740px)** — stacked hero, centered layout, vertical contact section
* **Mobile (≤600px)** — icon-only navbar, full-width project cards, compact spacing

\---

## 🎨 Design Highlights

* **Color palette** — deep blue-black background `#06090f` with a vibrant blue accent `#3d6ff5`
* **Project cards** — dark overlay slides in on hover, revealing the project title and a "View Live" button
* **Skill cards** — lift and glow on hover with a blue border transition
* **Contact socials** — slide-right animation on hover for each social link tile
* **Footer** — dark navy background for strong contrast, with social icon links

\---

## 🔧 Customisation Guide

To make this your own:

Everything lives in `app/page.js`:

* **Contact links** — the `EMAIL`, `GITHUB`, and `LINKEDIN` constants at the top of the file
* **Skills** — the `SKILLS` array; add an entry and drop the matching icon in `public/Images/`
* **Projects** — the `PROJECTS` array (live URL, screenshot, tags, title, description)
* **Hero bio** — the `.hero-sub` paragraph
* **Profile image** — replace `public/Images/Display picture.png` with your own photo
* **Colors** — the CSS variables in `:root` at the top of `app/globals.css`

\---

