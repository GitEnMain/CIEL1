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
let autoClickBtnHidden = false;

let upgradeCost = 50;
let autoClickCost = 200;

// 💥 Valeur d'amélioration dynamique
let upgradeIncrement = 0.25;

// --- RÉFÉRENCES DOM ---
const scoreEl = document.getElementById('score');
const multiplierEl = document.getElementById('multiplier');
const manga = document.getElementById('manga');
const upgradeBtn = document.getElementById('upgrade');
const autoClickBtn = document.getElementById('autoclick');
const timeEl = document.getElementById('time');
const autoClickStatusEl = document.getElementById('autoclick-status');
const resetBtn = document.getElementById('rdata');

resetBtn.addEventListener('click', () => {
  if (confirm("Voulez-vous vraiment réinitialiser le jeu ?")) {
    resetGame();
  }
});

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
    autoClickBtnHidden = save.autoClickBtnHidden || false;

    if (autoClickBtnHidden) {
      autoClickBtn.style.display = "none";
    } else {
      autoClickBtn.style.display = "inline-block";
    }

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
    autoClickCost,
    autoClickBtnHidden,
  };
  localStorage.setItem('mangaClickerSave', JSON.stringify(saveData));
}

setInterval(saveGame, 5000);

// --- TIMER ---
function formatTime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  let result = '';
  if (days > 0) result += days + 'j ';
  if (hours > 0) result += hours + 'h ';
  if (minutes > 0) result += minutes + 'm ';
  if (secs > 0 || seconds === 0) result += secs + 's';

  return result.trim();
}

setInterval(() => {
  seconds++;
  timeEl.textContent = formatTime(seconds);
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

// --- CLIQUE ---
manga.addEventListener('click', () => {
  score += 1 * multiplier;
  updateDisplay();
  saveGame();
});

// --- ACHETER AMÉLIORATION ---
upgradeBtn.addEventListener('click', () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    multiplier += upgradeIncrement;
    upgradeCost = Math.floor(upgradeCost * 1.075);
    updateDisplay();
    saveGame();
  }
});

// --- ACHETER AUTO-CLICK ---
autoClickBtn.addEventListener('click', () => {
  if (score >= autoClickCost) {
    score -= autoClickCost;
    autoClickers++;
    autoClickCost = Math.floor(autoClickCost * 1.1);
    startAutoClick();
    updateDisplay();
    autoClickBtnHidden = true;
    autoClickBtn.style.display = "none";
    saveGame();
  }
});

// --- FONCTION D’AUTO-CLICK ---
function startAutoClick() {
  if (autoClickInterval) clearInterval(autoClickInterval);
  autoClickInterval = setInterval(() => {
    score += autoClickers * multiplier;
    updateDisplay();
    saveGame();
  }, 1000);
}

// --- MISE À JOUR DE L’AFFICHAGE ---
function updateDisplay() {
  scoreEl.textContent = score.toFixed(2);
  multiplierEl.textContent = multiplier;
  timeEl.textContent = seconds + 's';
  autoClickStatusEl.textContent = autoClickers > 0 ? "On" : "Off";

  // Changer le personnage selon le multiplicateur
  if (multiplier < 10) {
    manga.src = "img/goku.png";
    upgradeIncrement = 0.25;
  } else if (multiplier < 30) {
    manga.src = "img/vegeta.png";
    upgradeIncrement = 0.75;
  } else if (multiplier < 70) {
    manga.src = "img/gohan.png";
    upgradeIncrement = 1,5;
  } else if (multiplier < 150) {
    manga.src = "img/broly.png";
    upgradeIncrement = 3;
  } else {
    manga.src = "img/freezer.png";
    upgradeIncrement = 6;
  }


  // Texte des boutons
  upgradeBtn.textContent = `Acheter amélioration (+${upgradeIncrement}/clic) - ${upgradeCost} Yens`;
  autoClickBtn.textContent = `Acheter auto-click (1/sec) - ${autoClickCost} Yens`;


  // Désactiver les boutons si fonds insuffisants
  if (score < upgradeCost) {
    upgradeBtn.disabled = true;
    upgradeBtn.classList.add('disabled');
  } else {
    upgradeBtn.disabled = false;
    upgradeBtn.classList.remove('disabled');
  }

  if (score < autoClickCost) {
    autoClickBtn.disabled = true;
    autoClickBtn.classList.add('disabled');
  } else {
    autoClickBtn.disabled = false;
    autoClickBtn.classList.remove('disabled');
  }
}

// --- RÉINITIALISATION DU JEU ---
function resetGame() {
  score = 0;
  multiplier = 1;
  autoClickers = 0;
  seconds = 0;
  upgradeCost = 50;
  autoClickCost = 200;
  autoClickBtnHidden = false;

  autoClickBtn.style.display = "inline-block";

  if (autoClickInterval) {
    clearInterval(autoClickInterval);
    autoClickInterval = null;
  }

  updateDisplay();
  localStorage.removeItem('mangaClickerSave');
}
