const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ordenar-numeros', (req, res) => {
    const { numeros } = req.body;
    
    if (numeros.length !== 5) {
        return res.status(400).json({ erro: 'São necessários exatamente 5 números inteiros' });
    }
    
    let numerosOrdenados = numeros.sort((a, b) => a - b);
    res.json({ numerosOrdenados });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});