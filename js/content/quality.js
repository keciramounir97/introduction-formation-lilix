function t(fr, en, ar) {
  return { fr, en, ar };
}

export const quality = [
  {
    id: "responsive-pwa",
    group: "quality",
    title: t("Responsive et PWA", "Responsive and PWA", "التجاوب وPWA"),
    html: t(
      `<p><strong>Responsive design</strong> : une seule base de code s’adapte au mobile, tablette, desktop (grilles fluides, media queries, images flexibles, viewport meta).</p>
<pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;</pre>
<p><strong>PWA</strong> (Progressive Web App) : site qui se comporte comme une app (icône, hors-ligne via service worker, parfois notifications). Toujours du Web, pas un binaire magasin obligatoire.</p>`,
      `<p><strong>Responsive design</strong> adapts one codebase to phone, tablet, desktop.</p>
<p><strong>PWA</strong>: a site that behaves like an app (home-screen icon, offline via service worker, optional notifications) while remaining the Web.</p>`,
      `<p>التصميم المتجاوب يكيّف الصفحة لكل الشاشات. PWA موقع يتصرف كتطبيق (أيقونة، عمل دون اتصال) مع بقائه ويبًا.</p>`
    ),
  },
  {
    id: "seo-a11y",
    group: "quality",
    title: t("SEO et accessibilité", "SEO and accessibility", "SEO وإمكانية الوصول"),
    html: t(
      `<p><strong>SEO</strong> : titres, sémantique, perf, liens, contenu utile, <code>lang</code>, sitemap — pour que les moteurs comprennent la page.</p>
<p><strong>Accessibilité (a11y)</strong> : utilisable avec clavier, lecteur d’écran, contrastes, textes alternatifs, labels de formulaires. Ce n’est pas optionnel : c’est du web pour tout le monde (et souvent une obligation légale).</p>
<pre>&lt;img src="logo.png" alt="Formation Lilix" /&gt;
&lt;button type="button"&gt;OK&lt;/button&gt;  /* pas un div */</pre>`,
      `<p><strong>SEO</strong>: headings, semantics, performance, useful content so search engines can understand the page.</p>
<p><strong>Accessibility (a11y)</strong>: keyboard, screen readers, contrast, alt text, form labels. Not optional — the Web is for everyone.</p>`,
      `<p>SEO يفهم المحرك الصفحة (عناوين، أداء، محتوى). إمكانية الوصول: لوحة مفاتيح، قارئ شاشة، تباين، نص بديل. الويب للجميع.</p>`
    ),
  },
  {
    id: "security",
    group: "quality",
    title: t("Sécurité web de base", "Basic web security", "أمان الويب الأساسي"),
    html: t(
      `<ul>
  <li><strong>HTTPS</strong> partout</li>
  <li><strong>XSS</strong> : ne pas injecter du HTML non fiable (<code>innerHTML</code>)</li>
  <li><strong>CSRF</strong> : tokens / SameSite cookies pour les actions authentifiées</li>
  <li>Hacher les mots de passe côté serveur (jamais les stocker en clair)</li>
  <li>Secrets hors Git, hors JS client</li>
  <li>Mises à jour des dépendances npm</li>
  <li>Principe du moindre privilège (DB, cloud)</li>
</ul>
<div class="warn">Ce chapitre décrit des défenses. Il ne fournit pas d’exploits ni de procédures d’attaque.</div>`,
      `<ul>
  <li>HTTPS everywhere</li>
  <li>XSS: never inject untrusted HTML</li>
  <li>CSRF: tokens / SameSite for authenticated actions</li>
  <li>Hash passwords on the server</li>
  <li>Secrets out of Git and out of client JS</li>
  <li>Keep npm dependencies updated</li>
</ul>
<div class="warn">This chapter describes defenses, not attacks.</div>`,
      `<ul>
  <li>HTTPS دائمًا</li>
  <li>لا تُدخل HTML غير موثوق (XSS)</li>
  <li>كلمات المرور تُهش على الخادم</li>
  <li>الأسرار خارج Git وخارج JS العميل</li>
</ul>`
    ),
  },
  {
    id: "browser",
    group: "quality",
    title: t("Comment le navigateur affiche une page", "How a browser renders a page", "كيف يعرض المتصفح الصفحة"),
    html: t(
      `<ol>
  <li>Résolution DNS → TCP (+ TLS) → requête HTTP</li>
  <li>Parse HTML → DOM</li>
  <li>Parse CSS → CSSOM</li>
  <li>Render tree, layout (reflow), paint, composite</li>
  <li>JS peut bloquer (parser) s’il n’est pas <code>defer</code>/<code>async</code></li>
  <li>Images et fonts en parallèle (waterfall réseau)</li>
</ol>
<p>Cookies : petits fichiers envoyés au serveur (session). <code>localStorage</code> : reste dans le navigateur, pas envoyé auto. Ne pas y mettre de tokens sensibles sans réfléchir.</p>
<p>SPA vs MPA : une SPA charge un coquillage JS et change de vue ; le SEO/SSR (Next) recopie du HTML réel.</p>`,
      `<ol>
  <li>DNS → TCP (+TLS) → HTTP</li>
  <li>HTML → DOM, CSS → CSSOM</li>
  <li>Render tree, layout, paint, composite</li>
  <li>JS may block parsing without defer/async</li>
</ol>
<p>Cookies go to the server; localStorage stays in the browser. SPAs swap views in JS; SSR/MPA send HTML.</p>`,
      `<p>DNS ثم TCP/TLS ثم HTTP. تحليل HTML إلى DOM وCSS إلى CSSOM ثم الرسم. الكوكيز تُرسل للخادم، localStorage يبقى محليًا.</p>`
    ),
  },
  {
    id: "glossary",
    group: "quality",
    title: t("Glossaire", "Glossary", "المسرد"),
    html: t(
      `<table>
  <tr><th>Terme</th><th>Définition courte</th></tr>
  <tr><td>Internet</td><td>Infrastructure TCP/IP mondiale</td></tr>
  <tr><td>Web</td><td>Service HTTP d’hypertexte</td></tr>
  <tr><td>Front-end</td><td>UI dans le navigateur</td></tr>
  <tr><td>Back-end</td><td>Serveur, BDD, API</td></tr>
  <tr><td>DevOps</td><td>Livraison et infra automatisées</td></tr>
  <tr><td>Stack</td><td>Combinaison de technos</td></tr>
  <tr><td>MERN</td><td>Mongo + Express + React + Node</td></tr>
  <tr><td>Algorithme</td><td>Étapes finies indépendantes du langage</td></tr>
  <tr><td>ECMAScript</td><td>Standard de JS</td></tr>
  <tr><td>TypeScript</td><td>JS + types, compilé vers JS</td></tr>
  <tr><td>JSON</td><td>Format de données texte</td></tr>
  <tr><td>JSX</td><td>HTML-like dans JS (React)</td></tr>
  <tr><td>HTML</td><td>Balisage de structure</td></tr>
  <tr><td>CSS</td><td>Langage de style</td></tr>
  <tr><td>innerHTML</td><td>HTML en chaîne dans le DOM</td></tr>
  <tr><td>DNS</td><td>Nom → IP</td></tr>
  <tr><td>TLD</td><td>Extension (.com, .dz)</td></tr>
  <tr><td>IP</td><td>Identifiant réseau</td></tr>
  <tr><td>Ping</td><td>ICMP echo, test de joignabilité</td></tr>
  <tr><td>Tor</td><td>Routage oignon, .onion</td></tr>
  <tr><td>API</td><td>Contrat entre programmes</td></tr>
  <tr><td>Git</td><td>Versions du code</td></tr>
</table>
<p>Tu as fait le tour du programme de la séance, plus les chapitres extra (OSI, NAT, CI/CD, sécurité, rendu navigateur, playground).</p>`,
      `<table>
  <tr><th>Term</th><th>Short definition</th></tr>
  <tr><td>Internet</td><td>Global TCP/IP infrastructure</td></tr>
  <tr><td>Web</td><td>HTTP hypertext service</td></tr>
  <tr><td>MERN</td><td>Mongo + Express + React + Node</td></tr>
  <tr><td>Algorithm</td><td>Finite language-independent steps</td></tr>
  <tr><td>DNS</td><td>Name → IP</td></tr>
  <tr><td>Ping</td><td>ICMP reachability check</td></tr>
  <tr><td>Tor</td><td>Onion routing, .onion</td></tr>
</table>
<p>That covers the class plus extra chapters (OSI, NAT, CI/CD, security, rendering, playground).</p>`,
      `<table>
  <tr><th>المصطلح</th><th>تعريف قصير</th></tr>
  <tr><td>الإنترنت</td><td>بنية TCP/IP</td></tr>
  <tr><td>الويب</td><td>خدمة HTTP</td></tr>
  <tr><td>MERN</td><td>Mongo وExpress وReact وNode</td></tr>
  <tr><td>DNS</td><td>اسم → IP</td></tr>
  <tr><td>بنغ</td><td>فحص ICMP</td></tr>
</table>`
    ),
  },
];
