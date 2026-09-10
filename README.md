# Amal Jyothi College of Engineering (AJCE) — Digital Experience

> **"AJCE — WHERE IDEAS BECOME IMPACT"**  
> An autonomous, contemporary, and accessible university landing page experience designed for the ARCADE Practical Recruitment Challenge.

[![React 19](https://img.shields.io/badge/React-19.3.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646cff.svg)](https://vitejs.dev/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-emerald.svg)](#accessibility-suite)

---

## 🌟 Vision & Design Philosophy

Rather than treating Amal Jyothi College of Engineering (AJCE) as a traditional static brochure, this portal is designed as an **editorial, minimal, light-coloured, and technology-driven digital product experience**.

It utilizes a luminous, contemporary palette (`#F8FAFC`, `#FFFFFF`, `#F1F5F9`) with crisp graphite typography (`#0F172A`), soft diffuse shadows, hairline slate borders, and disciplined warm amber accents (`#D97706`).

It communicates the institution's core cadence:  
**LEARN → BUILD → EXPERIMENT → INNOVATE → LAUNCH → IMPACT**

### Core Highlights
- **Official Identity Integration**: Features the official **25-Year Silver Jubilee AJCE Logo** (`ajceJubileeLogo.png` from `ajce.in`) and high-resolution aesthetic campus photography (`campus_bg.jpg`, aerial views, labs, cafeteria).
- **Interactive Campus Topography**: Cinematic architectural overview with interactive hotspot nodes (`AI`, `RESEARCH`, `AES`, `STARTUPS`, `I²U`, `CAMPUS LIFE`) providing contextual facility data.
- **"What Do You Want to Build?" (Pathway Finder)**: Interactive career and engineering roadmap builder mapping 7 student passion domains to tangible degree and venture outcomes.
- **AJCE at a Glance**: Viewport-triggered animated metric counters showcasing verified scale: 25 Years, 23 Programmes, 3,500+ Students, 240+ Faculty, 95+ Startups, 2 TBIs, 68-Acre Campus, 13 Departments.
- **"From Idea to Impact" & Innovation Timeline**: 6-stage interactive innovation lifecycle and institutional milestone tracker from 2001 to 2026.
- **Academic Enterprise Solutions (AES)**: Dedicated *"Built Here. Used Here."* section showcasing AJCE's in-house campus operating system with live simulated telemetry and student engineering credits.
- **Academic Explorer**: Progressive filter engine across Engineering, Computer Applications, Management, Postgraduate, and Doctoral research tracks with syllabus detail modals.
- **One Campus. Many Worlds**: Visual portal traversing `LEARN`, `BUILD`, `LIVE`, `CREATE`, `COMPETE`, and `CONNECT` with verified campus photography.
- **Student Life Carousel**: Interactive horizontal carousel spanning IEEE, ACM, GDSC, Radio 90FM (Kerala's 1st campus community radio), Baja SAE racing buggy, and NSS.
- **Functional Assistive Suite ("AJCE ACCESS")**: Full WCAG 2.1 AA assistive drawer featuring dynamic text scaling, High Contrast (AAA), Reduced Motion, Dyslexia-friendly typography, link outlines, large tap targets, and native **Web Speech API Text-to-Speech page narration**.

---

## 🛠️ Tech Stack & Engineering Decisions

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Latest concurrent features, optimized client rendering, zero component lag. |
| **Language** | **TypeScript 5.8** | Strict type safety across all institutional data structures, pathways, and states. |
| **Styling** | **Tailwind CSS v4** | Blistering compile speed via `@tailwindcss/vite`, zero runtime CSS overhead, accessible utility primitives. |
| **Build Tool** | **Vite 8.3** | Lightning-fast HMR and sub-second production rollups (< 450ms). |
| **Icons** | **Lucide React** | Clean, accessible, lightweight SVG iconography with semantic attributes. |
| **Assistive Tech** | **Web Speech API** | Native in-browser screen text-to-speech reader requiring zero external API keys. |

---

## 🚀 Quick Start & Local Execution

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ (tested on v24.18)
- npm v10+

### Installation
```bash
# Clone the repository
git clone <YOUR_REPO_URL>
cd ARCADE

# Install dependencies
npm install

# Launch development server
npm run dev
```

The portal will immediately be available at:
`http://localhost:3000/`

### Production Build
```bash
npm run build
```
Generates an optimized static bundle in `dist/` ready for zero-configuration deployment to **Vercel**, **Netlify**, or **GitHub Pages**.

---

## ♿ Accessibility ("AJCE ACCESS")

Click the floating **"AJCE ACCESS"** badge on the bottom right of the screen to toggle:
- **Text Scaling**: 100% (Normal), 115% (Large), 130% (Extra Large)
- **High Contrast**: WCAG AAA enhanced dark contrast
- **Motion Reduction**: Disables all animations and smooth transitions for vestibular sensitivity
- **Reading Modes**: Distraction-free layout & Dyslexia-friendly typography
- **Navigation Aids**: Highlight all clickable targets, enlarge tap zones to min 48px, enhanced keyboard focus outlines
- **Text-to-Speech**: Full browser voice narration of visible page content

---

## 🏛️ Institutional Reference

All facts, statistics, and institutional assets are grounded in the verified ecosystem of:
- **Amal Jyothi College of Engineering (Autonomous)**
- Koovappally P.O., Kanjirappally, Kottayam District, Kerala, India - 686518
- Website: [https://www.ajce.in/](https://www.ajce.in/)
- NAAC 'A+' Accredited • NBA Accredited Programmes • Affiliated to APJ Abdul Kalam Technological University (KTU)
