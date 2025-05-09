document.getElementById('cadastro').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        data: formData.get('data'),
        valor: formData.get('valor'),
        descricao: formData.get('descricao')
    };
    
    fetch('http://localhost:4000/gastos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        alert(response.message);
        location.reload();
    });
});

fetch('http://localhost:4000/gastos')
.then(response => response.json())
.then(gastos => {
    const tabela = document.getElementById('clientes');
    tabela.innerHTML = '';
    gastos.forEach(gasto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${gasto.gasto_id}</td>
            <td>${gasto.data}</td>
            <td>${gasto.valor}</td>
            <td>${gasto.descricao}</td>
            <td><button onclick="deletargasto(${gasto.gasto_id})">Deletar</button></td>
        `;
        tabela.appendChild(linha);
    });
});

function deletargasto(id) {
    if (confirm("Tem certeza que deseja deletar este gasto?")) {
        fetch(`http://localhost:4000/gastos/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(response => {
            alert(response.message);
            location.reload();
        });
    }
}