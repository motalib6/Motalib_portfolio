# SK Motalib — Portfolio

Personal portfolio website for **SK Motalib**, a Computer Science (AI & ML) undergraduate who has interned at Microsoft and IBM and shipped 6 production AI systems.

## What This Is

A recruiter-facing portfolio built with a **Neo-Brutalist × Liquid Glass** design direction — thick borders and hard shadows meet frosted glass panels with real 3D depth. No templates, no generic copy. The site demonstrates real shipped work across healthcare, civic-tech, edtech, agri-tech, and fintech AI.

## Key Features

- **Neo-Brutalist × Liquid Glass** — intentional contrast between raw structure and frosted surfaces
- **Mouse-tracking 3D tilt** on project cards and hero glass panel
- **Scroll reveal animations** with `prefers-reduced-motion` support
- **Stat counter animation** — wired to real numbers (3 internships, 9 months, 6 AI systems)
- **Responsive** — tested at 375px, 768px, 1440px
- **Accessible** — keyboard focus states, semantic HTML, alt text, WCAG-conscious contrast
- **Formspree contact form** — works out of the box with your own Formspree endpoint

## Tech Stack

- HTML5
- CSS3 (custom properties, glassmorphism, CSS Grid/Flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Space Grotesk, DM Sans, JetBrains Mono)
- Font Awesome 6.5.1

## Sections

1. **Hero** — Name, role, links, profile image, stat counters
2. **About** — Bio, contact details
3. **Skills** — Languages, AI/ML, Gen AI & LLMs, Web & Mobile, Data, Cloud & DevOps
4. **Experience** — 3 real internships (Microsoft, IBM, COTHON/VaultofCodes/Codec)
5. **Projects** — 6 flagship AI systems with stack and feature details
6. **Achievements & Certifications** — Hackathons, Google programs, certifications
7. **Education** — B.Tech CS (AI & ML), GEC Autonomous
8. **Contact** — Working mailto/tel links, Formspree form

## Setup

```bash
# Clone
git clone https://github.com/skmotalib/Motalib_portfolio.git
cd Motalib_portfolio

# Copy environment variables (optional — only needed for contact form)
cp .env.example .env
# Edit .env with your Formspree endpoint

# Open in browser
# No build step required — open index.html directly
```

## Contact Form

The contact form uses [Formspree](https://formspree.io). To enable it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint URL
4. Replace the `action` URL in `index.html` line 413 with your endpoint

## Live Demo

🔗 [motalib6.github.io/Motalib_portfolio](https://motalib6.github.io/Motalib_portfolio)

## License

[MIT](LICENSE)
