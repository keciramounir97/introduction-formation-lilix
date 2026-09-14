function t(fr, en, ar) {
  return { fr, en, ar };
}

export const jobs = [
  {
    id: "frontend",
    group: "jobs",
    title: t("Front-end (côté client)", "Front-end (client side)", "الواجهة الأمامية (جهة العميل)"),
    html: t(
      `<p class="lead">Le front-end est tout ce que l’utilisateur voit et avec quoi il interagit dans le navigateur.</p>
<h2>Rôle</h2>
<p>Créer l’interface, les animations, l’accessibilité et l’expérience utilisateur (UX). Le code front s’exécute <strong>sur la machine de l’utilisateur</strong> (le client).</p>
<h2>Technologies de base</h2>
<table>
  <tr><th>Brique</th><th>Rôle</th></tr>
  <tr><td>HTML</td><td>Structure et sens du contenu</td></tr>
  <tr><td>CSS</td><td>Apparence, mise en page, responsive</td></tr>
  <tr><td>JavaScript</td><td>Interactivité, appels API, logique d’interface</td></tr>
  <tr><td>React / Vue / Angular</td><td>UI composantisée, applications riches</td></tr>
</table>
<h2>Exemples concrets</h2>
<ul>
  <li>Boutons, menus, formulaires, grilles de produits</li>
  <li>Validation d’un champ email avant envoi</li>
  <li>Carrousel, thème sombre, drag-and-drop</li>
  <li>Afficher les données JSON reçues d’une API</li>
</ul>
<div class="note">Le navigateur télécharge HTML/CSS/JS depuis un serveur, puis les interprète. Même un site « React » finit en HTML/CSS/JS dans le navigateur.</div>
<h2>Compétences voisines</h2>
<p>Design (Figma), accessibilité (a11y), performance (Core Web Vitals), SEO on-page, tests (Jest, Cypress, Playwright).</p>`,
      `<p class="lead">Front-end is everything the user sees and interacts with in the browser.</p>
<h2>Role</h2>
<p>Build the interface, motion, accessibility and UX. Front-end code runs <strong>on the user's machine</strong> (the client).</p>
<table>
  <tr><th>Layer</th><th>Role</th></tr>
  <tr><td>HTML</td><td>Structure and meaning</td></tr>
  <tr><td>CSS</td><td>Look, layout, responsive design</td></tr>
  <tr><td>JavaScript</td><td>Interactivity, API calls, UI logic</td></tr>
  <tr><td>React / Vue / Angular</td><td>Component UIs, rich apps</td></tr>
</table>
<ul>
  <li>Buttons, menus, forms, product grids</li>
  <li>Validate an email field before submit</li>
  <li>Carousels, dark theme, drag-and-drop</li>
  <li>Render JSON data from an API</li>
</ul>
<div class="note">The browser downloads HTML/CSS/JS from a server, then interprets them. Even a React site becomes HTML/CSS/JS in the browser.</div>`,
      `<p class="lead">الواجهة الأمامية هي كل ما يراه المستخدم ويتفاعل معه داخل المتصفح.</p>
<p>يُنفَّذ كود الواجهة <strong>على جهاز المستخدم</strong> (العميل): هيكل HTML، شكل CSS، سلوك JavaScript، ومكتبات مثل React.</p>
<table>
  <tr><th>طبقة</th><th>الدور</th></tr>
  <tr><td>HTML</td><td>بنية المعنى</td></tr>
  <tr><td>CSS</td><td>المظهر والتخطيط</td></tr>
  <tr><td>JavaScript</td><td>التفاعل واستدعاء الواجهات البرمجية</td></tr>
</table>
<div class="note">حتى موقع React يصل في النهاية إلى HTML وCSS وJS في المتصفح.</div>`
    ),
  },
  {
    id: "backend",
    group: "jobs",
    title: t("Back-end (côté serveur)", "Back-end (server side)", "الخلفية (جهة الخادم)"),
    html: t(
      `<p class="lead">Le back-end est ce qui se passe derrière le rideau : invisible dans le navigateur, essentiel pour les données et la sécurité.</p>
<h2>Rôle</h2>
<ul>
  <li>Logique métier (prix, stocks, droits d’accès)</li>
  <li>Bases de données : lire / écrire / requêter</li>
  <li>Authentification (login, sessions, JWT)</li>
  <li>API pour le front-end et les apps mobiles</li>
  <li>E-mails, files d’attente, jobs planifiés</li>
</ul>
<h2>Technologies courantes</h2>
<table>
  <tr><th>Écosystème</th><th>Exemples</th></tr>
  <tr><td>JavaScript</td><td>Node.js, Express, Nest, Fastify</td></tr>
  <tr><td>Python</td><td>Django, Flask, FastAPI</td></tr>
  <tr><td>PHP</td><td>Laravel, Symfony</td></tr>
  <tr><td>Java / Kotlin</td><td>Spring</td></tr>
  <tr><td>Ruby</td><td>Rails</td></tr>
  <tr><td>C#</td><td>ASP.NET</td></tr>
</table>
<h2>Exemples concrets</h2>
<ul>
  <li>Vérifier un mot de passe (hash, jamais en clair)</li>
  <li>Enregistrer une commande et décrémenter le stock</li>
  <li>Refuser l’accès à une page admin</li>
  <li>Envoyer un e-mail de confirmation</li>
</ul>
<div class="warn">Le secret (clé API, mot de passe BDD) ne doit <strong>jamais</strong> vivre dans le JavaScript du navigateur : tout le monde peut le lire.</div>`,
      `<p class="lead">Back-end is behind the curtain: invisible in the browser, critical for data and security.</p>
<ul>
  <li>Business rules (prices, stock, permissions)</li>
  <li>Databases: read / write / query</li>
  <li>Authentication (login, sessions, JWT)</li>
  <li>APIs for the front-end and mobile apps</li>
  <li>Email, queues, scheduled jobs</li>
</ul>
<table>
  <tr><th>Ecosystem</th><th>Examples</th></tr>
  <tr><td>JavaScript</td><td>Node.js, Express, Nest</td></tr>
  <tr><td>Python</td><td>Django, Flask, FastAPI</td></tr>
  <tr><td>PHP</td><td>Laravel, Symfony</td></tr>
  <tr><td>Java</td><td>Spring</td></tr>
</table>
<div class="warn">Secrets must <strong>never</strong> live in browser JavaScript: anyone can read them.</div>`,
      `<p class="lead">الخلفية هي ما يحدث خلف الستار: غير ظاهر في المتصفح، وأساسي للبيانات والأمان.</p>
<ul>
  <li>قواعد العمل والمخزون والصلاحيات</li>
  <li>قواعد البيانات</li>
  <li>تسجيل الدخول والجلسات</li>
  <li>واجهات API للواجهة والتطبيقات</li>
</ul>
<div class="warn">لا تضع الأسرار (مفاتيح، كلمات مرور) في جافاسكريبت المتصفح.</div>`
    ),
  },
  {
    id: "devops",
    group: "jobs",
    title: t("DevOps", "DevOps", "DevOps"),
    html: t(
      `<p class="lead">DevOps = <strong>Dev</strong>elopment + <strong>Op</strong>eration<strong>s</strong>. Objectif : livrer du code plus vite, plus fiable, sans casser la production.</p>
<h2>Rôle</h2>
<ul>
  <li>Automatiser build, tests, déploiement (CI/CD)</li>
  <li>Infrastructure as Code (serveurs décrits dans Git)</li>
  <li>Conteneurs et orchestration (Docker, Kubernetes)</li>
  <li>Surveillance, logs, alertes, scalabilité</li>
  <li>Sécurité de la chaîne (secrets, scans, backups)</li>
</ul>
<h2>Outils</h2>
<p>Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI, Terraform, Ansible, Prometheus, AWS, Azure, GCP, Nginx.</p>
<div class="note">Sans DevOps, on déploie « à la main » : SSH, copier des fichiers, prier. Avec DevOps, un <code>git push</code> peut tester et publier automatiquement.</div>
<h2>Pourquoi ça existe</h2>
<p>Les devs voulaient changer le code souvent ; les ops voulaient de la stabilité. DevOps aligne les deux avec de l’automatisation et des métriques.</p>`,
      `<p class="lead">DevOps = <strong>Dev</strong>elopment + <strong>Op</strong>eration<strong>s</strong>. Ship faster, more reliably, without breaking production.</p>
<ul>
  <li>Automate build, tests, deploy (CI/CD)</li>
  <li>Infrastructure as Code</li>
  <li>Containers and orchestration (Docker, Kubernetes)</li>
  <li>Monitoring, logs, alerts, scaling</li>
</ul>
<p>Tools: Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI, Terraform, AWS, Azure, GCP, Nginx.</p>
<div class="note">Without DevOps, deploys are manual. With DevOps, a <code>git push</code> can test and publish automatically.</div>`,
      `<p class="lead">DevOps = التطوير + العمليات. الهدف: تسليم أسرع وأكثر موثوقية دون كسر الإنتاج.</p>
<ul>
  <li>أتمتة البناء والاختبار والنشر (CI/CD)</li>
  <li>البنية ككود</li>
  <li>الحاويات (Docker) والتنسيق (Kubernetes)</li>
  <li>المراقبة والسجلات والتنبيه</li>
</ul>`
    ),
  },
  {
    id: "fullstack",
    group: "jobs",
    title: t("Full-stack", "Full-stack", "فل ستاك"),
    html: t(
      `<p class="lead">Un développeur full-stack maîtrise le front-end <strong>et</strong> le back-end (parfois un peu de DevOps).</p>
<p>Il peut construire une application de A à Z : interface, API, base de données, déploiement simple. Très recherché dans les startups et petites équipes.</p>
<div class="info">« Full-stack » ne signifie pas « expert mondial de tout ». Ça signifie : assez autonome pour relier les couches, et assez lucide pour approfondir au besoin.</div>
<h2>Profil type MERN</h2>
<ol>
  <li>UI React + CSS/Tailwind</li>
  <li>API Express sur Node.js</li>
  <li>MongoDB pour les documents</li>
  <li>Git + un hébergeur (Vercel, Render, Railway…)</li>
</ol>
<h2>Choisir une voie</h2>
<table>
  <tr><th>Si tu aimes…</th><th> Oriente-toi vers</th></tr>
  <tr><td>Le visuel, l’UX, le CSS</td><td>Front-end</td></tr>
  <tr><td>Les données, la logique, la sécu</td><td>Back-end</td></tr>
  <tr><td>Les serveurs, l’automatisation</td><td>DevOps / platform</td></tr>
  <tr><td>Tout relier vite</td><td>Full-stack</td></tr>
</table>`,
      `<p class="lead">A full-stack developer owns front-end <strong>and</strong> back-end (sometimes a bit of DevOps).</p>
<p>They can ship an app end-to-end: UI, API, database, simple deploy. Highly valued in startups and small teams.</p>
<div class="info">Full-stack does not mean world expert at everything. It means autonomous enough to connect the layers.</div>
<ol>
  <li>React UI + CSS/Tailwind</li>
  <li>Express API on Node.js</li>
  <li>MongoDB documents</li>
  <li>Git + a host (Vercel, Render, Railway…)</li>
</ol>`,
      `<p class="lead">مطوّر الفل ستاك يتقن الواجهة <strong>و</strong> الخادم (وأحيانًا قليلًا من DevOps).</p>
<p>يستطيع بناء تطبيق من الألف إلى الياء. مطلوب جدًا في الشركات الناشئة والفرق الصغيرة.</p>
<div class="info">فل ستاك لا تعني خبيرًا في كل شيء، بل استقلالية كافية لربط الطبقات.</div>`
    ),
  },
];
