# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal branding/portfolio website built with Middleman static site generator. The site features responsive design with "easter eggs" at different viewport sizes (xs to xxxl - 2500px).

## Technology Stack

- **Ruby 4.0.0** with Middleman 4.5+
- **Webpack 5.94.0** for asset bundling
- **Slim** templating engine
- **SCSS** with custom design system (no longer using Bootstrap)
- **jQuery 3.7.1** and modern JavaScript (ES6+)
- Deployment to GitHub Pages

## Common Development Commands

### Development Server
```bash
rbe rake server:development     # Start server on http://localhost:4567
```

### Building
```bash
rake server:build:staging      # Build for staging
rake server:build:production   # Build for production
```

### Deployment
```bash
rake deploy:github    # Deploy to GitHub Pages (gh-pages branch)
```

### Linting
```bash
rake test:lint:all       # Run all linters
rake test:lint:ruby      # RuboCop for Ruby
rake test:lint:js        # ESLint for JavaScript  
rake test:lint:css       # Stylelint for CSS/SCSS
```

### Asset Compilation
```bash
yarn develop      # Webpack dev mode with watch
yarn production   # Webpack production build
```

## Project Structure

```
source/
├── assets/
│   ├── images/        # Images, videos, icons
│   ├── javascripts/   # JavaScript source files
│   └── stylesheets/   # SCSS source files
├── layouts/           # Page layouts (default.slim)
├── partials/          # Reusable components (_header.slim, etc.)
└── *.html.slim        # Page templates
```

## Architecture Patterns

### Middleman Helpers
- Custom helpers defined in `config.rb` and `lib/` directory
- Use `data.settings` to access site configuration from `data/settings.yml`
- Image helpers: `image_tag`, `image_path` with automatic cache busting

### Asset Pipeline
- Webpack handles JavaScript bundling via `source/assets/javascripts/site.js`
- SCSS compiled through Middleman with sprockets
- External assets loaded through Webpack's `ProvidePlugin` (jQuery as `$`)

### Responsive Design
- Modern design system in `_design.scss` with galaxy/space theme
- Custom animations and effects
- "Easter egg" content appears at different viewport sizes
- No longer uses Bootstrap - custom CSS design system

### Deployment Process
1. Build assets with `yarn production`
2. Build static site with `middleman build`
3. Deploy to gh-pages branch using `middleman-deploy` gem
4. Site host configured via environment variable `SITE_HOST` (see Environment Configuration below)

### Environment Configuration
- **Local Development**: Site host is configured in `.env` file (not committed to repo)
  - `SITE_HOST=links.aboutchrishough.com`
- **GitHub Actions CI/CD**: Requires GitHub secret configuration
  - Go to repository **Settings** → **Secrets and variables** → **Actions** → **Secrets**
  - Add secret: `SITE_HOST` with value from `.env` file
  - The workflow reads this secret to avoid hardcoding DNS anywhere in the codebase

## Code Style Requirements

### Ruby
- Follow `.rubocop.yml` configuration
- Max line length: 180 characters
- Target Ruby 4.0.0 syntax

### JavaScript
- ESLint with Airbnb base configuration
- ES6+ features enabled
- jQuery environment globals

### SCSS
- Stylelint with standard-scss configuration
- Custom design system (not Bootstrap)
- Modern CSS with custom properties (CSS variables)

## Important Conventions

1. **Templates**: Use Slim syntax for all templates
2. **Partials**: Prefix with underscore (e.g., `_header.slim`)
3. **JavaScript**: Main entry point is `site.js`, use ES6 modules
4. **Styling**: Component styles in separate SCSS files, imported in `site.css.scss`
5. **Data**: Site configuration in `data/settings.yml`
6. **Images**: Store in `source/assets/images/`, use Middleman image helpers
7. **Videos**: Place in `source/assets/images/videos/` for proper asset pipeline handling

## Design System Maintenance

**IMPORTANT**: When making any design changes, always update the design system documentation.

The design system page is located at: `source/design-system.html.slim`

When modifying:
- **Fonts** (`_settings.scss`) → Update typography section in design-system.html.slim
- **Colors** (`_settings.scss`) → Update color palette section in design-system.html.slim
- **Spacing** → Update spacing scale section
- **Components** → Update component examples

The design system page must always reflect the actual implementation. Never change fonts, colors, or core design tokens without updating the design system documentation.

## Session Cleanup

**IMPORTANT**: Always kill background processes when finishing a task or ending a session.

### Development Server Rules
- Always start with: `rbe rake server:development`
- Only run ONE instance at a time
- Always kill the server when done with the task

### Cleanup Commands
```bash
# Kill Middleman server
pkill -f "middleman" 2>/dev/null
lsof -ti:4567 | xargs kill -9 2>/dev/null

# Kill any other background processes started during the session
```

### Before Ending Any Session
1. Kill all background dev servers you started
2. Verify no orphaned processes on development ports (4567, 3000, etc.)
3. Never leave background tasks running
