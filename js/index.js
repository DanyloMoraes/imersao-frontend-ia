// Captura o evento de clique nos perfis
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', (event) => {
        // Previne navegação imediata para capturar os dados
        event.preventDefault();

        // Encontra o elemento figure dentro do perfil
        const figure = profile.querySelector('figure');
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');

        // Extrai nome e URL da imagem
        const profileName = figcaption.textContent;
        const profileImage = img.src;

        // Armazena no localStorage
        localStorage.setItem('activeProfile', JSON.stringify({
            name: profileName,
            image: profileImage
        }));

        // Redireciona para a página de catálogo
        window.location.href = profile.href;
    });
});
