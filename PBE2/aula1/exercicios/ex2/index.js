const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;
    let tipo = '';

    if (a === b && b === c) {
        tipo = 'EQUILÁTERO';
    } else if (a === b || a === c || b === c) {
        tipo = 'ISÓSCELES';
    } else {
        tipo = 'ESCALENO';
    }
    
    res.json({ tipo });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});