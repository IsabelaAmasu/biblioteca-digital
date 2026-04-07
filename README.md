# 📚 Biblioteca Digital

Uma plataforma de biblioteca digital onde usuários podem pesquisar livros, realizar empréstimos, avaliar obras e gerenciar suas leituras de forma simples e intuitiva.

---

## 🚀 Organização do Projeto (Scrum)

O desenvolvimento foi dividido em **3 Sprints**, seguindo uma abordagem incremental:

* **Sprint 1:** Estrutura inicial e interface
* **Sprint 2:** Funcionalidades com JavaScript (Front-end)
* **Sprint 3:** Integração com Back-end

---

# 🧩 Backlog do Produto

## 🚀 Sprint 1 — Estrutura Inicial

| ID   | User Story                                                                           | Prioridade | Tarefa Técnica                                  |
| ---- | ------------------------------------------------------------------------------------ | ---------- | ----------------------------------------------- |
| US01 | Como usuário, quero visualizar a tela de cadastro para entender como criar uma conta | Alta       | Criar página HTML de cadastro                   |
| US02 | Como usuário, quero visualizar a tela de login para acessar o sistema                | Alta       | Criar página HTML de login                      |
| US03 | Como usuário, quero visualizar uma lista de livros para explorar opções              | Alta       | Criar array mockado (JSON) e renderizar no HTML |
| US04 | Como usuário, quero visualizar os detalhes de um livro para saber mais sobre ele     | Alta       | Criar página ou modal com detalhes do livro     |

---

## 🚀 Sprint 2 — Funcionalidades com JavaScript (Front-end)

| ID   | User Story                                                                  | Prioridade | Tarefa Técnica                                                 |
| ---- | --------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------- |
| US05 | Como usuário, quero pesquisar livros pelo nome para encontrá-los facilmente | Alta       | Implementar filtro com JavaScript (`filter`) e atualizar o DOM |
| US06 | Como usuário, quero emprestar um livro para adicioná-lo à minha lista       | Alta       | Criar lógica com array e botão de empréstimo                   |
| US07 | Como usuário, quero visualizar meus livros emprestados para me organizar    | Média      | Renderizar lista dinâmica no DOM                               |
| US08 | Como usuário, quero devolver um livro para removê-lo da minha lista         | Média      | Remover item do array e atualizar a interface                  |

---

## 🚀 Sprint 3 — Integração Front + Back

| ID   | User Story                                                     | Prioridade | Tarefa Técnica                                    |
| ---- | -------------------------------------------------------------- | ---------- | ------------------------------------------------- |
| US09 | Como usuário, quero me cadastrar para ter uma conta no sistema | Alta       | Criar API `POST /users`                           |
| US10 | Como usuário, quero fazer login para acessar minha conta       | Alta       | Implementar autenticação e validação              |
| US11 | Como usuário, quero salvar meus empréstimos no sistema         | Alta       | Criar API `POST /loans` (relação usuário + livro) |
| US12 | Como usuário, quero visualizar meu histórico de empréstimos    | Média      | Criar API `GET /loans` por usuário                |

---

## 💡 Funcionalidades do Sistema

* 📖 Listagem de livros
* 🔍 Busca por título
* 📚 Empréstimo e devolução
* ⭐ Avaliações (em evolução)
* 👤 Autenticação de usuários
* 🗂️ Histórico de empréstimos

---

## 🛠️ Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Node.js (planejado)
* Express (planejado)

---

## 📌 Status do Projeto

🚧 Em desenvolvimento (metodologia incremental por Sprints)

---
