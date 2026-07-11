# Peiyan Li — Academic Personal Website

A clean, fast, dependency-free academic homepage (pure HTML/CSS/JS — no build step).
Editorial "research journal" aesthetic with a fixed identity sidebar, scrolling
content, light/dark themes, and a teaser image/GIF/video slot for every paper.

```
personal_website/
├── index.html              # page structure (rarely needs editing)
├── data/
│   └── site.js             # ★ EDIT THIS — all your content lives here
├── assets/
│   ├── css/style.css       # all styling / theme tokens
│   ├── js/main.js          # renders the page from site.js (rarely edit)
│   ├── img/                # avatar.svg, logos  → replace with real files
│   └── papers/             # one teaser per paper (img / gif / mp4)
└── README.md
```

## ✏️ How to edit your content

Open **`data/site.js`** and edit the fields. Everything on the page is generated
from that one file. Common edits:

- **Your info / links** → `profile` block (name, bio, email, GitHub, 小红书, CV…).
  Leave any link `""` to hide its button.
- **Profile photo** → replace `assets/img/avatar.svg` with a real `avatar.jpg`,
  and update `profile.avatar` to point at it.
- **Add a paper** → copy one `{ ... }` block in `publications` and edit it.
  - Put the teaser in `assets/papers/` and set `media:` to its path.
  - **Images** (`.jpg .png .gif .webp`) and **videos** (`.mp4 .webm`) are
    auto-detected — videos autoplay muted & looping like a GIF.
  - `selected: true` makes it show under the "Selected" filter.
  - Mark equal contribution in `authorsEqual`, corresponding author in
    `authorsCorresponding`; your own name (matching `profile.name`) is bolded.
- **News / Education / Experience / Awards / Talks / Service** → matching arrays.
  Any section whose array is empty hides itself automatically.

No tooling required — just save and refresh the browser.

## 👀 Preview locally

Open `index.html` directly, or run a tiny static server (better, so fonts/media
load cleanly):

```bash
cd personal_website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy to GitHub Pages

Your site will be served at **`https://<username>.github.io`**.
With the current account `LPY1219`, that is `https://lpy1219.github.io`.

```bash
# 1. create a repo on GitHub named exactly  <username>.github.io
#    (for now: LPY1219.github.io)
git add -A
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/LPY1219/LPY1219.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from
a branch" → Branch: `main` / `(root)` → Save.** The site goes live in ~1 minute.

### Want the URL to be `https://peiyan-li.github.io`?

GitHub Pages user-site URLs always equal your **account username**. To get that
URL, rename the GitHub account to `peiyan-li` (Settings → Account → Change
username), then name the repo `peiyan-li.github.io`. Nothing in this codebase
needs to change — only the repo name and remote URL.

### Custom domain (optional, most "professional" look)

Buy a domain (e.g. `peiyanli.com`), add a `CNAME` file containing the domain to
the repo root, and point the domain's DNS at GitHub Pages. The site code is
unchanged.

## 🎨 Tweaking the look

All colors, fonts, and spacing are CSS variables at the top of
`assets/css/style.css` (`:root` for light, `html[data-theme="dark"]` for dark).
Change `--accent` to recolor the whole site in one line.

---

Built from scratch — no template, no framework.
