# PromptRails — Onboarding Roadmap

A responsive HTML presentation walking new customers through the PromptRails onboarding process (11 steps, from stakeholder mapping to production-scale agents).

## Quick Start

Open `index.html` in any modern browser. That's it — no build step, no dependencies.

## Navigation

| Input | Action |
|-------|--------|
| Arrow keys (← →) | Previous / Next slide |
| Space | Next slide |
| Home / End | Jump to first / last slide |
| Swipe left / right | Next / Previous (touch devices) |
| Mouse wheel | Navigate slides |

## File Structure

```
├── index.html              # Presentation markup (8 slides)
├── styles.css              # Styling — warm cream theme, responsive
├── script.js               # Slide controller, keyboard/touch/wheel nav
├── assets/
│   ├── promptrails-logo.png    # PromptRails logo (black)
│   └── icon.png                # Favicon
├── Dockerfile              # Docker/nginx config for Railway deploy
├── nginx.conf              # nginx server template
└── README.md
```

## Slides

1. **Welcome** — Intro and goal statement
2. **Foundation** — Stakeholder mapping & primary POC
3. **Scoping** — Deliverables & data landscape
4. **PromptRails Setup** — LLMs, data sources, agents (5.1–5.3)
5. **Initial Execution** — First analysis & iteration
6. **Scale & Mature** — Broader teams & production readiness
7. **Integrate & Replicate** — Deep integration & more agents
8. **CTA** — Schedule a kickoff call (links to Calendly)

## Deploy

### Railway / Docker

```bash
docker build -t promptrails-presentation .
docker run -p 8080:8080 promptrails-presentation
```

The Dockerfile uses `nginx:alpine` and reads the `PORT` env variable automatically (Railway compatible).

### Static Hosting

Upload all files to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).

## Browser Support

Chrome, Firefox, Safari, Edge — latest versions, desktop and mobile.
