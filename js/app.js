import { UI, GROUPS } from "./i18n.js";
import { CHAPTERS } from "./content/index.js";

const THEME_KEY = "lilix-theme";
const LANG_KEY = "lilix-lang";

const $ = (id) => document.getElementById(id);

function detectLang() {
  const nav = (navigator.language || "fr").toLowerCase();
  if (nav.startsWith("ar")) return "ar";
  if (nav.startsWith("en")) return "en";
  return "fr";
}

function getLang() {
  return localStorage.getItem(LANG_KEY) || detectLang();
}

function getTheme() {
  return localStorage.getItem(THEME_KEY) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  applyChrome(lang);
}

function applyChrome(lang) {
  const t = UI[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function parseHash() {
  const raw = location.hash.replace(/^#/, "").replace(/^\/+/, "");
  const parts = raw.split("/").filter(Boolean);
  let lang = getLang();
  let id = "home";
  if (parts[0] && ["fr", "en", "ar"].includes(parts[0])) {
    lang = parts[0];
    id = parts[1] || "home";
  } else if (parts[0]) {
    id = parts[0];
  }
  if (!CHAPTERS.some((c) => c.id === id)) id = "home";
  return { lang, id };
}

function href(lang, id) {
  return `#/${lang}/${id}`;
}

function renderSidebar(lang, activeId) {
  const nav = $("sidebarNav");
  const grouped = GROUPS.map((g) => ({
    ...g,
    items: CHAPTERS.filter((c) => c.group === g.id),
  })).filter((g) => g.items.length);
  nav.innerHTML = grouped
    .map(
      (g) => `
      <div class="nav-group">
        <h3>${g[lang]}</h3>
        ${g.items
          .map(
            (c) => `<a href="${href(lang, c.id)}" class="${c.id === activeId ? "active" : ""}">${c.title[lang]}</a>`
          )
          .join("")}
      </div>`
    )
    .join("");
}

function strip(html) {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d.textContent || "";
}

function enhanceArticle(root, lang) {
  root.querySelectorAll("pre").forEach((pre) => {
    if (pre.parentElement.classList.contains("code-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "code-wrap";
    pre.replaceWith(wrap);
    wrap.appendChild(pre);
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = UI[lang].copy;
    btn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(pre.innerText);
      btn.textContent = UI[lang].copied;
      setTimeout(() => (btn.textContent = UI[lang].copy), 1200);
    });
    wrap.appendChild(btn);
  });
}

function renderPlayground(lang) {
  const t = UI[lang];
  return `
    <div class="note">${
      lang === "fr"
        ? "Édite le HTML, le CSS et le JS puis clique sur Exécuter. Rien n'est envoyé à un serveur."
        : lang === "en"
        ? "Edit HTML, CSS and JS then click Run. Nothing is sent to a server."
        : "عدّل HTML وCSS وJS ثم اضغط تشغيل. لا يُرسل شيء إلى خادم."
    }</div>
    <p><button class="copy-btn" id="runPlay" type="button" style="position:static">${t.run}</button></p>
    <div class="playground">
      <div class="editors">
        <label>${t.htmlTab}<textarea id="playHtml"><!DOCTYPE html>
<html>
<body>
  <h1 id="title">Lilix</h1>
  <button id="btn">OK</button>
</body>
</html></textarea></label>
        <label>${t.cssTab}<textarea id="playCss">body { font-family: sans-serif; }
h1 { color: #04AA6D; }</textarea></label>
        <label>${t.jsTab}<textarea id="playJs">document.getElementById('btn').onclick = () => {
  document.getElementById('title').textContent = 'Hello Lilix';
};</textarea></label>
      </div>
      <iframe id="playFrame" title="${t.preview}" sandbox="allow-scripts"></iframe>
    </div>`;
}

function runPlayground() {
  const htmlRaw = $("playHtml").value;
  const css = $("playCss").value;
  const js = $("playJs").value;
  const bodyMatch = htmlRaw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : htmlRaw;
  const doc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${css}</style></head><body>${body}<script>${js}<\/script></body></html>`;
  $("playFrame").srcdoc = doc;
}

function renderPager(lang, id) {
  const i = CHAPTERS.findIndex((c) => c.id === id);
  const prev = CHAPTERS[i - 1];
  const next = CHAPTERS[i + 1];
  $("pager").innerHTML = `
    ${prev ? `<a class="secondary" href="${href(lang, prev.id)}">← ${UI[lang].prev} · ${prev.title[lang]}</a>` : "<span></span>"}
    ${next ? `<a href="${href(lang, next.id)}">${UI[lang].next} · ${next.title[lang]} →</a>` : "<span></span>"}
  `;
}

function render() {
  const { lang, id } = parseHash();
  setLang(lang);
  const chapter = CHAPTERS.find((c) => c.id === id) || CHAPTERS[0];
  const group = GROUPS.find((g) => g.id === chapter.group);
  document.title = `${chapter.title[lang]} — Lilix Docs`;
  renderSidebar(lang, chapter.id);
  $("crumbs").innerHTML = `<a href="${href(lang, "home")}">${UI[lang].home}</a> · ${group ? group[lang] : ""} · ${chapter.title[lang]}`;
  let html = chapter.html[lang];
  if (chapter.playground) html += renderPlayground(lang);
  $("article").innerHTML = `<h1>${chapter.title[lang]}</h1>${html}`;
  enhanceArticle($("article"), lang);
  renderPager(lang, chapter.id);
  window.scrollTo(0, 0);
  if (chapter.playground) {
    $("runPlay").addEventListener("click", runPlayground);
    runPlayground();
  }
  closeNav();
  $("searchPanel").hidden = true;
}

function search(q) {
  const lang = getLang();
  const query = q.trim().toLowerCase();
  const panel = $("searchPanel");
  const box = $("searchResults");
  if (query.length < 2) {
    panel.hidden = true;
    return;
  }
  const hits = CHAPTERS.map((c) => {
    const text = `${c.title[lang]} ${strip(c.html[lang])}`.toLowerCase();
    const score = text.includes(query) ? (c.title[lang].toLowerCase().includes(query) ? 2 : 1) : 0;
    return { c, score };
  })
    .filter((x) => x.score)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
  $("searchCount").textContent = String(hits.length);
  box.innerHTML = hits.length
    ? hits
        .map(
          ({ c }) =>
            `<a class="search-hit" href="${href(lang, c.id)}"><strong>${c.title[lang]}</strong><small>${strip(c.html[lang]).slice(0, 140)}…</small></a>`
        )
        .join("")
    : `<p>${UI[lang].noResults}</p>`;
  panel.hidden = false;
}

function closeNav() {
  document.body.classList.remove("nav-open");
  $("overlay").hidden = true;
  $("menuBtn").setAttribute("aria-expanded", "false");
}

function openNav() {
  document.body.classList.add("nav-open");
  $("overlay").hidden = false;
  $("menuBtn").setAttribute("aria-expanded", "true");
}

function init() {
  setTheme(getTheme());
  setLang(getLang());
  if (!location.hash) location.hash = `#/${getLang()}/home`;
  window.addEventListener("hashchange", render);
  $("themeBtn").addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { id } = parseHash();
      location.hash = href(btn.dataset.lang, id);
    });
  });
  $("menuBtn").addEventListener("click", () => {
    document.body.classList.contains("nav-open") ? closeNav() : openNav();
  });
  $("overlay").addEventListener("click", closeNav);
  $("searchInput").addEventListener("input", (e) => search(e.target.value));
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      $("searchInput").focus();
    }
    if (e.key === "Escape") {
      $("searchPanel").hidden = true;
      closeNav();
    }
  });
  document.addEventListener("click", (e) => {
    if (!$("searchPanel").contains(e.target) && e.target !== $("searchInput")) {
      $("searchPanel").hidden = true;
    }
  });
  render();
}

init();
