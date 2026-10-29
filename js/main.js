/* =========================================================
   Jella Mae Calupit — Portfolio interactions
   ========================================================= */

/* ---------- Edit your projects here ---------- */
// image: the cover screenshot in assets/work/… (see assets/work/README.md).
// imageCap: optional caption for the cover in the pop-up (defaults to the title).
// gallery: optional extra screenshots shown in the pop-up, each [file, caption].
// desc: the overview, shown on the card and as the first paragraph of the pop-up.
// details: optional pop-up sections after the overview, each { h: heading, p: paragraph, ul: [items], ol: [steps] }.
// Until an image file exists, the drawn "mock" placeholder is shown instead.
const PROJECTS = [
  {
    title: "SorSUpport",
    featured: true, // shown in "Featured Projects" on the home page (max 3 per tab)
    cat: "dev",
    label: "Ticketing System",
    image: "assets/work/development/sorsupport/mockup.png",
    imageCap: "SorSUpport Login Page",
    logo: "assets/work/development/sorsupport/logo.png", // shown on the Live demo button
    gallery: [
      ["assets/work/development/sorsupport/admin dashboard.png", "Administrator Dashboard"],
      ["assets/work/development/sorsupport/ticket details.png", "Administrator Ticket Page and Details"],
      ["assets/work/development/sorsupport/student mockup.png", "Student Account Overview"],
      ["assets/work/development/sorsupport/recipient mockup.png", "Recipient Account Overview"],
    ],
    mock: "dash",
    year: "2026",
    role: "Full-Stack Developer & QA Tester",
    desc: "SorSUpport joins “SorSU” (Sorsogon State University) and “support”, meaning help for students with their concerns. It is a web-based complaint ticketing system for SorSU – Bulan Campus. Students submit their concerns online, the Student Development Services (SDS) Office sends each one to the college or office that can act on it, and every step is tracked until the concern is resolved and closed. It follows the procedures of the SorSU Student Handbook (Revised 2024).",
    details: [
      { h: "Who uses it", ul: [
        "<b>Students</b> submit concerns with attachments, hiding their identity if they need to. They follow the progress, talk with the handler, accept the resolution or ask for further action, and rate how it was handled.",
        "<b>Recipients</b> (college or office staff) acknowledge the tickets assigned to them, talk with the student and record the resolution.",
        "<b>SDS Administrators</b> review new tickets, assign, escalate or refer them, close them, and manage accounts, settings, analytics and the audit trail.",
      ] },
      { h: "How a concern is handled", ol: [
        "A student submits a ticket under a category, with the details and any files.",
        "The SDS Office reviews it, asks for clarification if needed, and assigns it to the office that can act on it.",
        "The office acknowledges the ticket and works it out with the student in the ticket's message thread.",
        "If it stalls, the SDS Office escalates it along the category's escalation path or refers it to a committee, while reminder emails go to whoever has to act next.",
        "Once it is resolved, the student accepts the outcome or asks for further action, and the ticket is closed.",
      ] },
      { h: "Key features", ul: [
        "Confidential and anonymous tickets: sensitive cases are visible only to the SDS Office and the assigned handler.",
        "In-app notifications and an email at every step for each person involved.",
        "Daily reminders for tickets that have waited too long, counted in working days.",
        "Accounts created one by one or in bulk from an Excel file.",
        "Analytics on ticket volume, resolution time, office performance and satisfaction, exportable to PDF and Excel.",
        "An audit trail of every action and every email sent.",
      ] },
      { h: "My role", p: "I am developing it with Laravel, Blade, Tailwind CSS, Alpine.js and MySQL, testing it manually across all user roles and through API testing in Postman, and deploying it on Railway with Docker." },
    ],
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Postman"],
    live: "https://sorsupport-production.up.railway.app",
    code: "https://github.com/jellacalupit/SorSUpport",
  },
  {
    title: "Pulse Dashboard",
    featured: true, // shown in "Featured Projects" on the home page (max 3 per tab)
    cat: "dev",
    label: "Analytics Web App",
    mock: "dash",
    year: "2026",
    role: "Full-stack Development",
    desc: "A data dashboard that turns raw numbers into clear, animated charts, with dark-mode-first UI, reusable components and live data from a Node.js API.",
    tags: ["JavaScript", "Node.js", "Chart.js", "MySQL"],
    live: "#",
    code: "#",
  },
  {
    title: "Loopin",
    featured: true, // shown in "Featured Projects" on the home page (max 3 per tab)
    cat: "design",
    label: "Mobile App UI/UX",
    mock: "phone",
    year: "2025",
    role: "UI/UX Design",
    desc: "A music streaming app concept, taken from user interviews and flows to a polished high-fidelity prototype with micro-interactions.",
    tags: ["Figma", "Prototyping", "UX Research", "Design System"],
    live: "#",
    code: "#",
  },
  {
    title: "Kape & Co.",
    featured: true, // shown in "Featured Projects" on the home page (max 3 per tab)
    cat: "design",
    label: "Branding & Identity",
    mock: "brand",
    year: "2025",
    role: "Brand & Visual Design",
    desc: "A visual identity for a local coffee shop: logo, color palette, typography and social media templates, all built around a warm, cozy feel.",
    tags: ["Branding", "Logo Design", "Canva", "Photoshop"],
    live: "#",
    code: "#",
  },
  {
    title: "TaskFlow",
    featured: true, // shown in "Featured Projects" on the home page (max 3 per tab)
    cat: "dev",
    label: "Productivity Web App",
    mock: "app",
    year: "2025",
    role: "Front-end Development",
    desc: "A drag-and-drop kanban board that saves to local storage, with keyboard shortcuts and an interface that feels quick and calm.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    live: "#",
    code: "#",
  },
  {
    title: "Atlas Travel",
    featured: true, // shown in "Featured Projects" on the home page (max 3 per tab)
    cat: "design",
    label: "Landing Page Design",
    mock: "travel",
    year: "2024",
    role: "UI Design & Development",
    desc: "A landing page for a travel booking brand with bold visuals and a clear booking flow, designed in Figma and coded responsively with Bootstrap.",
    tags: ["Figma", "Bootstrap", "Responsive", "UI Design"],
    live: "#",
    code: "#",
  },
];

const MOCKS = {
  shop: `<div class="hero-txt"><span class="ln ln--t"></span><span class="ln ln--t" style="width:65%"></span><span class="ln" style="width:80%"></span><span class="ln" style="width:60%"></span><span class="btn-s"></span></div>
         <div class="product"></div>
         <div class="row"><span></span><span></span><span></span></div>`,
  dash: `<div class="side"><span class="ln ln--m" style="width:60%"></span><span class="ln"></span><span class="ln"></span><span class="ln" style="width:70%"></span><span class="ln"></span></div>
         <div class="main"><div class="kpis"><span></span><span></span><span></span></div>
         <div class="chart"><span style="--h:40%"></span><span style="--h:65%"></span><span style="--h:50%"></span><span style="--h:85%"></span><span style="--h:60%"></span><span style="--h:95%"></span><span style="--h:70%"></span></div></div>`,
  phone: `<div class="phone"><div class="art"></div><span class="ln ln--t" style="height:6px"></span><span class="ln" style="width:60%"></span><span class="ln"></span><span class="ln" style="width:80%"></span><span class="play"></span></div>
          <div class="phone"><span class="ln ln--m" style="width:50%"></span><span class="ln"></span><span class="ln" style="width:70%"></span><div class="art" style="margin-top:6px"></div><span class="ln"></span><span class="ln" style="width:50%"></span></div>`,
  brand: `<div class="word">Kape<small>& CO.</small></div>
          <div class="sw"><span style="background:#7a1424"></span><span style="background:#3a0a12"></span><span style="background:#0b0a0a"></span><span style="background:#c9a98a"></span></div>`,
  app: `<div class="col"><span class="ln"></span><div class="task m drag"><span class="ln"></span><span class="ln"></span></div><div class="task"><span class="ln"></span><span class="ln"></span></div></div>
        <div class="col"><span class="ln"></span><div class="task"><span class="ln"></span><span class="ln"></span></div></div>
        <div class="col"><span class="ln"></span><div class="task m"><span class="ln"></span><span class="ln"></span></div><div class="task"><span class="ln"></span><span class="ln"></span></div><div class="task"><span class="ln"></span><span class="ln"></span></div></div>`,
  travel: `<div class="sun"></div><div class="hills"></div>
           <div class="head"><span class="ln ln--t"></span><span class="ln ln--t" style="width:70%"></span><span class="ln" style="width:85%"></span></div>
           <div class="search"></div>`,
};

const mockHTML = (type) =>
  `<div class="mock mock--${type}"><div class="mock__bar"><i></i><i></i><i></i><b></b></div><div class="mock__body">${MOCKS[type]}</div></div>`;

// real screenshot on top of the drawn mock; if the image file is missing it removes itself
const mediaHTML = (p) =>
  mockHTML(p.mock) + (p.image ? `<img class="media__img" src="${p.image}" alt="${p.title} screenshot" loading="lazy" onerror="this.remove()" />` : "");

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// horizontal swipe on touch screens: fn(1) for a swipe left (next), fn(-1) for a swipe right (previous)
const onSwipe = (el, fn) => {
  let x = null, y = 0;
  el.addEventListener("touchstart", (e) => { x = e.touches[0].clientX; y = e.touches[0].clientY; }, { passive: true });
  el.addEventListener("touchend", (e) => {
    if (x === null) return;
    const dx = e.changedTouches[0].clientX - x;
    const dy = e.changedTouches[0].clientY - y;
    x = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) fn(dx < 0 ? 1 : -1);
  }, { passive: true });
};

/* ---------- Intro: curtain slides up, hero fades in, then PORTFOLIO sweeps ---------- */
function intro() {
  requestAnimationFrame(() => document.body.classList.add("is-loaded"));
  if ($(".hero__bigword")) setTimeout(sweepWord, reducedMotion ? 0 : 900);

  // the paper plane animates inside its SVG; for reduced motion, freeze it with the trail fully drawn
  const plane = $(".contact__plane svg");
  if (plane && reducedMotion) { plane.setCurrentTime(3); plane.pauseAnimations(); }
}

/* ---------- PORTFOLIO: dark sweep on intro and whenever you land on Home ---------- */
function sweepWord() {
  const word = $(".hero__bigword");
  word.classList.remove("is-sweeping");
  void word.offsetWidth; // restart the animation
  word.classList.add("is-sweeping");
}

function homeSweep() {
  const word = $(".hero__bigword");
  if (!word) return; // not on the home page
  word.addEventListener("animationend", () => word.classList.remove("is-sweeping"));

  let wasAway = false;
  new IntersectionObserver(([en]) => {
    if (en.intersectionRatio < 0.25) wasAway = true;
    else if (wasAway && document.body.classList.contains("is-loaded")) {
      wasAway = false;
      sweepWord();
    }
  }, { threshold: 0.25 }).observe($("#home"));

  // clicking Home / the logo while already at the top still plays it
  $$('a[href="#home"]').forEach((a) => a.addEventListener("click", () => {
    if ($("#home").getBoundingClientRect().top > -100) sweepWord();
  }));
}

/* ---------- Local time ---------- */
function clock() {
  const el = $("#localTime");
  if (!el) return;
  const fmt = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Manila" });
  const update = () => (el.textContent = fmt.format(new Date()) + " PHT");
  update();
  setInterval(update, 30000);
}

/* ---------- Nav: scroll state, active link, mobile menu ---------- */
function nav() {
  const navEl = $("#nav");
  const menu = $("#navLinks");
  const progress = $(".scroll-progress");
  const toTop = $("#toTop");
  let lastY = scrollY;

  addEventListener("scroll", () => {
    const y = scrollY;
    navEl.classList.toggle("is-scrolled", y > 40);
    navEl.classList.toggle("is-hidden", y > lastY && y > 400 && !menu.classList.contains("is-open"));
    lastY = y;

    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    // back-to-top arrow: only at the very bottom, and only after scrolling a long way (over 1.5 screens)
    toTop.classList.toggle("is-visible", y >= max - 40 && y > innerHeight * 1.5);
  }, { passive: true });

  const links = $$(".nav__link");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  // only same-page links (#about…) get scroll highlighting; projects.html marks its link in the HTML
  links.map((l) => l.getAttribute("href"))
    .filter((h) => h.startsWith("#"))
    .forEach((h) => { const s = document.getElementById(h.slice(1)); if (s) io.observe(s); });

  const burger = $("#burger");
  // phone menu is a small dropdown: tapping a link or anywhere outside it closes it
  const toggle = (open) => {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
  };
  burger.addEventListener("click", () => toggle(!menu.classList.contains("is-open")));
  links.forEach((l) => l.addEventListener("click", () => toggle(false)));
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("is-open") && !menu.contains(e.target) && !burger.contains(e.target)) toggle(false);
  });

  $("#toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- About: "what I do" coverflow slider ---------- */
// Cards are listed in project order: planning → design → building → testing → deployment.
// In a title, "|" only marks the word break between the two parts (shown as a space).
const SERVICES = [
  ["Project|Management", "Organizing tasks, timelines and team coordination to keep projects on track.",
    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/><path d="M5.5 8h1.5M11 8h2M11 11h2M17 8h1.5M17 11h1.5M17 14h1.5"/>'],
  ["Planning &|Analysis", "Breaking down requirements, mapping workflows and creating diagrams before development begins.",
    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 2.5h6v3H9zM8.5 11h7M8.5 15h4.5"/>'],
  ["UI / UX|Design", "Wireframes and interface designs focused on clear and intuitive user flows.",
    '<circle cx="12" cy="5" r="2"/><circle cx="4.5" cy="18" r="2"/><circle cx="19.5" cy="18" r="2"/><path d="M10.2 5.8C6.5 7.5 4.5 11.5 4.5 16M13.8 5.8c3.7 1.7 5.7 5.7 5.7 10.2"/>'],
  ["Web|Development", "Responsive web applications with features like user roles, dashboards and data management.",
    '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>'],
  ["Mobile|Development", "Cross-platform mobile apps with smooth navigation and a consistent experience on every device.",
    '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>'],
  ["Frontend", "Interactive, responsive interfaces for web and mobile apps that look great on any screen.",
    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'],
  ["Backend", "Server-side logic, APIs and user authentication that power both web and mobile applications.",
    '<rect x="4" y="3.5" width="16" height="7" rx="1.5"/><rect x="4" y="13.5" width="16" height="7" rx="1.5"/><path d="M7.5 7h.01M7.5 17h.01M11 7h5.5M11 17h5.5"/>'],
  ["Database", "Designing and managing databases that store and organize application data reliably.",
    '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/>'],
  ["Testing", "Testing and debugging features throughout development so everything works as intended.",
    '<path d="m8 2 1.9 1.9M14.1 3.9 16 2M9 7.1v-1a3 3 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6Zm0 0v-9M6.5 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M21 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/>'],
  ["Deployment", "Publishing applications online and keeping them running smoothly for real users.",
    '<path d="M12 15V3M7.5 7.5 12 3l4.5 4.5"/><path d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>'],
];

function slider() {
  const track = $("#sliderTrack");
  if (!track) return;
  const dotsBox = $("#sliderDots");
  const n = SERVICES.length;
  let active = 0;
  let timer;

  track.innerHTML = SERVICES.map(([title, text, icon], i) => {
    const [first, second] = title.split("|");
    return `
    <article class="slide" data-i="${i}">
      <h3 class="slide__title">
        <span class="slide__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icon}</svg></span>
        <span>${first}</span>${second ? ` <span class="slide__title-2">${second}</span>` : ""}
      </h3>
      <p class="slide__text">${text}</p>
      <span class="slide__num">${String(i + 1).padStart(2, "0")}</span>
    </article>`;
  }).join("");
  dotsBox.innerHTML = SERVICES.map((s, i) => `<button class="slider__dot" data-i="${i}" aria-label="Show ${s[0].replace("|", " ")}"></button>`).join("");

  const slides = $$(".slide", track);
  const dots = $$(".slider__dot", dotsBox);

  // place every card by its distance from the active one: center card in front, neighbours behind and dimmed
  const render = () => {
    slides.forEach((s, i) => {
      let d = (i - active + n) % n;
      if (d > n / 2) d -= n;
      const far = Math.abs(d);
      s.style.transform = `translateX(${d * 58}%) scale(${far === 0 ? 1 : far === 1 ? 0.84 : 0.7})`;
      s.style.opacity = far === 0 ? 1 : far === 1 ? 0.45 : 0;
      s.style.filter = far === 0 ? "none" : "blur(2px)";
      s.style.zIndex = 10 - far;
      s.classList.toggle("is-active", far === 0);
      s.setAttribute("aria-hidden", far !== 0);
    });
    dots.forEach((d, i) => d.classList.toggle("is-active", i === active));
  };

  const go = (i) => { active = (i + n) % n; render(); };
  const play = () => { if (!reducedMotion) timer = setInterval(() => go(active + 1), 15000); };
  const stop = () => clearInterval(timer);

  slides.forEach((s) => s.addEventListener("click", () => { stop(); go(+s.dataset.i); play(); }));
  dots.forEach((d) => d.addEventListener("click", () => { stop(); go(+d.dataset.i); play(); }));
  $("#slider").addEventListener("mouseenter", stop);
  $("#slider").addEventListener("mouseleave", play);
  onSwipe($("#slider"), (step) => { stop(); go(active + step); play(); });

  render();
  play();
}

/* ---------- Tech stack (grouped by category): logo + name ---------- */
// Logo sources: "dev:folder/file" = devicon, "si:slug" = Simple Icons in brand colours,
// { badge, color } = lettered badge for tools neither library has.
const ICON_URL = {
  dev: (p) => `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${p}.svg`,
  si: (p) => `https://cdn.simpleicons.org/${p}`,
};
const TECH = [
  ["Project Management & Planning", [
    ["ClickUp", "si:clickup"],
    ["Trello", "dev:trello/trello-original"],
    ["draw.io", "si:diagramsdotnet"],
  ]],
  ["Design", [
    ["Figma", "dev:figma/figma-original"],
    ["Balsamiq", { badge: "B", color: "#CC0000" }],
  ]],
  ["Frontend", [
    ["HTML5", "dev:html5/html5-original"],
    ["CSS3", "dev:css3/css3-original"],
    ["JavaScript", "dev:javascript/javascript-original"],
    ["TypeScript", "dev:typescript/typescript-original"],
    ["React", "dev:react/react-original"],
    ["Tailwind CSS", "dev:tailwindcss/tailwindcss-original"],
  ]],
  ["Backend", [
    ["PHP", "dev:php/php-original"],
    ["Laravel", "dev:laravel/laravel-original"],
    ["MySQL", "dev:mysql/mysql-original"],
  ]],
  ["Mobile App", [
    ["React Native", "dev:react/react-original"],
    ["Expo", "si:expo/white"],
  ]],
  ["Testing", [
    ["Postman", "dev:postman/postman-original"],
    ["Playwright", "dev:playwright/playwright-original"],
  ]],
];

const techLogo = (src) => {
  if (typeof src === "object") return `<span class="tech__badge" style="--c:${src.color}">${src.badge}</span>`;
  const [lib, path] = src.split(":");
  return `<img class="tech__icon" src="${ICON_URL[lib](path)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'" />`;
};

function tech() {
  const box = $("#techList");
  if (!box) return;
  const group = ([name, items]) => `
    <div class="stack__group">
      <h3 class="info__label">${name}</h3>
      <ul class="tech">${items.map(([tool, src]) => `<li class="tech__item">${techLogo(src)}<span>${tool}</span></li>`).join("")}</ul>
    </div>`;
  // first half of TECH in the left column, second half in the right
  const half = Math.ceil(TECH.length / 2);
  box.innerHTML = [TECH.slice(0, half), TECH.slice(half)]
    .map((col) => `<div class="stack__col">${col.map(group).join("")}</div>`).join("");
}

/* ---------- Scroll reveals ---------- */
function reveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  $$("[data-reveal]").forEach((el) => io.observe(el));
}

/* ---------- Projects: render, filter, modal ---------- */
function projects() {
  const grid = $("#projects");
  if (!grid) return;

  // Home shows the first data-featured featured projects; projects.html shows everything
  const limit = +grid.dataset.featured || 0;
  const list = PROJECTS.map((p, i) => ({ p, i }))
    .filter(({ p }) => !limit || p.featured)
    .slice(0, limit || undefined);

  // picture · "Title | Type" · three-line description ending in "… Read more" · tech used
  grid.innerHTML = list.map(({ p, i }) => `
    <article class="project" data-cat="${p.cat}">
      <button class="project__card" data-index="${i}" aria-label="Open project ${p.title}">
        <div class="project__media">${mediaHTML(p)}</div>
        <div class="project__info">
          <h3 class="project__title">${p.title}<span class="project__sep" aria-hidden="true">|</span><span class="project__type">${p.label}</span></h3>
          <p class="project__desc">${p.desc}<span class="project__more">… <u>Read more</u></span></p>
          <ul class="project__tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>
      </button>
    </article>`).join("");

  // "… Read more" only when the description is actually cut off; wrapping changes with width and fonts, so re-check then
  const fitMore = () => $$(".project__desc").forEach((d) => {
    if (!d.offsetParent) return; // hidden by a filter: checked when shown
    $(".project__more", d).hidden = d.scrollHeight <= d.clientHeight + 1;
  });
  fitMore();
  addEventListener("resize", () => requestAnimationFrame(fitMore));
  if (document.fonts) document.fonts.ready.then(fitMore);

  // filter tabs exist only on projects.html
  const applyFilter = (f) => {
    $$(".project").forEach((card) => {
      const show = f === "all" || card.dataset.cat === f;
      card.classList.toggle("is-hidden", !show);
      card.classList.remove("is-entering");
      if (show) {
        void card.offsetWidth;
        card.classList.add("is-entering");
      }
    });
    fitMore();
  };

  $$(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter").forEach((b) => b.classList.toggle("is-active", b === btn));
      applyFilter(btn.dataset.filter);
    });
  });

  const activeTab = $(".filter.is-active");
  if (activeTab) applyFilter(activeTab.dataset.filter);

  const modal = $("#modal");
  let lastFocus = null;

  // pop-up gallery: cover + gallery shots with arrows and dots; the caption sits in the row above.
  // Screenshots that fail to load are dropped, so missing files never show as broken.
  // set by the open project's gallery; swiping the picture steps through its shots
  let galleryStep = null;
  onSwipe($("#modalMedia"), (step) => { if (galleryStep) galleryStep(step); });

  const gallery = (p) => {
    const box = $("#modalMedia");
    const capEl = $("#modalShot");
    const shots = [[p.image, p.imageCap || p.title], ...(p.gallery || [])].filter(([src]) => src);
    box.innerHTML = mockHTML(p.mock);
    capEl.textContent = "";
    galleryStep = null;
    if (!shots.length) return;

    const loaded = [];
    let idx = 0;
    // all shots sit side by side in one strip; changing shot slides the strip.
    // With several shots the strip is [copy of last, ...shots, copy of first], so going past either end
    // slides onto the copy and then jumps (unanimated) to the real shot: the loop never rewinds.
    const render = () => {
      const n = loaded.length;
      const strip = n > 1 ? [loaded[n - 1], ...loaded, loaded[0]] : loaded;
      box.innerHTML = `<div class="gallery__track">${strip.map(([src, cap]) => `<img class="media__img" src="${src}" alt="${p.title}: ${cap}" />`).join("")}</div>` +
        (n > 1 ? `
          <button class="gallery__arrow gallery__arrow--prev" aria-label="Previous screenshot">‹</button>
          <button class="gallery__arrow gallery__arrow--next" aria-label="Next screenshot">›</button>
          <div class="gallery__dots">${loaded.map(() => "<span></span>").join("")}</div>` : "");
      const track = $(".gallery__track", box);
      const dots = $$(".gallery__dots span", box);
      let pos = n > 1 ? idx + 1 : 0; // position in the strip, counting the leading copy
      const place = (animate) => {
        track.style.transition = animate ? "" : "none";
        track.style.transform = `translateX(${-pos * 100}%)`;
        if (!animate) void track.offsetWidth; // apply the jump before the transition comes back
      };
      const show = () => {
        capEl.textContent = loaded[idx][1];
        dots.forEach((d, k) => d.classList.toggle("is-active", k === idx));
      };
      // on a copy at either end: jump to the real shot it stands for
      const snap = () => {
        if (pos === 0) pos = n;
        else if (pos === n + 1) pos = 1;
        else return;
        place(false);
      };
      place(false);
      show();
      if (n > 1) {
        track.addEventListener("transitionend", snap);
        galleryStep = (step) => {
          snap();
          pos += step;
          idx = (pos - 1 + n) % n;
          place(true);
          show();
        };
        $(".gallery__arrow--prev", box).onclick = () => galleryStep(-1);
        $(".gallery__arrow--next", box).onclick = () => galleryStep(1);
      }
    };
    // preload each shot; keep the original order for the ones that exist
    const results = new Array(shots.length);
    let pending = shots.length;
    shots.forEach(([src, cap], k) => {
      const img = new Image();
      img.onload = () => { results[k] = [src, cap]; if (--pending === 0) finish(); };
      img.onerror = () => { if (--pending === 0) finish(); };
      img.src = src;
    });
    const finish = () => {
      loaded.push(...results.filter(Boolean));
      if (loaded.length && modal.classList.contains("is-open")) render();
    };
  };

  // description pager: one dot per screenful of text, in place of a scrollbar
  const body = $(".modal__body", modal);
  const pager = $("#modalPager");
  // one dot per screenful: dot k starts at k screens down, and the last dot is the end of the text.
  // Any real overflow (beyond rounding) needs at least two dots, or the end of the text is hidden.
  const maxScroll = () => body.scrollHeight - body.clientHeight;
  const pages = () => (maxScroll() > 2 ? Math.ceil(maxScroll() / body.clientHeight) + 1 : 1);
  const pageTop = (k, n) => (k === n - 1 ? maxScroll() : k * body.clientHeight);
  const syncPager = () => {
    const dots = $$("button", pager), n = dots.length;
    if (!n) return;
    // at the very end the last dot is active, otherwise the screenful the top of the view is in
    const active = body.scrollTop >= maxScroll() - 2 ? n - 1 : Math.min(n - 2, Math.round(body.scrollTop / body.clientHeight));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === active));
  };
  const buildPager = (retry = true) => {
    const n = pages();
    if (pager.children.length !== n) {
      pager.innerHTML = n > 1 ? Array.from({ length: n }, (_, k) => `<button aria-label="Page ${k + 1} of ${n}"></button>`).join("") : "";
      $$("button", pager).forEach((d, k) => d.addEventListener("click", () => {
        body.scrollTo({ top: pageTop(k, pages()), behavior: reducedMotion ? "auto" : "smooth" });
      }));
      // showing the dots takes a little room from the text, so the page count can change once
      if (retry && pages() !== n) return buildPager(false);
    }
    syncPager();
  };
  body.addEventListener("scroll", syncPager, { passive: true });
  // recount whenever the text area changes size: window resize, fonts loading, the dot column appearing
  new ResizeObserver(() => { if (modal.classList.contains("is-open")) buildPager(); }).observe(body);
  if (document.fonts) document.fonts.ready.then(() => { if (modal.classList.contains("is-open")) buildPager(); });

  const open = (i) => {
    const p = PROJECTS[i];
    gallery(p);
    $("#modalCat").textContent = (p.cat === "dev" ? "</> Development" : "✦ Design") + " · " + p.label;
    $("#modalTitle").textContent = p.title;
    // overview paragraph, then any detail sections (headings with a paragraph, bullet list or numbered steps)
    const list = (tag, items) => (items ? `<${tag}>${items.map((li) => `<li>${li}</li>`).join("")}</${tag}>` : "");
    $("#modalDesc").innerHTML = `<p>${p.desc}</p>` + (p.details || []).map((s) =>
      `<h4>${s.h}</h4>${s.p ? `<p>${s.p}</p>` : ""}${list("ul", s.ul)}${list("ol", s.ol)}`).join("");
    $("#modalRole").textContent = p.role;
    $("#modalYear").textContent = p.year;
    // stack chips get the same logos as the Tech Stack section (pop-up only)
    const techSrc = Object.fromEntries(TECH.flatMap(([, items]) => items));
    $("#modalTags").innerHTML = p.tags.map((t) => `<span class="chip chip--logo">${techSrc[t] ? techLogo(techSrc[t]) : ""}${t}</span>`).join("");
    $("#modalLogo").innerHTML = p.logo ? `<img src="${p.logo}" alt="" />` : "";
    $("#modalLive").href = p.live;
    $("#modalCode").href = p.code;
    lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    body.scrollTop = 0;
    requestAnimationFrame(() => buildPager());
    $(".modal__close", modal).focus();
  };
  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project__card");
    if (card) open(+card.dataset.index);
  });
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", close));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("is-open")) close(); });

}

/* ---------- Work process timeline ---------- */
// As the page scrolls, the line fills down to a mark 60% down the screen; each circle fills from the top
// as the mark passes through it, and the step lights up once the mark reaches its middle.
function processLine() {
  const box = $(".steps");
  if (!box) return;
  const items = $$(".step", box);
  if (reducedMotion) {
    box.style.setProperty("--fill", 1);
    items.forEach((li) => { li.classList.add("is-on"); $(".step__icon", li).style.setProperty("--f", 1); });
    return;
  }
  let queued = false;
  const update = () => {
    queued = false;
    const mark = innerHeight * 0.6;
    const r = box.getBoundingClientRect();
    const fill = Math.min(1, Math.max(0, (mark - r.top - 22) / (r.height - 52)));
    box.style.setProperty("--fill", fill);
    items.forEach((li) => {
      const icon = $(".step__icon", li);
      const ir = icon.getBoundingClientRect();
      icon.style.setProperty("--f", Math.min(1, Math.max(0, (mark - ir.top) / ir.height)));
      li.classList.toggle("is-on", ir.top + ir.height / 2 <= mark);
    });
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
  update();
}

/* ---------- CV link ---------- */
// Phones and tablets open the Google Drive copy so the Drive app can take it.
// Android gets an intent link that names the Drive app and falls back to the web page when it isn't installed;
// iOS opens drive.google.com links in the Drive app on its own. Desktop keeps the PDF.
function cvLink() {
  const a = $("#cvLink");
  if (!a) return;
  const drive = a.dataset.drive;
  const ua = navigator.userAgent;
  const android = /Android/i.test(ua);
  const ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (android) {
    const path = drive.replace(/^https:\/\//, "");
    a.href = `intent://${path}#Intent;scheme=https;package=com.google.android.apps.docs;S.browser_fallback_url=${encodeURIComponent(drive)};end`;
    a.removeAttribute("target");
  } else if (ios) {
    a.href = drive;
  }
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  cvLink();
  intro();
  homeSweep();
  clock();
  nav();
  projects();
  slider();
  tech();
  processLine();
  reveals();
});
