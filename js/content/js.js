function t(fr, en, ar) {
  return { fr, en, ar };
}

export const js = [
  {
    id: "js-intro",
    group: "js",
    title: t("JavaScript — bases", "JavaScript basics", "أساسيات جافاسكريبت"),
    html: t(
      `<p class="lead">JavaScript donne des <strong>instructions</strong> au navigateur : changer le DOM, réagir aux clics, parler à une API.</p>
<h2>Variables</h2>
<pre>let age = 20;        // modifiable
const PI = 3.14;     // constante de référence
var ancien = true;   // ancienne portée fonction — à éviter</pre>
<h2>Types</h2>
<p>number, string, boolean, null, undefined, bigint, symbol, object (dont array et function).</p>
<pre>typeof "hi"; // "string"
const skills = ["HTML", "CSS", "JS"];
const user = { nom: "Ada", age: 36 };</pre>
<h2>Fonctions</h2>
<pre>function add(a, b) { return a + b; }
const add2 = (a, b) => a + b;</pre>
<h2>Conditions et boucles</h2>
<pre>if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
for (let i = 0; i &lt; 10; i++) { }
while (ok) { }
skills.forEach((s) => console.log(s));</pre>
<div class="note">Même algorithme que le pseudocode « Si age ≥ 18 », syntaxe JS.</div>`,
      `<p class="lead">JavaScript issues <strong>instructions</strong> to the browser: mutate the DOM, handle clicks, call APIs.</p>
<pre>let age = 20;
const PI = 3.14;</pre>
<p>Types: number, string, boolean, null, undefined, bigint, symbol, object (arrays and functions included).</p>
<pre>function add(a, b) { return a + b; }
const add2 = (a, b) => a + b;
if (age >= 18) console.log("Adult");</pre>`,
      `<p class="lead">جافاسكريبت يعطي <strong>تعليمات</strong> للمتصفح: تعديل DOM، النقرات، استدعاء API.</p>
<pre>let age = 20;
const add = (a, b) => a + b;
if (age >= 18) console.log("راشد");</pre>`
    ),
  },
  {
    id: "js-inner",
    group: "js",
    title: t("JS interne, inline, externe", "Inner, inline and external JS", "JS الداخلي والضمني والخارجي"),
    html: t(
      `<p class="lead">Comme le CSS, le JavaScript se branche de trois façons.</p>
<h2>1. Inline (attribut d’événement)</h2>
<pre>&lt;button onclick="alert('hi')"&gt;OK&lt;/button&gt;</pre>
<p>À éviter : mélange HTML/JS, difficile à tester, politique de sécurité (CSP) souvent interdite.</p>
<h2>2. Interne / inner (<code>&lt;script&gt;</code> dans la page)</h2>
<pre>&lt;script&gt;
  document.querySelector("h1").textContent = "Lilix";
&lt;/script&gt;</pre>
<p>Place le script <strong>en fin de <code>body</code></strong> ou utilise <code>defer</code>, sinon le DOM n’existe pas encore.</p>
<h2>3. Externe</h2>
<pre>&lt;script src="js/app.js" defer&gt;&lt;/script&gt;</pre>
<p>Modules ES :</p>
<pre>&lt;script type="module" src="js/app.js"&gt;&lt;/script&gt;</pre>
<table>
  <tr><th>Attribut</th><th>Effet</th></tr>
  <tr><td>defer</td><td>Télécharge en parallèle, exécute après le HTML, dans l’ordre</td></tr>
  <tr><td>async</td><td>Exécute dès que le fichier est prêt (ordre non garanti)</td></tr>
  <tr><td>type="module"</td><td>defer par défaut, import/export, scope isolé</td></tr>
</table>
<div class="ok">En formation, « inner JS » = script dans la page pour apprendre. En production, fichiers externes + modules.</div>`,
      `<p class="lead">Like CSS, JavaScript can be wired three ways.</p>
<h2>1. Inline</h2>
<pre>&lt;button onclick="alert('hi')"&gt;OK&lt;/button&gt;</pre>
<p>Avoid: mixes HTML/JS, hard to test, often blocked by CSP.</p>
<h2>2. Internal / inner</h2>
<pre>&lt;script&gt;
  document.querySelector("h1").textContent = "Lilix";
&lt;/script&gt;</pre>
<p>Put it at the <strong>end of <code>body</code></strong> or use <code>defer</code> so the DOM exists.</p>
<h2>3. External</h2>
<pre>&lt;script src="js/app.js" defer&gt;&lt;/script&gt;
&lt;script type="module" src="js/app.js"&gt;&lt;/script&gt;</pre>
<p><code>defer</code>: run after HTML, in order. <code>async</code>: run as soon as ready. Modules are deferred by default.</p>`,
      `<p class="lead">مثل CSS، لجافاسكريبت ثلاث طرق للربط.</p>
<ol>
  <li>ضمني: <code>onclick="..."</code> — تجنّبه.</li>
  <li>داخلي: <code>&lt;script&gt;</code> في الصفحة — للتعلّم. ضعه نهاية <code>body</code> أو استخدم <code>defer</code>.</li>
  <li>خارجي: <code>src="app.js"</code> أو <code>type="module"</code> — للإنتاج.</li>
</ol>`
    ),
  },
  {
    id: "js-dom-events",
    group: "js",
    title: t("DOM, événements, fetch", "DOM, events, fetch", "DOM والأحداث وfetch"),
    html: t(
      `<h2>Écouter un événement</h2>
<pre>const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("clic");
});</pre>
<p>Événements courants : click, submit, input, keydown, load, DOMContentLoaded.</p>
<h2>Empêcher le comportement par défaut</h2>
<pre>form.addEventListener("submit", (e) => {
  e.preventDefault();
  // fetch au lieu d'un rechargement
});</pre>
<h2>Parler au serveur</h2>
<pre>const res = await fetch("https://api.example.com/users");
const data = await res.json();</pre>
<p>HTTP : GET (lire), POST (créer), PUT/PATCH (modifier), DELETE (supprimer). Le corps est souvent du JSON.</p>
<div class="info">Le navigateur applique la <strong>same-origin policy</strong>. Un autre domaine doit autoriser CORS.</div>
<h2>Stockage local</h2>
<pre>localStorage.setItem("theme", "dark");
sessionStorage.setItem("step", "2");
document.cookie; // envoyé au serveur — ne pas y mettre de secrets JS</pre>`,
      `<h2>Events</h2>
<pre>btn.addEventListener("click", () => console.log("click"));</pre>
<p>Common: click, submit, input, keydown, load.</p>
<pre>form.addEventListener("submit", (e) => {
  e.preventDefault();
});</pre>
<h2>Talk to a server</h2>
<pre>const res = await fetch("/api/users");
const data = await res.json();</pre>
<p>GET read, POST create, PUT/PATCH update, DELETE remove.</p>
<div class="info">Browsers enforce same-origin. Other domains need CORS.</div>
<pre>localStorage.setItem("theme", "dark");</pre>`,
      `<pre>btn.addEventListener("click", () => console.log("نقر"));
const data = await (await fetch("/api")).json();
localStorage.setItem("theme", "dark");</pre>
<p>GET قراءة، POST إنشاء. النطاق المختلف يحتاج CORS.</p>`
    ),
  },
  {
    id: "node-npm",
    group: "js",
    title: t("Node.js et npm", "Node.js and npm", "Node.js وnpm"),
    html: t(
      `<p class="lead">Node.js est un <strong>environnement d’exécution</strong> JavaScript hors du navigateur (V8 + APIs fichiers, réseau, process).</p>
<p>npm (Node Package Manager) installe des bibliothèques décrites dans <code>package.json</code>.</p>
<pre>npm init -y
npm install express
node server.js</pre>
<p>Le fichier <code>package-lock.json</code> fige les versions. <code>npx</code> exécute un outil sans l’installer globalement (ex. Vite).</p>
<div class="note">Le JS du navigateur n’a pas <code>fs</code> (fichiers disque). Node n’a pas <code>document</code>. D’où la séparation front / back même avec le même langage.</div>`,
      `<p class="lead">Node.js is a JavaScript <strong>runtime</strong> outside the browser (V8 + file, network, process APIs).</p>
<p>npm installs libraries listed in <code>package.json</code>.</p>
<pre>npm init -y
npm install express
node server.js</pre>
<div class="note">Browser JS has no <code>fs</code>. Node has no <code>document</code>. Same language, different hosts.</div>`,
      `<p class="lead">Node.js بيئة تشغيل لجافاسكريبت خارج المتصفح. npm يثبت الحزم عبر <code>package.json</code>.</p>
<div class="note">المتصفح بلا <code>fs</code> وNode بلا <code>document</code>.</div>`
    ),
  },
];
