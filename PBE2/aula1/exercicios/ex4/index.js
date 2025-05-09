const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/maiornumero', (req, res) => {
    const { numeros } = req.body;
    
    if (numeros.length !== 6) {
        return res.status(400).json({ erro: 'São necessários exatamente 6 números inteiros' });
    }
    
    let maiorNumero = Math.max(...numeros);
    res.json({ maiorNumero });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});