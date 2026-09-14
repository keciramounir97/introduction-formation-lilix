function t(fr, en, ar) {
  return { fr, en, ar };
}

export const hidden = [
  {
    id: "surface-deep-dark",
    group: "hidden",
    title: t("Surface, deep web, dark web", "Surface, deep web, dark web", "السطح والويب العميق والويب المظلم"),
    html: t(
      `<p class="lead">« Deep web » n’est pas un synonyme de criminalité. La plus grande partie du web n’est simplement pas indexée par Google.</p>
<table>
  <tr><th>Couche</th><th>Quoi</th><th>Accès</th></tr>
  <tr><td>Surface web</td><td>~ pages indexées par les moteurs</td><td>Chrome + Google</td></tr>
  <tr><td>Deep web</td><td>Non indexé : mails, banque, intranet, paywall, bases académiques</td><td>Login / URL directe — <strong>légal et banal</strong> (~95 %)</td></tr>
  <tr><td>Dark web</td><td>Sous-ensemble volontairement caché</td><td>Réseaux spéciaux (Tor, I2P…)</td></tr>
</table>
<p>Le dark web a des usages légitimes (journalistes, dissidents, vie privée) et des usages illégaux (marchés noirs). Ce site documente les concepts, pas les activités illégales.</p>`,
      `<p class="lead">“Deep web” is not a synonym for crime. Most of the web is simply not indexed by Google.</p>
<p><strong>Surface</strong>: search-indexed pages. <strong>Deep</strong>: mail, banking, intranet, paywalls — legal and ordinary. <strong>Dark</strong>: intentionally hidden networks (Tor, I2P) with both legitimate (journalism) and illegal uses.</p>
<p>This site explains concepts; it does not teach illegal activity.</p>`,
      `<p class="lead">الويب العميق ليس مرادفًا للجريمة. معظمه بريد وبنوك وإنترانت غير مفهرس — قانوني وعادي. الويب المظلم جزء مخفي عمدًا عبر شبكات مثل تور، له استخدامات مشروعة وغير مشروعة.</p>`
    ),
  },
  {
    id: "tor",
    group: "hidden",
    title: t("Tor, .onion, anonymat", "Tor, .onion, anonymity", "تور و.onion وإخفاء الهوية"),
    html: t(
      `<p class="lead">Tor (The Onion Router) fait passer le trafic par plusieurs relais chiffrés <strong>en couches</strong> (comme un oignon).</p>
<ul>
  <li>Chaque relais ne connaît que le précédent et le suivant</li>
  <li>Le site de destination voit l’IP du nœud de sortie, pas la tienne</li>
  <li>Les adresses <code>.onion</code> se résolvent <em>dans</em> Tor, pas via le DNS public ICANN</li>
</ul>
<p>Exemple pédagogique souvent cité : le service onion officiel de Facebook (adresse longue en <code>.onion</code>).</p>
<h2>VPN vs proxy vs Tor</h2>
<table>
  <tr><th></th><th>VPN</th><th>Proxy</th><th>Tor</th></tr>
  <tr><td>Confiance</td><td>Un opérateur voit tout le tunnel</td><td>Souvent un hop, parfois sans chiffrement</td><td>Relais distribués</td></tr>
  <tr><td>Vitesse</td><td>Souvent bonne</td><td>Variable</td><td>Plus lente</td></tr>
  <tr><td>But typique</td><td>Changer d’IP / LAN d’entreprise</td><td>Filtrage, cache, un hop</td><td>Anonymat réseau fort</td></tr>
</table>
<div class="warn">Aucun outil n’est magique : un login nominatif, un paiement, ou du malware cassent l’anonymat. Tor Browser ≠ « invisible pour toujours ».</div>
<div class="info">Les relais Tor sont des volontaires. Le protocole onion n’est pas le HTTP classique : c’est un routage overlay par-dessus Internet.</div>`,
      `<p class="lead">Tor (The Onion Router) wraps traffic in layered encryption across several relays. Each relay only knows the previous and next hop. Destination sites see the exit node IP, not yours.</p>
<p><code>.onion</code> names resolve inside Tor, not on public ICANN DNS.</p>
<p>VPN: you trust one operator. Proxy: often one hop. Tor: distributed relays, slower, stronger network anonymity — still broken by accounts, payments, or malware.</p>
<p>This is conceptual documentation, not a crime guide.</p>`,
      `<p class="lead">تور يمرّر الحركة عبر عدة مرحلات مشفّرة طبقات. كل مرحل يعرف السابق والتالي فقط. عناوين ‎.onion تُحل داخل تور لا عبر DNS العام.</p>
<p>VPN = ثقة بمُشغّل واحد. تور = إخفاء أقوى وأبطأ. لا أداة سحرية إذا سجّلت بحسابك الحقيقي.</p>`
    ),
  },
];
