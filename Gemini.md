# Project Name

Samriddha Upreti Portfolio Website

# Project Type

Static Website — GitHub Pages Ready

# Description

A modern, responsive portfolio site for Samriddha Upreti built using semantic HTML, Tailwind CSS, and vanilla JS. This site is designed to showcase skills, projects, and resume, and to be directly deployed on GitHub Pages at:
https://samriddha-upreti.github.io/Portfolio

# Target Audience

- Recruiters
- Hackathon judges
- Dev communities and collaborators
- Freelance clients

# Pages/Sections

- Home: Hero section with my name, tagline, and CTA buttons ("View Projects", "Download Resume")
- About: Short bio with tech icons and profile image
- Skills: Grid or badge layout with my tools (HTML, CSS, JS, Flutter, Firebase, etc.)
- Projects: 3–6 cards with GitHub links, tools used, short description
- Resume: Button to download resume.pdf
- Contact: Simple form (using Formspree or mailto)
- Footer: Socials (GitHub, LinkedIn, Email), copyright

# Design Guidelines

- Theme: Dark by default, light toggle available
- Font: Poppins (heading), Roboto (body)
- Tailwind CSS via CDN
- Animations: AOS.js for scroll-in
- Sticky navbar, scrollspy highlight, back-to-top button
- Fully mobile responsive with smooth transitions

# GitHub Pages Deployment (Automated)

- Output should be ready to deploy to GitHub Pages immediately
- Use only relative asset paths (e.g., ./assets/resume.pdf)
- Place index.html in root directory
- Include a blank .nojekyll file in root
- Include a README.md with:
  - Instructions to push to https://github.com/Samriddha-Upreti/Portfolio.git
  - Deployment steps for GitHub Pages
  - Live URL: https://samriddha-upreti.github.io/Portfolio

# Folder Structure

/
├── index.html
├── .nojekyll
├── README.md
├── /assets
│ ├── profile.jpg
│ ├── resume.pdf
│ └── favicon.ico
├── /css
│ └── style.css (or Tailwind CDN)
└── /js
└── main.js

# Assets (assume included or placeholder)

- profile.jpg (for About section)
- resume.pdf (for Resume section)
- favicon.ico

# Functional Requirements

- Tailwind CSS via CDN
- Vanilla JS only for interactivity (menu, animations, scroll-to-top)
- Responsive layout (flex/grid)
- Contact form using mailto or Formspree (no backend)
- Floating back-to-top button
- Include all images in /assets with relative paths
- Comment all HTML sections and JS functions

# Meta Tags (for SEO and Mobile)

- <title> should be "Samriddha Upreti | Developer Portfolio"
- Include viewport, description, author, and Open Graph tags
- Include favicon.ico in <head>

# README.md Instructions (Autogenerated)

Generate a README file with:

- Project description
- How to push this project to:
  https://github.com/Samriddha-Upreti/Portfolio.git
- Step-by-step Git commands:
  git init
  git remote add origin https://github.com/Samriddha-Upreti/Portfolio.git
  git branch -M main
  git add .
  git commit -m "Initial commit"
  git push -u origin main
- GitHub Pages setup:
  - Go to GitHub → Settings → Pages
  - Source: main branch, /root
  - Wait for deployment
- Live site: https://samriddha-upreti.github.io/Portfolio

# Output Format

Generate a complete static site (HTML, CSS, JS) with assets and instructions ready for direct deployment to GitHub Pages.
