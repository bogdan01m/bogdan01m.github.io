# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Jekyll-based personal portfolio website using the Minimal Mistakes theme. Development commands:

```bash
# Install dependencies
bundle install

# Serve the site locally (usually on http://localhost:4000)
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

## Architecture Overview

This is a Jekyll static site using the Minimal Mistakes remote theme with the following key structure:

### Content Organization
- **Main pages**: `index.md`, `contact.md` define site entry points
- **Projects**: Portfolio projects in `/projects/` directory with individual markdown files
- **Articles**: Blog-style content in `/articles/` directory  
- **Assets**: Images, CSS, and JavaScript in `/assets/` directory

### Jekyll Configuration
- Uses remote theme `mmistakes/minimal-mistakes@4.27.3` configured in `_config.yml:2`
- Dark theme skin by default (`minimal_mistakes_skin: "dark"`)
- Wide layout applied to all pages via defaults in `_config.yml:18-29`
- Author profile enabled on all pages

### Theme System
The site implements a dual-theme system:
- **Dark theme** (default): Standard Minimal Mistakes dark skin
- **Air theme**: Custom light theme variant
- **Theme Toggle**: Custom switcher with floating button in bottom-right corner
  - `/assets/js/theme-switcher.js:1-81` - Theme switching logic with localStorage persistence
  - `/_includes/theme-toggle.html:1-56` - Toggle button component and styling
  - Themes controlled via `data-theme` attribute and body classes
  - Button shows 🌞 (dark→air) or 🌚 (air→dark) based on current theme

### Custom Features
- **Custom Layout**: Uses `layout: wide` for better horizontal text layout
- **Navigation**: Configured via `_data/navigation.yml` (referenced in config)

### Content Structure Patterns
- Project pages follow consistent frontmatter pattern with layout and metadata
- Assets organized in subdirectories matching content structure
- All content uses markdown with Jekyll frontmatter

### Deployment
- GitHub Pages deployment via `github-pages` gem in Gemfile
- Site builds to `_site/` directory (excluded from version control)
- Uses standard Jekyll plugins: feed, SEO tags, sitemap, include-cache

The site showcases AI/ML projects and maintains a professional portfolio structure suitable for technical professionals.