const con = require('../connect');

function create(req, res) {
    const { nome, cpf, nascimento } = req.body;
    const sql = `INSERT INTO clientes (nome, cpf, nascimento) VALUES ('${nome}', '${cpf}', '${nascimento}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar cliente');
        } else {
            res.status(201).json('Cliente cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM clientes';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar clientes');
        } else {
            res.status(200).json(result);
        }
    });
}

// Função para deletar um cliente
function del(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM clientes WHERE id_cliente = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao deletar cliente');
        } else {
            res.status(200).json('Cliente deletado com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    del
};