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

## 💡 Funcionalidades Principais

* 📖 **Listagem de livros:** Navegação por todo o acervo disponível.
* 🔍 **Busca por título:** Filtro dinâmico para localização rápida.
* 📚 **Empréstimo e devolução:** Gerenciamento de status dos livros.

---

# 🚀 Como Executar o Projeto

Bem-vindo! Siga os passos abaixo para configurar e executar o sistema em sua máquina.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- 🟢 Node.js
- 📦 npm
- 🐬 XAMPP
- 💻 Visual Studio Code (recomendado)

---

## 🗄️ Configuração do Banco de Dados

### 1️⃣ Inicie o XAMPP

Abra o **XAMPP Control Panel** e inicie os serviços:

- ✅ Apache
- ✅ MySQL

### 2️⃣ Acesse o phpMyAdmin

Abra o navegador e acesse:

```text
http://localhost/phpmyadmin
```

### 3️⃣ Crie o banco de dados

Crie um banco chamado:

```sql
biblioteca_db
```

### 4️⃣ Execute o Script SQL

1. Clique na aba **SQL**.
2. Abra o arquivo `script.sql` presente no projeto.
3. Copie todo o conteúdo.
4. Cole na área de execução do phpMyAdmin.
5. Clique em **Executar (Go)**.

<br>
🎉 Pronto! O banco de dados já estará configurado.

---

## 📥 Baixando o Projeto

Clone ou baixe este repositório e abra-o no Visual Studio Code.

```bash
git clone URL_DO_REPOSITORIO
```

ou utilize o botão **Code > Download ZIP** no GitHub.

## 📦 Instalando as Dependências

⚠️ A pasta `node_modules` não é enviada para o GitHub, pois ela pode ser recriada automaticamente.

Abra o terminal e execute:

```bash
cd back-end
npm install
```

Esse comando irá instalar todas as dependências descritas no arquivo `package.json`.

---

## ▶️ Iniciando o Back-end

Após a instalação das dependências, execute:

```bash
npm start
```

Se tudo estiver correto, o servidor será iniciado com sucesso. ✅

---

## 🌐 Abrindo o Front-end

Após iniciar o back-end:

1. Navegue até a pasta do front-end.
2. Abra o arquivo:

```text
index.html
```

3. O sistema será carregado no navegador. 🎊

---

## 💡 Observações Importantes

- 🐬 O MySQL deve permanecer ligado no XAMPP durante o uso do sistema.
- 🌐 O Apache também deve permanecer ativo.
- 📦 Sempre que baixar uma nova versão do projeto, execute novamente:

```bash
npm install
```

caso existam novas dependências.

---

## ✅ Resumo

1. 🐬 Iniciar Apache e MySQL no XAMPP.
2. 🗄️ Criar o banco `biblioteca_db`.
3. 📜 Executar o arquivo `script.sql`.
4. 📦 Rodar `npm install`.
5. ▶️ Rodar `npm start`.
6. 🌐 Abrir `index.html`.

🎉 **Pronto! O sistema estará funcionando.**

---

## 🧪 Testes da API com Thunder Client

Para validar o funcionamento da API REST da Biblioteca Digital, foram realizados testes utilizando a extensão **Thunder Client** no Visual Studio Code. Todos os endpoints CRUD foram executados com sucesso, conforme evidenciado pelas capturas de tela abaixo.

### 📖 GET - Listagem de Livros

Responsável por retornar todos os livros cadastrados no banco de dados.

![GET - Thunder Client](./GET%20-%20Thunder%20Client.jpeg)

---

### ➕ POST - Cadastro de Livro

Responsável por adicionar um novo livro ao sistema.

![POST - Thunder Client](./POST%20-%20Thunder%20Client.jpeg)

---

### ✏️ PUT - Atualização de Livro

Responsável por atualizar informações de um livro existente, como seu status.

![PUT - Thunder Client](./PUT%20-%20Thunder%20Client.jpeg)

---

### 🗑️ DELETE - Remoção de Livro

Responsável por remover um livro do sistema.

![DELETE - Thunder Client](./DELETE%20-%20Thunder%20Client.jpeg)

---

### ✅ Resultado

Os testes demonstram o correto funcionamento dos quatro métodos HTTP implementados na API:

| Método | Operação | Status |
|---------|----------|---------|
| GET | Consultar registros | ✅ |
| POST | Criar registros | ✅ |
| PUT | Atualizar registros | ✅ |
| DELETE | Excluir registros | ✅ |

Todos os endpoints responderam conforme esperado, validando o funcionamento completo das operações CRUD da aplicação.

---

## 🎨 Design & Protótipo

O design da interface e o fluxo do usuário foram desenvolvidos utilizando o **Figma**. Você pode visualizar o projeto detalhado e interagir com o protótipo funcional através do link abaixo:

* **Protótipo:** [Acesse aqui o projeto no Figma](https://www.figma.com/design/SG3evwxkT30cVLSaqGVguJ/Untitled?node-id=0-1&t=4sjZqjb2dsI3RoVX-1)

---

## 📃 Organização do Projeto (Scrum)

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


## 📌 Status do Projeto

😄 **Concluído**
