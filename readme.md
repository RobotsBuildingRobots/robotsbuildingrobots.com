# RobotsBuildingRobots.com

A modern, responsive portfolio and business presence website built with Middleman, featuring a custom design system with space/galaxy theming and responsive "easter eggs" at various viewport sizes.

## Overview

This is a professional portfolio and business website showcasing services, engagements, and expertise. The site features a single-page application design with smooth scrolling, modern animations, and a unique custom design system.

## Technology Stack

### Core Framework
- **Middleman 4.5+** - Ruby-based static site generator
- **Ruby 3.4.3** - Server-side language
- **Slim** - Template engine for clean, semantic markup

### Asset Pipeline
- **Webpack 5.94.0** - Modern JavaScript bundling and asset compilation
- **Babel** - ES6+ JavaScript transpilation
- **SCSS/Sass** - Custom design system (no Bootstrap framework)

### JavaScript Libraries
- **jQuery 3.7.1** - DOM manipulation and interactions
- **Bootstrap 4.6.2** - JavaScript components only (legacy support)
- **FontAwesome 7.1.0** - Icon library
- **jQuery Validation 1.21.0** - Form validation
- **Breakpoints.js** - Responsive viewport management

### Code Quality Tools
- **RuboCop** - Ruby linting and style enforcement
- **ESLint** - JavaScript linting with Airbnb configuration
- **Stylelint** - SCSS/CSS linting

### Deployment
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD pipeline

## Project Structure

```
.
├── build/                  # Compiled static site (generated)
├── config.rb              # Middleman configuration
├── data/                  # YAML data files for content
│   ├── about.yml
│   ├── components.yml
│   ├── contact.yml
│   ├── cta.yml
│   ├── engagements.yml
│   ├── services.yml
│   └── settings.yml
├── lib/                   # Ruby helper modules
├── source/                # Source files
│   ├── assets/
│   │   ├── images/       # Images, videos, icons
│   │   ├── javascripts/  # JavaScript source
│   │   └── stylesheets/  # SCSS source
│   ├── layouts/          # Page layouts
│   └── partials/         # Reusable components
├── webpack/              # Webpack configuration
└── webpack.config.js     # Main webpack config
```

## Development Setup

### Prerequisites
- Ruby 3.4.3 (use `.ruby-version`)
- Node.js (use `.nvmrc` for version)
- Yarn package manager
- Bundler gem

### Installation

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
yarn install

# Create environment file
cp .env.example .env
# Edit .env and set SITE_HOST=your-domain.com
```

### Environment Variables

Create a `.env` file in the project root:

```env
SITE_HOST=robotsbuildingrobots.com
```

For GitHub Actions deployment, add `SITE_HOST` as a repository secret.

## Development Commands

### Start Development Server
```bash
rake server:development
# Site available at http://localhost:4567
```

### Asset Compilation
```bash
# Development mode with watch
yarn develop

# Production build
yarn production
```

### Building
```bash
# Staging build
rake server:build:staging

# Production build
rake server:build:production
```

### Code Quality
```bash
# Run all linters
rake test:lint:all

# Individual linters
rake test:lint:ruby      # RuboCop
rake test:lint:js        # ESLint
rake test:lint:css       # Stylelint
```

### Deployment
```bash
# Deploy to GitHub Pages
rake deploy:github
```

## Features

### Custom Design System
- Galaxy/space-themed custom CSS (no Bootstrap CSS)
- Responsive design with breakpoints from xs to xxxl (2500px)
- "Easter egg" content reveals at different viewport sizes
- Modern animations and transitions
- Custom CSS variables and design tokens

### Content Management
- YAML-based content in `data/` directory
- Separation of content from presentation
- Easy updates without touching templates

### Performance Optimizations
- Webpack code splitting
- Image optimization
- Minified production assets
- Compressed static output

### SEO Features
- XML sitemap generation
- Optimized meta tags
- Open Graph integration
- Structured data support

## Architecture Highlights

### Component-Based Structure
Reusable Slim partials in `source/partials/components/`:
- Navigation
- Footer
- Meta tags
- Favicons
- Pre-loader

### Data-Driven Content
Content managed through YAML files in `data/`:
- Easy content updates
- No code changes required for content
- Potential CMS integration path

### Modern Build Pipeline
- Webpack 5 with Babel for modern JavaScript
- SCSS compilation with PostCSS autoprefixer
- Asset fingerprinting for cache busting
- Source maps for debugging

## Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and architectural decisions.

**Current Version**: 4.0.0

Major releases:
- **v4.x (2025)**: Infrastructure modernization, environment-based configuration
- **v3.x (2021-2025)**: Complete redesign with custom design system
- **v2.x (2020)**: Multi-page application with Webpack integration
- **v1.x (2017)**: Initial Middleman site

## Contributing

This is a proprietary business website. Contributions are not accepted.

## License

Copyright (c) 2017-2025 RobotsBuildingRobots, LLC

All Rights Reserved. See [LICENSE](LICENSE) for details.

## Support

For technical inquiries regarding this codebase, please refer to the [CHANGELOG.md](CHANGELOG.md) for architectural documentation and implementation details.

---

**Powered by**: Middleman, Ruby, Webpack, and modern web technologies
