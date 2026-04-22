# Ryan Logan Portfolio

Static portfolio website for Ryan Logan focused on practical AI systems, finance workflows, and business automation.

## Overview

This site presents Ryan Logan's portfolio as a bilingual single-page experience in English and Spanish. It highlights a practical approach to AI, with an emphasis on real workflow improvement rather than demo-only projects.

The homepage introduces Ryan's background, links to his resume and contact channels, and showcases a featured project: an AI financial email parser that turns Bank of America email alerts into structured Excel budgeting data.

## Site Sections

- Hero section with portfolio positioning, headshot, quick profile, and resume link
- Featured project section centered on the AI Financial Email Parser
- Process section outlining the workflow: discover, prototype, refine
- About section covering education, background, and long-term focus
- Contact section with email, GitHub, LinkedIn, and resume access

## Features

- Fully static site built with plain HTML, CSS, and JavaScript
- English and Spanish language toggle
- Automatic initial language selection based on the browser locale
- Smooth-scroll single-page navigation
- Section reveal animations using `IntersectionObserver`
- Resume download/open link
- Direct links to GitHub, LinkedIn, and email

## Design Notes

The visual direction uses warm editorial styling with:

- `Space Grotesk` for the primary sans-serif type
- `Instrument Serif` for display contrast
- Layered gradients, subtle grid texture, and glass-like cards
- Responsive layout for desktop and mobile screens

## Project Structure

- `index.html`: page structure and all portfolio content
- `styles.css`: layout, typography, colors, responsiveness, and animations
- `script.js`: reveal-on-scroll behavior and bilingual translation system
- `headshot.jpeg`: profile image used in the hero panel
- `Ryan Logan Resume.pdf`: linked resume document

## Translation System

All translatable copy is stored in a JavaScript `translations` object with `en` and `es` dictionaries. Elements are mapped using `data-i18n`, `data-i18n-html`, and `data-i18n-attr` attributes, which allows the page to swap text, HTML content, and attributes like `aria-label` and `alt` text.

The selected language is saved in `localStorage` so returning visitors keep their preference.

## Local Preview

Open `index.html` in a browser to preview the site locally.

## Repository

GitHub repository: [Ryan-Logan-Portfolio](https://github.com/ryanlogan0587-ops/Ryan-Logan-Portfolio)
