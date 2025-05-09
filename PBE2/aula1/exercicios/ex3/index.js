const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;
    let novoPreco = preco;
    
    if (preco < 1000) {
        novoPreco += preco * 0.05;
    } else {
        novoPreco += preco * 0.07;
    }
    
    res.json({ nome, novoPreco });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});