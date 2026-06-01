const API_URL = 'http://localhost:3000/api/livros';

document.getElementById('livro-form').addEventListener('submit', salvarLivro);

// [GET] - Obter e renderizar livros
async function carregaLivros() {
    try {
        const res = await fetch(API_URL);
        const livros = await res.json();
        renderizarTabela(livros);
    } catch (error) {
        console.error('Erro ao carregar livros:', error);
    }
}

function renderizarTabela(livros) {
    const tbody = document.getElementById('livros-lista');
    tbody.innerHTML = '';

    livros.forEach(livro => {
        const badgeClass = livro.status.toLowerCase() === 'disponível' ? 'disponivel' : 'emprestado';
        const textoBotaoStatus = livro.status === 'Disponível' ? 'Emprestar' : 'Devolver';
        const novoStatus = livro.status === 'Disponível' ? 'Emprestado' : 'Disponível';

        tbody.innerHTML += `
            <tr>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.ano}</td>
                <td><span class="badge ${badgeClass}">${livro.status}</span></td>
                <td class="actions">
                    <button class="btn-status" onclick="alterarStatus(${livro.id}, '${novoStatus}')">${textoBotaoStatus}</button>
                    <button class="btn-delete" onclick="deletarLivro(${livro.id})">Deletar</button>
                </td>
            </tr>
        `;
    });
}

// [POST] - Cadastrar um novo livro
async function salvarLivro(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;

    const livroData = { titulo, autor, ano };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livroData)
    });

    document.getElementById('livro-form').reset();
    carregaLivros();
}

// [PUT] - Alterar Status de Empréstimo
async function alterarStatus(id, novoStatus) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: novoStatus })
    });
    carregaLivros();
}

// [DELETE] - Excluir livro
async function deletarLivro(id) {
    if (confirm('Deseja realmente remover este livro?')) {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        carregaLivros();
    }
}

// [GET com Filtro] - Busca dinâmica por Título
async function buscarLivros() {
    const termo = document.getElementById('busca').value;
    const res = await fetch(`${API_URL}?search=${termo}`);
    const livros = await res.json();
    renderizarTabela(livros);
}

// Inicialização da página
carregaLivros();