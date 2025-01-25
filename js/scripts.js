// Función para cambiar el modo de contraste
function toggleContrast() {
    document.body.classList.toggle("contrast-high");
}

// Función para ajustar el tamaño de la fuente
function adjustFontSize(change) {
    const body = document.body;

    // Agregar o quitar clases de tamaño de fuente
    if (change === 1) {
        body.classList.add("font-large");
        body.classList.remove("font-small");
    } else if (change === -1) {
        body.classList.add("font-small");
        body.classList.remove("font-large");
    }
}
