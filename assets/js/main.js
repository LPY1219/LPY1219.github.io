/* =============================================================================
   main.js — renders the page from window.SITE (data/site.js) and wires up
   interactions: theme toggle, typewriter, scroll progress, nav highlighting,
   reveal-on-scroll, publication filtering.
   You normally don't need to edit this file — edit data/site.js instead.
   ============================================================================= */
(function () {
  "use strict";
  const S = window.SITE;
  const $  = (sel, el = document) => el.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---- inline SVG icons (no external deps) ------------------------------- */
  const ICON = {
    email:`<svg viewBox="0 0 24 24"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2-.5 7.8 6 7.8-6H4.2ZM20 7.3l-7.4 5.7a1 1 0 0 1-1.2 0L4 7.3v11.2c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.3Z"/></svg>`,
    scholar:`<svg viewBox="0 0 24 24"><path d="M12 2 1 8l11 6 9-4.9V16h2V8L12 2ZM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8Z"/></svg>`,
    github:`<svg viewBox="0 0 24 24"><path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.6 3 8.6 7.2 10 .5.1.7-.2.7-.5v-1.8c-2.9.6-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.6 0-.6 0-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.9.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2 1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.8 1 1.7 1 2.8 0 4-2.5 4.9-4.8 5.2.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.5 10.5 0 0 0 22.5 12 10.5 10.5 0 0 0 12 1.5Z"/></svg>`,
    twitter:`<svg viewBox="0 0 24 24"><path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1.5 2h6.8l4.7 6.2L18.2 2Zm-1.2 18h1.8L7.1 3.9H5.2L17 20Z"/></svg>`,
    linkedin:`<svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9Z"/></svg>`,
    cv:`<svg viewBox="0 0 24 24"><path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 13h8v1.6H8V13Zm0 3.4h8V18H8v-1.6ZM8 9.6h4v1.6H8V9.6Z"/></svg>`,
    xhs:`<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3.4 4.2H5v5.6h1.4v-2.1h.9l1 2.1h1.6l-1.2-2.4c.6-.3 1-.9 1-1.6 0-1-.8-1.6-1.9-1.6Zm-.1 1.2c.5 0 .8.2.8.6s-.3.6-.8.6h-.9v-1.2h.9Zm6.5-1.2c-1.6 0-2.7 1.2-2.7 2.9s1.1 2.9 2.7 2.9c1.3 0 2.3-.8 2.6-2h-1.5c-.2.5-.6.7-1.1.7-.7 0-1.2-.6-1.2-1.6s.5-1.6 1.2-1.6c.5 0 .9.3 1.1.8h1.5c-.3-1.3-1.3-2.1-2.6-2.1Zm5.6 0c-1.2 0-2 .6-2 1.6 0 .9.6 1.3 1.6 1.5l.6.1c.4.1.6.2.6.5s-.3.4-.7.4c-.5 0-.8-.2-.9-.6H16c.1 1.1 1 1.8 2.4 1.8 1.3 0 2.2-.6 2.2-1.7 0-.9-.6-1.3-1.6-1.5l-.6-.1c-.4-.1-.6-.2-.6-.5s.3-.4.6-.4c.4 0 .7.2.8.5h1.3c-.1-1-1-1.6-2.1-1.6Z"/></svg>`,
    orcid:`<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8.2 6.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM7.5 9.6h1.4v7.6H7.5V9.6Zm3 0h3c2.3 0 3.8 1.5 3.8 3.8s-1.6 3.8-3.9 3.8h-2.9V9.6Zm1.4 1.3v5h1.5c1.5 0 2.4-.9 2.4-2.5s-.9-2.5-2.4-2.5h-1.5Z"/></svg>`,
    link:`<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 0 1.4 0l3.5-3.5a3 3 0 0 0-4.2-4.2L9.5 7a1 1 0 1 0 1.4 1.4l1.8-1.7a1 1 0 0 1 1.4 1.4L10.6 12a1 1 0 0 0 0 1.4Zm2.8-2.8a1 1 0 0 0-1.4 0L8.5 14a3 3 0 0 0 4.2 4.2L14.5 17a1 1 0 0 0-1.4-1.4l-1.8 1.7a1 1 0 0 1-1.4-1.4l3.5-3.5a1 1 0 0 0 0-1.4Z"/></svg>`,
  };

  /* ===================================================================== */
  /*  SIDEBAR / PROFILE                                                    */
  /* ===================================================================== */
  const p = S.profile;
  $("#avatar").src = p.avatar;
  $("#avatar").alt = p.name;
  $("#side-name").textContent = p.name;
  if (p.name_zh) $("#side-name-zh").textContent = p.name_zh;
  $("#side-title").textContent = p.title || "";
  if (p.affiliation) {
    $("#side-affil").textContent = p.affiliation;
  }
  $("#side-loc").textContent = p.location || "";
  $("#footer-note").textContent = S.footerNote || "";
  $("#side-footer").textContent = "© " + (S.footerNote || "");

  // contact / social links
  const links = $("#side-links");
  const addLink = (href, icon, label, cls) => {
    if (!href) return;
    const a = el("a", cls, icon);
    a.href = href; a.title = label; a.setAttribute("aria-label", label);
    if (!href.startsWith("mailto") && href !== "#") { a.target = "_blank"; a.rel = "noopener"; }
    links.appendChild(a);
  };
  addLink(p.email ? "mailto:" + p.email : "", ICON.email, "Email", "icon-email");
  addLink(p.googleScholar, ICON.scholar, "Google Scholar", "icon-scholar");
  addLink(p.github, ICON.github, "GitHub", "icon-github");
  addLink(p.twitter, ICON.twitter, "Twitter / X", "icon-twitter");
  addLink(p.linkedin, ICON.linkedin, "LinkedIn", "icon-linkedin");
  addLink(p.xiaohongshu, ICON.xhs, "小红书 Xiaohongshu", "icon-xhs");
  addLink(p.orcid, ICON.orcid, "ORCID", "icon-orcid");
  addLink(p.cv, ICON.cv, "Curriculum Vitae", "icon-cv");

  /* ===================================================================== */
  /*  HERO / BIO                                                           */
  /* ===================================================================== */
  $("#hero-greeting").innerHTML = `👋 Hi there,`;
  $("#bio").innerHTML = (p.bio || []).map(t => `<p>${t}</p>`).join("");

  // contact call-out card
  const cc = $("#contact-card");
  if (p.contactNote && p.email) {
    $("#contact-note").innerHTML = p.contactNote;
    $("#contact-email").textContent = p.email;
    const iconLink = $("#contact-icon-link");
    iconLink.href = "mailto:" + p.email;
  } else { cc.style.display = "none"; }

  // hero meta removed
  const heroMeta = $("#hero-meta");
  if (heroMeta) heroMeta.style.display = "none";

  /* ===================================================================== */
  /*  NEWS                                                                 */
  /* ===================================================================== */
  const newsList = $("#news-list");
  (S.news || []).forEach(n => {
    const li = el("li");
    li.appendChild(el("span", "news-date", n.date || ""));
    li.appendChild(el("span", "news-tag", n.tag || "•"));
    li.appendChild(el("span", "news-body", n.html || ""));
    newsList.appendChild(li);
  });

  /* ===================================================================== */
  /*  PUBLICATIONS                                                         */
  /* ===================================================================== */
  const isVideo = src => /\.(mp4|webm|mov)(\?.*)?$/i.test(src || "");
  const meName = (p.name || "").trim();

  function renderAuthors(pub) {
    const eq = new Set(pub.authorsEqual || []);
    const co = new Set(pub.authorsCorresponding || []);
    return (pub.authors || []).map(a => {
      let cls = "", mark = "";
      if (eq.has(a)) mark += "*";
      if (co.has(a)) mark += "†";
      if (a === meName) cls = "me";
      else if (eq.has(a)) cls = "eq";
      const name = cls ? `<span class="${cls}">${a}${mark}</span>` : `${a}${mark ? `<span class="co">${mark}</span>` : ""}`;
      return name;
    }).join(", ");
  }

  const linkMeta = [
    ["project", "Project", ICON.link],
    ["paper",   "Paper",   ICON.cv],
    ["arxiv",   "arXiv",   null],
    ["code",    "Code",    ICON.github],
    ["video",   "Video",   null],
    ["dataset", "Dataset", null],
    ["bibtex",  "BibTeX",  null],
  ];

  function renderMedia(pub) {
    const wrap = el("div", "pub-media");
    if (isVideo(pub.media)) {
      const v = el("video");
      v.src = pub.media; v.muted = true; v.loop = true;
      v.autoplay = true; v.playsInline = true;
      if (pub.poster) v.poster = pub.poster;
      v.setAttribute("muted", ""); v.setAttribute("playsinline", "");
      wrap.appendChild(v);
    } else {
      const img = el("img");
      img.src = pub.media; img.alt = pub.title; img.loading = "lazy";
      wrap.appendChild(img);
    }
    return wrap;
  }

  function renderPub(pub) {
    const card = el("article", "pub reveal");
    card.dataset.selected = pub.selected ? "1" : "0";

    // media — wrap in project link if available
    const media = renderMedia(pub);
    const mediaHref = pub.links && (pub.links.project || pub.links.paper || pub.links.arxiv);
    if (mediaHref && mediaHref !== "#") {
      const a = el("a"); a.href = mediaHref; a.target = "_blank"; a.rel = "noopener";
      a.appendChild(media); card.appendChild(a);
    } else { card.appendChild(media); }

    const body = el("div", "pub-body");
    const titleHref = mediaHref || "#";
    body.appendChild(el("h3", "pub-title",
      `<a href="${titleHref}"${titleHref !== "#" ? ' target="_blank" rel="noopener"' : ""}>${pub.title}</a>`));
    body.appendChild(el("p", "pub-authors", renderAuthors(pub)));
    const awards = pub.award
      ? (Array.isArray(pub.award) ? pub.award : [pub.award])
      : [];
    const venueHtml = `${pub.venue || ""} <span class="year">${pub.year || ""}</span>`
      + awards.map(a => ` <span class="pub-award">🏆 ${a}</span>`).join("");
    body.appendChild(el("p", "pub-venue", venueHtml));
    if (pub.tldr) body.appendChild(el("p", "pub-tldr", pub.tldr));

    const linkRow = el("div", "pub-links");
    linkMeta.forEach(([key, label, icon]) => {
      const href = pub.links && pub.links[key];
      if (!href) return;
      const a = el("a", null, (icon ? icon : "") + `<span>${label}</span>`);
      a.href = href;
      if (href !== "#") { a.target = "_blank"; a.rel = "noopener"; }
      linkRow.appendChild(a);
    });
    body.appendChild(linkRow);

    card.appendChild(body);
    return card;
  }

  const pubList = $("#pub-list");
  (S.publications || []).forEach(pub => pubList.appendChild(renderPub(pub)));

  // default: show selected only
  $$(".pub", pubList).forEach(c => {
    c.style.display = c.dataset.selected === "1" ? "" : "none";
  });

  // filter buttons (only "selected" button remains; "all" is now an external link)
  $("#pub-filter").addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn[data-filter]");
    if (!btn) return;
    $$(".filter-btn[data-filter]").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    $$(".pub", pubList).forEach(c => {
      c.style.display = (f === "all" || c.dataset.selected === "1") ? "" : "none";
    });
  });
  function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  /* ===================================================================== */
  /*  TIMELINES (education / experience)                                   */
  /* ===================================================================== */
  function renderTimeline(targetId, items, opts = {}) {
    const root = $(targetId);
    const sec = root.closest(".section");
    if (!items || !items.length) { if (sec) sec.style.display = "none"; return; }
    items.forEach(it => {
      const row = el("div", "tl-item");
      const logo = el("img", "tl-logo");
      logo.src = it.logo || ""; logo.alt = it.org || "";
      if (!it.logo) logo.style.visibility = "hidden";
      row.appendChild(logo);
      const info = el("div");
      info.appendChild(el("div", "tl-period", it.period || ""));
      info.appendChild(el("div", "tl-degree", opts.role ? it.role : it.degree));
      info.appendChild(el("div", "tl-org", it.org || ""));
      if (it.note) info.appendChild(el("div", "tl-note", it.note));
      row.appendChild(info);
      root.appendChild(row);
    });
  }
  renderTimeline("#education-list", S.education);
  renderTimeline("#experience-list", S.experience, { role: true });

  /* ===================================================================== */
  /*  SIMPLE LISTS (awards / talks / services)                             */
  /* ===================================================================== */
  function fillSimple(targetId, items, fmt) {
    const root = $(targetId);
    const sec = root.closest(".section");
    if (!items || !items.length) { if (sec) sec.style.display = "none"; return; }
    items.forEach(it => root.appendChild(fmt(it)));
  }
  fillSimple("#awards-list", S.awards, a => {
    const li = el("li");
    li.appendChild(el("span", "sl-year", a.year || ""));
    li.appendChild(el("span", "sl-text", a.text || ""));
    return li;
  });
  fillSimple("#talks-list", S.talks, t => {
    const li = el("li");
    li.appendChild(el("span", "sl-year", t.date || ""));
    const body = el("span", "sl-text", t.text || "");
    if (t.video) {
      const a = el("a", null, " 🎬");
      a.href = t.video; a.target = "_blank"; a.rel = "noopener";
      a.title = "Watch video"; a.style.textDecoration = "none";
      body.appendChild(a);
    }
    li.appendChild(body);
    return li;
  });
  fillSimple("#services-list", S.services, s => {
    const li = el("li");
    li.appendChild(el("span", "sl-text", typeof s === "string" ? s : (s.text || "")));
    return li;
  });

  // misc
  if (S.misc && S.misc.trim()) { $("#misc-text").innerHTML = S.misc; }
  else { const m = $("#misc"); if (m) m.style.display = "none"; }

  /* ===================================================================== */
  /*  IN-PAGE NAV (built from visible sections)                            */
  /* ===================================================================== */
  const NAV = [
    ["about", "About"], ["news", "News"], ["publications", "Publications"],
    ["education", "Education"], ["experience", "Experience"],
    ["awards", "Awards"], ["talks", "Talks"], ["services", "Service"],
    ["misc", "Beyond"],
  ];
  const nav = $("#side-nav");
  NAV.forEach(([id, label]) => {
    const sec = document.getElementById(id);
    if (!sec || sec.style.display === "none") return;
    const a = el("a", null, label); a.href = "#" + id; a.dataset.target = id;
    nav.appendChild(a);
  });

  /* ===================================================================== */
  /*  INTERACTIONS                                                         */
  /* ===================================================================== */

  // ---- Theme toggle (persisted) ----
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
  $("#theme-toggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // ---- Typewriter taglines ----
  const tw = $("#typewriter");
  const words = (p.taglines && p.taglines.length) ? p.taglines : [p.title || ""];
  const caret = $(".caret");
  const animate = p.typewriter !== false && words.length > 1
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (animate) {
    let wi = 0, ci = 0, deleting = false;
    (function type() {
      const w = words[wi];
      tw.textContent = deleting ? w.slice(0, ci--) : w.slice(0, ci++);
      let delay = deleting ? 45 : 95;
      if (!deleting && ci > w.length) { deleting = true; delay = 1500; }
      else if (deleting && ci < 0) { deleting = false; ci = 0; wi = (wi + 1) % words.length; delay = 350; }
      setTimeout(type, delay);
    })();
  } else {
    tw.textContent = words[0];
    if (caret) caret.style.display = "none";   // hide blinking caret when static
  }

  // ---- Scroll progress bar ----
  const bar = $("#scroll-progress");
  function onScroll() {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = (scrolled * 100) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Reveal on scroll ----
  $$(".section").forEach(s => s.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(n => io.observe(n));

  // ---- Active nav highlighting ----
  const navLinks = $$("#side-nav a");
  const secObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle("is-active", a.dataset.target === e.target.id));
      }
    });
  }, { rootMargin: "-30% 0px -65% 0px" });
  NAV.forEach(([id]) => { const s = document.getElementById(id); if (s) secObserver.observe(s); });

})();
