const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/salariofamilia', (req,res)=>{
    const {salario, filhos} = req.body;
    let salariototal = 0;
    filhos = filhos * 45;

    if(salario < 2000){
        salariototal = filhos + salario;
        res.json({salariototal, filhos})
    }

})