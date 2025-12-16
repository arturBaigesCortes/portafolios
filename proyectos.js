document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".filtro-btn");
  const proyectos = document.querySelectorAll(".marco");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      // marcar activo
      botones.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filtro = btn.dataset.filter; // all, movil, web, personal

      proyectos.forEach(card => {
        const categoria = card.dataset.category;

        if (filtro === "all" || categoria === filtro) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
