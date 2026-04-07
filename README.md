# 📚 Biblioteca Digital

Uma plataforma de biblioteca digital onde usuários podem pesquisar livros, realizar empréstimos, avaliar obras e gerenciar suas leituras de forma simples e intuitiva.

---

## 🛠️ Tecnologias Utilizadas

<div align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
</div>

---

## 🎨 Design & Protótipo

O design da interface e o fluxo do usuário foram desenvolvidos utilizando o **Figma**. Você pode visualizar o projeto detalhado e interagir com o protótipo funcional através dos links abaixo:

* **Arquivo do Design:** [Acesse aqui o projeto no Figma](COLE_O_LINK_DO_ARQUIVO_AQUI)
* **Protótipo Interativo:** [Clique aqui para testar o fluxo](COLE_O_LINK_DO_PROTOTIPO_AQUI)

<p align="center">
  <img src="URL_DA_SUA_SCREENSHOT_OU_GIF" alt="Preview do Protótipo" width="800px">
</p>

---

## 💡 Funcionalidades Principais

* 📖 **Listagem de livros:** Navegação por todo o acervo disponível.
* 🔍 **Busca por título:** Filtro dinâmico para localização rápida.
* 📚 **Empréstimo e devolução:** Gerenciamento de status dos livros.
* 👤 **Autenticação:** Cadastro e login de usuários.
* 🗂️ **Histórico:** Acompanhamento de leituras passadas.

---

## 🚀 Organização do Projeto (Scrum)

O desenvolvimento foi dividido em **3 Sprints**, seguindo uma abordagem incremental:
* **Sprint 1:** Estrutura inicial e interface

* **Sprint 2:** Funcionalidades com JavaScript (Front-end)

* **Sprint 3:** Integração com Back-end

---

# 🧩 Backlog do Produto

### 📅 Sprint 1 — Estrutura Inicial & Interface
| ID | User Story | Prioridade | Tarefa Técnica |
| :--- | :--- | :--- | :--- |
| US01 | Visualizar tela de cadastro | Alta | Criar página HTML de cadastro |
| US02 | Visualizar tela de login | Alta | Criar página HTML de login |
| US03 | Visualizar lista de livros | Alta | Criar mock JSON e renderizar no DOM |
| US04 | Ver detalhes de um livro | Alta | Criar modal de detalhes |

### 📅 Sprint 2 — Funcionalidades Front-end (JS)
| ID | User Story | Prioridade | Tarefa Técnica |
| :--- | :--- | :--- | :--- |
| US05 | Pesquisar livros por nome | Alta | Implementar filtro JS (`filter`) |
| US06 | Emprestar um livro | Alta | Lógica de array e atualização de estado |
| US07 | Meus livros emprestados | Média | Renderizar lista dinâmica de empréstimos |
| US08 | Devolver um livro | Média | Remover item do array e atualizar UI |

### 📅 Sprint 3 — Integração Front + Back
| ID | User Story | Prioridade | Tarefa Técnica |
| :--- | :--- | :--- | :--- |
| US09 | Criar conta no sistema | Alta | Criar API `POST /users` |
| US10 | Fazer login | Alta | Implementar JWT/Autenticação |
| US11 | Salvar empréstimos | Alta | Criar API `POST /loans` |
| US12 | Ver histórico | Média | Criar API `GET /loans` |

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento** - Atualmente finalizando a Sprint 2.
