function t(fr, en, ar) {
  return { fr, en, ar };
}

export const html = [
  {
    id: "html-intro",
    group: "html",
    title: t("HTML — introduction", "HTML — introduction", "مقدمة HTML"),
    html: t(
      `<p class="lead">HTML (HyperText Markup Language) est le langage de <strong>balisage</strong> qui structure le contenu d’une page web.</p>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;title&gt;Ma page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Titre&lt;/h1&gt;
    &lt;p&gt;Paragraphe&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
<h2>Anatomie d’une balise</h2>
<p><code>&lt;p class="lead"&gt;texte&lt;/p&gt;</code> : balise ouvrante, attributs, contenu, balise fermante. Certaines balises sont vides : <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;meta&gt;</code>.</p>
<h2>Hypertexte</h2>
<p>Des documents liés par des liens <code>&lt;a href="..."&gt;</code>. C’est le « web » au sens originel de Tim Berners-Lee (1989).</p>
<div class="info"><code>&lt;!DOCTYPE html&gt;</code> dit au navigateur : « interprète en HTML5 », pas en vieux mode quirks.</div>`,
      `<p class="lead">HTML (HyperText Markup Language) is the <strong>markup</strong> language that structures a web page.</p>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;title&gt;My page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;Paragraph&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
<p>A tag has an opening tag, optional attributes, content, and a closing tag. Void tags have no content: <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>.</p>
<p>Hypertext means documents linked with <code>&lt;a href&gt;</code> — the original Web idea (1989).</p>`,
      `<p class="lead">HTML لغة <strong>وسم</strong> تُهيكل محتوى الصفحة.</p>
<pre>&lt;h1&gt;عنوان&lt;/h1&gt;
&lt;p&gt;فقرة&lt;/p&gt;</pre>
<p>النص التشعبي = وثائق مرتبطة بروابط <code>&lt;a&gt;</code>.</p>`
    ),
  },
  {
    id: "html-structure",
    group: "html",
    title: t("Structure et balises essentielles", "Structure and essential tags", "البنية والوسوم الأساسية"),
    html: t(
      `<table>
  <tr><th>Balise</th><th>Rôle</th></tr>
  <tr><td>h1–h6</td><td>Titres hiérarchiques (un h1 principal)</td></tr>
  <tr><td>p, br, hr</td><td>Paragraphe, saut de ligne, ligne</td></tr>
  <tr><td>a</td><td>Lien (href, target)</td></tr>
  <tr><td>img</td><td>Image (src, alt obligatoire pour a11y)</td></tr>
  <tr><td>ul ol li</td><td>Listes</td></tr>
  <tr><td>table, tr, th, td</td><td>Tableaux de données</td></tr>
  <tr><td>div, span</td><td>Boîtes génériques (éviter d’en abuser)</td></tr>
  <tr><td>header, nav, main, article, section, footer</td><td>HTML sémantique</td></tr>
  <tr><td>form, input, label, button, select, textarea</td><td>Formulaires</td></tr>
</table>
<h2>Sémantique</h2>
<p>Préfère <code>&lt;button&gt;</code> à un <code>div</code> cliquable, <code>&lt;nav&gt;</code> au menu, <code>&lt;main&gt;</code> au contenu. Les lecteurs d’écran et le SEO s’appuient là-dessus.</p>
<h2>Formulaire minimal</h2>
<pre>&lt;form action="/login" method="post"&gt;
  &lt;label&gt;Email &lt;input type="email" name="email" required /&gt;&lt;/label&gt;
  &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;</pre>
<div class="warn">Les mots de passe et données sensibles : toujours <code>HTTPS</code> + traitement <strong>serveur</strong>.</div>`,
      `<table>
  <tr><th>Tag</th><th>Role</th></tr>
  <tr><td>h1–h6</td><td>Headings (one main h1)</td></tr>
  <tr><td>a / img</td><td>Links / images (<code>alt</code> matters)</td></tr>
  <tr><td>ul ol li</td><td>Lists</td></tr>
  <tr><td>header nav main article footer</td><td>Semantic landmarks</td></tr>
  <tr><td>form input label button</td><td>Forms</td></tr>
</table>
<p>Prefer real <code>&lt;button&gt;</code> over clickable <code>div</code>s. Screen readers and SEO rely on semantics.</p>
<pre>&lt;form action="/login" method="post"&gt;
  &lt;label&gt;Email &lt;input type="email" name="email" required /&gt;&lt;/label&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</pre>`,
      `<table>
  <tr><th>وسم</th><th>الدور</th></tr>
  <tr><td>h1–h6</td><td>عناوين</td></tr>
  <tr><td>a / img</td><td>روابط / صور مع alt</td></tr>
  <tr><td>header nav main footer</td><td>دلالة بنيوية</td></tr>
  <tr><td>form input button</td><td>نماذج</td></tr>
</table>`
    ),
  },
  {
    id: "innerhtml",
    group: "html",
    title: t("innerHTML, textContent, DOM", "innerHTML, textContent, DOM", "innerHTML وtextContent وDOM"),
    html: t(
      `<p class="lead">Le DOM (Document Object Model) est l’arbre d’objets que le navigateur construit à partir du HTML. JavaScript le lit et le modifie.</p>
<pre>const box = document.querySelector("#app");
box.textContent = "Bonjour";      // texte sûr, pas d’HTML
box.innerHTML = "&lt;strong&gt;Hi&lt;/strong&gt;"; // interprète du HTML</pre>
<table>
  <tr><th>Propriété</th><th>Effet</th></tr>
  <tr><td>textContent</td><td>Texte brut, ignore/échappe le HTML</td></tr>
  <tr><td>innerText</td><td>Texte « visible », respecte le CSS (plus lent)</td></tr>
  <tr><td>innerHTML</td><td>Sérialise / parse du HTML</td></tr>
</table>
<div class="warn"><strong>XSS :</strong> ne mets jamais dans <code>innerHTML</code> une chaîne venant de l’utilisateur (commentaire, query string) sans assainissement. Préfère <code>textContent</code> ou des APIs DOM (<code>createElement</code>).</div>
<h2>Autres API utiles</h2>
<pre>el.classList.add("active");
el.setAttribute("aria-expanded", "true");
el.append(node);
document.createElement("li");</pre>`,
      `<p class="lead">The DOM is the object tree the browser builds from HTML. JavaScript reads and mutates it.</p>
<pre>const box = document.querySelector("#app");
box.textContent = "Hello"; // safe text
box.innerHTML = "&lt;strong&gt;Hi&lt;/strong&gt;"; // parses HTML</pre>
<table>
  <tr><th>Property</th><th>Effect</th></tr>
  <tr><td>textContent</td><td>Raw text, no HTML parsing</td></tr>
  <tr><td>innerText</td><td>Visible text, CSS-aware (slower)</td></tr>
  <tr><td>innerHTML</td><td>Serialize / parse HTML</td></tr>
</table>
<div class="warn"><strong>XSS:</strong> never assign user input to <code>innerHTML</code>. Prefer <code>textContent</code> or <code>createElement</code>.</div>`,
      `<p class="lead">DOM شجرة الكائنات التي يبنيها المتصفح من HTML. جافاسكريبت يقرأها ويغيّرها.</p>
<pre>el.textContent = "مرحبا"; // نص آمن
el.innerHTML = "&lt;b&gt;Hi&lt;/b&gt;"; // يفسّر HTML</pre>
<div class="warn">لا تضع مدخلات المستخدم في <code>innerHTML</code> (خطر XSS).</div>`
    ),
  },
];
