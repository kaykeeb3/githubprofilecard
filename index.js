/* 
******** Arquivo para testes *******  
 

function searchProfile() {
    const username = document.getElementById("search-input").value;
    const profileDiv = document.getElementById("profile-card");

    // Fazer uma requisição AJAX para a API do GitHub para obter informações do usuário
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            // Exibir informações básicas do usuário
            profileDiv.innerHTML = `
                <h2>${data.name}</h2>
                <img id="avatar" src="${data.avatar_url}" alt="Avatar">
                <p>Username: ${data.login}</p>
                <p>Seguidores: ${data.followers}</p>
                <p>Repositórios públicos: ${data.public_repos}</p>
                <p>URL do perfil: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
            `;

            // Fazer uma segunda requisição para obter a lista de repositórios do usuário
            return fetch(data.repos_url);
        })
        .then(response => response.json())
        .then(repositories => {
            // Calcular o número total de commits em todos os repositórios
            let totalCommits = 0;
            repositories.forEach(repo => {
                totalCommits += repo.stargazers_count;
            });

            // Exibir o número total de commits
            profileDiv.innerHTML += `<p>Número total de commits em todos os repositórios: ${totalCommits}</p>`;
        })
        .catch(error => {
            console.error(error);
            profileDiv.innerHTML = "<h2>Erro ao buscar usuário.</h2>";
        });
}

*/