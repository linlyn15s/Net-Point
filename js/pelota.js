  const btnMenu = document.getElementById('btn-menu');
    const menuLinks = document.getElementById('menu-links');

    btnMenu.addEventListener('click', () => {
        menuLinks.classList.toggle('activo');
    });
    // 1. Seleccionamos todos los elementos con la clase heart-icon
const hearts = document.querySelectorAll('.heart-icon');

// 2. Usamos un bucle para que cada corazón tenga su propia función de clic
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        // Alterna la clase 'active' (si la tiene la quita, si no la tiene la pone)
        heart.classList.toggle('active');

        // OPCIONAL: Si usas Bootstrap Icons, esto cambia el corazón vacío por uno lleno
        if (heart.classList.contains('bi-heart')) {
            heart.classList.replace('bi-heart', 'bi-heart-fill');
        } else {
            heart.classList.replace('bi-heart-fill', 'bi-heart');
        }
    });
});