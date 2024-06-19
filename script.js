document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', (e) => {
        const planetName = e.target.getAttribute('data-planet');
        // Crie a animação de zoom
        e.target.style.transform = 'scale(5)';
        e.target.style.transition = 'transform 1s ease';

        // Aguarde a animação terminar antes de redirecionar
        setTimeout(() => {
            window.location.href = `planets/${planetName.toLowerCase()}.html`;
        }, 1000);
    });
});
