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

// --- VARIABLES ---
let score = 0;
let multiplier = 1;
let autoClickers = 0;
let seconds = 0;
let autoClickInterval = null;

// Coûts évolutifs
let upgradeCost = 50;
let autoClickCost = 200;

// --- RÉFÉRENCES DOM ---
const scoreEl = document.getElementById('score');
const multiplierEl = document.getElementById('multiplier');
const manga = document.getElementById('manga');
const upgradeBtn = document.getElementById('upgrade');
const autoClickBtn = document.getElementById('autoclick');
const timeEl = document.getElementById('time');

// --- CHARGER LA SAUVEGARDE ---
function loadSave() {
  const save = JSON.parse(localStorage.getItem('mangaClickerSave'));
  if (save) {
    score = save.score || 0;
    multiplier = save.multiplier || 1;
    autoClickers = save.autoClickers || 0;
    seconds = save.seconds || 0;
    upgradeCost = save.upgradeCost || 50;
    autoClickCost = save.autoClickCost || 200;
    updateDisplay();
    if (autoClickers > 0) startAutoClick();
  } else {
    updateDisplay();
  }
}
loadSave();

// --- SAUVEGARDER ---
function saveGame() {
  const saveData = {
    score,
    multiplier,
    autoClickers,
    seconds,
    upgradeCost,
    autoClickCost
  };
  localStorage.setItem('mangaClickerSave', JSON.stringify(saveData));
}

setInterval(saveGame, 5000);

// --- TIMER ---
setInterval(() => {
  seconds++;
  timeEl.textContent = seconds + 's';
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


// Clique
manga.addEventListener('click', () => {
  score += 0.25 * multiplier;
  updateDisplay();
  saveGame();
});

// Acheter amélioration 
upgradeBtn.addEventListener('click', () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    multiplier++;
    upgradeCost = Math.floor(upgradeCost * 1.1); 
    updateDisplay();
    saveGame();
  } else {
    alert("Pas assez de points !");
  }
});

// Acheter auto-click 
autoClickBtn.addEventListener('click', () => {
  if (score >= autoClickCost) {
    score -= autoClickCost;
    autoClickers++;
    autoClickCost = Math.floor(autoClickCost * 1.1); 
    startAutoClick();
    updateDisplay();
    saveGame();
  } else {
    alert("Pas assez de points !");
  }
});

// Fonction d’auto-click
function startAutoClick() {
  if (autoClickInterval) clearInterval(autoClickInterval);
  autoClickInterval = setInterval(() => {
    score += autoClickers * multiplier;
    updateDisplay();
    saveGame();
  }, 1000);
}

// Met à jour l'affichage
function updateDisplay() {
  scoreEl.textContent = score;
  multiplierEl.textContent = multiplier;
  timeEl.textContent = seconds + 's';

  // Met à jour les textes des boutons avec le prix actuel
  upgradeBtn.textContent = `Acheter amélioration (+0.25/clic) - ${upgradeCost} pts`;
  autoClickBtn.textContent = `Acheter auto-click (1/sec) - ${autoClickCost} pts`;
}

// Changer de perso
let img = document.getElementById("manga");

if (multiplier === 1) {
  img.src = "img/goku.png";
} else if (multiplier === 10) {
  img.src = "img/vegeta.png";
} else {
  img.src = "img/goku.png";
}