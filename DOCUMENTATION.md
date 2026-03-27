# Praveenkumar B - Portfolio Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Project Structure](#project-structure)
4. [Installation & Setup](#installation--setup)
5. [Running the Project](#running-the-project)
6. [Component Documentation](#component-documentation)
7. [Testing Guide](#testing-guide)
8. [Deployment](#deployment)
9. [Performance Optimization](#performance-optimization)
10. [Browser Support](#browser-support)
11. [Contributing](#contributing)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Portfolio Name:** Praveenkumar B - Data Analyst Portfolio

**Version:** 1.0.0

**Description:** A modern, responsive React portfolio website showcasing professional experience, skills, and projects as a Data Analyst. The portfolio features smooth animations, responsive design, and interactive components.

**Key Features:**
- Fully responsive design (mobile, tablet, desktop)
- Modern UI with smooth animations
- Contact form with validation
- Project showcase section
- Professional experience timeline
- Skills and expertise display
- Fast loading with Vite build tool
- SEO optimized
- Accessibility compliant

**Target Audience:** Potential employers, recruiters, clients, and professional contacts

---

## Technical Stack

### Frontend Framework
- **React 18.2.0** - UI library for building interactive components
- **Vite 5.0.2** - Next generation frontend build tool
- **CSS3** - Styling with custom properties (CSS variables)

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Vite** - Build tool and dev server

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Dev Dependencies
```json
{
  "@types/react": "^18.2.37",
  "@types/react-dom": "^18.2.15",
  "@vitejs/plugin-react": "^4.2.0",
  "vite": "^5.0.2"
}
```

---

## Project Structure

```
portfolio/
├── index.html                 # Main HTML entry point
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Dependency lock file
├── vite.config.js           # Vite configuration
├── README.md                # Project readme
├── TEST_CASES.txt          # Comprehensive test cases
├── DOCUMENTATION.md        # This file
├── TESTING_GUIDE.md        # Testing guide
├── src/
│   ├── main.jsx            # React app entry point
│   ├── App.jsx             # Main App component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   ├── animations.js       # Animation utilities
│   └── components/
│       ├── Header.jsx      # Navigation header
│       ├── Hero.jsx        # Hero section
│       ├── About.jsx       # About me section
│       ├── Skills.jsx      # Skills showcase
│       ├── Projects.jsx    # Featured projects
│       ├── Experience.jsx  # Work experience timeline
│       ├── Contact.jsx     # Contact form
│       └── Footer.jsx      # Footer section
└── public/                 # Static assets (images, etc.)
```

### Key Files Description

| File | Purpose |
|------|---------|
| `index.html` | Main HTML file, App component mounted here |
| `src/main.jsx` | React app initialization and rendering |
| `src/App.jsx` | Root component, manages menu state |
| `vite.config.js` | Vite build configuration |
| `src/animations.js` | Animation utilities and functions |

---

## Installation & Setup

### Prerequisites

Before installing, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)
- A code editor (VS Code recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/PraveenkumarB46/AIML_ONE_CREDIT.git
cd portfolio
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

This installs all required packages listed in `package.json`.

### Step 3: Verify Installation

```bash
npm list react react-dom
```

You should see React 18.2.0 and React-DOM 18.2.0 installed.

### Step 4: Environment Setup (Optional)

If you need environment variables:

```bash
# Create .env file
cp .env.example .env

# Edit .env with necessary values
# VITE_API_URL=https://your-api-url.com
```

---

## Running the Project

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The server will start at: `http://localhost:5173`

**Features:**
- Hot Module Replacement (HMR)
- Fast refresh on file changes
- Console shows any errors

### Production Build

Build optimized production-ready files:

```bash
npm run build
```

Output is created in the `dist/` folder.

**Build includes:**
- Minified JavaScript and CSS
- Optimized images
- Source maps for debugging
- Production environment variables

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

Access at: `http://localhost:4173`

---

## Component Documentation

### App Component (src/App.jsx)

**Purpose:** Root component managing overall app state and structure

**Props:** None

**State:**
- `menuOpen` (boolean) - Tracks mobile menu visibility

**Key Functions:**
- `toggleMenu()` - Toggles mobile menu state
- `useEffect()` - Handles document click listeners for menu closing

**Structure:**
```jsx
<div className="app">
  <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <Footer />
</div>
```

---

### Header Component (src/components/Header.jsx)

**Purpose:** Navigation header with responsive menu

**Props:**
- `menuOpen` (boolean) - Controls mobile menu display
- `toggleMenu` (function) - Called when menu toggle clicked

**Responsibilities:**
- Display site logo/branding
- Show navigation menu items
- Provide mobile hamburger menu
- Navigation linking to sections

**Features:**
- Responsive design (adapts to mobile/desktop)
- Sticky or fixed positioning (configurable)
- Active link highlighting

---

### Hero Component (src/components/Hero.jsx)

**Purpose:** Hero section with call-to-action

**Content:**
- Main heading/title
- Subtitle or tagline
- Call-to-action button
- Background image or gradient
- Optional hero image/profile picture

**Features:**
- Large, attention-grabbing visuals
- Strong typography
- Clear CTA button

---

### About Component (src/components/About.jsx)

**Purpose:** Personal information and professional summary

**Content:**
- "About Me" heading
- Personal bio/description
- Professional summary
- Key achievements (optional)
- Profile image (optional)

**Features:**
- Well-formatted text
- Good readability
- Visual balance

---

### Skills Component (src/components/Skills.jsx)

**Purpose:** Showcase technical and professional skills

**Content:**
- Skill categories (Technical, Tools, Soft Skills, etc.)
- Individual skills with:
  - Skill name
  - Proficiency level or icon
  - (Optional) Years of experience

**Display Options:**
- Grid layout
- List layout
- Progress bars
- Icon-based display

**Features:**
- Organized by category
- Visual indicators of proficiency
- Easy to scan

---

### Projects Component (src/components/Projects.jsx)

**Purpose:** Showcase featured projects and work samples

**Project Card Content:**
- Project title
- Project description
- Technologies used
- Project image/screenshot
- Links (GitHub, Demo, Website)
- Date completed

**Features:**
- Project cards layout
- Filter by category (optional)
- Image lazy loading
- External links in new tabs

---

### Experience Component (src/components/Experience.jsx)

**Purpose:** Display professional work experience

**Timeline Content:**
- Job title
- Company name
- Employment dates
- Location
- Job description/responsibilities
- Key achievements

**Features:**
- Chronological timeline
- Clear date display
- Professional formatting
- Highlight key responsibilities

---

### Contact Component (src/components/Contact.jsx)

**Purpose:** Contact form and information

**Form Fields:**
- Name (required, text input)
- Email (required, email input, validation)
- Subject (optional, text input)
- Message (required, textarea)
- Submit button

**Additional Content:**
- Email address
- Phone number
- Social media links
- Office location (if applicable)

**Features:**
- Client-side validation
- Success/error messages
- Form reset after submission
- Contact information display

**Form Validation:**
- Name: Not empty, minimum 2 characters
- Email: Valid email format
- Message: Not empty, minimum 10 characters

---

### Footer Component (src/components/Footer.jsx)

**Purpose:** Footer with copyright and additional links

**Content:**
- Copyright notice with year
- Footer navigation links
- Social media links
- Contact quick links

**Features:**
- Responsive layout
- Link to sections
- Social media integration
- Professional appearance

---

## Testing Guide

### Test Overview

This portfolio includes comprehensive tests across multiple categories:

1. **Unit Tests** - Individual component and function testing
2. **Component Tests** - React component behavior testing
3. **Integration Tests** - Multiple components working together
4. **E2E Tests** - Complete user journeys
5. **Accessibility Tests** - WCAG compliance
6. **Performance Tests** - Lighthouse and Core Web Vitals
7. **Security Tests** - Input validation and headers
8. **Cross-browser Tests** - Work across browsers

### Test Files Location

- `TEST_CASES.txt` - Comprehensive test cases
- `TESTING_GUIDE.md` - Detailed testing instructions

### Running Tests (When Setup)

```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e

# Lighthouse audit (performance)
npm run lighthouse
```

### Key Test Categories

#### Unit Tests (Jest)
- App component state management
- Individual component rendering
- Function logic

#### Component Tests (React Testing Library)
- User interactions
- Form inputs and validation
- Navigation
- State updates

#### Integration Tests
- Multi-component workflows
- Navigation flows
- Form submission flow

#### E2E Tests (Cypress/Playwright)
- Complete user journeys
- Cross-browser compatibility
- Mobile responsiveness
- Production verification

#### Accessibility Tests
- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast

#### Performance Tests
- Lighthouse scores (target: 90+)
- Core Web Vitals
- Bundle size optimization

---

## Deployment

### Option 1: GitHub Pages

**Steps:**

1. Ensure repository is public
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Build and deploy:

```bash
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin main
```

5. Access at: `https://PraveenkumarB46.github.io/AIML_ONE_CREDIT`

### Option 2: Netlify

**Steps:**

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Option 3: Vercel

**Steps:**

1. Import project from GitHub
2. Vercel auto-detects Vite configuration
3. Deploy

### Option 4: Traditional Hosting (AWS, Bluehost, etc.)

1. Build project: `npm run build`
2. Upload `dist` folder to hosting server's public directory
3. Configure server to serve `index.html` for routes

### Pre-Deployment Checklist

- [ ] Build completes without errors
- [ ] Production build smaller than 100KB (gzipped)
- [ ] All links work with correct URLs
- [ ] Contact form endpoint is configured
- [ ] Environment variables are set
- [ ] Images are optimized
- [ ] Lighthouse score is 90+
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing done
- [ ] SEO meta tags added

---

## Performance Optimization

### Current Optimizations

1. **Vite Build Tool** - Fast bundling and hot reload
2. **Code Splitting** - Components lazy loaded
3. **CSS Variables** - Efficient styling
4. **Image Optimization** - Compressed images

### Further Optimizations

#### 1. Image Optimization

```bash
# Use format analysis
npm install --save-dev sharp imagemin

# Compress images
# Convert to WebP format
# Use responsive images
```

#### 2. Code Splitting

```jsx
import { lazy, Suspense } from 'react'

const Project = lazy(() => import('./components/Projects'))

<Suspense fallback={<div>Loading...</div>}>
  <Project />
</Suspense>
```

#### 3. Performance Monitoring

```bash
npm install web-vitals
```

#### 4. Bundle Analysis

```bash
npm install --save-dev vite-plugin-visualizer
```

### Performance Target

- **Lighthouse Score:** 90+
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **Bundle Size:** < 100KB (gzipped)

---

## Browser Support

### Fully Supported

| Browser | Min Version |
|---------|------------|
| Chrome | Current -1 |
| Firefox | Current -1 |
| Safari | 12+ |
| Edge | Current -1 |
| Chrome Android | Current |
| Safari iOS | 12+ |

### Testing Browser Versions

```bash
# Manual testing on actual devices recommended
# Use BrowserStack for comprehensive testing

# Local testing:
# Chrome DevTools - Device toolbar
# Firefox Developer Edition
# Safari - Develop > Enter Responsive Design Mode
```

---

## Contributing

### Setup Development Environment

```bash
# Clone repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Create feature branch
git checkout -b feature/my-feature

# Start development
npm run dev
```

### Code Standards

- Use meaningful variable names
- Add comments for complex logic
- Follow React best practices
- Use CSS classes for styling
- Test components before pushing

### Submitting Changes

```bash
# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to branch
git push origin feature/my-feature

# Create Pull Request on GitHub
```

### Pull Request Checklist

- [ ] Changes follow code standards
- [ ] Components are tested
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Documentation updated
- [ ] Tests pass

---

## Troubleshooting

### Common Issues

#### Issue: npm install fails

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
npm cache clean --force && rm -rf node_modules package-lock.json

# Reinstall
npm install

# Use different registry (if network issue)
npm install --registry https://registry.npmmirror.com
```

#### Issue: Dev server won't start

**Solutions:**
```bash
# Check Node version
node --version  # Should be v14+

# Kill any process on port 5173
# macOS/Linux:
lsof -i :5173 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Windows (PowerShell):
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process

# Clear Vite cache
rm -rf node_modules/.vite

# Reinstall
npm install && npm run dev
```

#### Issue: Build fails

**Solutions:**
```bash
# Update dependencies
npm update

# Clear build cache
rm -rf dist .vite

# Rebuild
npm run build

# Check for syntax errors
npm run build -- --debug
```

#### Issue: Port 5173 already in use

**Solutions:**
```bash
# Use different port
npm run dev -- --port 3000

# Check what's using the port
# macOS/Linux:
lsof -i :5173

# Windows (PowerShell):
Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
```

#### Issue: Components not rendering

**Solutions:**
- Check browser console for errors
- Verify component imports are correct
- Check component file names match imports
- Verify props are passed correctly
- Check CSS files are imported

#### Issue: Contact form not working

**Solutions:**
- Verify form endpoint is configured
- Check network requests in DevTools
- Verify CORS headers if using external API
- Check form validation logic
- Verify success/error message handlers

#### Issue: Styling issues

**Solutions:**
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Hard refresh (Ctrl+Shift+R)
# Check CSS file imports
# Verify CSS class names match HTML
# Check for CSS conflicts
```

#### Issue: Images not loading

**Solutions:**
- Verify image paths are correct
- Check image files exist
- Use relative paths: `./images/photo.jpg`
- Verify image file names (case-sensitive)
- Check browser console for 404 errors
- Optimize image sizes

#### Issue: Performance is slow

**Solutions:**
```bash
# Check Lighthouse score
npm run lighthouse

# Analyze bundle size
npm install --save-dev vite-plugin-visualizer
npm run build

# Optimize images
npm install --save-dev imagemin

# Check for console warnings
# Look for: unused dependencies, large bundles
```

### Getting Help

1. Check GitHub Issues
2. Review browser console for errors
3. Check Vite documentation: https://vitejs.dev
4. Check React documentation: https://react.dev
5. Contact repository maintainer

---

## Additional Resources

### React Documentation
- [React Official Docs](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react)
- [React Components](https://react.dev/learn/your-first-component)

### Vite Documentation
- [Vite Guide](https://vitejs.dev/guide/)
- [Vite Config](https://vitejs.dev/config/)
- [Vite Plugins](https://vitejs.dev/plugins/)

### Web Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org)

### Performance Optimization
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse)

### CSS Styling
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## Version History

### Version 1.0.0 (March 27, 2026)
- Initial portfolio release
- All core components implemented
- Responsive design
- GitHub deployment ready

---

## License

This project is licensed under the MIT License - see LICENSE file for details.

---

## Contact & Support

**Author:** Praveenkumar B

**GitHub:** [PraveenkumarB46](https://github.com/PraveenkumarB46)

**Repository:** [AIML_ONE_CREDIT](https://github.com/PraveenkumarB46/AIML_ONE_CREDIT)

**Email:** [Your email address]

---

## Changelog

All notable changes to this project will be documented in this section.

### [1.0.0] - 2026-03-27

#### Added
- Initial portfolio release
- Header component with navigation
- Hero section
- About section
- Skills showcase
- Projects portfolio
- Work experience timeline
- Contact form
- Footer
- Responsive design
- Animations

#### Changed
- N/A (initial release)

#### Fixed
- N/A (initial release)

---

**Last Updated:** March 27, 2026

**Maintained by:** Praveenkumar B
