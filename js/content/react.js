function t(fr, en, ar) {
  return { fr, en, ar };
}

export const react = [
  {
    id: "react-intro",
    group: "react",
    title: t("React — introduction", "React — introduction", "مقدمة React"),
    html: t(
      `<p class="lead">React (Meta) est une <strong>librairie</strong> pour construire des interfaces par <strong>composants</strong>. Tu décris l’UI en fonction de l’état ; React met à jour le DOM efficacement (Virtual DOM / reconciler).</p>
<pre>function Hello({ name }) {
  return &lt;h1&gt;Bonjour {name}&lt;/h1&gt;;
}</pre>
<h2>Pourquoi React</h2>
<ul>
  <li>UI = f(state) : moins de manipulation DOM manuelle</li>
  <li>Composants réutilisables</li>
  <li>Écosystème énorme (Next.js, React Native)</li>
  <li>Unidirectionnel : les données descendent en props</li>
</ul>
<h2>Outils de démarrage</h2>
<p>Vite + React (SPA), Next.js (framework : routing, SSR). Plus Create React App (historique).</p>
<pre>npm create vite@latest mon-app -- --template react</pre>
<div class="note">React ne remplace pas HTML/CSS/JS : il les <strong>génère</strong> et s’appuie dessus.</div>`,
      `<p class="lead">React (Meta) is a <strong>library</strong> for UIs built from <strong>components</strong>. You describe UI as a function of state; React updates the DOM efficiently (virtual DOM / reconciler).</p>
<pre>function Hello({ name }) {
  return &lt;h1&gt;Hello {name}&lt;/h1&gt;;
}</pre>
<ul>
  <li>UI = f(state) — less manual DOM work</li>
  <li>Reusable components</li>
  <li>Huge ecosystem (Next.js, React Native)</li>
  <li>Data flows down via props</li>
</ul>
<pre>npm create vite@latest my-app -- --template react</pre>
<div class="note">React does not replace HTML/CSS/JS — it <strong>emits</strong> them.</div>`,
      `<p class="lead">رياكت مكتبة لبناء واجهات من <strong>مكوّنات</strong>. تصف الواجهة بدلالة الحالة، ورياكت يحدّث DOM بكفاءة.</p>
<pre>function Hello({ name }) {
  return &lt;h1&gt;مرحبا {name}&lt;/h1&gt;;
}</pre>
<div class="note">رياكت لا يستبدل HTML/CSS/JS بل يولّدها.</div>`
    ),
  },
  {
    id: "react-jsx-props",
    group: "react",
    title: t("JSX, props, composition", "JSX, props, composition", "JSX والخصائص والتركيب"),
    html: t(
      `<p>JSX ressemble à HTML mais :</p>
<ul>
  <li><code>className</code> au lieu de <code>class</code></li>
  <li><code>htmlFor</code> au lieu de <code>for</code></li>
  <li>événements camelCase : <code>onClick</code></li>
  <li>une expression JS entre <code>{ }</code></li>
  <li>un composant doit retourner <strong>un</strong> parent (ou fragment <code>&lt;&gt;...&lt;/&gt;</code>)</li>
</ul>
<pre>function Card({ title, children }) {
  return (
    &lt;section className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      {children}
    &lt;/section&gt;
  );
}</pre>
<p><strong>Props</strong> = paramètres du composant (en lecture seule). Pour changer l’écran, on utilise le <strong>state</strong>.</p>
<div class="warn">Ne modifie jamais une prop. Remonte un callback <code>onChange</code> vers le parent.</div>`,
      `<p>JSX looks like HTML but uses <code>className</code>, <code>htmlFor</code>, camelCase events (<code>onClick</code>), and <code>{ }</code> for JS expressions. Return one parent or a fragment.</p>
<pre>function Card({ title, children }) {
  return (
    &lt;section className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      {children}
    &lt;/section&gt;
  );
}</pre>
<p><strong>Props</strong> are read-only inputs. To change the screen, use <strong>state</strong>.</p>`,
      `<p>JSX يشبه HTML لكن مع <code>className</code> و<code>onClick</code> وتعبيرات داخل <code>{ }</code>.</p>
<p><strong>Props</strong> مدخلات للقراءة فقط. لتغيير الشاشة استخدم <strong>state</strong>.</p>`
    ),
  },
  {
    id: "react-state",
    group: "react",
    title: t("State et hooks", "State and hooks", "الحالة والـ Hooks"),
    html: t(
      `<h2>useState</h2>
<pre>import { useState } from "react";

function Counter() {
  const [n, setN] = useState(0);
  return (
    &lt;button onClick={() => setN(n + 1)}&gt;
      Cliqué {n} fois
    &lt;/button&gt;
  );
}</pre>
<p>Appeler <code>setN</code> demande un nouveau rendu. Ne mute pas <code>n</code> directement.</p>
<h2>useEffect</h2>
<pre>useEffect(() => {
  document.title = \`Compte \${n}\`;
}, [n]);</pre>
<p>Effets de bord : fetch, timers, abonnements. Le tableau de dépendances évite les boucles infinies.</p>
<h2>Règles des hooks</h2>
<ul>
  <li>Uniquement au top level du composant (pas dans un if)</li>
  <li>Uniquement dans des fonctions React (ou hooks custom)</li>
</ul>
<div class="info">SPA (Single Page Application) : React change la vue sans recharger toute la page. MPA : chaque URL est une page HTML complète (classique).</div>`,
      `<h2>useState</h2>
<pre>const [n, setN] = useState(0);
&lt;button onClick={() => setN(n + 1)}&gt;{n}&lt;/button&gt;</pre>
<p>Calling <code>setN</code> schedules a re-render. Do not mutate <code>n</code>.</p>
<h2>useEffect</h2>
<pre>useEffect(() => {
  document.title = \`Count \${n}\`;
}, [n]);</pre>
<p>Side effects: fetch, timers, subscriptions. Dependency arrays prevent infinite loops.</p>
<p>Hooks only at the top level of React functions.</p>
<div class="info">SPA: React swaps views without a full reload. MPA: each URL is a full HTML page.</div>`,
      `<pre>const [n, setN] = useState(0);
useEffect(() => { document.title = String(n); }, [n]);</pre>
<p>لا تغيّر الحالة بالطفرة المباشرة. الـ Hooks فقط في أعلى المكوّن.</p>
<p>SPA تغيّر العرض دون إعادة تحميل كاملة.</p>`
    ),
  },
  {
    id: "react-ecosystem",
    group: "react",
    title: t("Écosystème React", "React ecosystem", "منظومة React"),
    html: t(
      `<table>
  <tr><th>Outil</th><th>Rôle</th></tr>
  <tr><td>Vite</td><td>Dev server ultra rapide, bundling</td></tr>
  <tr><td>Next.js</td><td>Framework : routes fichiers, SSR/SSG, API routes</td></tr>
  <tr><td>React Router</td><td>Routes côté client (SPA)</td></tr>
  <tr><td>Redux / Zustand / Context</td><td>État global</td></tr>
  <tr><td>React Query / SWR</td><td>Cache des fetch</td></tr>
  <tr><td>React Native</td><td>Mobile iOS/Android</td></tr>
</table>
<p>Virtual DOM : React compare un arbre virtuel avec le précédent et n’applique au vrai DOM que le diff (idée pédagogique ; l’implémentation moderne est le reconciler + fibers).</p>`,
      `<table>
  <tr><th>Tool</th><th>Role</th></tr>
  <tr><td>Vite</td><td>Fast dev server and bundling</td></tr>
  <tr><td>Next.js</td><td>File routes, SSR/SSG, API routes</td></tr>
  <tr><td>React Router</td><td>Client-side routes</td></tr>
  <tr><td>Redux / Zustand</td><td>Global state</td></tr>
  <tr><td>React Query</td><td>Server-state cache</td></tr>
  <tr><td>React Native</td><td>iOS/Android</td></tr>
</table>
<p>Virtual DOM: React diffs a virtual tree and patches the real DOM (modern engine: reconciler + fibers).</p>`,
      `<p>Vite للتطوير، Next.js كإطار كامل، React Router للمسارات، Zustand/Redux للحالة العامة، React Native للموبايل.</p>
<p>Virtual DOM: مقارنة شجرة افتراضية وتطبيق الفرق على DOM الحقيقي.</p>`
    ),
  },
];
