/* ═══════════════════════════════════════
   PORTFOLIO — MAIN JAVASCRIPT
   ═══════════════════════════════════════ */

// ── Skill Data (edit these!) ──
const skillData = {
  backend: [
    { name: 'Node.js / Express', pct: 92 },
    { name: 'Go',                pct: 85 },
    { name: 'Python / FastAPI',  pct: 88 },
    { name: 'REST & gRPC',       pct: 90 },
    { name: 'Microservices',     pct: 82 },
  ],
  frontend: [
    { name: 'React / Next.js',   pct: 90 },
    { name: 'TypeScript',        pct: 88 },
    { name: 'CSS / Tailwind',    pct: 80 },
    { name: 'GraphQL',           pct: 75 },
    { name: 'WebGL / Three.js',  pct: 60 },
  ],
  cloud: [
    { name: 'AWS (EC2, S3, Lambda)', pct: 87 },
    { name: 'Docker / Kubernetes',   pct: 85 },
    { name: 'CI/CD Pipelines',       pct: 88 },
    { name: 'Terraform / IaC',       pct: 75 },
    { name: 'Grafana / Observability', pct: 80 },
  ],
  db: [
    { name: 'PostgreSQL',      pct: 92 },
    { name: 'Redis',           pct: 88 },
    { name: 'MongoDB',         pct: 80 },
    { name: 'Elasticsearch',   pct: 72 },
    { name: 'ClickHouse',      pct: 68 },
  ],
};

// ── Render Skill Bars ──
function renderSkills(cat) {
  const bars = document.getElementById('skillBars');
  bars.innerHTML = '';
  skillData[cat].forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'skill-bar-item';
    el.innerHTML = `
      <div class="sb-label">
        <span class="sb-name">${s.name}</span>
        <span class="sb-pct">${s.pct}%</span>
      </div>
      <div class="sb-track">
        <div class="sb-fill" style="width:0%" data-w="${s.pct}%"></div>
      </div>`;
    bars.appendChild(el);
    setTimeout(() => {
      el.querySelector('.sb-fill').style.width = s.pct + '%';
    }, 50 + i * 80);
  });
}
renderSkills('backend');

document.getElementById('skillCats').addEventListener('click', e => {
  const btn = e.target.closest('.skill-cat');
  if (!btn) return;
  document.querySelectorAll('.skill-cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSkills(btn.dataset.cat);
});

// ── Custom Cursor ──
const cursor    = document.getElementById('cursor');
const ring      = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = (mx - 6) + 'px';
  cursor.style.top  = (my - 6) + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = (rx - 18) + 'px';
  ring.style.top  = (ry - 18) + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; ring.style.transform = 'scale(1.5)'; });
  el.addEventListener('mouseleave', () => { cursor.style.transform = ''; ring.style.transform = ''; });
});

// ── Counter Animation ──
function animCount(el) {
  const target = +el.dataset.target;
  let n = 0;
  const step = target / 40;
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = Math.floor(n) + '+';
    if (n >= target) { el.textContent = target + '+'; clearInterval(t); }
  }, 30);
}

// ── Intersection Observer (scroll animations + counter) ──
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.stat-num[data-target]').forEach(animCount);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Observe hero stats separately
document.querySelectorAll('.stat-num[data-target]').forEach(el => {
  const obs = new IntersectionObserver(en => {
    if (en[0].isIntersecting) { animCount(el); obs.disconnect(); }
  }, { threshold: 0.5 });
  obs.observe(el);
});

// ── Mobile Nav Toggle ──
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
