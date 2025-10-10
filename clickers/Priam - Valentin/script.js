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

<<<<<<< HEAD
// --- CLIQUE SUR MANGA ---
=======

// Clique
>>>>>>> ee0d905159a9ba4a0bc8b851216803c1496cda8c
manga.addEventListener('click', () => {
  score += 0.25 * multiplier;
  updateDisplay();
  saveGame();
});

// --- ACHETER AMÉLIORATION ---
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
  } else {
    alert("Pas assez de points !");
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

<<<<<<< HEAD
=======
  // Met à jour les textes des boutons avec le prix actuel
>>>>>>> ee0d905159a9ba4a0bc8b851216803c1496cda8c
  upgradeBtn.textContent = `Acheter amélioration (+0.25/clic) - ${upgradeCost} pts`;
  autoClickBtn.textContent = `Acheter auto-click (1/sec) - ${autoClickCost} pts`;

  // Mise à jour de l’image du perso en fonction du multiplicateur
  if (multiplier === 1) {
    manga.src = "img/goku.png";
  } else if (multiplier >= 10) {
    manga.src = "img/vegeta.png";
  } else {
    manga.src = "img/goku.png";
  }
}

<<<<<<< HEAD
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

=======
// Changer de perso
let img = document.getElementById("manga");

if (multiplier === 1) {
  img.src = "img/goku.png";
} else if (multiplier === 10) {
  img.src = "img/vegeta.png";
} else {
  img.src = "img/goku.png";
}
>>>>>>> ee0d905159a9ba4a0bc8b851216803c1496cda8c
