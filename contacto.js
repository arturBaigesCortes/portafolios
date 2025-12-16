document.addEventListener('DOMContentLoaded', () => {
  const abrirBtn = document.getElementById('abrirCartel');
  const cerrarBtn = document.getElementById('cerrarCartel');
  const modal = document.getElementById('modalCartel');
  const overlay = document.getElementById('overlayCartel');

  const abrir = () => {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const cerrar = () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  abrirBtn.addEventListener('click', abrir);
  cerrarBtn.addEventListener('click', cerrar);
  overlay.addEventListener('click', cerrar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') cerrar();
  });
});
