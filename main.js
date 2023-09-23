function searchProfile() {
    const username = document.getElementById("search-input").value;
    const profileDiv = document.getElementById("profile-card");

    // Verificar se o campo de pesquisa está vazio ou contém apenas espaços em branco
    if (username.trim() === "") {
        profileDiv.innerHTML = "<h2>Digite um nome de usuário válido.</h2>";
        return;
    }

    // Fazer uma requisição AJAX para a API do GitHub para obter os dados do usuário
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("<h2>Usuário não encontrado.</h2>");
            }
            return response.json();
        })
        .then(data => {
            // Exibir os dados do usuário no profileDiv
            profileDiv.innerHTML = `
                <h2>${data.name}</h2>
                <img id="avatar" src="${data.avatar_url}" alt="Avatar">
                <p>Username: ${data.login}</p>
                <p>Seguidores: ${data.followers}</p>
                <p>Repositórios públicos: ${data.public_repos}</p>
                <p>URL do perfil: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
                <p>Número de Commits: <span id="commitCount">Carregando...</span></p>
            `;

            // Fazer uma segunda requisição para obter os dados de repositórios
            fetch(`https://api.github.com/users/${username}/repos`)
                .then(response => response.json())
                .then(repos => {
                    // Calcular o número total de commits em todos os repositórios
                    let commitCount = 0;
                    for (const repo of repos) {
                        commitCount += repo.default_branch ? repo.default_branch.commit.commit_count : 0;
                    }
                    
                    // Atualizar o número de commits exibido
                    const commitCountElement = document.getElementById("commitCount");
                    commitCountElement.textContent = commitCount;
                }) 
               /* .catch(error => {
                    console.error(error);
                    profileDiv.innerHTML += "<p>Erro ao buscar repositórios.</p>";
                }); */
        })
        .catch(error => {
            //console.error(error);
            profileDiv.innerHTML = "<h2>Usuário não encontrado.</h2>";
        });
}
