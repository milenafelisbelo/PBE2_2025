fetch('http://localhost:3000/clientes')
    .then(response => response.json())
    .then(data => console.table(data))

function cadastrar() {
    let dados = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        nascimento: document.getElementById('nascimento').value
    }

    fetch('http://localhost:3000/clientes',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(resp => {
            alert('Cliente cadastrado com sucesso')
        })
}