// Enviar os dados do formulário para o servidor
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        cpf: cadastro.cpf.value,
        nascimento: cadastro.nascimento.value
    };
    
    fetch('http://localhost:4000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
    .then(response => response.status)
    .then(status => {
        if (status === 201) {
            msg3('Cliente cadastrado com sucesso');
        } else {
            msg3('Erro ao cadastrar cliente');
        }
    });
});

// Receber os dados do servidor e exibir na tabela
fetch('http://localhost:4000/clientes')
.then(response => response.json())
.then(clientes => {
    const tabela = document.getElementById('clientes');
    clientes.forEach(cliente => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${cliente.id_cliente}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${new Date(cliente.nascimento).toLocaleDateString('pt-BR')}</td>
            <td>
                <button onclick="deletarCliente(${cliente.id_cliente})">Deletar</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
});

// Função para deletar cliente
function deletarCliente(id) {
    if (confirm("Tem certeza que deseja deletar este cliente?")) {
        fetch(`http://localhost:4000/clientes/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.status)
        .then(status => {
            if (status === 200) {
                msg3('Cliente deletado com sucesso');
            } else {
                msg3('Erro ao deletar cliente');
            }
        });
    }
}

// Exibir mensagem de status
function msg3(mensagem){
    const msg = document.getElementById('msg');
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}