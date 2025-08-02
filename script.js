document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Ya está bien, solo asegúrate de que el display sea 'block'
document.getElementById('mensajeExito').style.display = 'block';
});