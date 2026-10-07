# Mina Raafat - Frontend Developer Portfolio (Vue.js 3)

A high-performance, modern, and responsive personal portfolio built for **Mina Raafat Fakry** using **Vue.js 3 (Composition API)**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Dark & Light Themes**: Smooth transitions, persistent theme preference in `localStorage`, and auto-detection of OS color scheme.
- **Projects Showcase**: Filterable showcase of real projects with live demo links, GitHub repositories, feature checklists, and tech tags (featuring *FreshCart*, *3DSH Photography*, *What's For Dinner*, *ContactHub*, and *Clarity*).
- **Verified Certifications Gallery**: Interactive gallery with a custom **Lightbox Modal** displaying Mina's verified certificate images (*ITIDA Gigs 3-Month Freelance Program* and *Sprints x Microsoft Web Development Summer Camp*), plus *Route Academy* track.
- **Experience & Education Timeline**: Detailed breakdown of the Frontend Developer Internship at *Zumra Food* and Computer Science studies at *Modern Academy*.
- **Technical Skills Matrix**: Visual category progress indicators for Frontend Core, State Management (Pinia/Vuex), Styling (Tailwind CSS), and Development Tools.
- **Direct Contact & Form**: Instant email copy with toast alert, direct one-click WhatsApp chat link (`+20 1278889860`), and reactive contact form.
- **100% Mobile Responsive**: Mobile hamburger drawer navigation, touch-friendly buttons, and fluid layouts for all devices.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
mina-portfolio/
├── public/
│   └── certificates/           # High-resolution certificate images
│       ├── itida-eyouth.jpg
│       └── sprints-microsoft.png
├── src/
│   ├── components/
│   │   ├── Navbar.vue          # Sticky nav, theme switch & mobile drawer
│   │   ├── Hero.vue            # Hero headline, animated roles, code card
│   │   ├── About.vue           # Profile overview, stats, experience timeline
│   │   ├── Skills.vue          # Categorized technical skills matrix
│   │   ├── Projects.vue        # Filterable project catalog with live links
│   │   ├── Certificates.vue    # Certifications gallery + Lightbox modal
│   │   ├── Contact.vue         # Contact cards, WhatsApp link, contact form
│   │   └── Footer.vue          # Footer & back-to-top button
│   ├── composables/
│   │   └── useTheme.js         # Dark/Light mode state management
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio content
│   ├── App.vue                 # Root component
│   ├── main.js                 # App entry point
│   └── style.css               # Tailwind directives & custom animations
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Customizing Content

All personal info, projects, skills, certificates, and work experience are centralized in:
`src/data/portfolioData.js`.
You can easily add new projects or update links anytime!
