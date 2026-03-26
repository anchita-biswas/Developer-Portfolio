# 💼 Anchita's Developer Portfolio

> \*A clean, responsive personal portfolio showcasing my skills, projects, and contact details — built from scratch with HTML \& CSS.\*

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
|HTML5|Page structure|
|CSS3|Styling, layout, animations, responsive design|
|Font Awesome 6|Icons throughout the page|
|Google Fonts|Poppins + Montserrat typography|

> No frameworks, no build tools — pure HTML \& CSS.

\---

## 📁 Project Structure

```
portfolio/
├── index.html
├── index.css
└── Images/
    ├── dp anime.png
    ├── html.png
    ├── css.png
    ├── javascript.png
    ├── node js.png
    └── react js.webp
```

\---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate into the project
cd portfolio

# Open in your browser
open index.html
```

No installs, no dependencies — just open and go.

\---

## 🌐 Deploying on GitHub Pages

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Hit **Save** — your site will be live at `https://your-username.github.io/portfolio/`

\---

## 📱 Responsive Design

The layout is fully responsive across all screen sizes:

* **Desktop** — side-by-side hero, multi-column skills grid, split contact section
* **Tablet (≤740px)** — stacked hero, centered layout, vertical contact section
* **Mobile (≤600px)** — icon-only navbar, full-width project cards, compact spacing

\---

## 🎨 Design Highlights

* **Color palette** — light background `#eeeff1` with a vibrant blue accent `#4a76f7`
* **Project cards** — dark overlay slides in on hover, revealing the project title and a "View Live" button
* **Skill cards** — lift and glow on hover with a blue border transition
* **Contact socials** — slide-right animation on hover for each social link tile
* **Footer** — dark navy background for strong contrast, with social icon links

\---

## 🔧 Customisation Guide

To make this your own:

* **Hero bio** — update the `<p>` text inside `.intro-section-content` in `index.html`
* **Profile image** — replace `Images/dp anime.png` with your own photo
* **Projects** — swap the `href="#"` on each `.project-card` with your live project URLs, and update the `<h3>` and `<p>` inside `.project-info`
* **Contact links** — update the `href` values in `.contact-socials` and the footer with your real LinkedIn, GitHub, email, and phone number
* **Navbar links** — update the GitHub and LinkedIn `href` attributes in the navbar

\---

