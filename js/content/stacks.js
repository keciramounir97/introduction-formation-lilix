function t(fr, en, ar) {
  return { fr, en, ar };
}

export const stacks = [
  {
    id: "stack",
    group: "stacks",
    title: t("C’est quoi une stack ?", "What is a stack?", "ما هي الستاك؟"),
    html: t(
      `<p class="lead">Une <strong>stack</strong> (pile) est l’ensemble des technologies combinées pour construire une application.</p>
<p>On distingue souvent :</p>
<ul>
  <li><strong>Front-end stack</strong> : React + Tailwind + Vite</li>
  <li><strong>Back-end stack</strong> : Node.js + Express + PostgreSQL</li>
  <li><strong>Full stack</strong> : les deux réunis, plus l’hébergement</li>
</ul>
<div class="note">Analogie : une stack, c’est la recette complète (four, ingrédients, ustensiles), pas un seul ingrédient.</div>
<h2>Stacks célèbres</h2>
<table>
  <tr><th>Nom</th><th>Composition</th></tr>
  <tr><td>LAMP</td><td>Linux, Apache, MySQL, PHP</td></tr>
  <tr><td>MEAN</td><td>MongoDB, Express, Angular, Node</td></tr>
  <tr><td>MERN</td><td>MongoDB, Express, React, Node</td></tr>
  <tr><td>MEVN</td><td>MongoDB, Express, Vue, Node</td></tr>
  <tr><td>JAMstack</td><td>JavaScript, APIs, Markup</td></tr>
  <tr><td>T3</td><td>TypeScript, Tailwind, tRPC (souvent Next.js)</td></tr>
  <tr><td>PERN</td><td>PostgreSQL, Express, React, Node</td></tr>
</table>
<h2>Comment choisir</h2>
<p>Critères : l’équipe déjà formée, l’hébergement, le type de données (SQL vs documents), le besoin temps réel, l’écosystème d’emploi local. Il n’y a pas de stack universelle « la meilleure ».</p>`,
      `<p class="lead">A <strong>stack</strong> is the set of technologies combined to build an application.</p>
<ul>
  <li><strong>Front-end stack</strong>: React + Tailwind + Vite</li>
  <li><strong>Back-end stack</strong>: Node.js + Express + PostgreSQL</li>
  <li><strong>Full stack</strong>: both, plus hosting</li>
</ul>
<table>
  <tr><th>Name</th><th>Composition</th></tr>
  <tr><td>LAMP</td><td>Linux, Apache, MySQL, PHP</td></tr>
  <tr><td>MEAN</td><td>MongoDB, Express, Angular, Node</td></tr>
  <tr><td>MERN</td><td>MongoDB, Express, React, Node</td></tr>
  <tr><td>MEVN</td><td>MongoDB, Express, Vue, Node</td></tr>
  <tr><td>JAMstack</td><td>JavaScript, APIs, Markup</td></tr>
  <tr><td>T3</td><td>TypeScript, Tailwind, tRPC</td></tr>
  <tr><td>PERN</td><td>PostgreSQL, Express, React, Node</td></tr>
</table>
<p>Choose based on team skills, hosting, data shape, realtime needs, and the local job market. There is no universal “best” stack.</p>`,
      `<p class="lead">الـ<strong>ستاك</strong> (الكومة/المكدس) هي مجموعة التقنيات المستخدمة معًا لبناء تطبيق.</p>
<ul>
  <li>ستاك الواجهة: React + Tailwind + Vite</li>
  <li>ستاك الخادم: Node.js + Express + PostgreSQL</li>
  <li>فل ستاك: الاثنان مع الاستضافة</li>
</ul>
<table>
  <tr><th>الاسم</th><th>التكوين</th></tr>
  <tr><td>LAMP</td><td>Linux وApache وMySQL وPHP</td></tr>
  <tr><td>MERN</td><td>MongoDB وExpress وReact وNode</td></tr>
  <tr><td>MEAN</td><td>MongoDB وExpress وAngular وNode</td></tr>
  <tr><td>JAMstack</td><td>JavaScript وAPIs وMarkup</td></tr>
</table>`
    ),
  },
  {
    id: "mern",
    group: "stacks",
    title: t("La stack MERN", "The MERN stack", "ستاك MERN"),
    html: t(
      `<p class="lead">MERN = quatre technologies <strong>JavaScript</strong> qui travaillent ensemble.</p>
<table>
  <tr><th>Lettre</th><th>Techno</th><th>Rôle</th></tr>
  <tr><td>M</td><td>MongoDB</td><td>Base NoSQL : documents proches du JSON</td></tr>
  <tr><td>E</td><td>Express.js</td><td>Framework HTTP pour Node (routes, API)</td></tr>
  <tr><td>R</td><td>React</td><td>Bibliothèque UI dans le navigateur</td></tr>
  <tr><td>N</td><td>Node.js</td><td>Exécute JavaScript côté serveur</td></tr>
</table>
<div class="ok">Avantage : un seul langage (JS/TS) partout. Un dev JS peut en théorie tout faire.</div>
<h2>Flux typique</h2>
<ol>
  <li>React affiche l’interface.</li>
  <li>L’utilisateur clique → requête HTTP (fetch).</li>
  <li>Express reçoit la requête, interroge MongoDB.</li>
  <li>MongoDB renvoie des documents.</li>
  <li>Express répond en JSON.</li>
  <li>React met à jour l’affichage (state).</li>
</ol>
<div class="tree">Navigateur (React)
    │  HTTP JSON
    ▼
Node + Express
    │  driver
    ▼
MongoDB</div>
<h2>Quand MERN est un bon choix</h2>
<ul>
  <li>Prototype / MVP rapide</li>
  <li>Données documentaires (fiches, posts, configs)</li>
  <li>Équipe déjà JS</li>
</ul>
<p>Si tes données sont très relationnelles (factures, stocks liés), PostgreSQL (stack PERN) est souvent plus naturel.</p>`,
      `<p class="lead">MERN = four <strong>JavaScript</strong> technologies working together.</p>
<table>
  <tr><th>Letter</th><th>Tech</th><th>Role</th></tr>
  <tr><td>M</td><td>MongoDB</td><td>NoSQL database: JSON-like documents</td></tr>
  <tr><td>E</td><td>Express.js</td><td>HTTP framework on Node (routes, APIs)</td></tr>
  <tr><td>R</td><td>React</td><td>UI library in the browser</td></tr>
  <tr><td>N</td><td>Node.js</td><td>JavaScript runtime on the server</td></tr>
</table>
<div class="ok">Benefit: one language (JS/TS) everywhere.</div>
<ol>
  <li>React renders the UI.</li>
  <li>User click → HTTP request.</li>
  <li>Express queries MongoDB.</li>
  <li>MongoDB returns documents.</li>
  <li>Express responds with JSON.</li>
  <li>React updates state / UI.</li>
</ol>`,
      `<p class="lead">MERN = أربع تقنيات <strong>جافاسكريبت</strong> تعمل معًا.</p>
<table>
  <tr><th>الحرف</th><th>التقنية</th><th>الدور</th></tr>
  <tr><td>M</td><td>MongoDB</td><td>قاعدة NoSQL بوثائق شبه JSON</td></tr>
  <tr><td>E</td><td>Express</td><td>إطار HTTP على Node</td></tr>
  <tr><td>R</td><td>React</td><td>مكتبة واجهة</td></tr>
  <tr><td>N</td><td>Node.js</td><td>تشغيل JS على الخادم</td></tr>
</table>
<ol>
  <li>رياكت يعرض الواجهة</li>
  <li>نقرة → طلب HTTP</li>
  <li>Express يسأل MongoDB</li>
  <li>الرد JSON</li>
  <li>رياكت يحدّث العرض</li>
</ol>`
    ),
  },
];
