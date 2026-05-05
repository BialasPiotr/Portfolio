# Portfolio — Piotr Białas

A personal portfolio website for Piotr Białas, a Backend Software Engineer based in Gdańsk. Built to present professional experience, skills, and contact information in a clean, developer-themed interface.

## Purpose

This application serves as a public-facing CV and portfolio. All content is stored in a single `src/data.js` file, making it easy to update without touching any component logic. The project was built to practice React and component-based UI design while creating a real, deployable personal brand site.

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| React | 19 | UI library |
| Vite | 8+ | Build tool & dev server |
| react-icons | 5+ | Technology & UI icons |
| JetBrains Mono | — | Monospace font (Google Fonts) |
| CSS (plain) | — | Component-scoped styling |

## Features

- Animated typing effect on the hero section
- Navbar that transitions to a floating pill on scroll
- Timeline layout for work experience
- Skill cards with technology icons grouped by category
- "Say Hello" button that opens the default mail client
- Scroll-to-top button
- Resume opens as PDF in a new browser tab
- Smooth scroll navigation between sections

## Updating Content

All CV data lives in one place — `src/data.js`. Edit it to update any information on the site.

## Running Locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev        # development server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build at http://localhost:4173
```

## Project Structure

```
src/
├── data.js                 ← all CV content lives here
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── About.jsx / .css
    ├── Skills.jsx / .css
    ├── Experience.jsx / .css
    ├── Contact.jsx / .css
    ├── Footer.jsx / .css
    └── ScrollToTop.jsx / .css
```
