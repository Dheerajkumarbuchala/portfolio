# 🚀 Personal Portfolio — Dark Futuristic Theme

A sleek, animated developer portfolio built with pure HTML, CSS, and JavaScript.

## ✨ Features
- Custom animated cursor with lag ring
- Moving grid background + glow orbs
- Glitch effect on headings
- Animated stat counters
- Interactive skill bars with category switching
- Scroll-triggered fade-up animations
- Responsive (mobile nav included)
- Zero dependencies — no frameworks needed

## 📁 Project Structure
```
portfolio/
├── index.html       ← Main page
├── css/
│   └── style.css    ← All styles + animations
├── js/
│   └── main.js      ← Interactivity & skill data
└── README.md
```

## ✏️ Customization Checklist
Open each file and replace the placeholder content:

### index.html
- [ ] Your name (search "Alex Chen")
- [ ] Hero subtitle text
- [ ] About bio paragraphs
- [ ] Terminal content (skills, git log)
- [ ] Project names, descriptions, tags
- [ ] Project GitHub / demo links
- [ ] Contact email & social links
- [ ] Footer name + year

### js/main.js
- [ ] Update `skillData` object with your real skills & percentages

### css/style.css
- [ ] Tweak `--neon`, `--neon2`, `--neon3` colors if desired

## 🚀 Deploy to GitHub Pages (free hosting!)

```bash
# 1. Initialize git repo
git init
git add .
git commit -m "feat: initial portfolio"

# 2. Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main

# 3. Go to GitHub → Settings → Pages → Source: main branch → Save
# Your site will be live at: https://YOUR_USERNAME.github.io/YOUR_REPO
```

## 🔧 Local Development
Just open `index.html` in your browser — no build step needed!

For live reload, use VS Code's **Live Server** extension:
1. Install "Live Server" from VS Code extensions
2. Right-click `index.html` → "Open with Live Server"
