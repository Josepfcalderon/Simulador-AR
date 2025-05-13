document.addEventListener("DOMContentLoaded", () => {
  const figuraSelect = document.getElementById("figura");
  const colorInput = document.getElementById("color");
  const tamanoInput = document.getElementById("tamano");
  const escena = document.querySelector("a-scene");

  if (!figuraSelect || !colorInput || !tamanoInput || !escena) {
    console.warn("Uno o más elementos del DOM no se encontraron.");
    return;
  }

  escena.addEventListener("loaded", () => {
    const figura3D = document.getElementById("figura-3d");
    if (!figura3D) {
      console.error("No se encontró el contenedor 'figura-3d'");
      return;
    }

    function actualizarFigura() {
      const tipo = figuraSelect.value;
      const color = colorInput.value;
      const escala = tamanoInput.value;

      figura3D.innerHTML = "";

      let entidad;
      switch (tipo) {
        case "box":
          entidad = document.createElement("a-box");
          break;
        case "sphere":
          entidad = document.createElement("a-sphere");
          break;
        case "cylinder":
          entidad = document.createElement("a-cylinder");
          break;
        case "cone":
          entidad = document.createElement("a-cone");
          break;
        default:
          entidad = document.createElement("a-box");
      }

      entidad.setAttribute("color", color);
      entidad.setAttribute("position", "0 0.5 0");
      entidad.setAttribute("scale", `${escala} ${escala} ${escala}`);

      // Animación opcional
      entidad.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: true,
        dur: 4000
      });

      figura3D.appendChild(entidad);
    }

    figuraSelect.addEventListener("change", actualizarFigura);
    colorInput.addEventListener("input", actualizarFigura);
    tamanoInput.addEventListener("input", actualizarFigura);

    actualizarFigura(); // Inicializa
  });
});