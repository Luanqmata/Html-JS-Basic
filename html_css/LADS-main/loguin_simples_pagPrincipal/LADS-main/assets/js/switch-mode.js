document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo img');
    const iesgo = document.getElementById('iesgoImage');
    const logoForm = document.getElementById('logoForm');


    // Inicializando o modo escuro
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<img src="./assets/images/sun-50.svg" alt="sunAndMoon">';
    iesgoImage.src = './assets/images/iesgo-alt.webp'

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            navbar.classList.remove('navbar-dark'); // Removendo a classe navbar-dark
            logo.src = './assets/images/logo2.webp'; // Alterando a imagem do logo para white-mode
            iesgo.src = './assets/images/iesgo-pad.webp';
            logoForm.src = './assets/images/logoImagem-white.webp';
            themeToggle.innerHTML = '<img src="./assets/images/moon-50.svg" alt="sunAndMoon">';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            navbar.classList.add('navbar-dark'); // Adicionando a classe navbar-dark
            logo.src = './assets/images/logo.webp'; // Alterando a imagem do logo para dark-mode
            iesgo.src = './assets/images/iesgo-alt.webp';
            logoForm.src = './assets/images/logoImagem-dark.webp';
            themeToggle.innerHTML = '<img src="./assets/images/sun-50.svg" alt="sunAndMoon">';
        }
    });
});
