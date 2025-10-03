document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.getElementById('overlay');
      const overlayImg = overlay.querySelector('img');
      overlayImg.src = img.src;
      overlay.style.display = 'flex';
    });
  });
  
  document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
  });
  