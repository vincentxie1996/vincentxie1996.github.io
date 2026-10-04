/* 个人简介站 · 交互脚本（无依赖） */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- 主题切换（记忆偏好，默认深色） ---------- */
  var THEME_KEY = 'personal-site-theme';
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  function toggleTheme() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  }

  var themeBtn = document.getElementById('themeToggle');
  var themeBtnMobile = document.getElementById('themeToggleMobile');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);

  /* ---------- 移动端菜单 ---------- */
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

  /* ---------- 滚动导航高亮 ---------- */
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

  /* ---------- 阅读进度条 ---------- */
  var bar = document.getElementById('progress');
  function updateProgress() {
    if (!bar) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, p)) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ---------- 导出 PDF（打印） ---------- */
  var printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }
  // Ctrl/Cmd + P 走同一套打印样式，无需额外处理

  /* ---------- 复制微信号（联系方式卡片 + 侧边栏图标） ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-wechat]'), function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var text = btn.getAttribute('data-wechat') || '';
      var hint = btn.querySelector('.copy-hint') || btn;
      var done = function (ok) {
        if (hint.classList && hint.classList.contains('copy-hint')) {
          hint.textContent = ok ? '已复制 ✓' : '请手动复制';
          setTimeout(function () { hint.textContent = '点击复制'; }, 1800);
        } else if (ok && btn.setAttribute) {
          btn.setAttribute('title', '已复制 ✓');
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  });

  /* ---------- 回到顶部 ---------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 年份 ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- 首屏渐入 ---------- */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // 用 class 控制：JS 未生效时元素保持可见，不会出现空白页
    var items = document.querySelectorAll('.section, .sidebar__inner');
    Array.prototype.forEach.call(items, function (el, i) {
      el.classList.add('reveal');
      setTimeout(function () { el.classList.add('is-in'); }, 60 + i * 55);
    });
  }
})();
