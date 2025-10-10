document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
  
    // Lire le thème stocké
    let theme = localStorage.getItem("theme") || "auto";
    applyTheme(theme);
  
    btn.addEventListener("click", () => {
      if (theme === "dark") theme = "light";
      else theme = "dark";
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    });
  
    function applyTheme(mode) {
      if (mode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        btn.textContent = "🌙";
      } else if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        btn.textContent = "☀️";
      }
    }
  });
  
  
  
  const students = [
    {
        name: "Sung Jin-Woo",
        photo: "img/jinwoo.png",
        role: "Chasseur de rang S, ombre et chef des Shadow Soldiers",
        email: "sung.jinwoo@huntersguild.com",
        github: "https://github.com/GitEnMain",
        web: "https://fr.wikipedia.org/wiki/Solo_Leveling",
        tech: ["Invocation d'ombres", "Combat rapproché", "Leadership"],
        bio: "De faible chasseur E à monarque surpuissant, il incarne l’ascension ultime."
      },
      {
        name: "Taro Sakamoto",
        photo: "img/sakamoto.png",
        role: "Ancien tueur à gages légendaire devenu épicier de quartier",
        email: "taro.sakamoto@sakamotoshop.com",
        github: "https://github.com/GitEnMain",
        web: "https://fr.wikipedia.org/wiki/Sakamoto_Days",
        tech: ["Arts martiaux", "Armes improvisées", "Discrétion absolue"],
        bio: "Paisible père de famille... sauf quand sa boutique ou ses proches sont menacés."
      },      
      {
        name: "Donnie Thornberry",
        photo: "img/Donnie.png",
        role: "Enfant sauvage adopté par les Delajungle",
        email: "donnie@cocotier.com",
        github: "https://github.com/GitEnMain",
        web: "pages/Arduino/arduino.html",
        tech: ["Agilité jungle", "Énergie infinie", "JavaScript"],
        bio: "Un mélange unique de cris, d’énergie et d’instinct animal."
      },
      {
        name: "Priam Zolex",
        photo: "img/frieren.jpg",
        role: "Maitre Capybara, Papa de 11 enfant",
        email: "zolexdb@gmail.com",
        github: "https://github.com/Priammm",
        web: "pages/Microprocesseur/index.html",
        tech: ["Singe suprême", "Angles morts", "Coup de pression du daron"],
        bio: "Singe de 15 mêtre de haut et Maitre des Capybara"
      },      
      {
        name: "Kelan Martvill",
        photo: "img/JAN LASSAL.jpeg",
        role: "Un gars qui essaye de réussir, Célibataire depuis 1874",
        email: "kelanbvs60@gmail.com",
        github: "https://github.com/Klequette307",
        web: "pages/Buzzer/buzzer.html",
        tech: ["Glandeur professionel", "I'M BATMAN", "La soudure c cool"],
        bio: "Perso je m'en fiche des consoles next gen, j'ai la PS3"
      },
      { 
        name: "K̵̢̢̨̛̛̛̛̛̛̫͈̪̺̜͕̪̦͕͚̙̘̞͆̀̂́̋̎̒̾͆͗̓̓͂̑̋̑̄͛̌͂̉̉̒̈́̇͛́̓́̽̄̇͒̎͑̒̍̀͑͊́͊̒̀̾̅͆͒́̀͆̅̂͒̊̅̿̈̀̽͊́̿̌̄͂̒͌̄̎͌͗̇͂͊̍̒̔̌̿̎͋́̊̍̌́̀̑́̿͊̂̆͒͒͊͊̑́̽̓͂̿̃́̀͌̉̑́͐̋̆̎̒̊̈́͌́̑̉͛̊̀̃̽̓̔̆̽̐͐̑̿̐͑͋̂̾̇͑͌̒̂͌̐̈́́̍̇̽̆́̄͗̑̅͊͋̀͗͂̈́̒́̔̀̋̆́͌̅́̒̈́̔̆̈́̈́̍̂̅̈́̿̔̀̓̕͘̚̚̕͘͘͘͘̕͘̕̚͝͝͝͠͠͠͝͝͝͝͠ȩ̶̢̧̨̧̨̧̛̛͖̤͓̲̹̹͈̜̠̭̲̮̠̲̟̯̖͓̞̦̮̣̞͉͈̤̺͚̼́͋̅͊́̏͐̈̃̔͌̊̃̍̋̀̊̍͐̋̇̽̓͌́͌̉́̎̄́̍͒́̒͌̎͌̋̕̚͝͝͠͠ͅͅn̷̨̧̢̨̧̨̡̧̡̧̢̢̧̧̢̛̛̛̗̠̳͓̟͕̪̹̱͎̜̙̜̱̹͙̪͇̺̜͕̯͚͓̩̰̺͓̙̭̙̮̮̻͇̺̻̝͓̠̮̫̮̗̼̣̗̞̮̻͕̠͈̘͚̦̰̰̼̺̣̫̹̖̘̙̯̹̭͍̜͍̲̻̞̭̖͙͉̖͕͙̞̮̹̮̘̙̣̦̫̻̺̙̤̹̙͎̰̮̝͎̖͈̦̣̥̯͎͇̲̠̪̞̱̩͖̪̞͎̣̣̩̗̖̟̥̖̯̤̬͈̱̞̝̗̳̩̤̞̱̹̖̤̩̥͚̳̰̟̦̜͓̙̲͉̖̞͓̙̖̤̻̳̺̺̠̋̿̑͒̃̾̀̑̓̆͗͑̈́̔̆̄̒̈́͒̈͐̑̏̎͊̄̈̏̑͐̂͊̂͛̈̀̆́̔̅͛̅̒͊̉̇̊̈́̄͐́̽̀̇͋̄́͌̒̈́̒̿͑̊̔̆͆͒͊̄́̅͋̍̌̒͆̄͗̅̑̐̇͆̔̈̍͑́͆̀̉̃̂͒͋̏̈͊́̔̇̍̊̂͌̐̀͒̌̀̍̿̌̄̾̓͛͌̀̈͋̾͌̀͆̉̈́̂̑́̃̎̎̑̿̈́̀̈͌͒̇̍̄̀̈̈́̈́͂̆̌́̍̈́̿͒̓̎̆͌͑̊̈̄̅͛̌̓̒̇́͘̚͘̕͘̕͘̕̚̕̚̕͘̕͘͘͘̕̚͘͘͘͜͜͜͜͠͝͝͝͝͝͝͠͝͝͠͝͝͝͠͠͠͝͠͠͠ͅͅͅͅͅȧ̶̛̛̛̛̻̺̹̱͍̘̦͍̖̥̰̤̳̦̩͚̱͔̞͉̘̊̀̍̔̆̀̿̎̒̽̇̈́͋́̋̃͗̄̃̐͂͋̐͛̋̍́̄͋̈́̾̈͑̎̓̑͌̄̓̔͆͐͛̇̌́̿͌͑͋̀́̑͛̿̄̀̆͗́͂̓̍̿́̀́̎́͂̆̏͊̆̏̄̔̏̊̊̾̾̽̅̎̓̐͆̃͋̀̂̑̎̾̀̅̃̈́̋̈̿̉̐́̃̀̓̾̃̃̒̌̈́̽̿̉̄́͛̀̉̈̓̌̊̓̈̀̽̉͐̅̃̇̋̐̐́̂̈́̏̃̌̔̎̾̎͗͐͋͆̆̄̌̇̈́̿̅̓͗̉̏̎̓̀̽̅͒̓͗̄͌͐̾̈͒̌̎͛̀̆̄̾̅̑̾̇̀̍̉̀̓̋͑̂̆́̈́͛̓̑͐̀̏̇̽̀͂͆͒͐̀̓̔̎̊̽̎͑̽͌̏̄͐̃̽͗̽̚̚͘̚̚̕̚̕͘̕͘̚͘͘̚͘͝͝͝͝͝͠͝͠͠͝͠͝͝͝͝͠͝͠n̵̡̧̢̨̡̡̡̧̢̛̛̛͕̦̠̩̝͖͕͇̣̜̖̬̝͔̺̩͓̺̮̺̖̤̩̥̘̣̝̯͎̯̻̪̥̱̬̤͙̝̖̞͚͍̰͉͎̗̳͈͉̳͉̣̠̫̮͚͓̯̰̺̗̥͖̘͖̘̘͉̲̙̳̝̳̹̪̲̮̻͚͎̮̦͖̫͙͔̠͉̰̻̤̲͚͍͎̖͔͔̼̭̜͛̅̾̿͗͋̋̅̾͋͑̅̇̌̓̈̅̑̓̂͑̽͊̿́̈͒̀̿̆̐͌͊̇̈̉̓͌̄̒́̎̂̓͂̊͆̋̓͛͛́̂̀̉̈́̎͐̇͗̑̒̇̆͆̈́̈̍̔͂̌̓̈͐͒̈́̃͆̿̍̊̇͑̓̌̇̑̈́̂̓̐̿̑͒̂͑͒́͛̈́̆͋͆̋̀̀̊̈̔̄͆́̓̏̓͊̓̇̊̿̾̂̊̌̚͘̚͘̚̚͜͜͜͜͠͠͝͠͠͠͝͠͝͝ͅͅͅͅͅ",
        name: "Kénan 01234567891011121314151617181920",
        photo: "pages/Condensateur/img/otronic-10x-condensateur-1uf-50v-electrolytique-el.webp",
        role: "codeur html css et js",
        email: "mailer-daemon@googlemail.com",
        github: "https://github.com/01234567891011121314151617181920",
        web: "pages/Condensateur/index.html",
        tech: ["Windows NT", "DOS", "Linux", "FreeBSD", "QNX", "AmigaOS", "AIX", "NeXTSTEP", "OS/2", "Android", "iOS/iPadOS"],
        bio: "0x0000007B (INACCESSIBLE_BOOT_DEVICE)"
      },
      {
        name: "Valentin Yomi",
        photo: "img/gojo.jpg",
        role: "Singe Grand, Spikeur et bloqueur",
        email: "lelouis.carter@gmail.com",
        github: "https://github.com/EZYomi",
        web: "pages/Led/index.html",
        tech: ["Block dans tes chicos", "Smashhhhhh", "Miaoumax"],
        bio: "Oue pas mal"
      },
      {
      name: "Mr-LucGour",
      photo: "img/songoku.png",
      role: "Combattant de Tilted Tower",
      email: "lucasgourdain772@gmail.com",
      github: "https://github.com/MR-LucGour",
      web: "pages/Carte-Reseaux/index.html",
      tech: ["Rapidité , pro builder , fragger/igl , Trop fort au snipe "],
      },
      {
        name: "Noah shinigami",
        photo: "img/ichigo.jpg",
        role: "Arracheur d'Hollow",
        email: "brayannabassa@gmail.com",
        github: "https://github.com/noahabassa-bot",
        web: "pages/Led/index.html",
        tech: ["Bankai", "Bankai", "White"],
        bio: "Shinigami remplacant"
      },   
      {
        name: "Enzo Salutoi",
        photo: "img/black.jpg",
        role: " Dernier Dieu en vie, veut accomplir son plan Zéro Humains",
        email: "lethiaisenzo@gmail.com",
        github: "https://github.com/salutoi3008",
        web: "",
        tech: ["Super sayan rosé", "Super Kaméhaméha black rosé", "Fusion Potalas"],
        bio: "Dieu maléfique voulant exterminé la totalité de l'humanité pour que seuls les êtres parfaits existes"
      },
      {
        name: "Ethan Ahriman",
        photo: "img/ahriman.jpg",
        role: "architecte de châteaux de sable",
        email: "lebel.ethan.pro@gmail.com",
        github: "https://github.com/lebelethan",
        web: "",
        tech: ["Astartes Ridiculous","debilus primus"],
        bio: "Ouga bouga mon cerveau c'est de la grosse purée waagh"
      },
      {
<<<<<<< HEAD
        name: "Amine Uchiha",
        photo: "img/Obitolegoat.jpg",
        role: "Chef manipulateur de l'Akatsuki; Détenteur du pouvoir du Rikudo",
        email: "obito.uchiha@konoha.com",
        github: "https://github.com/sahbi60",
        web: "pages/resistor/resistor.html",
        tech: ["Sharingan; Mangekyo Sharingan; Kamui; Genjutsu; Taijutsu; Senjutsu; Izanagi"],
        bio: "De héros brisé à empereur masqué, il a manipulé les ombres et fait plier le monde à sa volonté"
      }
=======
<<<<<<< HEAD
        name: "Halil-Enes Kuzu",
        photo: "img/TK.jpg"
        role: "On est 55 Milliards sur Terre",
        email: "abch.70.234.5@gmail.com",
        github: "https://github.com/CO6z",
        web: "",
        tech: ["j'avais le rouleau de pq collé au cul fdp"],
        bio: "jchuis parti comme un clochard"
      },
>>>>>>> ace04dca86b22cc924bacab221b2302816babfa0

=======
        name: "Antony daiki",
        photo: "img/daiki.jpg",
        role: "le maitre du basket",
        email: "babahomer98@gmail.com",
        github: "https://github.com/babahomer1",
        web: "",
        tech: ["le plus fort","prodiges"],
        bio: "le seul qui puisse me battre,c'est moi même"
      },
>>>>>>> d358de3b246d0e9d1234ad95910cc341f6ff8686
  ];
  
  
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const sanitize = (s='') => String(s).replace(/[<>]/g, ch => ({'<':'&lt;','>':'&gt;'}[ch]));
  
  function initials(name) {
    const parts = String(name || '').trim().split(/\s+/).slice(0,2);
    return parts.map(p => p[0] ? p[0].toUpperCase() : '').join('');
  }
  
  function colorFrom(name) {
   
    let h=0; for (let i=0;i<name.length;i++) h = (h*31 + name.charCodeAt(i))>>>0;
    const hue = h % 360;
    return `linear-gradient(135deg, hsl(${hue} 90% 55%), hsl(${(hue+60)%360} 90% 55%))`;
  }
  
  function cardTemplate(p){
    const name = sanitize(p.name || 'Inconnu');
    const role = sanitize(p.role || 'Étudiant(e) BTS CIEL');
    const tech = (p.tech||[]).slice(0,5).map(t=>`<span class="tag">${sanitize(t)}</span>`).join('');
  
    const img = p.photo ? `<img src="${sanitize(p.photo)}" alt="Photo de ${name}" onerror="this.remove();this.closest('.avatar').dataset.fallback='1'">` : '';
    const email = p.email ? `<a class="btn" href="mailto:${sanitize(p.email)}" title="Envoyer un email">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 6h18v12H3z" stroke="currentColor" stroke-width="2"/>
        <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2"/>
      </svg> Email</a>` : '';
    const gh = p.github ? `<a class="btn" target="_blank" rel="noopener" href="${sanitize(p.github)}" title="Profil GitHub">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.11.82 2.24l-.01 3.32c0 .32.21.7.82.58A12 12 0 0012 .5z"/>
      </svg> GitHub</a>` : '';
    const web = p.web ? `<a class="btn" href="${sanitize(p.web)}" title="Page Web">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" stroke-width="2"/>
      </svg> Web</a>` : '';
    
  
    return `
      <article class="card" tabindex="0">
        <div class="card-head">
          <div class="avatar" style="background:${colorFrom(name)}" data-name="${name}">${img || `<span>${initials(name)}</span>`}</div>
          <div>
            <h3>${name}</h3>
            <div class="role">${role}</div>
          </div>
        </div>
        <div class="tags">${tech || ''}</div>
        <div class="bio">${sanitize(p.bio || '')}</div>
  
        <div class="card-footer">
          <div class="btn-row space-between">${email} ${gh}</div>
          <div class="btn-row center">${web}</div>
        </div>
      </article>`;
  }
  
  function render(list){
    const el = document.getElementById('list');
    el.innerHTML = list.map(cardTemplate).join('');
    document.getElementById('empty').hidden = list.length !== 0;
  }
  
  function filter(q){
    const s = q.trim().toLowerCase();
    if(!s) return students;
    return students.filter(p => {
      const hay = [p.name, p.role, p.bio, ...(p.tech||[])].join(' ').toLowerCase();
      return hay.includes(s);
    });
  }
  
  
  window.addEventListener('keydown', (e)=>{
    if(e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)){
      e.preventDefault(); document.getElementById('q').focus();
    }
  });
  
  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('q').addEventListener('input', (e)=> render(filter(e.target.value)));
    render(students);
  });
  
  
  document.addEventListener('error', (e)=>{
    const img = e.target;
    if(img.tagName === 'IMG'){
      const wrap = img.closest('.avatar');
      if(wrap){
        const name = wrap.dataset.name || '';
        wrap.innerHTML = `<span>${initials(name)}</span>`;
        wrap.style.background = colorFrom(name);
      }
    }
  }, true);
  
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
  
    // Lire le thème stocké
    let theme = localStorage.getItem("theme") || "auto";
    applyTheme(theme);
  
    btn.addEventListener("click", () => {
      if (theme === "dark") theme = "light";
      else theme = "dark";
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    });
  
    function applyTheme(mode) {
      if (mode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        btn.textContent = "🌙";
      } else if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        btn.textContent = "☀️";
      }
    }
  });
  