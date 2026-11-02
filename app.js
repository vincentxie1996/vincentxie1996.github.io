/* 个人简介站 · 交互脚本（无依赖） */
(function () {
  'use strict';

  var root = document.documentElement;
  var prefersEn = function () { return root.getAttribute('lang') === 'en'; };

  /* ============================================================
     中英双语
     ============================================================ */
  var I18N = {
    en: {
      bar_name: 'Xie Wencheng Vincent',
      name: 'Xie Wencheng<span class="identity__en">Vincent</span>',
      title: 'HR Lead · InstAdapt<br>Talent Acquisition &amp; Org Building',
      tagline: '7 yrs in recruiting; building R&amp;D teams for deep-tech from 0 to 1.',
      meta: 'China · Shanghai',
      status: 'Currently at InstAdapt',
      nav_about: '<span class="nav__num">01</span>About',
      nav_exp: '<span class="nav__num">02</span>Experience',
      nav_hl: '<span class="nav__num">03</span>Highlights',
      nav_skills: '<span class="nav__num">04</span>Skills',
      nav_edu: '<span class="nav__num">05</span>Education',
      nav_contact: '<span class="nav__num">06</span>Contact',
      btn_pdf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>Export PDF',
      t_about: 'About',
      about_quote: 'Understand the business first, then hire — build the org’s capability ahead of the team’s growth.',
      about_p1: 'I’m Xie Wencheng (Vincent), with 7 years in recruiting: <strong>6 years as an agency headhunter plus in-house recruiting and HR work</strong>. I’m now <strong>HR Lead</strong> at <strong>InstAdapt</strong> — a company building embodied world models and robotic foundation models.',
      about_p2: 'My core focus is <strong>R&amp;D talent acquisition</strong>: from individual researchers to R&amp;D directors, from algorithm engineers to hardware leads. The industries I know best are <strong>embodied robotics, industrial software, medical software &amp; devices, and internet deep-tech</strong>. During six years at iMD Consulting I ran the full agency cycle — client BD, requirement mapping, talent mapping, interview pipelines, salary negotiation, offers &amp; background checks, through to probation management; later I also picked up HR fundamentals like social insurance and payroll.',
      about_p3: 'On the in-house side, what I do most is <strong>building teams from 0 to 1</strong>: from clarifying critical roles to the annual hiring plan, from standing up the algorithm team to launching branch offices, and then deploying the Feishu recruiting system and referral channels. I work daily with department heads across Shanghai, Shenzhen, Tianjin and Shenyang. At InstAdapt now, I’m taking HR <strong>from 0 to a full system</strong> — compensation &amp; performance, recruiting, the employee handbook and a knowledge base — so the org grows with the team.',
      about_p4: 'My habit is to <strong>understand the business before hiring</strong>: align critical-role needs with the CEO and tech leads, then work backwards to the hiring plan and channel strategy. With an engineering background, I like breaking problems apart — role decomposition, talent mapping, channel mix, process efficiency. Easy-going, resilient, and happy to grow with the team.',
      stat1_u: 'yrs', stat1_l: 'Recruiting experience',
      stat2_u: '', stat2_l: 'Teams built 0→1',
      stat3_u: '', stat3_l: 'Algorithm domains',
      stat4_u: '', stat4_l: 'Industries',
      t_exp: 'Experience',
      exp1: '<div class="timeline__meta">2026.08 — Present</div><div class="timeline__body"><h3>HR Lead · <span class="muted">InstAdapt</span></h3><ul><li><strong>Compensation &amp; performance:</strong> built the company’s comp &amp; performance system from 0, covering base salary, year-end bonus and equity incentive, with a workable performance-evaluation mechanism.</li><li><strong>Recruiting system:</strong> built an end-to-end recruiting system — process, referral &amp; headhunter channels, ATS — to deliver critical roles efficiently.</li><li><strong>Policy &amp; knowledge:</strong> authored the employee handbook and built the internal knowledge base, structuring and reusing org know-how.</li><li>Supported hiring &amp; scaling of the core team for embodied world models and robotic foundation models.</li></ul><div class="tags"><span>HR Lead</span><span>Comp &amp; Perf</span><span>Recruiting System</span><span>Handbook</span><span>Knowledge Base</span></div></div>',
      exp2: '<div class="timeline__meta">2025.04 — 2026.04</div><div class="timeline__body"><h3>Recruiting Manager &amp; HRBP · <span class="muted">Shanghai Suishi Robotics (Flint Robotics)</span></h3><ul><li><strong>Recruiting:</strong> worked with the CEO and tech leads to clarify critical roles and set the annual plan; managed end-to-end campus &amp; social hiring across Shanghai, Shenzhen, Tianjin and Shenyang for multiple domestic &amp; overseas department heads.</li><li><strong>Internal:</strong> org structure build &amp; updates; full employee lifecycle (on/off-boarding, transfers); team-building; interviewing and onboarding/training of recruiters.</li><li><strong>External:</strong> represented the company in talks with investors and partners.</li></ul><div class="tags"><span>Embodied Robotics</span><span>Algorithm Team Build</span><span>HRBP</span><span>Feishu ATS</span><span>Referral System</span></div></div>',
      exp3: '<div class="timeline__meta">2019.11 — 2025.03</div><div class="timeline__body"><h3>Headhunting Manager · <span class="muted">Shanghai iMD Consulting</span></h3><ul><li>Full-cycle delivery: client BD, requirement intake, team coordination, deep interviews, interview pipelines, salary negotiation, offers &amp; background checks, through to probation management.</li><li>Led the team on numerous <strong>mapping</strong> and large-KA deliveries.</li><li>HR operations: social insurance &amp; housing fund, payroll &amp; compensation calculation.</li><li>Team management: task allocation, performance, internal consultant training.</li><li>Core domains: internet deep-tech, industrial software, medical devices; mostly R&amp;D roles (see Skills).</li></ul><div class="tags"><span>KA Delivery</span><span>Talent Mapping</span><span>Salary Negotiation</span><span>Background Check</span><span>Team Mgmt</span></div></div>',
      t_hl: 'Highlights',
      hl1: '<div class="card__head"><h3>InstAdapt · HR system from 0</h3><span class="card__badge">Current · Ongoing</span></div><p>As HR Lead, built the HR system from 0: a <strong>compensation &amp; performance</strong> framework covering base, bonus and equity; an end-to-end <strong>recruiting system</strong> (process, referral/headhunter channels, ATS); and the <strong>employee handbook</strong> plus internal <strong>knowledge base</strong> — making org know-how reusable.</p><div class="tags"><span>Comp &amp; Perf</span><span>Recruiting System</span><span>Handbook</span><span>Knowledge Base</span><span>0→1 System</span></div>',
      hl2: '<div class="card__head"><h3>Shanghai algorithm team · 0→1</h3><span class="card__badge">Key win</span></div><p>Built the algorithm team from scratch at an embodied-robotics startup, covering <strong>perception, navigation &amp; planning, mapping &amp; localization, motion control, motor control, Agent, VLA</strong> — most roles delivered by me directly.</p><div class="tags"><span>Embodied AI</span><span>VLA</span><span>Perception</span><span>Planning</span><span>0→1 Build</span></div>',
      hl3: '<div class="card__head"><h3>Shenzhen branch · 0→1</h3><span class="card__badge">Solo support</span></div><p>Independently supported the Shenzhen branch build, closing core roles such as structure lead, hardware lead and software lead.</p><div class="tags"><span>Remote Hiring</span><span>Hardware</span><span>Structure</span><span>Software</span><span>Team Build</span></div>',
      hl4: '<div class="card__head"><h3>Feishu recruiting system rollout</h3><span class="card__badge">Process</span></div><p>Led rollout &amp; maintenance of <strong>Feishu People (ATS)</strong>, moving recruiting online; built the referral program and brought in &amp; managed headhunter channels, noticeably shortening time-to-hire for critical roles.</p><div class="tags"><span>Feishu People</span><span>Referral</span><span>Headhunter Mgmt</span><span>Recruiting Digitization</span></div>',
      hl5: '<div class="card__head"><h3>Six agency years · Mapping &amp; large KA</h3><span class="card__badge">Agency</span></div><p>At iMD Consulting led the team on numerous <strong>talent-mapping</strong> and large-KA deliveries across internet deep-tech, industrial software and medical devices; also owned task allocation, performance and consultant training.</p><div class="tags"><span>Talent Mapping</span><span>KA Delivery</span><span>Team Mgmt</span><span>Consultant Training</span></div>',
      t_skills: 'Skills',
      sk1: '<h3>Recruiting &amp; Talent Sourcing</h3><div class="tags tags--lg"><span>Full-cycle Campus &amp; Social</span><span>Talent Mapping</span><span>KA Delivery</span><span>Salary Negotiation</span><span>Offer &amp; Background Check</span><span>Client BD</span></div>',
      sk2: '<h3>Industry Knowledge</h3><div class="tags tags--lg"><span>Embodied Robotics</span><span>Industrial Software</span><span>Medical SW &amp; Devices</span><span>Internet Deep-tech</span><span>AI Algorithms</span><span>Graphics &amp; Rendering</span></div>',
      sk3: '<h3>HR Operations</h3><div class="tags tags--lg"><span>Social Insurance &amp; Housing Fund</span><span>Payroll &amp; Comp</span><span>Employee Lifecycle</span><span>Org Structure</span><span>Full Lifecycle</span></div>',
      sk4: '<h3>Org &amp; Team Management</h3><div class="tags tags--lg"><span>Annual Hiring Plan</span><span>Org Updates</span><span>Performance</span><span>Consultant Training</span><span>Cross-team / Cross-region</span></div>',
      note_t: 'Role Coverage',
      note1: '<h4>Algorithms &amp; Tech</h4><div class="tags"><span>AI Algorithm</span><span>Graphics</span><span>Rendering Engine</span><span>Geometry</span><span>C++</span><span>Front/Back-end</span><span>Perception</span><span>Nav &amp; Planning</span><span>Mapping</span><span>Motion Ctrl</span><span>Motor Ctrl</span><span>Agent</span><span>VLA</span></div>',
      note2: '<h4>Management &amp; Specialty</h4><div class="tags"><span>R&amp;D Manager/Director</span><span>Product Manager/Director</span><span>Structure Lead</span><span>Hardware Lead</span><span>Software Lead</span></div>',
      note3: '<h4>Medical Devices</h4><div class="tags"><span>Device R&amp;D</span><span>Process</span><span>Materials</span><span>Simulation</span></div>',
      t_edu: 'Education',
      edu1: '<div class="timeline__meta">2015.09 — 2019.06</div><div class="timeline__body"><h3>Information Management &amp; Information Systems · BBA <span class="muted">· Tiangong University (Double First-Class)</span></h3><p>Top 20% in major.</p><p>Languages: CET-4; TOEFL 92.</p></div>',
      t_contact: 'Contact',
      contact_lead: 'Currently HR Lead at InstAdapt, focused on talent &amp; organization for embodied AI. Fellow recruiters, business partners, or anyone who just wants to talk hiring — reach out.',
      contact_email_l: 'Email',
      copy_hint: 'Click to copy',
      contact_base: '<span class="contact__label">Base</span><span class="contact__value">Shanghai · Open to multi-city recruiting</span>',
      copy_name: 'Xie Wencheng (Vincent)',
      to_top: 'Back to top ↑'
    }
  };

  var LANG_KEY = 'personal-site-lang';

  function getLang() {
    try { return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'zh'; } catch (e) { return 'zh'; }
  }

  function applyLang(lang) {
    var isEn = lang === 'en';
    var dict = I18N.en || {};
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      // 首次运行时把页面原始（中文）内容存为备份，用于还原
      if (!el.dataset.orig) el.dataset.orig = el.innerHTML;
      if (isEn && (key in dict)) {
        el.innerHTML = dict[key];
      } else {
        el.innerHTML = el.dataset.orig; // 切回中文：从备份还原
      }
    });
    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = isEn ? '中' : 'EN';
    root.setAttribute('lang', isEn ? 'en' : 'zh-CN');
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  var currentLang = getLang();
  applyLang(currentLang);

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      // 用内存变量记录当前语言，切换时取反；不依赖 localStorage，避免 iframe/隐私模式下被禁用导致切不回中文
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      applyLang(currentLang);
    });
  }

  /* ============================================================
     主题切换（偏好已在内联脚本中设定，这里只负责切换）
     ============================================================ */
  var THEME_KEY = 'personal-site-theme';
  function toggleTheme() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  }
  var themeBtn = document.getElementById('themeToggle');
  var themeBtnMobile = document.getElementById('themeToggleMobile');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);

  /* ============================================================
     一键复制（邮箱等）
     ============================================================ */
  function isEn() { return root.getAttribute('lang') === 'en'; }

  function showToast(msg) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('is-show');
    clearTimeout(t._tm);
    t._tm = setTimeout(function () { t.classList.remove('is-show'); }, 1800);
  }

  function copyText(text) {
    var done = function (ok) {
      showToast(ok ? (isEn() ? 'Email copied ✓' : '邮箱已复制 ✓') : (isEn() ? 'Copy failed' : '复制失败'));
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta); done(ok);
    } catch (e) { done(false); }
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), function (el) {
    el.addEventListener('click', function (e) {
      var href = el.getAttribute('href') || '';
      if (href.indexOf('mailto:') === 0) e.preventDefault();
      copyText(el.getAttribute('data-copy') || '');
    });
  });

  /* ============================================================
     移动端菜单
     ============================================================ */
  var sidebar = document.getElementById('sidebar');
  var menuToggle = document.getElementById('menuToggle');
  function closeMenu() {
    if (!sidebar) return;
    sidebar.classList.remove('is-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function () {
      var open = sidebar.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ============================================================
     滚动导航高亮
     ============================================================ */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ============================================================
     阅读进度条
     ============================================================ */
  var bar = document.getElementById('progress');
  function updateProgress() {
    if (!bar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, p)) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ============================================================
     导出 PDF（打印）
     ============================================================ */
  var printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  /* ============================================================
     回到顶部
     ============================================================ */
  var toTop = document.getElementById('toTop');
  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ============================================================
     年份
     ============================================================ */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ============================================================
     滚动渐入
     ============================================================ */
  var revealTargets = '.section, .card, .stats li, .sidebar__inner';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revEls = document.querySelectorAll(revealTargets);
    Array.prototype.forEach.call(revEls, function (el) { el.classList.add('reveal'); });
    var revObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('is-in');
        revObserver.unobserve(el);
        setTimeout(function () { el.classList.remove('reveal', 'is-in'); }, 650);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(revEls, function (el) { revObserver.observe(el); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll(revealTargets), function (el) {
      el.classList.add('is-in');
    });
  }
})();
