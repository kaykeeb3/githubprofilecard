/* 
******** Arquivo para testes ********

// Função para buscar o perfil do usuário no GitHub
function searchProfile() {
    const username = document.getElementById('search-input').value;
    const profileCard = document.getElementById('profile-card');

    // Limpar o conteúdo anterior do perfil
    profileCard.innerHTML = '';

    // Verificar se o campo de entrada está vazio
    if (username === '') {
        profileCard.textContent = 'Digite um nome de usuário válido.';
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Usuário não encontrado.');
            }
            return response.json();
        })
        .then(data => {
            profileCard.innerHTML = `
                <h2>${data.name}</h2>
                <img id="avatar" src="${data.avatar_url}" alt="Avatar">
                <p>Seguidores: ${data.followers}</p>
                <p>Repositórios públicos: ${data.public_repos}</p>
                <p>Localização: ${data.location}</p>
                <p><a href="${data.html_url}" target="_blank">Ver perfil no GitHub</a></p>
            `;
        })
        .catch(error => {
            profileCard.textContent = error.message;
        });
}

*/