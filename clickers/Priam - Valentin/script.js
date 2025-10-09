// --- MENU DÉROULANT ---
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    target.classList.toggle('open');

    const panel = btn.parentElement;
    if (target.classList.contains('open')) {
      panel.classList.add('active-panel');
    } else {
      panel.classList.remove('active-panel');
    }
  });
});

// --- TIMER ---
let seconds = 0;
setInterval(() => {
  seconds++;
  document.getElementById('time').textContent = seconds + 's';
}, 1000);

// --- CLAIR/SOMBRE ---
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (!body.classList.contains('dark') && !body.classList.contains('light')) {
  body.classList.add('light');
}

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
});
