function wacht(button) {
    const article = button.closest('.project-item');
    const descripcion = article.querySelector('.description');
    
    // Verificar el estilo calculado para asegurar que funcione
    const isHidden = descripcion.style.display === "none" || descripcion.style.display === "";

    // Alternar la visibilidad de la descripción
    if (isHidden) {
        descripcion.style.display = "block";
        button.textContent = "Ocultar";
    } else {
        descripcion.style.display = "none";
        button.textContent = "Description";
    }
}
