# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Overview for OSS Contributors

This changelog documents the evolution of a personal branding website from a simple responsive site to a sophisticated single-page application. Key architectural decisions and patterns are highlighted to help future developers understand the rationale behind major changes.

### Project Evolution Summary

- **v1.x (2017)**: Initial Middleman site with basic responsive design
- **v2.x (2020)**: Multi-page application with Webpack integration, Bootstrap framework
- **v3.x (2021-2025)**: Complete redesign with custom design system, single-page focus, modern tooling
- **v4.x (2025)**: Infrastructure modernization, environment-based configuration, dependency stabilization
- **v5.x (2026)**: Complete visual redesign with blueprint/schematic aesthetic, animated SVG schematics

### Key Architectural Patterns

1. **Dependency Management**: Heavy use of Dependabot for automated security and version updates
2. **Asset Pipeline Evolution**: Migration from Sprockets → Webpack 5 with modern JavaScript
3. **Design Philosophy**: Bootstrap framework → Custom design system with space/galaxy theme
4. **Content Strategy**: Multi-page site → Single-page application with focused messaging
5. **Build Tools**: Progressive adoption of modern JavaScript tooling (Babel, ESLint, Webpack)

---

## [Unreleased]

No unreleased changes at this time.

---

## [5.1.1] - 2026-02-06

### Fixed

- **Brand Badge Alignment**: Fixed `.blueprint-badge` centering on mobile viewports
  - Changed from `inline-flex` to `flex` with `justify-content: center`
  - Badge now centers horizontally on small screens via `width: fit-content` with auto margins
  - Left-aligns at `sm` breakpoint and above for desktop layout consistency

### Developer Notes

**Files Modified:**
- `source/assets/stylesheets/pages/_home.scss` - Blueprint badge responsive alignment

**Reference**: Feature branch `feature/version_five_1_1`

---

## [5.1.0] - 2026-02-05

### Changed

- **Button System Refactored**: Unified button components from `btn-blueprint-primary/secondary` to `btn-terminal/btn-terminal-secondary` with consistent styling across the site
  - Added glow effects on hover via `::before` pseudo-element
  - Added proper focus-visible and active states for accessibility
  - Simplified hero CTA button copy: "Connect With Us" → "Connect", "View Projects" → "Portfolio"
  - Removed internal `btn-glow` span element from contact button markup

- **iPad Responsive Improvements**: Adjusted breakpoints and sizing for better tablet display
  - Floating navigation now shows at `xl` breakpoint instead of `lg` (hides on iPad)
  - Products and contact visual frames now visible at `md` breakpoint instead of `lg`
  - Visual frame max-widths reduced for tablet (280px/260px) and scale up at `lg` (380px/350px)
  - Hero title font scaling moved from `md` to `lg` breakpoint

### Removed

- **Legacy Code Cleanup**: Removed all pre-v4 archived source code (~114 files, 3,800+ lines)
  - Deleted `_data_last_version/` directory (legacy data files)
  - Deleted `_source_last_version/` directory (legacy templates, stylesheets, JavaScript, images)
  - Removed unused email field from `data/components.yml`
  - Removed empty `data/.keep` file

### Developer Notes

**Files Modified:**
- `source/assets/stylesheets/components/_floating-nav.scss` - Breakpoint adjustment
- `source/assets/stylesheets/pages/_home.scss` - Button system refactor, responsive tweaks
- `source/partials/pages/home/_hero.html.slim` - Button markup simplification
- `source/partials/pages/home/_contact.html.slim` - Removed btn-glow span
- `data/components.yml` - Removed email field

**Reference**: Feature branch `feature/version_five_1`

---

## [5.0.0] - 2026-02-03 - RELEASED

### MAJOR RELEASE - Complete Visual Redesign with Blueprint Aesthetic & Ruby 4.0.0 Upgrade

This version represents a complete visual redesign with a cohesive technical blueprint/schematic aesthetic across all sections, along with a major Ruby runtime upgrade.

### Added
- **Blueprint Design System**:
  - Technical schematic visual language across all sections
  - Animated SVG schematics with industrial/robotic theme
  - Blueprint grid overlays and coordinate markers
  - Frame corners and technical labels
- **New Section Schematics**:
  - About section: Robot arm schematic with animated joints and motion arcs
  - Products/Workshop section: Forge assembly with furnace, anvil, hammer, and conveyor
  - Contact section: Communication beacon with signal waves and data packets
- **Enhanced Animations**:
  - Flame flicker effects in forge schematic
  - Hammer strike and spark burst animations
  - Signal wave expansion for communication beacon
  - Temperature gauge swing and LED status indicators
  - Conveyor belt movement and QC scanner beam
- **Stacked Category Tiles**: Workshop section redesigned with vertical tile stack
- **Ruby 4.0.0 Compatibility**:
  - Added `cgi` gem (removed from Ruby 4.0.0 stdlib, required by Rack)
  - Added `tsort` gem (removed from Ruby 4.0.0 stdlib, required by RuboCop)
  - Added `rdoc` gem (removed from Ruby 4.0.0 stdlib, required by various tools)

### Changed
- **Ruby Version**: Upgraded from Ruby 3.4.3 to Ruby 4.0.0
- **Section Layouts**: All content sections now use consistent two-column layout (content + schematic)
- **Visual Consistency**: Unified technical/industrial aesthetic replacing previous design
- **Navigation Logic**: Fixed Connect nav dot highlighting when scrolling to bottom of page
- **GitHub Actions**: Added `THOR_SILENCE_DEPRECATION: 1` environment variable to silence Thor deprecation warnings about boolean default values

### Fixed
- **Nav Highlighting Bug**: Connect section nav dot now properly highlights when user scrolls to page bottom
- **70 Stylelint Errors**: Fixed all CSS linting errors in `_home.scss`:
  - Expanded 17 single-line keyframes to multi-line format (`declaration-block-single-line-max-declarations`)
  - Added URL quotes for all `url()` functions (`function-url-quotes`)
  - Added `stylelint-disable` comments for intentional selector specificity patterns (`.frame-corner`, `.terminal-marker`, `svg`, `span:last-child`)
- **Ruby 4.0.0 LoadError**: Resolved `cannot load such file -- cgi/cookie` by adding stdlib gems removed in Ruby 4.0.0

### Developer Notes

**Architecture Decision - Blueprint Aesthetic**: The move to a technical blueprint/schematic visual language creates unique brand identity distinct from typical portfolio sites. SVG-based animations provide smooth performance and consistent visual vocabulary across all sections reinforces brand.

**Design Philosophy**:
1. **Robot Arm (About)**: Represents the engineering/technical foundation
2. **Forge Assembly (Workshop)**: Industrial metaphor for building products
3. **Communication Beacon (Contact)**: Signal transmission for connection/outreach

**Animation Strategy**: Each schematic uses CSS keyframe animations with careful timing. Products section includes 11 coordinated animations: `flame-flicker`, `shimmer-rise`, `gauge-swing`, `led-heat-blink`, `led-ready-blink`, `led-cycle-blink`, `hammer-strike`, `spark-burst`, `conveyor-move`, `scan-sweep`, `scan-indicator-blink`. About section features: `joint-pulse`, `gripper-open`, `grip-pulse`, `value-update`, `ghost-fade`. Contact section includes: `beacon-grid-breathe`, `packet-north/east/south/west/northeast/southwest`, `core-ring-pulse`, `beacon-core-glow`, `focus-pulse`, `beacon-led-blink`, `beacon-led-steady`, `beam-rotate`, `dish-scan`.

**Navigation Fix**: The scroll highlighting issue was fixed by adding a "near bottom" check that prioritizes the last section (contact) when within 100px of the page bottom.

**Ruby 4.0.0 Migration Notes**:
- Ruby 4.0.0 removed several gems from the standard library that were previously bundled
- The `cgi` gem is required by Rack for cookie handling
- The `tsort` gem is required by RuboCop for dependency sorting
- The `rdoc` gem is required by various documentation tools
- Thor deprecation warnings about boolean default values can be silenced with `THOR_SILENCE_DEPRECATION=1`

**Code Quality Achievement**: All linters passing (RuboCop, ESLint, Stylelint) after fixing 70 stylelint errors in the new animation keyframes.

**Reference**: Feature branch `feature/version_five_o`

---

## [4.0.0] - 2025-12-01 - RELEASED

### MAJOR RELEASE - Infrastructure Modernization & Build System Overhaul

This version represents a comprehensive infrastructure modernization with a focus on dependency management, build reliability, and configuration flexibility.

### Added
- **Dependency Restoration**:
  - Bootstrap 4.6.2 and Popper.js 1.16.1 for legacy component support
  - FontAwesome packages:
    - `@fortawesome/fontawesome-svg-core@7.1.0`
    - `@fortawesome/free-solid-svg-icons@7.1.0`
    - `@fortawesome/free-regular-svg-icons@7.1.0`
  - `jquery-validation@1.21.0` for form validation
  - `normalize-scss@8.0.0` for cross-browser CSS consistency
- **Configuration Management**:
  - Environment-based CNAME generation using `ENV['SITE_HOST']`
  - Enhanced Webpack alias configuration for validation library
  - Restored data files for content management (about.yml, components.yml, contact.yml, cta.yml, engagements.yml, services.yml)
- **Legal**:
  - Updated LICENSE from MIT to Proprietary License (All Rights Reserved)
  - Reflects business nature of the website

### Changed
- **Build Process**:
  - Updated `lib/build_process_functions.rb` to use `ENV.fetch('SITE_HOST', nil)` for dynamic CNAME generation
  - Enhanced Webpack module resolution for new dependencies
  - Fixed all build errors related to missing packages
- **Code Quality**:
  - Resolved all Stylelint errors in `_utilities.scss` (operator spacing)
  - Fixed SCSS operator spacing to comply with `scss/operator-no-unspaced` rule
  - Updated loops to use spaced negation operators (`from - $size` instead of `from -$size`)
  - Fixed multiplication operators to include spaces (`$x * $x` instead of `$x*$x`)
- **Webpack Configuration**:
  - Added validation alias pointing to `jquery-validation/dist/jquery.validate.js`
  - Configured proper module resolution for all vendor dependencies

### Removed
- **UI Elements**:
  - Removed redundant phone icon (`fa-phone-square`) from contact navigation button
  - Cleaned up navigation to show only envelope icon for contact

### Fixed
- **Build Errors**:
  - Resolved "Module not found" errors for popper.js, bootstrap, validation, and FontAwesome
  - Fixed SCSS import error for normalize-scss
  - Corrected Webpack asset pipeline issues
- **Linter Compliance**:
  - Fixed all RuboCop offenses (0 offenses detected)
  - Fixed all ESLint errors (clean JavaScript)
  - Fixed all Stylelint errors (19 errors → 0 errors)
- **Deployment**:
  - Fixed GitHub Pages 404 errors by correcting CNAME generation
  - Enhanced environment variable usage for multi-environment deployments

### Developer Notes

**Architecture Decision - Environment-Based Configuration**: The move from hardcoded CNAME values to environment variables (`ENV['SITE_HOST']`) enables:
- Consistent deployment across local, staging, and production environments
- Better security by keeping domain configuration out of source code
- Easier management of multiple deployment targets
- Integration with CI/CD systems (GitHub Actions secrets)

**Dependency Strategy**: This release restores several dependencies that were inadvertently removed during the v3.x migration to a custom design system. Key insights:
1. **Bootstrap Legacy Support**: While v3.x moved to custom CSS, some JavaScript components still depend on Bootstrap's utilities
2. **FontAwesome Architecture**: Modern FontAwesome requires three packages (core + icon sets), not just a single import
3. **Validation Patterns**: jQuery validation remains the most reliable form validation for this stack

**Code Quality Achievement**: This version achieves 100% linter compliance across all three linters (RuboCop, ESLint, Stylelint), establishing a clean baseline for future development.

**Build System Maturity**: The webpack configuration now properly handles all vendor dependencies with explicit aliases, improving build reliability and reducing "Module not found" errors.

**License Change**: Transitioning from MIT to Proprietary License reflects the business nature of this website. The MIT license in v3.1.0 was appropriate for learning/sharing purposes, but as this evolved into a commercial business presence, a proprietary license better protects the brand and intellectual property.

**Learning Opportunities**:
1. **Environment Variable Patterns**: Using `ENV.fetch('SITE_HOST', nil)` with a nil default is safer than `ENV['SITE_HOST']` as it makes missing configuration explicit
2. **Linter Evolution**: SCSS operator spacing rules have become stricter; what worked in older Stylelint versions may require updates
3. **Dependency Archaeology**: When inheriting or resuming a project, carefully audit what was removed vs. what's still referenced
4. **CI/CD Integration**: GitHub Actions secrets provide a secure way to manage environment-specific configuration

**Performance Impact**:
- Restored dependencies add ~1.2MB to the vendor bundle (Bootstrap + FontAwesome)
- This is acceptable given the legacy component requirements
- Future optimization opportunity: lazy-load FontAwesome icons

**Git Statistics**:
- All linters passing (RuboCop, ESLint, Stylelint)
- 6 new npm packages installed
- CNAME generation now environment-aware
- Data files restored for proper Middleman operation

**Breaking Changes**:
- `SITE_HOST` environment variable now required for deployment
- Local `.env` file must include `SITE_HOST=<your-domain>`
- GitHub Actions workflows must have `SITE_HOST` secret configured

**Migration Guide for Deployment**:
1. Create `.env` file locally: `SITE_HOST=robotsbuildingrobots.com`
2. Add GitHub secret: Settings → Secrets → Actions → New secret
3. Name: `SITE_HOST`, Value: your domain
4. Rebuild and redeploy to update CNAME

**Reference**: Feature branch `feature/version_four_point_o`

---

## [3.5.1] - 2025-02-01

### Changed
- Updated sales/contact email addresses for improved business communication
- Refined call-to-action messaging

### Developer Notes
**Learning Opportunity**: This patch demonstrates the importance of keeping contact information current in portfolio sites. Even minor updates like email addresses warrant version bumps for tracking purposes.

**Reference**: PR #235

---

## [3.5.0] - 2024-11-28

### Changed
- Achieved feature parity with links V3 (companion project)
- Updated avatar image to 20241101.png (595KB, higher resolution)
- Updated copyright year to 2025
- Refined 404 page copy for better user experience

### Removed
- Cleaned up source-assets directory (design files no longer needed in production)
  - Removed Adobe Illustrator (.ai) and Photoshop (.psd) source files
  - Removed intermediate PNG/SVG engagement logos
  - Total reduction: ~2MB of source assets

### Updated
- Major yarn package updates (1,428 insertions in yarn.lock)
- LICENSE copyright year updated

### Developer Notes
**Architecture Decision**: Removing source design assets from the repository improves build performance and reduces repository size. Design files should be maintained in a separate design repository or asset management system.

**Learning Opportunity**: This version demonstrates the principle of "feature parity" across related projects, ensuring consistent user experience across multiple touchpoints.

**Reference**: PR #234

---

## [3.4.0] - 2022-08-31

### Changed
- Updated avatar image to 20220824.png

### Developer Notes
**Pattern**: Regular avatar updates indicate this is a living portfolio that stays current. This version demonstrates the importance of keeping personal branding fresh.

**Reference**: PR #233

---

## [3.3.0] - 2022-07-27

### Changed
- Updated analytics and logging systems
- Enhanced monitoring and tracking capabilities

### Developer Notes
**Architecture Decision**: Separating analytics/logging updates into dedicated minor versions allows for better tracking of observability improvements without mixing concerns.

**Reference**: PR #232

---

## [3.2.1] - 2021-12-10

### Fixed
- Corrected avatar link in call-to-action partial

### Changed
- Updated avatar image to 20211123.png (451KB)
- Updated GitHub Actions workflows to latest versions

### Developer Notes
**Bug Fix Pattern**: This patch demonstrates the importance of verifying asset references after updates. A common mistake when updating images is forgetting to update all references throughout the codebase.

**Reference**: PR #231, #230

---

## [3.2.0] - 2021-04-11

### Changed
- Updated client engagement information in `data/engagements.yml`
- Simplified call-to-action styling (removed 26 lines of unnecessary CSS)
- Updated GitHub Actions workflows

### Removed
- Redundant CSS rules in `_call-to-action.scss`

### Developer Notes
**Refactoring Win**: This version shows the value of periodic CSS audits. Removing 26 lines of unused styles improves maintainability and page load performance.

**Reference**: PR #229

---

## [3.1.0] - 2021-01-21

### Added
- MIT LICENSE file (later changed to Proprietary in v4.0.0)
- XML sitemap generation via `sitemap.xml.builder`
- SEO improvements with optimized meta images
- Image optimization: Reduced background images significantly (3.2MB → 176KB for contact, 4.4MB → 202KB for index CTA, 2.4MB → 129KB for engagements)

### Changed
- Enabled asset compression in build configuration
- Updated Gemfile with deployment dependencies
- Enhanced header partial with improved navigation
- Updated favicon meta image (54KB → 22KB PNG optimization)

### Removed
- Removed redundant JavaScript partial content
- Cleaned up deployment configuration

### Developer Notes
**Major Achievement**: This version represents a significant performance optimization, reducing image assets by ~85% through proper compression and optimization. This is a critical lesson in web performance.

**SEO Improvement**: The addition of sitemap.xml.builder enables better search engine indexing, improving discoverability.

**Learning Opportunity**: The image optimization work demonstrates the importance of proper asset pipeline configuration. Using tools like ImageOptim or similar can dramatically reduce page load times without sacrificing visual quality.

**Reference**: PR #228

---

## [3.0.0] - 2021-01-11

### MAJOR RELEASE - Complete Redesign

This version represents a complete architectural overhaul and redesign philosophy.

### Added
- **Custom Design System**: Galaxy/space-themed design replacing Bootstrap
  - Custom CSS variables and design tokens
  - Modern animations and effects
  - "Easter egg" content at different viewport sizes (xs through xxxl at 2500px)
- **New Components**:
  - About section on index page
  - Call-to-action section with dramatic imagery
  - Engagements showcase section
  - Services banner with detailed offerings
  - Contact form component
- **New Pages**:
  - Dedicated 404 error page with custom layout (`four-o-four.html.slim`)
  - Four-o-four layout template
- **Data-Driven Architecture**:
  - `data/about.yml` - About section content
  - `data/components.yml` - Reusable component configuration
  - `data/contact.yml` - Contact information
  - `data/cta.yml` - Call-to-action content
  - `data/engagements.yml` - Client engagement showcase
  - `data/services.yml` - Service offerings
- **Modern Asset Pipeline**:
  - Webpack 5 configuration enhancements
  - FlexSlider integration for carousels
  - Optimized vendor CSS organization

### Changed
- **Ruby & Node Versions**:
  - Ruby: 2.6.x → 2.7.x
  - Node: Updated via `.nvmrc`
- **Framework Updates**:
  - Middleman configuration enhanced
  - Production environment optimized for performance
  - Staging environment configuration refined
- **Build Process**:
  - New `lib/build.rb` with 47 lines of build logic
  - Enhanced webpack asset helpers
  - Improved module processing
- **Component Architecture**:
  - Reorganized partials from `layout/` → `components/`
  - Enhanced footer with modern design
  - Improved navigation component
  - Better pre-loader implementation
- **Styling System**:
  - Complete CSS rewrite (14,979 insertions)
  - Removed Bootstrap dependencies
  - Custom responsive breakpoint system
  - Modern SCSS architecture

### Removed
- **Deprecated Pages**:
  - `products.html.slim` - Consolidated into single-page design
  - `remote.html.slim` - Content integrated into main experience
  - `engagements.html.slim` - Replaced with index section
- **Legacy Assets**:
  - Old background images (nasa.jpg, desk-workspace.jpg, cranes.jpg, cork-board.png, dark-brick-wall.png)
  - Legacy logo variations (logo-black.png, logo-blue.png)
  - Old robot SVG illustrations
  - Venn diagram design assets
  - `officespace-frustration.mp4` video
  - Old design system assets
- **Bootstrap Framework**: Complete removal in favor of custom design system
- **Legacy Data Files**:
  - `data/pages/engagements.yml`
  - `data/pages/home.yml`
  - `data/pages/remote.yml`
  - `data/components/analytics.yml`
  - `data/components/social.yml`
- **Dependabot v1 Configuration**: Migrated to newer dependency management

### Updated
- Favicon set completely regenerated (optimized file sizes)
- View source header/footer templates
- Stylelint ignore patterns

### Developer Notes

**Architecture Decision - Single Page Application**: The move from multi-page to single-page design reflects modern web UX best practices. Users expect seamless scrolling experiences rather than page transitions for portfolio sites.

**Design Philosophy Shift**: Removing Bootstrap was a bold move that required significantly more CSS work (14,979 new lines) but resulted in:
- Unique brand identity not constrained by framework patterns
- Reduced bundle size (no Bootstrap JavaScript or unused CSS)
- Full control over responsive behavior
- Custom animations aligned with brand (space/galaxy theme)

**Performance Impact**: Despite adding more custom CSS, the removal of Bootstrap and optimization of images resulted in better overall performance metrics.

**Data-Driven Content**: The new YAML-based content architecture (`data/*.yml`) separates content from presentation, making updates easier and enabling potential future CMS integration.

**Learning Opportunities**:
1. **When to drop frameworks**: This version teaches when it's appropriate to remove a framework. Bootstrap made sense in v2.x for rapid development, but became limiting for custom branding in v3.x.
2. **Progressive image optimization**: The dramatic asset size reductions show the importance of proper image compression in modern web development.
3. **Component architecture**: The reorganization from `layout/` to `components/` demonstrates evolution in thinking about reusable UI elements.
4. **Build system maturity**: The enhanced `lib/build.rb` shows progression from simple builds to sophisticated asset compilation.

**Git Statistics**:
- 233 files changed
- 14,979 insertions(+)
- 8,547 deletions(-)
- Net: +6,432 lines (mostly custom CSS and yarn.lock)

**References**: PR #227, #226, #225

---

## [2.3.17] - 2020-08-22

### Updated
- Babel core to 7.11.4
- npm to 6.14.8
- eslint-plugin-react to 7.20.6
- Bootstrap to 4.5.2
- Middleman to 4.3.8
- RuboCop to 0.89.1

### Security
- [Security] Bumped elliptic from 6.4.0 to 6.5.3 (CVE fix)

### Developer Notes
**Pattern**: This and the following 2.3.x releases demonstrate heavy reliance on Dependabot for automated dependency management. While this keeps dependencies current, the high frequency of patch releases (2.3.0 → 2.3.17) suggests a opportunity to batch dependency updates.

---

## [2.3.16] - 2020-08-02

### Updated
- Babel preset-env to 7.11.0
- Babel core to 7.11.0

---

## [2.3.15] - 2020-07-29

### Updated
- eslint-plugin-react to 7.20.5

---

## [2.3.14] - 2020-07-22

### Updated
- Babel core to 7.10.5

---

## [2.3.13] - 2020-06-22

### Updated
- RuboCop to 0.86.0

---

## [2.3.12] - 2020-06-19

### Updated
- FontAwesome free-regular-svg-icons to 5.13.1

---

## [2.3.11] - 2020-05-21

### Updated
- npm to 6.14.5

### Security
- [Security] Bumped npm from 6.14.4 to 6.14.5

---

## [2.3.10] - 2020-05-02

### Added
- Keybase logo to social media icons

### Developer Notes
**Content Addition**: Adding Keybase demonstrates the importance of keeping social proof current with emerging platforms. This small addition shows the site is actively maintained.

---

## [2.3.9] - 2020-03-27

### Updated
- npm to 6.14.4

---

## [2.3.8] - 2020-03-23

### Updated
- Babel core to 7.9.0

---

## [2.3.7] - 2020-03-20

### Updated
- npm to 6.14.3

---

## [2.3.6] - 2020-03-19

### Fixed
- Remote page styling issues

---

## [2.3.5] - 2020-03-19

### Updated
- stylelint-scss to 3.15.0

---

## [2.3.4] - 2020-03-13

### Fixed
- Remote page functionality and display issues
- Updated book links and wrappers

---

## [2.3.3] - 2020-02-20

### Updated
- RuboCop to 0.80.0

---

## [2.3.2] - 2020-02-17

### Fixed
- Remote background image path
- Products page max width
- Copy on remote page

---

## [2.3.1] - 2020-02-17

### Changed
- Updated Facebook embedding meta tags
- Updated page titles

---

## [2.3.0] - 2020-02-17

### Changed
- Enhanced products page responsive behavior (md-xl viewports)
- Improved Facebook OpenGraph integration

### Developer Notes
**Minor Version Pattern**: The 2.3.x series shows a pattern of rapid iteration on the remote and products pages, suggesting these were new features being refined based on user feedback.

---

## [2.2.1] - 2020-02-13

### Refactored
- Products page responsive styling for md and xl viewports

---

## [2.2.0] - 2020-02-13

### Added
- New products page with responsive design

### Developer Notes
**Feature Addition**: Introduction of the products page suggests expansion of the site's purpose beyond simple portfolio to showcasing work products.

---

## [2.1.0] - 2020-02-07

### Changed
- Complete contact page refactor (cleaner design, no background assets)
- Added common footer call-to-action across pages
- Responsive adjustments for contact page
- Index page CSS refinements

### Updated
- FontAwesome packages to 5.12.1
- FontAwesome core to 1.2.27

### Developer Notes
**Refactoring Focus**: This version demonstrates commitment to design consistency (common footer CTA) and code quality (removing background assets for cleaner approach).

**Learning Opportunity**: The contact page refactor shows the value of periodic redesigns. Sometimes the best improvement is simplification - removing assets rather than adding them.

---

## [2.0.2] - 2020-02-06

### Updated
- FontAwesome free-brands-svg-icons to 5.12.1

---

## [2.0.1] - 2020-02-06

### Fixed
- Various bug fixes and refinements to v2.0.0 release

---

## [2.0.0] - 2020-02-05

### MAJOR RELEASE - Multi-Page Application with Modern Tooling

This version represents the first major architectural transformation of the project.

### Added
- **New Pages**:
  - Contact page (`contact.html.slim`) with dedicated layout
  - Engagements page (`engagements.html.slim`) showcasing client work
- **Modern JavaScript Tooling**:
  - Webpack integration via `webpack/global.webpack.config.js`
  - UglifyJS plugin for production minification
  - Babel for ES6+ transpilation
  - ESLint with Airbnb configuration
- **New Components**:
  - Favicons component (`partials/components/_favicons.html.slim`)
  - Footer component
  - Header component
  - JavaScript loading component
  - Meta tags component
  - Navigation component
  - Pre-loader component
  - Title component
- **Layout System**:
  - New page layout (`layouts/page.html.slim`)
  - Enhanced index layout
  - Body layout wrapper
  - Document layout wrapper
- **View Source Easter Eggs**:
  - `partials/view_source_footer.txt`
  - `partials/view_source_header.txt`

### Changed
- **Index Page**: Major redesign with enhanced content and structure
- **Component Architecture**: Migrated from layout-specific partials to reusable components
- **Build System**: Introduction of sophisticated webpack-based asset compilation

### Removed
- Legacy view source ERB partial (`partials/_view_source.erb`)
- Old footer partial
- Old header partial
- Legacy favicon component
- Legacy meta component
- Legacy title component
- Outdated vendor CSS:
  - Pace loading bar styles (66 lines)
  - Twemoji Awesome styles (6,789 lines - significant bundle size reduction)

### Updated
- Massive dependency updates (29,100 insertions in package ecosystem)

### Developer Notes

**Architecture Decision - Webpack Integration**: The introduction of Webpack represents a major modernization of the asset pipeline. This enabled:
- Modern JavaScript (ES6+) with Babel transpilation
- Code splitting and optimization
- Better developer experience with hot reloading
- Production-ready minification and bundling

**Component-Based Architecture**: The move to `partials/components/` shows evolution toward modern component thinking, predating the v3.x complete component architecture.

**Performance Win**: Removing Twemoji Awesome (6,789 lines of CSS) significantly reduced bundle size. This demonstrates the importance of auditing dependencies - if you're not using emoji extensively, there's no need for a comprehensive emoji CSS library.

**Learning Opportunities**:
1. **When to introduce build tools**: This version teaches when a project outgrows simple asset compilation and needs sophisticated tooling. The addition of multiple pages and modern JavaScript made Webpack necessary.
2. **Vendor CSS audit**: The removal of Pace and Twemoji shows the importance of questioning every dependency. Just because you added something once doesn't mean you need it forever.
3. **Component thinking**: Even in a server-rendered Middleman app, organizing partials as "components" improves mental models and code organization.

**Git Statistics**:
- 211 files changed
- 29,100 insertions(+)
- 8,318 deletions(-)
- Net: +20,782 lines (mostly dependencies in yarn.lock)

**Reference**: PR #18

---

## [1.0.0] - 2017-03-21

### INITIAL RELEASE

The first tagged release of the personal branding website.

### Added
- Middleman static site generator foundation
- Responsive design system
- Basic page structure and layouts
- Initial asset pipeline with Sprockets

### Developer Notes

**Project Genesis**: This version establishes the foundation for all future development. The choice of Middleman as the static site generator proved solid through three major version iterations.

**Learning Opportunity**: Starting with a static site generator rather than a dynamic CMS or framework was the right choice for a personal portfolio. This decision enabled:
- Fast page loads (static HTML)
- Easy deployment (GitHub Pages)
- Version control for content
- No database maintenance
- Lower hosting costs

**Reference**: PR #4

---

## Version Summary Table

| Version | Date | Type | Key Changes | LOC Impact |
|---------|------|------|-------------|------------|
| 5.1.1 | 2026-02-06 | Patch | Fix brand badge mobile alignment | Minimal |
| 5.1.0 | 2026-02-05 | Minor | Button refactor, iPad responsive fixes, legacy cleanup | -3,800 lines |
| 5.0.0 | 2026-02-03 | Major | Visual redesign, blueprint aesthetic, SVG schematics, Ruby 4.0.0 | New design system, +3 gems |
| 4.0.0 | 2025-12-01 | Major | Infrastructure modernization, dependency restoration, environment config | +6 packages, 100% linter compliance |
| 3.5.1 | 2025-02-01 | Patch | Contact email update | Minimal |
| 3.5.0 | 2024-11-28 | Minor | Feature parity, asset cleanup | +1,278 / -1,963 |
| 3.4.0 | 2022-08-31 | Minor | Avatar update | Minimal |
| 3.3.0 | 2022-07-27 | Minor | Analytics/logging | Minimal |
| 3.2.1 | 2021-12-10 | Patch | Avatar link fix | Minimal |
| 3.2.0 | 2021-04-11 | Minor | Client updates, CSS cleanup | -26 CSS |
| 3.1.0 | 2021-01-21 | Minor | SEO, image optimization | +51 / -18 |
| 3.0.0 | 2021-01-11 | Major | Complete redesign, custom CSS | +14,979 / -8,547 |
| 2.3.x | 2020 | Patches | Dependency updates | Varied |
| 2.3.0 | 2020-02-17 | Minor | Products page refinement | Minimal |
| 2.2.0 | 2020-02-13 | Minor | Products page added | Moderate |
| 2.1.0 | 2020-02-07 | Minor | Contact page refactor | Moderate |
| 2.0.0 | 2020-02-05 | Major | Webpack, multi-page | +29,100 / -8,318 |
| 1.0.0 | 2017-03-21 | Major | Initial release | Foundation |

---

## Lessons for OSS Contributors

### Semantic Versioning in Practice

This changelog demonstrates real-world semantic versioning:

- **Major versions (x.0.0)**: Complete redesigns, breaking architectural changes
  - v1.0.0: Initial release
  - v2.0.0: Multi-page app with Webpack
  - v3.0.0: Single-page app with custom design system
  - v4.0.0: Infrastructure modernization with breaking environment variable requirements
  - v5.0.0: Blueprint/schematic redesign with Ruby 4.0.0 upgrade

- **Minor versions (x.y.0)**: New features, non-breaking enhancements
  - New pages (2.1.0, 2.2.0)
  - SEO improvements (3.1.0)
  - Content updates (3.2.0, 3.3.0)

- **Patch versions (x.y.z)**: Bug fixes, dependency updates
  - CSS fixes (2.3.2, 2.3.6)
  - Security updates (2.3.11, 2.3.17)

### Dependency Management Patterns

**Observation**: The 2.3.x series had 17 patch releases primarily for dependency updates.

**Lesson**: Consider batching dependency updates:
- Weekly or monthly dependency update cycles rather than immediate releases
- Separate security updates (immediate) from feature updates (batched)
- Use tools like Dependabot but configure grouped updates

**Counter-Point**: Immediate updates for security vulnerabilities (elliptic, lodash, rack) were correct decisions.

### When to Redesign

This project had two major redesigns (v2.0.0, v3.0.0):

**v2.0.0 Redesign Trigger**:
- Need for multiple pages (portfolio expansion)
- Desire for modern JavaScript tooling
- Bootstrap framework for rapid development

**v3.0.0 Redesign Trigger**:
- Bootstrap became limiting for custom brand expression
- Simpler content strategy (single-page focus)
- Performance optimization opportunity
- Mature understanding of requirements

**Lesson**: Major redesigns should be driven by clear needs, not trends. Both redesigns had specific goals that justified the effort.

### Asset Optimization Journey

**v2.0.0**: Added comprehensive assets for feature richness
**v3.1.0**: Optimized images (85% size reduction)
**v3.5.0**: Removed source assets from repository

**Lesson**: Asset optimization is an ongoing process:
1. **Add features first** (functionality over optimization)
2. **Optimize when impact is measurable** (v3.1.0 after seeing load times)
3. **Clean up continuously** (v3.5.0 removing unnecessary files)

### Build Tool Evolution

**v1.0.0**: Sprockets (Rails asset pipeline)
**v2.0.0**: Webpack 4 introduced
**v3.0.0**: Webpack 5 matured
**v3.5.0**: Modern Webpack 5.94.0 with latest practices

**Lesson**: Build tools evolve, but don't upgrade without reason. Each webpack upgrade in this project aligned with other major changes, minimizing migration pain.

---

## Contributors

- Primary developer and maintainer: RobotsBuildingRobots, LLC

---

## License

This project is proprietary software. All Rights Reserved.

Copyright (c) 2017-2026 RobotsBuildingRobots, LLC

See the LICENSE file for details.

---

**Generated**: 2026-02-05 using git tag analysis and commit history
**Maintainer**: RobotsBuildingRobots, LLC
