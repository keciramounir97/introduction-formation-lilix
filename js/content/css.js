function t(fr, en, ar) {
  return { fr, en, ar };
}

export const css = [
  {
    id: "css-intro",
    group: "css",
    title: t("CSS — introduction", "CSS — introduction", "مقدمة CSS"),
    html: t(
      `<p class="lead">CSS (Cascading Style Sheets) est le langage de <strong>style</strong> : couleurs, tailles, positions, animations.</p>
<pre>h1 {
  color: blue;
  font-size: 2rem;
}</pre>
<h2>Règle CSS</h2>
<p><code>sélecteur { propriété: valeur; }</code>. Plusieurs feuilles se <strong>cascadent</strong> : origine, spécificité, ordre, <code>!important</code>.</p>
<h2>Box model</h2>
<p>Chaque élément est une boîte : content + padding + border + margin. <code>box-sizing: border-box</code> (recommandé) inclut padding/border dans la largeur.</p>
<h2>Mise en page moderne</h2>
<ul>
  <li><strong>Flexbox</strong> : une dimension (barre, centrage)</li>
  <li><strong>Grid</strong> : deux dimensions (page entière)</li>
  <li><strong>Media queries</strong> : responsive</li>
</ul>
<pre>.row { display: flex; gap: 1rem; }
.grid { display: grid; grid-template-columns: 1fr 1fr; }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }</pre>`,
      `<p class="lead">CSS (Cascading Style Sheets) is the <strong>styling</strong> language: color, size, position, motion.</p>
<pre>h1 {
  color: blue;
  font-size: 2rem;
}</pre>
<p>A rule is <code>selector { property: value; }</code>. Sheets <strong>cascade</strong> by origin, specificity, order, and <code>!important</code>.</p>
<p>Box model: content + padding + border + margin. Prefer <code>box-sizing: border-box</code>.</p>
<p>Flexbox (1D), Grid (2D), media queries (responsive).</p>`,
      `<p class="lead">CSS لغة <strong>التنسيق</strong>: الألوان والمقاسات والمواضع.</p>
<pre>h1 { color: blue; font-size: 2rem; }</pre>
<p>نموذج الصندوق: محتوى + حشو + حد + هامش. Flex للاتجاه الواحد، Grid للصفحات، وmedia queries للاستجابة.</p>`
    ),
  },
  {
    id: "css-inner",
    group: "css",
    title: t("CSS interne, inline, externe", "Inner, inline and external CSS", "CSS الداخلي والضمني والخارجي"),
    html: t(
      `<p class="lead">Trois endroits pour mettre du CSS — comme on dit « inner CSS » en formation.</p>
<h2>1. Inline (dans la balise)</h2>
<pre>&lt;p style="color: red; font-size: 20px"&gt;Urgent&lt;/p&gt;</pre>
<p>Spécificité très haute, impossible à réutiliser, mélange structure et style. À éviter sauf exception (e-mail HTML, override ponctuel).</p>
<h2>2. Interne / inner (balise <code>&lt;style&gt;</code> dans <code>&lt;head&gt;</code>)</h2>
<pre>&lt;head&gt;
  &lt;style&gt;
    p { color: navy; }
  &lt;/style&gt;
&lt;/head&gt;</pre>
<p>Pratique pour une page unique, un prototype, ou ce playground. Pas partagé entre pages.</p>
<h2>3. Externe (fichier <code>.css</code>)</h2>
<pre>&lt;link rel="stylesheet" href="css/style.css" /&gt;</pre>
<p>Meilleure pratique : cache navigateur, séparation des responsabilités, un design system pour tout le site.</p>
<table>
  <tr><th>Méthode</th><th>Quand</th></tr>
  <tr><td>Inline</td><td>Exception, e-mails</td></tr>
  <tr><td>Interne</td><td>Démo, une seule page</td></tr>
  <tr><td>Externe</td><td>Projet réel</td></tr>
</table>
<div class="note">« Inner CSS » = CSS interne dans la page. Ce n’est pas une techno différente : c’est le <strong>même langage</strong> CSS, branché autrement.</div>
<h2>Variables CSS</h2>
<pre>:root { --accent: #04AA6D; }
button { background: var(--accent); }</pre>
<p>Utile pour les thèmes (clair/sombre) comme sur ce site : on change quelques variables, tout suit.</p>`,
      `<p class="lead">Three places to put CSS — what classes often call “inner CSS”.</p>
<h2>1. Inline</h2>
<pre>&lt;p style="color: red"&gt;Urgent&lt;/p&gt;</pre>
<p>Highest specificity, not reusable. Avoid except emails / one-off overrides.</p>
<h2>2. Internal / inner (<code>&lt;style&gt;</code> in <code>&lt;head&gt;</code>)</h2>
<pre>&lt;style&gt; p { color: navy; } &lt;/style&gt;</pre>
<p>Fine for a single page or a demo. Not shared across pages.</p>
<h2>3. External file</h2>
<pre>&lt;link rel="stylesheet" href="css/style.css" /&gt;</pre>
<p>Best practice: caching, separation of concerns, one design system.</p>
<div class="note">“Inner CSS” is not a different language — it is the same CSS, wired differently.</div>
<pre>:root { --accent: #04AA6D; }
button { background: var(--accent); }</pre>`,
      `<p class="lead">ثلاثة مواضع لـ CSS — ما يُسمّى غالبًا «CSS داخلي».</p>
<ol>
  <li><strong>ضمني inline:</strong> <code>style="color:red"</code> — تجنّبه إلا للضرورة.</li>
  <li><strong>داخلي inner:</strong> وسم <code>&lt;style&gt;</code> في <code>head</code> — لصفحة واحدة أو تجربة.</li>
  <li><strong>خارجي:</strong> ملف <code>.css</code> عبر <code>link</code> — الأفضل للمشاريع.</li>
</ol>
<div class="note">«Inner CSS» ليست لغة أخرى، بل نفس CSS بطريقة ربط مختلفة.</div>`
    ),
  },
  {
    id: "tailwind",
    group: "css",
    title: t("Tailwind CSS", "Tailwind CSS", "Tailwind CSS"),
    html: t(
      `<p class="lead">Tailwind est un framework CSS <strong>utility-first</strong> : au lieu d’écrire du CSS custom, tu composes des classes utilitaires.</p>
<pre>&lt;button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"&gt;
  Cliquer
&lt;/button&gt;</pre>
<table>
  <tr><th>Pour</th><th>Contre</th></tr>
  <tr><td>Rapide, cohérent, peu de CSS mort</td><td>HTML verbeux</td></tr>
  <tr><td>Design system par tokens (spacing, colors)</td><td>Courbe d’apprentissage des noms</td></tr>
  <tr><td>Très populaire avec React / Vue</td><td>Sans build, le fichier complet est énorme (on purge)</td></tr>
</table>
<p>Ce n’est pas un langage de programmation. C’est une convention de classes qui génèrent du CSS.</p>`,
      `<p class="lead">Tailwind is a <strong>utility-first</strong> CSS framework: you compose utility classes instead of writing custom CSS.</p>
<pre>&lt;button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"&gt;
  Click
&lt;/button&gt;</pre>
<p>Pros: speed, consistency, little dead CSS. Cons: verbose HTML, naming learning curve. It is not a programming language — it is a class convention that emits CSS.</p>`,
      `<p class="lead">Tailwind إطار CSS يعتمد <strong>أصنافًا نفعية</strong> بدل كتابة CSS مخصص.</p>
<pre>&lt;button class="bg-blue-500 text-white px-4 py-2 rounded"&gt;انقر&lt;/button&gt;</pre>
<p>سريع ومتّسق، لكن HTML يصبح طويلًا. ليس لغة برمجة.</p>`
    ),
  },
  {
    id: "framework-lib",
    group: "css",
    title: t("Framework vs librairie", "Framework vs library", "إطار العمل مقابل المكتبة"),
    html: t(
      `<table>
  <tr><th>Critère</th><th>Librairie</th><th>Framework</th></tr>
  <tr><td>Contrôle</td><td>Toi tu appelles la lib</td><td>Le framework t’appelle (inversion de contrôle)</td></tr>
  <tr><td>Flexibilité</td><td>Tu choisis quand l’utiliser</td><td>Tu suis ses règles / structure de dossiers</td></tr>
  <tr><td>Exemples</td><td>React, jQuery, Lodash, Axios</td><td>Angular, Vue (souvent), Django, Laravel, Next.js</td></tr>
  <tr><td>Phrase</td><td>« Tu appelles la lib »</td><td>« Hollywood principle : don’t call us, we’ll call you »</td></tr>
</table>
<div class="info">Nuance : React est techniquement une <strong>librairie</strong> (la vue). Avec Next.js, React Router, Redux, etc., on parle d’écosystème / meta-framework.</div>
<p>Tailwind = framework CSS (il impose une façon de styler). Express = framework web minimal sur Node. Lodash = librairie de fonctions.</p>`,
      `<table>
  <tr><th>Criterion</th><th>Library</th><th>Framework</th></tr>
  <tr><td>Control</td><td>You call it</td><td>It calls you (IoC)</td></tr>
  <tr><td>Flexibility</td><td>Use it when you want</td><td>You follow its rules</td></tr>
  <tr><td>Examples</td><td>React, jQuery, Axios</td><td>Angular, Django, Laravel, Next.js</td></tr>
</table>
<div class="info">React is technically a <strong>library</strong>. Next.js turns the stack into a framework.</div>`,
      `<table>
  <tr><th>المعيار</th><th>مكتبة</th><th>إطار</th></tr>
  <tr><td>التحكم</td><td>أنت تستدعيها</td><td>الإطار يستدعي كودك</td></tr>
  <tr><td>أمثلة</td><td>React، Axios</td><td>Angular، Django، Next.js</td></tr>
</table>
<div class="info">رياكت مكتبة واجهة. Next.js يجعلها أقرب إلى إطار كامل.</div>`
    ),
  },
];
