function t(fr, en, ar) {
  return { fr, en, ar };
}

export const ops = [
  {
    id: "http",
    group: "ops",
    title: t("HTTP / HTTPS", "HTTP / HTTPS", "HTTP / HTTPS"),
    html: t(
      `<p class="lead">HTTP est le protocole d’application du Web : le client envoie une <strong>requête</strong>, le serveur une <strong>réponse</strong>.</p>
<pre>GET /index.html HTTP/1.1
Host: example.com

HTTP/1.1 200 OK
Content-Type: text/html</pre>
<table>
  <tr><th>Code</th><th>Sens</th></tr>
  <tr><td>200</td><td>OK</td></tr>
  <tr><td>301/302</td><td>Redirection</td></tr>
  <tr><td>400</td><td>Requête invalide</td></tr>
  <tr><td>401/403</td><td>Auth / interdit</td></tr>
  <tr><td>404</td><td>Introuvable</td></tr>
  <tr><td>500</td><td>Erreur serveur</td></tr>
</table>
<p><strong>HTTPS</strong> = HTTP dans un tunnel TLS (certificat, chiffrement, authenticité du serveur). Port 443. HTTP/2 multiplexe ; HTTP/3 utilise QUIC (UDP).</p>
<div class="ok">Sans HTTPS, un FAI ou un Wi-Fi public peut lire ou modifier tes pages (mots de passe, cookies de session).</div>`,
      `<p class="lead">HTTP is the Web’s application protocol: request in, response out.</p>
<p>200 OK, 301 redirect, 404 missing, 500 server error. <strong>HTTPS</strong> is HTTP inside TLS (encryption + server authenticity) on port 443. HTTP/2 multiplexes; HTTP/3 uses QUIC over UDP.</p>`,
      `<p class="lead">HTTP بروتوكول الويب: طلب ثم رد. 200 نجاح، 404 غير موجود، 500 خطأ خادم. HTTPS هو HTTP داخل TLS على المنفذ 443.</p>`
    ),
  },
  {
    id: "api",
    group: "ops",
    title: t("API : REST, GraphQL, WebSocket", "APIs: REST, GraphQL, WebSocket", "API: REST وGraphQL وWebSocket"),
    html: t(
      `<p class="lead">Une API (Application Programming Interface) permet à deux programmes de communiquer. Sur le web : souvent JSON via HTTP.</p>
<table>
  <tr><th>Style</th><th>Idée</th></tr>
  <tr><td>REST</td><td>Ressources + verbes GET POST PUT PATCH DELETE</td></tr>
  <tr><td>GraphQL</td><td>Le client décrit exactement les champs voulus</td></tr>
  <tr><td>WebSocket</td><td>Canal bidirectionnel persistant (chat, live)</td></tr>
</table>
<pre>GET /api/users/42
Authorization: Bearer eyJ...
→ { "id": 42, "name": "Ada" }</pre>
<p>CORS : en-têtes serveur qui autorisent un front sur un autre origine à lire la réponse.</p>`,
      `<p class="lead">An API lets two programs talk. On the Web that is often JSON over HTTP.</p>
<p>REST: resources + HTTP verbs. GraphQL: client-specified fields. WebSocket: persistent two-way channel.</p>
<p>CORS headers let a browser front-end on another origin read the response.</p>`,
      `<p class="lead">API واجهة بين برنامجين. REST موارد وأفعال HTTP. GraphQL الحقول التي يطلبها العميل. WebSocket قناة حية باتجاهين. CORS يسمح لمتصفح على أصل آخر بقراءة الرد.</p>`
    ),
  },
  {
    id: "git",
    group: "ops",
    title: t("Git et GitHub", "Git and GitHub", "Git وGitHub"),
    html: t(
      `<p class="lead">Git est un système de <strong>versioning distribué</strong> (historique, branches, fusion). GitHub / GitLab / Gitea hébergent les dépôts, les PR, le CI.</p>
<pre>git status
git add .
git commit -m "docs: guide lilix"
git push</pre>
<p>Concepts : commit (photo), branche (ligne de temps), remote (copie serveur), pull request (revue).</p>
<div class="warn">Ne commit jamais <code>.env</code>, clés SSH, mots de passe. Ajoute-les au <code>.gitignore</code>.</div>`,
      `<p class="lead">Git is distributed <strong>version control</strong>. GitHub/GitLab host remotes, pull requests, CI.</p>
<p>Commit = snapshot. Branch = timeline. Remote = server copy. PR = review.</p>
<div class="warn">Never commit secrets or <code>.env</code> files.</div>`,
      `<p class="lead">Git نظام إصدارات موزّع. GitHub يستضيف المستودع والطلبات. لا ترفع أسرارًا أبدًا.</p>`
    ),
  },
  {
    id: "database",
    group: "ops",
    title: t("Bases de données", "Databases", "قواعد البيانات"),
    html: t(
      `<table>
  <tr><th>Famille</th><th>Exemples</th><th>Modèle</th></tr>
  <tr><td>SQL relationnel</td><td>PostgreSQL, MySQL</td><td>Tables, jointures, ACID</td></tr>
  <tr><td>Documents</td><td>MongoDB</td><td>JSON-like, flexible</td></tr>
  <tr><td>Clé-valeur</td><td>Redis</td><td>Cache, sessions</td></tr>
  <tr><td>Graphe</td><td>Neo4j</td><td>Relations riches</td></tr>
</table>
<p>SQL : schéma strict, super pour données liées (commandes, stocks). NoSQL document : rapide à prototyper (MERN).</p>
<pre>SELECT name FROM users WHERE age >= 18;</pre>`,
      `<p>SQL (PostgreSQL, MySQL): tables, joins, ACID. Document NoSQL (MongoDB): flexible JSON-like docs. Redis: key-value cache. Neo4j: graphs.</p>
<p>Pick SQL when relations matter; documents when the shape varies and you want speed of iteration (MERN).</p>`,
      `<p>SQL جداول وعلاقات. MongoDB وثائق مرنة (MERN). Redis مفتاح-قيمة للذاكرة المؤقتة.</p>`
    ),
  },
  {
    id: "cloud-cicd",
    group: "ops",
    title: t("Cloud, Docker, CI/CD", "Cloud, Docker, CI/CD", "السحابة وDocker وCI/CD"),
    html: t(
      `<h2>Cloud</h2>
<p>AWS, Azure, GCP : infrastructure à la demande. <strong>IaaS</strong> (machines), <strong>PaaS</strong> (plateforme), <strong>SaaS</strong> (logiciel fini : Gmail).</p>
<h2>Docker</h2>
<p>Conteneur = app + dépendances, isolé, reproductible. Kubernetes orchestre des flottes de conteneurs.</p>
<h2>CI/CD</h2>
<p><strong>CI</strong> (Continuous Integration) : à chaque push, tests automatiques. <strong>CD</strong> : déploiement automatique si les tests passent.</p>
<p>Outils : GitHub Actions, GitLab CI, Jenkins.</p>`,
      `<p>Cloud: AWS, Azure, GCP. IaaS = machines, PaaS = platform, SaaS = finished software.</p>
<p>Docker packages the app and its dependencies. Kubernetes orchestrates containers.</p>
<p>CI: automatic tests on push. CD: automatic deploy when tests pass.</p>`,
      `<p>السحابة تحت الطلب. Docker يعبّئ التطبيق مع تبعياته. CI اختبار تلقائي عند الدفع، CD نشر تلقائي.</p>`
    ),
  },
  {
    id: "hosting",
    group: "ops",
    title: t("Domaine vs hébergement vs serveur", "Domain vs hosting vs server", "النطاق مقابل الاستضافة مقابل الخادم"),
    html: t(
      `<table>
  <tr><th>Concept</th><th>Rôle</th></tr>
  <tr><td>Domaine</td><td>Le nom (lilix.example)</td></tr>
  <tr><td>DNS</td><td>Pointe le nom vers une IP ou un CDN</td></tr>
  <tr><td>Hébergement</td><td>L’endroit où vivent les fichiers / l’app</td></tr>
  <tr><td>Serveur</td><td>La machine (ou conteneur) qui exécute Nginx / Node</td></tr>
  <tr><td>CDN</td><td>Copies proches des utilisateurs (statique)</td></tr>
</table>
<p>Tu peux acheter le domaine chez A, héberger chez B (GitHub Pages, Netlify, Vercel, VPS). Ce site statique peut être publié en GitHub Pages sans serveur Node.</p>`,
      `<p>Domain = the name. DNS = name → IP. Hosting = where files/app live. Server = the process/machine. CDN = edge copies of static assets.</p>
<p>Buy the name at A, host at B. This static site can run on GitHub Pages with no Node server.</p>`,
      `<p>النطاق الاسم، DNS يشير إلى IP، الاستضافة مكان الملفات، الخادم من يشغّل البرنامج. يمكن فصل المسجّل عن شركة الاستضافة.</p>`
    ),
  },
];
