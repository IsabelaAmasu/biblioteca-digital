const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Altere se seu usuário for diferente
    password: '',      // Insira a senha do seu banco de dados
    database: 'biblioteca_db'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao Banco de Dados MySQL!');
});

// [GET] - Listar todos os livros ou buscar por título
app.get('/api/livros', (req, res) => {
    const { search } = req.query;
    if (search) {
        const query = 'SELECT * FROM livros WHERE titulo LIKE ?';
        db.query(query, [`%${search}%`], (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    } else {
        const query = 'SELECT * FROM livros';
        db.query(query, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    }
});

// [POST] - Adicionar um novo livro
app.post('/api/livros', (req, res) => {
    const { titulo, autor, ano } = req.body;
    const query = 'INSERT INTO livros (titulo, autor, ano, status) VALUES (?, ?, ?, "Disponível")';
    db.query(query, [titulo, autor, ano], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, titulo, autor, ano, status: 'Disponível' });
    });
});

// [PUT] - Atualizar status do livro (Empréstimo/Devolução) ou dados
app.put('/api/livros/:id', (req, res) => {
    const { id } = req.params;
    const { status, titulo, autor, ano } = req.body;
    
    if (status) {
        const query = 'UPDATE livros SET status = ? WHERE id = ?';
        db.query(query, [status, id], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Status atualizado com sucesso!' });
        });
    } else {
        const query = 'UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?';
        db.query(query, [titulo, autor, ano, id], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Livro atualizado com sucesso!' });
        });
    }
});

// [DELETE] - Remover um livro do acervo
app.delete('/api/livros/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM livros WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Livro removido com sucesso!' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});