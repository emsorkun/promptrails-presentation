# Seafood 2.0 Presentation

A responsive HTML/CSS presentation for Tutya Fish Market's digital menu optimization strategy.

## Features

- ✨ Pure HTML/CSS/JavaScript - No dependencies
- 📱 Fully responsive - Works on mobile and desktop
- ⌨️ Keyboard navigation - Arrow keys, Space, Home, End
- 👆 Touch gestures - Swipe left/right on mobile
- 🖱️ Mouse wheel navigation
- 🎨 Beautiful gradient backgrounds and smooth transitions
- 📊 Progress bar and slide counter

## How to Use

### Desktop
1. Open `index.html` in any modern web browser
2. Navigate using:
   - **Arrow Keys** (Left/Right or Up/Down)
   - **Space Bar** (Next slide)
   - **Mouse Wheel** (Scroll to navigate)
   - **Navigation Buttons** (Bottom of screen)
   - **Home/End Keys** (Jump to first/last slide)

### Mobile
1. Open `index.html` in any mobile browser
2. Navigate using:
   - **Swipe Left** - Next slide
   - **Swipe Right** - Previous slide
   - **Navigation Buttons** - Tap the arrows at bottom

## File Structure

```
tutya-presentation/
├── index.html          # Main presentation file
├── styles.css          # All styling and responsive design
├── script.js           # Navigation and interaction logic
├── assets/
│   └── growdash-logo.png   # Growdash logo
└── README.md           # This file
```

## Slides Overview

1. **Title Slide** - Introduction to Seafood 2.0
2. **The Digital Seafood Challenge** - Problem definition
3. **Visual Hierarchy & Anchors** - Icon strategy
4. **The "Best Seller" Workaround** - Menu optimization
5. **From Ingredients to Experiences** - Top 5 signature dishes
6. **Increasing Average Order Value** - Bundles and upselling
7. **Sandwich Meal Plans (Menus)** - Sandwich + fries + drink strategy
8. **Limited Time Offer** - Section naming, deadline in description (e.g. Deliveroo), more aggressive discounts
9. **Recommendation: Hero image refresh** - Crispy Fish Fillet Sandwich (current vs recommended style)
10. **Trust Signals & Health Tags** - Transparency and health marketing

## Deployment

### Local
Simply open `index.html` in your browser.

### Online
Upload all files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Or any static hosting provider

## Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit the gradient colors in `styles.css`:
- Main gradient: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`
- Accent color: `#667eea` (used for buttons and highlights)

### Content
Edit `index.html` to modify slide content. Each slide is a `<section class="slide">` element.

### Logo
Replace `assets/growdash-logo.png` with your own logo (recommended height: 80px for title slide, 40px for slide headers).

## Tips

- The presentation auto-prevents double-tap zoom on mobile for better UX
- Scrollable content is indicated on slides with many items (Slide 4)
- The progress bar at the top shows your position in the presentation
- The checkmark (✓) appears on the next button when you reach the last slide

---

**Created with ❤️ by Growdash**
