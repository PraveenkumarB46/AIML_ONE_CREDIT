# Testing Guide - Portfolio Project

## Overview

This guide provides detailed instructions for testing the Praveenkumar B Portfolio project. It covers unit tests, component tests, integration tests, E2E tests, and more.

## Table of Contents

1. [Test Setup](#test-setup)
2. [Running Tests](#running-tests)
3. [Unit Testing](#unit-testing)
4. [Component Testing](#component-testing)
5. [Integration Testing](#integration-testing)
6. [End-to-End Testing](#end-to-end-testing)
7. [Accessibility Testing](#accessibility-testing)
8. [Performance Testing](#performance-testing)
9. [Security Testing](#security-testing)
10. [Manual Testing](#manual-testing)

---

## Test Setup

### Required Tools

#### 1. Jest (for unit tests)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

#### 2. React Testing Library

```bash
npm install --save-dev @testing-library/react @testing-library/user-event
```

#### 3. Cypress (for E2E tests)

```bash
npm install --save-dev cypress
```

#### 4. Playwright (alternative to Cypress)

```bash
npm install --save-dev @playwright/test
```

#### 5. Lighthouse (for performance)

```bash
npm install --save-dev @lhci/cli @lhci/config
```

### Configure Jest

Create `jest.config.js`:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
```

Create `src/setupTests.js`:

```javascript
import '@testing-library/jest-dom';
```

### Configure Cypress

Initialize Cypress:

```bash
npx cypress open
```

This creates `cypress.config.js` and `cypress` folder.

### Package.json Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress open",
    "test:e2e:headless": "cypress run",
    "lighthouse": "lhci autorun"
  }
}
```

---

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Specific Test File

```bash
npm test App.test.jsx
npm test components/Header.test.jsx
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

Auto-runs tests on file changes. Press:
- `a` - run all tests
- `f` - run only failed tests
- `q` - quit

### Run Tests with Coverage

```bash
npm run test:coverage
```

Shows coverage report for:
- Statements
- Branches
- Functions
- Lines

### Run E2E Tests

```bash
# Interactive mode
npm run test:e2e

# Headless (CI/CD)
npm run test:e2e:headless
```

---

## Unit Testing

### Test File Structure

Create test files alongside components:

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.test.jsx       ← Test file
│   ├── Hero.jsx
│   └── Hero.test.jsx
```

### Example: App Component Test

Create `src/App.test.jsx`:

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders all major sections', () => {
    render(<App />);
    expect(screen.getByText(/hero/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
  });

  test('toggles menu state', () => {
    const { rerender } = render(<App />);
    const getMenuContent = () => screen.queryByTestId('mobile-menu');
    
    expect(getMenuContent()).not.toBeInTheDocument();
    // Toggle menu (implement test id in component)
    // expect(getMenuContent()).toBeInTheDocument();
  });

  test('closes menu on document click', () => {
    render(<App />);
    document.body.click();
    // Verify menu is closed
  });

  test('cleans up event listeners on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount } = render(<App />);
    
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
    
    removeEventListenerSpy.mockRestore();
  });
});
```

### Example: Component Logic Test

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('calls toggleMenu when menu button clicked', () => {
    const mockToggle = jest.fn();
    render(<Header menuOpen={false} toggleMenu={mockToggle} />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  test('displays navigation links', () => {
    render(<Header menuOpen={false} toggleMenu={jest.fn()} />);
    
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });
});
```

### Testing Hooks

```javascript
import { renderHook, act } from '@testing-library/react';
import { useState } from 'react';

describe('useState Hook', () => {
  test('updates state correctly', () => {
    const { result } = renderHook(() => useState(false));
    
    expect(result.current[0]).toBe(false);
    
    act(() => {
      result.current[1](true);
    });
    
    expect(result.current[0]).toBe(true);
  });
});
```

### Mocking Modules

```javascript
import Contact from './Contact';

jest.mock('./Contact', () => ({
  submit: jest.fn().mockResolvedValue({ status: 'success' })
}));

describe('Mocked Contact', () => {
  test('handles form submission', async () => {
    const result = await Contact.submit({ name: 'John' });
    expect(result.status).toBe('success');
  });
});
```

---

## Component Testing

### Testing React Components

```javascript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders form fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test('updates input values', async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/name/i);
    
    await userEvent.type(nameInput, 'John Doe');
    expect(nameInput.value).toBe('John Doe');
  });

  test('validates email format', async () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/email/i);
    
    await userEvent.type(emailInput, 'invalid-email');
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });

  test('submits form with valid data', async () => {
    render(<Contact />);
    
    await userEvent.type(screen.getByLabelText(/name/i), 'John');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Hello!');
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/success/i)).toBeInTheDocument();
    });
  });

  test('displays error message on submission failure', async () => {
    // Mock fetch to fail
    global.fetch = jest.fn(() => 
      Promise.reject(new Error('Network error'))
    );
    
    render(<Contact />);
    
    await userEvent.type(screen.getByLabelText(/name/i), 'John');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Hello!');
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
```

### Testing Props

```javascript
describe('Hero Component Props', () => {
  test('renders different heading based on props', () => {
    const { rerender } = render(
      <Hero heading="Welcome to My Portfolio" />
    );
    
    expect(screen.getByText(/Welcome to My Portfolio/)).toBeInTheDocument();
    
    rerender(<Hero heading="Hello, I'm Praveenkumar" />);
    expect(screen.getByText(/Hello, I'm Praveenkumar/)).toBeInTheDocument();
  });
});
```

### Snapshot Testing

```javascript
describe('Header Snapshot', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Header menuOpen={false} toggleMenu={jest.fn()} />
    );
    
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

Update snapshots: `npm test -- -u`

---

## Integration Testing

### Testing Component Interactions

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Navigation Integration', () => {
  test('navigates to sections when links clicked', () => {
    render(<App />);
    
    // Click About link
    fireEvent.click(screen.getByText(/about/i));
    
    // Verify navigation (check URL or scroll position)
    // expect(window.location.hash).toBe('#about');
  });

  test('closes menu after navigation', async () => {
    render(<App />);
    
    // Open menu
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    
    // Click navigation link
    fireEvent.click(screen.getByText(/projects/i));
    
    // Menu should close
    // Verify menu is closed
  });
});
```

### Testing Form Submission Flow

```javascript
describe('Contact Form Flow', () => {
  test('complete contact form submission', async () => {
    render(<App />);
    
    // Scroll to contact
    // Find contact form
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Fill form
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'I am interested in your services');
    
    // Submit
    fireEvent.click(submitButton);
    
    // Verify success
    expect(screen.getByText(/message sent/i)).toBeInTheDocument();
  });
});
```

---

## End-to-End Testing

### Cypress E2E Tests

Create `cypress/e2e/portfolio.cy.js`:

```javascript
describe('Portfolio E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('loads the homepage', () => {
    cy.get('header').should('be.visible');
    cy.get('main').should('exist');
  });

  it('navigates to all sections', () => {
    // Navigate to About
    cy.contains('About').click();
    cy.get('[data-testid="about-section"]').should('be.visible');
    
    // Navigate to Skills
    cy.contains('Skills').click();
    cy.get('[data-testid="skills-section"]').should('be.visible');
    
    // Navigate to Projects
    cy.contains('Projects').click();
    cy.get('[data-testid="projects-section"]').should('be.visible');
  });

  it('submits contact form', () => {
    cy.contains('Contact').click();
    
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');
    
    cy.get('button[type="submit"]').click();
    
    cy.contains(/success|thank you/i).should('be.visible');
  });

  it('is responsive on mobile', () => {
    cy.viewport('iphone-x');
    cy.get('[data-testid="hamburger-menu"]').should('be.visible');
    cy.get('[data-testid="hamburger-menu"]').click();
    cy.get('nav').should('be.visible');
  });

  it('verifies all links work', () => {
    // Check project links
    cy.contains(/project/i).click();
    cy.get('a').each(($link) => {
      const href = $link.attr('href');
      if (href && !href.startsWith('mailto:')) {
        cy.visit(href);
        cy.visit('http://localhost:5173');
      }
    });
  });
});
```

### Run Cypress Tests

```bash
# Interactive mode
npm run test:e2e

# Headless
npm run test:e2e:headless

# Specific test file
npm run test:e2e:headless -- cypress/e2e/portfolio.cy.js

# Specific browser
npm run test:e2e:headless -- --browser chrome
```

---

## Accessibility Testing

### Automated Accessibility Testing

Install tools:

```bash
npm install --save-dev jest-axe axe-core
```

Create test:

```javascript
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('has no accessibility issues', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Manual Accessibility Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Verify tab order makes sense
   - Verify focus is visible

2. **Screen Reader Testing**
   - Use NVDA (Windows) or VoiceOver (Mac)
   - Verify headings are announced
   - Verify form labels are read
   - Verify link purposes are clear

3. **Color Contrast**
   - Use WebAIM Contrast Checker
   - Verify 4.5:1 ratio for normal text
   - Verify 3:1 ratio for large text

---

## Performance Testing

### Lighthouse Testing

```bash
npm run lighthouse
```

Or manually:

1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"

**Target Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Bundle Size Analysis

```bash
npm install --save-dev vite-plugin-visualizer

# Update vite.config.js:
import { visualizer } from 'vite-plugin-visualizer';

export default {
  plugins: [visualizer()],
}

npm run build
# Open dist/stats.html
```

### Performance Monitoring

```javascript
// In your main.jsx or App.jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

---

## Security Testing

### Input Validation Testing

```javascript
describe('Security - Input Validation', () => {
  test('sanitizes XSS attempts in contact form', () => {
    render(<Contact />);
    
    const xssPayload = '<script>alert("xss")</script>';
    const nameInput = screen.getByLabelText(/name/i);
    
    fireEvent.change(nameInput, { target: { value: xssPayload } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Verify script is not executed
    expect(screen.queryByText('xss')).not.toBeInTheDocument();
  });

  test('validates email format', () => {
    // Test various email formats
    const invalidEmails = ['test', 'test@', '@example.com'];
    const validEmails = ['test@example.com', 'user+tag@example.co.uk'];
    
    invalidEmails.forEach(email => {
      // Verify validation fails
    });
    
    validEmails.forEach(email => {
      // Verify validation passes
    });
  });
});
```

### HTTPS/Security Headers

Check in browser DevTools:

1. Open Network tab
2. Click on any request
3. Check Response Headers for:
   - `Content-Security-Policy`
   - `X-Frame-Options`
   - `X-Content-Type-Options`
   - `Strict-Transport-Security`

---

## Manual Testing

### Test Checklist

#### Homepage
- [ ] Page loads correctly
- [ ] All sections visible
- [ ] No console errors
- [ ] Images load properly
- [ ] Navigation links work

#### Navigation
- [ ] All menu links navigate correctly
- [ ] Mobile menu opens/closes
- [ ] Active link highlighting works
- [ ] Scroll is smooth

#### Hero Section
- [ ] Heading displays
- [ ] CTA button is clickable
- [ ] Background loads
- [ ] Text is readable

#### About Section
- [ ] Bio text displays
- [ ] Image loads
- [ ] Content is readable
- [ ] Proper spacing

#### Skills Section
- [ ] All skills listed
- [ ] Icons/images display
- [ ] Categories are clear
- [ ] Mobile responsive

#### Projects Section
- [ ] Project cards visible
- [ ] Image thumbnails load
- [ ] Links work (open in new tab)
- [ ] Descriptions readable

#### Experience Section
- [ ] Timeline displays
- [ ] Dates correct and chronological
- [ ] Job details readable
- [ ] Proper formatting

#### Contact Section
- [ ] Form displays
- [ ] All fields present
- [ ] Validation works
- [ ] Submission works
- [ ] Success message shows

#### Footer
- [ ] Copyright year correct
- [ ] Links work
- [ ] Social icons visible
- [ ] Mobile responsive

#### Responsive Design
- [ ] Mobile (375px): [ ]
- [ ] Tablet (768px): [ ]
- [ ] Desktop (1920px): [ ]
- [ ] No horizontal scrolling
- [ ] Touch targets adequate (44x44px minimum)

#### Performance
- [ ] Page loads quickly
- [ ] No layout shifts
- [ ] Animations smooth
- [ ] No memory leaks

#### Accessibility
- [ ] All interactive elements keyboard accessible
- [ ] Focus visible on all elements
- [ ] Good color contrast
- [ ] Screen reader compatible

#### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## Continuous Integration

### GitHub Actions Example

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run unit tests
        run: npm test -- --coverage
      
      - name: Build project
        run: npm run build
      
      - name: Run E2E tests
        run: npm run test:e2e:headless
```

---

## Test Report

Create `TEST_REPORT.md` after testing:

```markdown
# Test Report

**Date:** [Date]
**Environment:** [Node version, OS, Browser versions]

## Test Results

### Unit Tests
- Total: [X]
- Passed: [X]
- Failed: [X]
- Coverage: [X]%

### Component Tests
- Total: [X]
- Passed: [X]
- Failed: [X]

### E2E Tests
- Total: [X]
- Passed: [X]
- Failed: [X]

### Performance
- Lighthouse Score: [X]
- Bundle Size: [X] KB
- Load Time: [X] ms

### Accessibility
- WCAG Violations: [X]
- Keyboard Navigation: [✓/✗]
- Screen Reader: [✓/✗]

## Issues Found

[List any issues]

## Recommendations

[List recommendations]
```

---

## Best Practices

1. **Write tests as you code** - Don't leave testing for last
2. **Test behavior, not implementation** - Focus on what users see
3. **Use meaningful test descriptions** - Make tests self-documenting
4. **Mock external dependencies** - Keep tests isolated
5. **Keep tests fast** - Avoid slow operations
6. **Use proper test data** - Use realistic test data
7. **Test edge cases** - Test boundary conditions
8. **Maintain test code** - Refactor tests like production code
9. **Use CI/CD** - Automate test execution
10. **Regular testing** - Run tests frequently during development

---

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Cypress Documentation](https://docs.cypress.io/)
- [Testing Library Best Practices](https://testing-library.com/docs/best-practices)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** March 27, 2026
