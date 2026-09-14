function t(fr, en, ar) {
  return { fr, en, ar };
}

export const start = [
  {
    id: "home",
    group: "start",
    title: t("Accueil du guide", "Guide home", "الصفحة الرئيسية للدليل"),
    html: t(
      `<p class="lead">Guide complet du développement web et des concepts fondamentaux — le même contenu en français, anglais et arabe, avec thème clair/sombre.</p>
<div class="grid-2">
  <div class="card"><h3>Métiers</h3><p>Front-end, back-end, DevOps, full-stack : qui fait quoi, avec quelles technologies.</p></div>
  <div class="card"><h3>Langages</h3><p>HTML, CSS, JavaScript, TypeScript, JSON, JSX, algorithmes et pseudocode.</p></div>
  <div class="card"><h3>React &amp; CSS</h3><p>Introduction React, CSS interne/inline/externe, Tailwind, DOM et innerHTML.</p></div>
  <div class="card"><h3>Réseaux</h3><p>Internet vs Web, DNS, domaines, IP, ping, Tor, deep web, HTTP.</p></div>
</div>
<div class="note"><strong>Comment lire ce site.</strong> La barre latérale est le sommaire (comme W3Schools). Change la langue en haut. Le thème suit tes préférences. La recherche (touche <code>/</code>) parcourt tous les chapitres.</div>
<h2>Carte du parcours</h2>
<div class="tree">Internet
 └── Web (HTTP/HTTPS)
      ├── Front-end : HTML · CSS · JS · React
      ├── Back-end  : Node, Python, bases de données, API
      ├── DevOps    : Docker, CI/CD, Cloud
      └── Full-stack = Front + Back (+ un peu de DevOps)

Langages
  Programmation → JS, TS, Python, C…
  Balisage      → HTML, XML, Markdown
  Style         → CSS, Sass, Tailwind

Stacks célèbres
  MERN = MongoDB + Express + React + Node
  LAMP = Linux + Apache + MySQL + PHP</div>
<h2>Ce que tu sauras à la fin</h2>
<ul>
  <li>Distinguer Internet, Web, domaine, IP, DNS, HTTP.</li>
  <li>Écrire une page HTML, la styler (interne / inline / fichier), l’animer en JS.</li>
  <li>Comprendre React (composants, JSX, state) sans magie.</li>
  <li>Lire un algorithme en pseudocode et le traduire en JS.</li>
  <li>Expliquer MERN, une API REST, Git, une base SQL vs NoSQL.</li>
  <li>Savoir ce que prouve un ping, et ce que sont deep web / Tor.</li>
</ul>
<div class="ok">Tout le contenu de la séance est repris ici, plus des chapitres extra : modèle OSI, ports, NAT, VPN, cookies, CORS, SPA, npm, rendu navigateur, sécurité de base, hébergement.</div>`,
      `<p class="lead">Complete guide to web development and core concepts — the same curriculum in French, English and Arabic, with light/dark theme.</p>
<div class="grid-2">
  <div class="card"><h3>Careers</h3><p>Front-end, back-end, DevOps, full-stack: who does what, with which tools.</p></div>
  <div class="card"><h3>Languages</h3><p>HTML, CSS, JavaScript, TypeScript, JSON, JSX, algorithms and pseudocode.</p></div>
  <div class="card"><h3>React &amp; CSS</h3><p>React intro, inner/inline/external CSS, Tailwind, DOM and innerHTML.</p></div>
  <div class="card"><h3>Networking</h3><p>Internet vs Web, DNS, domains, IP, ping, Tor, deep web, HTTP.</p></div>
</div>
<div class="note"><strong>How to use this site.</strong> The sidebar is the table of contents (W3Schools-style). Switch language at the top. Theme follows your preference. Search (press <code>/</code>) scans every chapter.</div>
<h2>Roadmap</h2>
<div class="tree">Internet
 └── Web (HTTP/HTTPS)
      ├── Front-end: HTML · CSS · JS · React
      ├── Back-end : Node, Python, databases, APIs
      ├── DevOps   : Docker, CI/CD, Cloud
      └── Full-stack = Front + Back (+ some DevOps)</div>
<h2>You will be able to</h2>
<ul>
  <li>Tell Internet, Web, domain, IP, DNS and HTTP apart.</li>
  <li>Build a page in HTML, style it, and make it interactive with JS.</li>
  <li>Read React (components, JSX, state) without treating it as magic.</li>
  <li>Write an algorithm in pseudocode and translate it to JS.</li>
  <li>Explain MERN, REST APIs, Git, SQL vs NoSQL.</li>
  <li>Know what a successful ping actually proves — and what Tor is.</li>
</ul>
<div class="ok">This site includes the full class notes plus extra chapters: OSI model, ports, NAT, VPN, cookies, CORS, SPA, npm, browser rendering, basic security, hosting.</div>`,
      `<p class="lead">دليل كامل لتطوير الويب والمفاهيم الأساسية — نفس المحتوى بالفرنسية والإنجليزية والعربية، مع ثيم فاتح/داكن.</p>
<div class="grid-2">
  <div class="card"><h3>المهن</h3><p>الواجهة، الخادم، DevOps، الفل ستاك: من يفعل ماذا وبأي أدوات.</p></div>
  <div class="card"><h3>اللغات</h3><p>HTML وCSS وجافاسكريبت وTypeScript وJSON وJSX والخوارزميات.</p></div>
  <div class="card"><h3>رياكت وCSS</h3><p>مقدمة React، CSS الداخلي والضمني والخارجي، Tailwind وDOM وinnerHTML.</p></div>
  <div class="card"><h3>الشبكات</h3><p>الإنترنت مقابل الويب، DNS، النطاقات، IP، البنغ، تور، الويب العميق، HTTP.</p></div>
</div>
<div class="note"><strong>كيف تستخدم الموقع.</strong> الشريط الجانبي هو الفهرس (بأسلوب W3Schools). غيّر اللغة من الأعلى. ابحث بالمفتاح <code>/</code>.</div>
<h2>خريطة المسار</h2>
<div class="tree">Internet
 └── Web (HTTP/HTTPS)
      ├── Front-end
      ├── Back-end
      ├── DevOps
      └── Full-stack</div>
<div class="ok">يتضمن الموقع كل دروس الحصة إضافةً إلى فصول إضافية: نموذج OSI، المنافذ، NAT، VPN، الكوكيز، CORS، SPA، npm، أمان أساسي، الاستضافة.</div>`
    ),
  },
  {
    id: "how-to",
    group: "start",
    title: t("Comment utiliser le site", "How to use the site", "كيف تستخدم الموقع"),
    html: t(
      `<p class="lead">Ce site imite la pédagogie W3Schools : une idée par page, exemples, tableaux, pages précédente/suivante.</p>
<h2>Contrôles</h2>
<table>
  <tr><th>Contrôle</th><th>Rôle</th></tr>
  <tr><td>Barre latérale</td><td>Tous les chapitres, groupés par thème</td></tr>
  <tr><td>FR / EN / عربي</td><td>Traduction complète de l’interface ET du cours</td></tr>
  <tr><td>Soleil / lune</td><td>Thème clair ou sombre (mémorisé)</td></tr>
  <tr><td>Recherche</td><td>Filtre titres + texte. Raccourci <code>/</code></td></tr>
  <tr><td>Playground</td><td>HTML + CSS + JS exécutés dans un iframe local</td></tr>
</table>
<div class="info">Le contexte de langue et le contexte de thème sont globaux : ils s’appliquent à toutes les pages. En arabe, la mise en page passe en RTL (droite vers gauche).</div>
<h2>Méthode d’étude</h2>
<ol>
  <li>Lis les métiers puis les stacks pour avoir la carte mentale.</li>
  <li>Fais HTML → CSS interne → JavaScript interne → React.</li>
  <li>En parallèle, lis Internet/Web, domaine, IP, ping.</li>
  <li>Reviens au glossaire dès qu’un mot bloque.</li>
</ol>`,
      `<p class="lead">This site follows a W3Schools teaching style: one idea per page, examples, tables, previous/next.</p>
<h2>Controls</h2>
<table>
  <tr><th>Control</th><th>Role</th></tr>
  <tr><td>Sidebar</td><td>Every chapter, grouped by topic</td></tr>
  <tr><td>FR / EN / عربي</td><td>Full UI + course translation</td></tr>
  <tr><td>Theme</td><td>Light or dark (saved)</td></tr>
  <tr><td>Search</td><td>Titles + body. Shortcut <code>/</code></td></tr>
  <tr><td>Playground</td><td>HTML + CSS + JS run in a local iframe</td></tr>
</table>
<div class="info">Language context and theme context are global. Arabic switches the layout to RTL.</div>
<ol>
  <li>Read careers then stacks for the mental map.</li>
  <li>Follow HTML → inner CSS → inner JS → React.</li>
  <li>In parallel, study Internet/Web, domains, IP, ping.</li>
  <li>Use the glossary whenever a word blocks you.</li>
</ol>`,
      `<p class="lead">الموقع يتبع أسلوب W3Schools: فكرة في كل صفحة، أمثلة، جداول، السابق/التالي.</p>
<table>
  <tr><th>عنصر</th><th>الدور</th></tr>
  <tr><td>الشريط الجانبي</td><td>كل الفصول حسب الموضوع</td></tr>
  <tr><td>اللغات</td><td>ترجمة الواجهة والدروس كاملة</td></tr>
  <tr><td>الثيم</td><td>فاتح أو داكن (يُحفظ)</td></tr>
  <tr><td>البحث</td><td>اختصار <code>/</code></td></tr>
</table>
<div class="info">سياق اللغة وسياق الثيم عامّان لكل الصفحات. العربية تفعّل اتجاه RTL.</div>`
    ),
  },
  {
    id: "map",
    group: "start",
    title: t("Carte mentale", "Mind map", "الخريطة الذهنية"),
    html: t(
      `<p class="lead">Place chaque mot du cours dans une case. Si tu sais ranger le mot, tu as compris le concept.</p>
<table>
  <tr><th>Famille</th><th>Exemples</th></tr>
  <tr><td>Infrastructure</td><td>Internet, câbles, routeurs, TCP/IP, IP, DNS</td></tr>
  <tr><td>Service</td><td>Web, email, SSH, FTP, Tor</td></tr>
  <tr><td>Document web</td><td>HTML (structure), CSS (apparence), JS (comportement)</td></tr>
  <tr><td>Programmation</td><td>Algorithme → programme → langage (JS, TS, Python…)</td></tr>
  <tr><td>UI moderne</td><td>React, JSX, composants, state, Virtual DOM</td></tr>
  <tr><td>Serveur</td><td>Node, Express, API, base de données</td></tr>
  <tr><td>Livraison</td><td>Git, CI/CD, Docker, Cloud</td></tr>
  <tr><td>Adresse</td><td>Domaine, TLD, URL, FQDN, .onion</td></tr>
</table>
<div class="warn">Internet ≠ Web. HTML ≠ langage de programmation. React est une librairie (souvent utilisée comme un écosystème de framework). Un ping OK ≠ site web OK.</div>`,
      `<p class="lead">Put every course word in a bucket. If you can classify it, you understood it.</p>
<table>
  <tr><th>Family</th><th>Examples</th></tr>
  <tr><td>Infrastructure</td><td>Internet, cables, routers, TCP/IP, IP, DNS</td></tr>
  <tr><td>Service</td><td>Web, email, SSH, FTP, Tor</td></tr>
  <tr><td>Web document</td><td>HTML (structure), CSS (look), JS (behavior)</td></tr>
  <tr><td>Programming</td><td>Algorithm → program → language</td></tr>
  <tr><td>Modern UI</td><td>React, JSX, components, state</td></tr>
  <tr><td>Server</td><td>Node, Express, API, database</td></tr>
  <tr><td>Delivery</td><td>Git, CI/CD, Docker, Cloud</td></tr>
  <tr><td>Addressing</td><td>Domain, TLD, URL, FQDN, .onion</td></tr>
</table>
<div class="warn">Internet ≠ Web. HTML ≠ programming language. A successful ping ≠ a working website.</div>`,
      `<p class="lead">ضع كل كلمة من الدرس في خانة. إن استطعت تصنيفها فقد فهمت المفهوم.</p>
<table>
  <tr><th>عائلة</th><th>أمثلة</th></tr>
  <tr><td>بنية تحتية</td><td>الإنترنت، الكابلات، الموجهات، TCP/IP، IP، DNS</td></tr>
  <tr><td>خدمة</td><td>الويب، البريد، SSH، FTP، تور</td></tr>
  <tr><td>وثيقة ويب</td><td>HTML البنية، CSS الشكل، JS السلوك</td></tr>
  <tr><td>برمجة</td><td>خوارزمية ← برنامج ← لغة</td></tr>
  <tr><td>واجهة حديثة</td><td>رياكت، JSX، مكوّنات، حالة</td></tr>
  <tr><td>عنوان</td><td>نطاق، TLD، URL، ‎.onion</td></tr>
</table>`
    ),
  },
  {
    id: "playground",
    group: "start",
    playground: true,
    title: t("Playground HTML / CSS / JS", "HTML / CSS / JS playground", "ملعب HTML / CSS / JS"),
    html: t(
      `<p class="lead">Mini environnement type W3Schools « Try it yourself » : le code tourne dans ton navigateur uniquement.</p>
<div class="info">Utilise ce bac à sable après les chapitres HTML, CSS interne et JavaScript interne.</div>`,
      `<p class="lead">A W3Schools-style Try-it sandbox: code runs only in your browser.</p>
<div class="info">Use it after the HTML, inner CSS and inner JavaScript chapters.</div>`,
      `<p class="lead">بيئة تجريب بأسلوب W3Schools: الكود يعمل في متصفحك فقط.</p>`
    ),
  },
];
