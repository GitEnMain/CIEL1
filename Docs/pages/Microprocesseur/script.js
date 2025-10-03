const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
    });
});

// Fermer l'overlay au clic
overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
});
