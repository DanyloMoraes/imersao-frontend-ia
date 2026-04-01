// Recupera o perfil ativo do localStorage
function loadActiveProfile() {
    const profileData = localStorage.getItem('activeProfile');
    
    if (profileData) {
        const profile = JSON.parse(profileData);
        
        // Atualiza o nome do perfil na navbar
        const profileNameElement = document.querySelector('.navbar-right .kids-link');
        if (profileNameElement) {
            profileNameElement.textContent = profile.name;
        }
        
        // Atualiza a imagem do perfil na navbar
        const profileIcon = document.querySelector('.profile-icon');
        if (profileIcon) {
            profileIcon.src = profile.image;
            profileIcon.alt = `Perfil de ${profile.name}`;
        }
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', loadActiveProfile);
