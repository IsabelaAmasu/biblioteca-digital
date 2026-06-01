CREATE DATABASE IF NOT EXISTS biblioteca_db;
USE biblioteca_db;

CREATE TABLE IF NOT EXISTS livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano INT NOT NULL,
    status VARCHAR(50) DEFAULT 'Disponível'
);

-- Dados iniciais para teste
INSERT INTO livros (titulo, autor, ano, status) VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'Disponível'),
('1984', 'George Orwell', 1949, 'Emprestado'),
('O Alquimista', 'Paulo Coelho', 1988, 'Disponível');