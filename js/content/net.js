function t(fr, en, ar) {
  return { fr, en, ar };
}

export const net = [
  {
    id: "web-internet",
    group: "net",
    title: t("Web vs Internet", "Web vs Internet", "الويب مقابل الإنترنت"),
    html: t(
      `<p class="lead">Ce ne sont pas des synonymes. Le Web est un <strong>service</strong> qui tourne sur Internet, comme l’e-mail ou les jeux en ligne.</p>
<h2>Internet — l’infrastructure</h2>
<p>Réseau mondial de réseaux interconnectés via TCP/IP : câbles sous-marins, fibres, satellites, routeurs, data centers, FAI, IXP.</p>
<ul>
  <li>1969 : ARPANET</li>
  <li>1974 : TCP (Vint Cerf, Bob Kahn)</li>
  <li>1983 : TCP/IP standard → Internet moderne</li>
  <li>1990s : grand public</li>
</ul>
<p>Services sur Internet : Web (80/443), e-mail (SMTP/IMAP), FTP, SSH, DNS, VoIP, jeux UDP, BitTorrent, Tor…</p>
<p>Analogie : Internet = réseau routier mondial.</p>
<h2>Web — le service le plus populaire</h2>
<p>World Wide Web : documents hypertextes via HTTP/HTTPS, URL, HTML, navigateur, serveur web (Apache, Nginx), moteurs de recherche, DNS.</p>
<ul>
  <li>1989 : Tim Berners-Lee, CERN</li>
  <li>1991 : premier site info.cern.ch</li>
  <li>1993 : Mosaic</li>
</ul>
<p>Analogie : Web = camions de livraison sur les routes d’Internet.</p>
<table>
  <tr><th></th><th>Internet</th><th>Web</th></tr>
  <tr><td>Nature</td><td>Infrastructure</td><td>Service</td></tr>
  <tr><td>Date</td><td>1969 (ARPANET)</td><td>1989 (CERN)</td></tr>
  <tr><td>Protocole</td><td>TCP/IP</td><td>HTTP/HTTPS</td></tr>
  <tr><td>Sans l’autre</td><td>Peut exister sans le Web</td><td>Ne peut pas exister sans Internet</td></tr>
</table>
<div class="tree">Internet ⊃ Web
Internet = { Web, Email, FTP, SSH, DNS, VoIP, Jeux, Tor, … }</div>
<h2>Internet sans Web</h2>
<p>E-mail SMTP, WhatsApp, jeu en ligne, SSH, FTP, Spotify (protocole dédié), Tor.</p>
<h2>Pourquoi la confusion</h2>
<p>Le Web a popularisé Internet ; le navigateur est un couteau suisse ; on dit « surfer sur Internet » alors qu’on surf sur le Web. Un FAI vend « l’Internet » alors que tu consommes surtout le Web.</p>
<div class="warn">« Internet est en panne » : souvent c’est le DNS ou un site. WhatsApp peut marcher pendant que Google ne charge pas.</div>`,
      `<p class="lead">Not synonyms. The Web is a <strong>service</strong> that runs on the Internet, like email or online games.</p>
<p><strong>Internet</strong>: worldwide network of networks on TCP/IP — cables, routers, ISPs. Origin: ARPANET (1969), TCP/IP (1983).</p>
<p><strong>Web</strong>: hypertext documents over HTTP/HTTPS, invented by Tim Berners-Lee at CERN (1989). Analogy: Internet = roads; Web = delivery trucks.</p>
<table>
  <tr><th></th><th>Internet</th><th>Web</th></tr>
  <tr><td>Nature</td><td>Infrastructure</td><td>Service</td></tr>
  <tr><td>Protocol</td><td>TCP/IP</td><td>HTTP/HTTPS</td></tr>
  <tr><td>Without the other</td><td>Can exist without the Web</td><td>Cannot exist without Internet</td></tr>
</table>
<div class="warn">“Internet is down” is often DNS or a website. Chat apps may still work.</div>`,
      `<p class="lead">ليسا مترادفين. الويب <strong>خدمة</strong> تعمل فوق الإنترنت مثل البريد والألعاب.</p>
<p>الإنترنت بنية TCP/IP العالمية (طرق). الويب وثائق تشعبية عبر HTTP (شاحنات). الويب يحتاج الإنترنت، والإنترنت لا يحتاج الويب.</p>
<div class="warn">«الإنترنت معطّل» غالبًا يعني الموقع أو DNS. واتساب قد يعمل بينما غوغل لا يفتح.</div>`
    ),
  },
  {
    id: "domain",
    group: "net",
    title: t("Domaine, extension, URL", "Domain, extension, URL", "النطاق والامتداد وURL"),
    html: t(
      `<p class="lead">Un <strong>nom de domaine</strong> est une adresse lisible qui identifie un site ou un service. Au lieu de <code>142.250.201.78</code> tu retiens <code>google.com</code>.</p>
<p>Analogie : domaine = nom de la maison ; IP = coordonnées GPS ; DNS = annuaire.</p>
<h2>Structure (droite → gauche)</h2>
<pre>www.monblog.example.com
.com     → TLD (extension)
example  → SLD (ce que tu achètes)
monblog  → sous-domaine
www      → hôte</pre>
<p>Tu achètes <code>example.com</code>. Tu crées gratuitement <code>www</code>, <code>api</code>, <code>mail</code> dans le DNS.</p>
<h2>Types de TLD</h2>
<table>
  <tr><th>Type</th><th>Exemples</th></tr>
  <tr><td>gTLD</td><td>.com .org .net</td></tr>
  <tr><td>ccTLD pays</td><td>.fr .dz .ma .tn</td></tr>
  <tr><td>Sponsorisés</td><td>.edu .gov .mil</td></tr>
  <tr><td>new gTLD</td><td>.app .dev .io .ai</td></tr>
  <tr><td>IDN</td><td>.中国 .شبكة</td></tr>
  <tr><td>Tor</td><td>.onion (pas un TLD ICANN classique)</td></tr>
</table>
<p>Pourquoi tant d’extensions ? Espace de noms, usages (commerce, asso, geo, tech), marketing, disponibilité des noms courts.</p>
<h2>URL</h2>
<pre>https://www.example.com:443/path/page?query=1#section
 protocole   domaine     port chemin   requête  ancre</pre>
<table>
  <tr><th>Terme</th><th>Exemple</th></tr>
  <tr><td>Domain</td><td>google.com</td></tr>
  <tr><td>IP</td><td>142.250.201.78</td></tr>
  <tr><td>URL</td><td>https://google.com/search?q=test</td></tr>
  <tr><td>Hostname</td><td>www, mail, api</td></tr>
  <tr><td>FQDN</td><td>www.google.com.</td></tr>
</table>
<h2>Qui gère</h2>
<p>ICANN → IANA → registries (Verisign .com, AFNIC .fr) → registrars (OVH, Namecheap, Gandi) → toi (registrant). Tu <strong>loues</strong> un droit annuel, tu ne possèdes pas le nom pour toujours.</p>
<div class="warn">Oublier le renouvellement = perte du domaine (squatteurs possibles).</div>`,
      `<p class="lead">A <strong>domain name</strong> is a human-readable address. You remember <code>google.com</code> instead of an IP.</p>
<pre>www.blog.example.com
.com → TLD
example → SLD (what you buy)
blog / www → subdomains you create in DNS</pre>
<p>Why so many TLDs? Namespace, geography, industry, branding, availability.</p>
<pre>https://www.example.com:443/path?q=1#top
protocol   domain        port path query fragment</pre>
<p>ICANN / IANA → registries → registrars → you. You <strong>rent</strong> the name yearly.</p>`,
      `<p class="lead">اسم النطاق عنوان مقروء بدل رقم IP. تشتري <code>example.com</code> وتنشئ <code>www</code> و<code>api</code> مجانًا.</p>
<p>الامتداد (TLD): ‎.com تجاري، ‎.dz دولة، ‎.dev تقني، ‎.onion لشبكة تور. كثرة الامتدادات = مساحة أسماء وتسويق وجغرافيا.</p>
<p>تستأجر النطاق سنويًا عبر مسجّل (registrar)، ولا تمتلكه إلى الأبد.</p>`
    ),
  },
  {
    id: "dns",
    group: "net",
    title: t("DNS", "DNS", "DNS"),
    html: t(
      `<p class="lead">Le DNS (Domain Name System) est l’annuaire d’Internet : il traduit un nom en adresse IP.</p>
<pre>1. Cache navigateur / OS
2. Résolveur (FAI ou 8.8.8.8)
3. Serveurs racine (.)
4. Serveurs TLD (.com)
5. Serveurs autoritaires (google.com)
→ 142.250.201.78</pre>
<table>
  <tr><th>Record</th><th>Rôle</th></tr>
  <tr><td>A</td><td>Nom → IPv4</td></tr>
  <tr><td>AAAA</td><td>Nom → IPv6</td></tr>
  <tr><td>CNAME</td><td>Alias vers un autre nom</td></tr>
  <tr><td>MX</td><td>Serveur mail</td></tr>
  <tr><td>TXT</td><td>SPF, vérifications</td></tr>
  <tr><td>NS</td><td>Délégation DNS</td></tr>
  <tr><td>SOA</td><td>Métadonnées de zone</td></tr>
</table>
<p>TTL = durée de cache. Sans DNS tu peux encore joindre une machine par IP brute (sauf SNI/certificats et virtual hosts qui exigent le nom).</p>`,
      `<p class="lead">DNS is the Internet phone book: name → IP.</p>
<p>Lookup path: browser cache → OS → resolver (ISP or 8.8.8.8) → root → TLD → authoritative nameservers.</p>
<p>A/AAAA map to IPv4/IPv6. CNAME aliases. MX mail. TXT policy. NS delegation.</p>`,
      `<p class="lead">DNS دليل الإنترنت: الاسم → IP. المسار: كاش المتصفح ثم المزود ثم الجذر ثم TLD ثم خوادم الاسم المعتمدة.</p>
<p>سجل A لـ IPv4 وAAAA لـ IPv6 وMX للبريد.</p>`
    ),
  },
  {
    id: "ip",
    group: "net",
    title: t("Adresse IP", "IP address", "عنوان IP"),
    html: t(
      `<p class="lead">Une adresse IP identifie une interface sur un réseau IP. Sans IP, pas de routage Internet.</p>
<table>
  <tr><th></th><th>IPv4</th><th>IPv6</th></tr>
  <tr><td>Taille</td><td>32 bits (4 octets)</td><td>128 bits</td></tr>
  <tr><td>Exemple</td><td>192.168.1.10</td><td>2001:0db8::1</td></tr>
  <tr><td>Pourquoi v6</td><td>Pénurie d’adresses v4</td><td>Espace immense</td></tr>
</table>
<h2>Publique vs privée</h2>
<p>Privée (LAN, RFC1918) : <code>10.x</code>, <code>172.16–31.x</code>, <code>192.168.x</code> — non routable sur Internet public. Publique : visible sur Internet (souvent celle de ta box / NAT).</p>
<h2>Statique vs dynamique (DHCP)</h2>
<p>DHCP assigne une IP temporaire. Statique : serveur, imprimante.</p>
<h2>NAT</h2>
<p>Plusieurs appareils chez toi partagent <strong>une</strong> IP publique. Le routeur traduit les ports. D’où : tu n’es pas « une IP = un PC » sur Internet résidentiel.</p>
<h2>Géolocalisation</h2>
<p>Une IP publique donne une localisation <em>approximative</em> (ville, FAI). VPN / proxy / Tor masquent ou déplacent ce point de sortie — usages légitimes (vie privée, journalisme) et abus existent. Ce cours n’explique pas comment commettre des infractions.</p>
<div class="note">localhost <code>127.0.0.1</code> (IPv6 <code>::1</code>) = ta propre machine, boucle locale.</div>`,
      `<p class="lead">An IP address identifies an interface on an IP network.</p>
<p>IPv4: 32-bit (<code>192.168.1.10</code>). IPv6: 128-bit. Private LAN ranges are not routed on the public Internet. DHCP assigns dynamic addresses. NAT lets many devices share one public IP.</p>
<p>A public IP can hint at coarse geolocation. VPN/proxy/Tor change the apparent exit. This course does not cover criminal use.</p>
<p><code>127.0.0.1</code> is yourself (loopback).</p>`,
      `<p class="lead">عنوان IP يُعرّف واجهة على شبكة. IPv4 أربعة بايتات، IPv6 128 بتًا.</p>
<p>الخاص (192.168…) للشبكة المنزلية. العام يظهر على الإنترنت. DHCP يعطي عنوانًا مؤقتًا. NAT يجعل أجهزة كثيرة تشارك IP عامًا واحدًا.</p>
<p><code>127.0.0.1</code> هو جهازك نفسه.</p>`
    ),
  },
  {
    id: "pc-connect",
    group: "net",
    title: t("PC1 ↔ PC2 : comment ça se connecte", "PC1 ↔ PC2: how they connect", "اتصال PC1 ↔ PC2"),
    html: t(
      `<p class="lead">Sur le web « normal », deux machines ont besoin d’identifiants réseau et d’un protocole d’application.</p>
<h2>Ingrédients</h2>
<ul>
  <li><strong>IP</strong> de chaque hôte (ou NAT au milieu)</li>
  <li><strong>DNS</strong> si tu tapes un nom (pas obligatoire si tu as l’IP)</li>
  <li><strong>TCP/IP</strong> en dessous</li>
  <li><strong>Port</strong> : 80 HTTP, 443 HTTPS, 22 SSH, 53 DNS</li>
  <li><strong>Routeur / passerelle</strong> si les PC ne sont pas sur le même LAN</li>
</ul>
<div class="tree">PC1 → DNS (nom → IP) → routeur → Internet → routeur → PC2:443
         HTTP requête
PC1 ←——————————————— réponse HTML/JSON</div>
<h2>Même Wi-Fi (LAN)</h2>
<p>Souvent IP privée + switch/Wi-Fi suffisent. ARP (couche 2) résout IP → MAC. Pas besoin d’Internet.</p>
<h2>À travers Internet</h2>
<p>Paquets IP hop-by-hop via des routeurs. TCP établit une session (handshake SYN / SYN-ACK / ACK) puis HTTP s’y embarque. TLS (HTTPS) chiffre.</p>
<h2>Modèle client-serveur</h2>
<p>Le navigateur (client) initie. Le serveur écoute un port et répond. P2P (BitTorrent) est un autre modèle.</p>`,
      `<p class="lead">On the normal Web, two machines need network identifiers and an application protocol.</p>
<ul>
  <li>IP (or NAT in the middle)</li>
  <li>DNS if you type a name (optional if you have the IP)</li>
  <li>TCP/IP underneath</li>
  <li>Port: 80, 443, 22, 53…</li>
  <li>Router/gateway if they are not on the same LAN</li>
</ul>
<p>Same Wi-Fi: private IPs + ARP (IP → MAC), no Internet required. Across the Internet: hop-by-hop routers, TCP handshake, then HTTP, often TLS.</p>
<p>Client-server: the browser initiates; the server listens. P2P is a different model.</p>`,
      `<p class="lead">على الويب العادي يحتاج الجهازان إلى IP (أو NAT) وTCP ومنفذ مثل 443. DNS إن كتبت اسمًا. راوتر إن لم يكونا في نفس الشبكة المحلية.</p>
<p>في المنزل: IP خاص وARP. عبر الإنترنت: قفزات موجهات ثم مصافحة TCP ثم HTTP/HTTPS.</p>`
    ),
  },
  {
    id: "osi",
    group: "net",
    title: t("OSI, TCP/IP, ports", "OSI, TCP/IP, ports", "OSI وTCP/IP والمنافذ"),
    html: t(
      `<p class="lead">Pour ne plus mélanger « câble », « IP » et « HTTP ».</p>
<table>
  <tr><th>OSI</th><th>Idée</th><th>Exemple</th></tr>
  <tr><td>7 Application</td><td>Ce que l’app parle</td><td>HTTP, DNS, SMTP</td></tr>
  <tr><td>4 Transport</td><td>Ports, fiabilité</td><td>TCP, UDP</td></tr>
  <tr><td>3 Réseau</td><td>Adresses, routage</td><td>IP, ICMP</td></tr>
  <tr><td>2 Liaison</td><td>Trames locales</td><td>Ethernet, Wi-Fi, ARP</td></tr>
  <tr><td>1 Physique</td><td>Signaux</td><td>Fibre, radio</td></tr>
</table>
<p>Pile TCP/IP simplifiée : Application → Transport → Internet → Lien.</p>
<p>Un <strong>port</strong> distingue plusieurs services sur la même IP : <code>IP:443</code> n’est pas <code>IP:22</code>.</p>
<p>TCP : fiable, ordonné, connexion. UDP : datagrammes, plus léger (jeux, DNS, HTTP/3/QUIC au-dessus).</p>`,
      `<p class="lead">Keep cable, IP and HTTP on different layers.</p>
<p>OSI highlights: L7 HTTP, L4 TCP/UDP ports, L3 IP, L2 Ethernet/Wi-Fi, L1 fibre/radio.</p>
<p>A <strong>port</strong> multiplexes services on one IP. TCP is reliable and connected; UDP is datagram-oriented.</p>`,
      `<p>الطبقات: تطبيق (HTTP) ← نقل (TCP ومنفذ) ← شبكة (IP) ← ربط ( Ethernet) ← فيزيائي (كابل).</p>
<p>المنفذ يميّز الخدمات على نفس IP: 443 ليس 22.</p>`
    ),
  },
  {
    id: "ping",
    group: "net",
    title: t("Ping et ICMP", "Ping and ICMP", "البنغ وICMP"),
    html: t(
      `<p class="lead">Le ping est l’une des formes <strong>les plus minimales utiles</strong> de communication IP — pas le zéro absolu, mais le test de connectivité le plus connu.</p>
<h2>Ce que fait ping</h2>
<p>Protocole <strong>ICMP</strong> : Echo Request (type 8) puis Echo Reply (type 0).</p>
<pre>PC1 ---- Echo Request ----&gt; PC2
PC1 &lt;--- Echo Reply ------- PC2</pre>
<p>Deux paquets, pas de session TCP, pas de port, pas de handshake, payload minuscule, souvent répondu par le noyau (pas d’app web).</p>
<p>Analogie : crier « hey ? » et entendre « oui ? ».</p>
<h2>Encore plus minimal</h2>
<table>
  <tr><th>Niveau</th><th>Exemple</th></tr>
  <tr><td>1 paquet sans réponse</td><td>UDP vers port fermé</td></tr>
  <tr><td>2 paquets</td><td>Ping</td></tr>
  <tr><td>Couche 2</td><td>ARP (pas IP)</td></tr>
</table>
<h2>« ping true » en code</h2>
<pre>const alive = await ping("192.168.1.10");
if (alive === true) { /* Echo Reply reçu avant timeout */ }</pre>
<p>Ça <strong>prouve</strong> : pile réseau joignable, chemin aller-retour IP, machine allumée (ou au moins sa stack). Ça <strong>ne prouve pas</strong> : qu’un site web marche, qu’un port 443 est ouvert, qu’un service est sain, que la latence est bonne.</p>
<h2>Ping false</h2>
<p>Éteint, ou <strong>pare-feu qui bloque ICMP</strong> (très courant), timeout trop court, pas de route, NAT. Google peut ignorer le ping et servir HTTPS parfaitement.</p>
<h2>Escalier de diagnostic</h2>
<pre>1. ping 127.0.0.1     → ma pile TCP/IP ?
2. ping IP de la box  → LAN ?
3. ping 8.8.8.8       → Internet sans DNS ?
4. ping google.com    → DNS ?
5. curl https://…     → HTTP ?
6. test du port 443   → service TLS ?</pre>
<div class="ok">Ping = étapes 1–4, pas la fin du diagnostic web.</div>`,
      `<p class="lead">Ping is one of the most useful <strong>minimal</strong> IP checks — ICMP Echo Request + Echo Reply. No TCP session, no ports, tiny payload.</p>
<p>In code, <code>ping === true</code> means a reply arrived before timeout. It proves IP reachability, not that HTTP/443 or an app works.</p>
<p><code>false</code> may mean down, <strong>ICMP blocked</strong>, timeout, missing route, NAT. Many servers drop ping and still serve HTTPS.</p>
<pre>127.0.0.1 → stack
gateway → LAN
8.8.8.8 → Internet without DNS
google.com → DNS
curl / port 443 → the actual Web</pre>`,
      `<p class="lead">البنغ اختبار ICMP: طلب صدى ورد. شبه minimal ومشهور. ليس جلسة TCP ولا منفذًا.</p>
<p><code>true</code> يعني وصل الرد قبل المهلة: الجهاز قابل للوصول على مستوى IP. لا يثبت أن الموقع أو المنفذ 443 يعمل.</p>
<p><code>false</code> قد يعني إيقافًا أو جدارًا يمنع ICMP (شائع جدًا).</p>`
    ),
  },
];
