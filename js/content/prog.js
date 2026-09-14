function t(fr, en, ar) {
  return { fr, en, ar };
}

export const prog = [
  {
    id: "language",
    group: "prog",
    title: t("Langage de programmation", "Programming language", "لغة البرمجة"),
    html: t(
      `<p class="lead">Un langage de programmation est un langage <strong>formel</strong> pour donner des instructions à une machine.</p>
<p>Exemples : Python, JavaScript, C, Java, Rust, Go, PHP, C#.</p>
<h2>Caractéristiques</h2>
<ul>
  <li><strong>Syntaxe</strong> : règles d’écriture (parenthèses, mots-clés)</li>
  <li><strong>Sémantique</strong> : ce que le code <em>veut dire</em></li>
  <li><strong>Types</strong> : nombres, chaînes, booléens, objets…</li>
  <li><strong>Paradigmes</strong> : impératif, objet, fonctionnel…</li>
</ul>
<p>Un langage de programmation permet en général : variables, conditions, boucles, fonctions, calculs, prise de décision à l’exécution.</p>
<div class="warn">HTML et CSS ne remplissent pas ce contrat (voir le chapitre dédié). JSON n’est pas un langage, c’est un <strong>format de données</strong>.</div>`,
      `<p class="lead">A programming language is a <strong>formal</strong> language for instructing a machine.</p>
<p>Examples: Python, JavaScript, C, Java, Rust, Go, PHP, C#.</p>
<ul>
  <li><strong>Syntax</strong>: writing rules</li>
  <li><strong>Semantics</strong>: what the code means</li>
  <li><strong>Types</strong>: numbers, strings, booleans, objects…</li>
  <li><strong>Paradigms</strong>: imperative, object-oriented, functional…</li>
</ul>
<p>Typically you get variables, branches, loops, functions, computation, and runtime decisions.</p>
<div class="warn">HTML and CSS do not meet that contract. JSON is not a language — it is a <strong>data format</strong>.</div>`,
      `<p class="lead">لغة البرمجة لغة <strong>شكلية</strong> لإعطاء تعليمات للآلة.</p>
<p>أمثلة: Python، JavaScript، C، Java، Rust، Go.</p>
<p>تشمل عادةً: متغيرات، شروط، حلقات، دوال، حسابات، وقرارًا أثناء التنفيذ.</p>
<div class="warn">HTML وCSS ليستا لغتي برمجة. JSON ليس لغة بل <strong>صيغة بيانات</strong>.</div>`
    ),
  },
  {
    id: "program",
    group: "prog",
    title: t("Programme", "Program", "البرنامج"),
    html: t(
      `<p class="lead">Un programme est un ensemble d’instructions écrites dans un langage, exécutables par une machine pour accomplir une tâche.</p>
<p>Fichier <code>app.js</code>, binaire compilé, script Python : ce sont des programmes. Une page HTML seule n’est pas un programme ; dès que tu ajoutes du JS qui décide, tu programmes.</p>
<div class="note">Analogie de la séance : l’algorithme est la recette ; le programme est la recette écrite dans une langue précise ; le langage est cette langue (français, JS, Python…).</div>`,
      `<p class="lead">A program is a set of instructions in a language, executable by a machine to accomplish a task.</p>
<p>An <code>app.js</code> file, a compiled binary, a Python script: those are programs. A lone HTML page is not a program; once JS makes decisions, you are programming.</p>
<div class="note">Analogy: algorithm = recipe; program = recipe written in a specific language; language = French / JS / Python…</div>`,
      `<p class="lead">البرنامج مجموعة تعليمات مكتوبة بلغة، قابلة للتنفيذ لإنجاز مهمة.</p>
<div class="note">الخوارزمية = الوصفة. البرنامج = الوصفة مكتوبة بلغة محددة. اللغة = الفرنسية أو JS أو بايثون.</div>`
    ),
  },
  {
    id: "algorithm",
    group: "prog",
    title: t("Algorithme", "Algorithm", "الخوارزمية"),
    html: t(
      `<p class="lead">Un algorithme est une suite <strong>finie</strong> et <strong>ordonnée</strong> d’étapes pour résoudre un problème. Il est indépendant du langage.</p>
<p>Exemples : tri, recherche binaire, plus court chemin (Dijkstra), calcul d’une moyenne.</p>
<p><strong>Programme = algorithme traduit dans un langage.</strong></p>
<h2>Propriétés souhaitables</h2>
<ul>
  <li>Finitude (ça s’arrête)</li>
  <li>Déterminisme (mêmes entrées → même résultat, sauf algo randomisé)</li>
  <li>Clarté des entrées / sorties</li>
  <li>Correction + complexité raisonnable (temps, mémoire)</li>
</ul>`,
      `<p class="lead">An algorithm is a <strong>finite</strong>, <strong>ordered</strong> sequence of steps to solve a problem. It is language-independent.</p>
<p>Examples: sorting, binary search, shortest path (Dijkstra), computing an average.</p>
<p><strong>A program = an algorithm translated into a language.</strong></p>`,
      `<p class="lead">الخوارزمية سلسلة <strong>منتهية</strong> و<strong>مرتّبة</strong> من الخطوات لحل مشكلة. مستقلة عن اللغة.</p>
<p><strong>البرنامج = خوارزمية مترجمة إلى لغة.</strong></p>`
    ),
  },
  {
    id: "algo-syntax",
    group: "prog",
    title: t("Syntaxe d’un algorithme", "Algorithm syntax", "صيغة الخوارزمية"),
    html: t(
      `<p class="lead">On écrit un algorithme en <strong>pseudocode</strong> : entre le langage naturel et le vrai code. Il n’y a pas une syntaxe unique, mais des conventions (enseignement FR/DZ).</p>
<h2>Structure</h2>
<pre>Algorithme NomDeLAlgorithme
Variables
    ...déclarations...
Début
    ...instructions...
Fin</pre>
<h2>Variables et types</h2>
<pre>Variables
    age : Entier
    nom : Chaîne de caractères
    moyenne : Réel
    estMajeur : Booléen</pre>
<table>
  <tr><th>Type</th><th>Exemple</th></tr>
  <tr><td>Entier</td><td>42, -7</td></tr>
  <tr><td>Réel</td><td>3.14</td></tr>
  <tr><td>Booléen</td><td>Vrai, Faux</td></tr>
  <tr><td>Caractère</td><td>'A'</td></tr>
  <tr><td>Chaîne</td><td>"Bonjour"</td></tr>
  <tr><td>Tableau</td><td>T[1..10]</td></tr>
</table>
<p>Affectation : <code>age ← 25</code> (parfois <code>=</code> ou <code>:=</code>).</p>
<h2>Entrées / sorties</h2>
<pre>Lire(age)
Écrire("Bonjour")
Écrire("Votre âge : ", age)</pre>
<h2>Si / Sinon / Selon</h2>
<pre>Si age >= 18 Alors
    Écrire("Majeur")
Sinon
    Écrire("Mineur")
FinSi</pre>
<pre>Selon jour
    Cas 1 : Écrire("Lundi")
    Cas 2 : Écrire("Mardi")
    Autre : Écrire("Inconnu")
FinSelon</pre>
<h2>Boucles</h2>
<pre>Pour i de 1 à 10 Faire
    Écrire(i)
FinPour

TantQue condition Faire
    instructions
FinTantQue

Répéter
    instructions
Jusqu'à condition</pre>
<p><code>TantQue</code> teste <em>avant</em> (0 fois possible). <code>Répéter…Jusqu’à</code> teste <em>après</em> (au moins une fois).</p>
<h2>Fonction vs procédure</h2>
<pre>Fonction Carre(x : Entier) : Entier
Début
    Retourner x * x
Fin

Procédure AfficherMessage(msg : Chaîne)
Début
    Écrire(msg)
Fin</pre>
<h2>Opérateurs</h2>
<p>Arithmétique : <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>div</code> <code>mod</code>. Comparaison : <code>=</code> <code>≠</code> <code>&lt;</code> <code>&gt;</code> <code>≤</code> <code>≥</code>. Logique : ET, OU, NON.</p>
<h2>Exemple : somme</h2>
<pre>Algorithme Somme
Variables
    a, b, s : Réel
Début
    Écrire("Entrez deux nombres :")
    Lire(a)
    Lire(b)
    s ← a + b
    Écrire("La somme est : ", s)
Fin</pre>
<h2>Exemple : factorielle</h2>
<pre>Algorithme Factorielle
Variables
    n, i, f : Entier
Début
    Lire(n)
    f ← 1
    Pour i de 2 à n Faire
        f ← f * i
    FinPour
    Écrire("Factorielle = ", f)
Fin</pre>
<h2>Recherche dichotomique</h2>
<pre>Fonction RechercheDicho(T : Tableau, n, x : Entier) : Entier
Variables
    debut, fin, milieu : Entier
Début
    debut ← 1
    fin ← n
    TantQue debut <= fin Faire
        milieu ← (debut + fin) div 2
        Si T[milieu] = x Alors
            Retourner milieu
        Sinon Si T[milieu] &lt; x Alors
            debut ← milieu + 1
        Sinon
            fin ← milieu - 1
        FinSi
    FinTantQue
    Retourner -1
Fin</pre>
<h2>Même logique, syntaxes différentes</h2>
<pre>Si age >= 18 Alors
    Écrire("Majeur")
FinSi</pre>
<pre>// JavaScript
if (age >= 18) {
  console.log("Majeur");
}</pre>
<pre># Python
if age >= 18:
    print("Majeur")</pre>
<pre>/* C */
if (age >= 18) {
  printf("Majeur");
}</pre>
<h2>Mots-clés FR / EN</h2>
<table>
  <tr><th>Français</th><th>Anglais</th></tr>
  <tr><td>Algorithme / Début / Fin</td><td>Algorithm / Begin / End</td></tr>
  <tr><td>Lire / Écrire</td><td>Read / Write</td></tr>
  <tr><td>Si Alors Sinon</td><td>If Then Else</td></tr>
  <tr><td>Pour / TantQue / Répéter</td><td>For / While / Repeat Until</td></tr>
  <tr><td>Fonction / Procédure / Retourner</td><td>Function / Procedure / Return</td></tr>
</table>
<div class="ok">Bonnes pratiques : un objectif clair, variables déclarées, indentation, une instruction par ligne, pas de boucle infinie, tester 0 / négatif / vide.</div>`,
      `<p class="lead">Algorithms are written in <strong>pseudocode</strong> — between natural language and real code. There is no single official syntax.</p>
<pre>Algorithm Name
Variables
    ...
Begin
    ...
End</pre>
<p>Assignment: <code>age ← 25</code>. Input/output: Read / Write. Branches: If / Then / Else / Switch. Loops: For, While (test before), Repeat-Until (test after, runs at least once).</p>
<p>A <strong>function</strong> returns a value. A <strong>procedure</strong> does not.</p>
<p>The same logic maps to JavaScript, Python or C — only syntax changes.</p>`,
      `<p class="lead">تُكتب الخوارزمية بـ<strong>شبه الكود</strong>: بين اللغة الطبيعية والكود الحقيقي.</p>
<pre>Algorithme Nom
Variables
    age : Entier
Début
    Lire(age)
    Si age >= 18 Alors
        Écrire("راشد")
    Sinon
        Écrire("قاصر")
    FinSi
Fin</pre>
<p>الدالة تُرجع قيمة. الإجراء لا يُرجع. نفس المنطق يُترجم إلى JS أو بايثون أو C.</p>`
    ),
  },
  {
    id: "ecmascript",
    group: "prog",
    title: t("ECMAScript, JavaScript, TypeScript", "ECMAScript, JavaScript, TypeScript", "ECMAScript وجافاسكريبت وTypeScript"),
    html: t(
      `<p class="lead">Trois noms qu’on mélange souvent : le standard, le langage du web, et le JS typé.</p>
<h2>ECMAScript (ES)</h2>
<p>Standard officiel (ECMA International) qui définit les règles du langage. JavaScript en est l’implémentation la plus connue. Versions : ES5 (2009), ES6/ES2015 (let/const, classes, modules, promesses…), puis ES2016, ES2020, ES2023…</p>
<h2>JavaScript (JS)</h2>
<p>Langage interprété, dynamique, multi-paradigme. Utilisé :</p>
<ul>
  <li>dans le navigateur (front-end)</li>
  <li>sur le serveur via Node.js (back-end)</li>
  <li>mobile (React Native), desktop (Electron)</li>
</ul>
<h2>TypeScript (TS)</h2>
<p>Sur-ensemble de JavaScript créé par Microsoft : typage statique, puis compilation vers du JS. Détecte beaucoup d’erreurs avant l’exécution. Dominant dans les gros projets.</p>
<pre>function greet(name: string): string {
  return \`Bonjour \${name}\`;
}</pre>
<div class="note">Le navigateur ne lit pas TypeScript nativement : un compilateur (<code>tsc</code>, Vite, Babel) produit du JavaScript.</div>`,
      `<p class="lead">Three names people mix up: the standard, the web language, and typed JS.</p>
<h2>ECMAScript (ES)</h2>
<p>The official standard (ECMA International). JavaScript is the best-known implementation. Milestones: ES5, ES6/ES2015 (let/const, classes, modules, promises), then yearly editions.</p>
<h2>JavaScript</h2>
<p>Interpreted, dynamic, multi-paradigm. Runs in the browser, on the server (Node.js), on mobile (React Native) and desktop (Electron).</p>
<h2>TypeScript</h2>
<p>A JavaScript superset by Microsoft: static types, compiled to JS. Catches many bugs before runtime.</p>
<pre>function greet(name: string): string {
  return \`Hello \${name}\`;
}</pre>
<div class="note">Browsers do not run TypeScript natively. A compiler emits JavaScript.</div>`,
      `<p class="lead">ثلاثة أسماء تُخلط غالبًا: المعيار، لغة الويب، وجافاسكريبت ذات الأنواع.</p>
<p><strong>ECMAScript</strong> هو المعيار الرسمي. <strong>JavaScript</strong> أشهر تطبيق له في المتصفح وعلى الخادم (Node). <strong>TypeScript</strong> امتداد من مايكروسوفت يضيف أنواعًا ثابتة ويُترجم إلى JS.</p>`
    ),
  },
  {
    id: "json-jsx",
    group: "prog",
    title: t("JSON et JSX", "JSON and JSX", "JSON وJSX"),
    html: t(
      `<h2>JSON (JavaScript Object Notation)</h2>
<p>Format d’échange de données textuel, léger, lisible. Inspiré de la syntaxe JS mais <strong>indépendant du langage</strong>. Standard des API REST.</p>
<pre>{
  "nom": "Alice",
  "age": 25,
  "skills": ["JS", "React"]
}</pre>
<p>Règles : clés entre guillemets doubles, pas de commentaires, pas de fonctions, pas de <code>undefined</code>, virgules strictes.</p>
<pre>JSON.parse(texte);   // chaîne → objet
JSON.stringify(obj); // objet → chaîne</pre>
<h2>JSX (JavaScript XML)</h2>
<p>Extension de syntaxe (surtout React) pour écrire du HTML-like dans du JavaScript.</p>
<pre>const element = &lt;h1&gt;Bonjour {name}&lt;/h1&gt;;</pre>
<p>Ce n’est ni du HTML ni du JS pur : Babel / le compilateur React le transforme souvent en <code>React.createElement(...)</code>.</p>
<div class="warn">JSON ≠ objet JavaScript (objets JS peuvent avoir des méthodes). JSX ≠ HTML (attributs en camelCase : <code>className</code>, <code>onClick</code>).</div>`,
      `<h2>JSON</h2>
<p>Lightweight text data format. Inspired by JS object syntax but <strong>language-independent</strong>. The REST API default.</p>
<pre>{
  "name": "Alice",
  "age": 25,
  "skills": ["JS", "React"]
}</pre>
<p>Rules: double-quoted keys, no comments, no functions, no <code>undefined</code>.</p>
<pre>JSON.parse(text);
JSON.stringify(obj);</pre>
<h2>JSX</h2>
<p>Syntax extension (mainly React) to write HTML-like trees in JavaScript.</p>
<pre>const element = &lt;h1&gt;Hello {name}&lt;/h1&gt;;</pre>
<p>Neither HTML nor pure JS — compilers turn it into <code>React.createElement(...)</code>.</p>
<div class="warn">JSON ≠ a JS object (JS objects can have methods). JSX ≠ HTML (<code>className</code>, <code>onClick</code>).</div>`,
      `<h2>JSON</h2>
<p>صيغة نصية خفيفة لتبادل البيانات. مستقلة عن اللغة. شائعة في REST.</p>
<pre>{
  "nom": "Alice",
  "age": 25
}</pre>
<h2>JSX</h2>
<p>امتداد صياغة لكتابة شبه HTML داخل JavaScript في React. يُحوَّل إلى <code>createElement</code>.</p>
<div class="warn">JSON ليس كائن JS. JSX ليس HTML (<code>className</code> بدل <code>class</code>).</div>`
    ),
  },
  {
    id: "not-programming",
    group: "prog",
    title: t("Pourquoi HTML/CSS ne sont pas des langages de programmation", "Why HTML/CSS are not programming languages", "لماذا HTML وCSS ليستا لغتي برمجة"),
    html: t(
      `<p class="lead">Un langage de programmation doit permettre variables/types, structures de contrôle (if, boucles), fonctions, calculs, décisions à l’exécution.</p>
<h2>Langages de balisage (markup)</h2>
<p>Ils annotent du texte avec des balises pour la structure ou le sens : HTML, XML, Markdown, SVG, LaTeX.</p>
<h2>Langages de style</h2>
<p>Ils décrivent l’apparence : CSS, Sass, Less, Stylus.</p>
<h2>HTML et CSS</h2>
<ul>
  <li>Pas de logique générale (pas de boucles métier, pas de fonctions comme en JS)</li>
  <li>Déclaratifs : on décrit un résultat, on n’ordonne pas une séquence d’actions Turing-complète</li>
  <li>CSS a des custom properties et des calculs limités — ce n’est toujours pas un langage général</li>
</ul>
<div class="note">Analogie : HTML/CSS = plan et peinture de la maison. JavaScript = ordres aux ouvriers (construis, déplace, vérifie).</div>
<p>Markdown, XML, JSON : mêmes familles (document / données), pas des programmes.</p>`,
      `<p class="lead">A programming language typically provides variables/types, control flow, functions, computation, and runtime decisions.</p>
<p><strong>Markup languages</strong> annotate text for structure/meaning: HTML, XML, Markdown, SVG, LaTeX.</p>
<p><strong>Styling languages</strong> describe appearance: CSS, Sass, Less, Stylus.</p>
<p>HTML and CSS are declarative: you describe a result, you do not issue a general sequence of Turing-complete instructions. CSS custom properties do not turn CSS into a general-purpose language.</p>
<div class="note">HTML/CSS = blueprint and paint. JavaScript = orders to the workers.</div>`,
      `<p class="lead">لغة البرمجة تتيح المتغيرات والشروط والحلقات والدوال والحساب واتخاذ القرار أثناء التشغيل.</p>
<p>لغات الوسم (markup) تُعلّم النص بالبنية: HTML، XML، Markdown. لغات التنسيق تصف المظهر: CSS وSass.</p>
<p>HTML وCSS وصفِيّتان: تصفان نتيجة وليستا لغة عامة. التشبيه: HTML/CSS مخطط المنزل، JavaScript أوامر العمّال.</p>`
    ),
  },
];
