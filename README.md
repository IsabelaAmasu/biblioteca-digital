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

O design da interface e o fluxo do usuário foram desenvolvidos utilizando o **Figma**. Você pode visualizar o projeto detalhado e interagir com o protótipo funcional através do link abaixo:

* **Protótipo:** [Acesse aqui o projeto no Figma](https://www.figma.com/design/SG3evwxkT30cVLSaqGVguJ/Untitled?node-id=0-1&t=4sjZqjb2dsI3RoVX-1)

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
| US01 | Como usuário, quero visualizar a tela de cadastro para criar uma conta | Alta | Criar página HTML de cadastro |
| US02 | Como usuário, quero visualizar a tela de login para acessar o sistema | Alta | Criar página HTML de login |
| US03 | Como usuário, quero visualizar uma lista de livros para explorar opções | Alta | Criar mock JSON e renderizar no DOM |
| US04 | Como usuário, quero ver detalhes de um livro para obter mais informações | Alta | Criar modal de detalhes |

### 📅 Sprint 2 — Funcionalidades Front-end (JS)
| ID | User Story | Prioridade | Tarefa Técnica |
| :--- | :--- | :--- | :--- |
| US05 | Como usuário, quero pesquisar livros pelo nome para encontrá-los rapidamente | Alta | Implementar filtro JS (`filter`) |
| US06 | Como usuário, quero emprestar um livro para adicioná-lo à minha lista | Alta | Lógica de array e atualização de estado |
| US07 | Como usuário, quero visualizar meus livros emprestados para me organizar | Média | Renderizar lista dinâmica de empréstimos |
| US08 | Como usuário, quero devolver um livro para removê-lo da minha lista | Média | Remover item do array e atualizar UI |

### 📅 Sprint 3 — Integração Front + Back
| ID | User Story | Prioridade | Tarefa Técnica |
| :--- | :--- | :--- | :--- |
| US09 | Como usuário, quero criar uma conta para acessar o sistema | Alta | Criar API `POST /users` |
| US10 | Como usuário, quero fazer login para acessar minha conta | Alta | Implementar JWT/Autenticação |
| US11 | Como usuário, quero salvar meus empréstimos para manter um histórico | Alta | Criar API `POST /loans` |
| US12 | Como usuário, quero visualizar meu histórico de empréstimos para acompanhar minhas leituras | Média | Criar API `GET /loans` |
| US13 | Como usuário, quero avaliar livros com estrelas para compartilhar minha opinião | Média | Criar sistema de avaliação (1 a 5 estrelas) com `POST /reviews` |
| US14 | Como usuário, quero visualizar avaliações de livros para decidir qual ler | Média | Criar API `GET /reviews` |

---

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento**
