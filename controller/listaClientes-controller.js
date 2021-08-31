import { clienteService } from "../service/cliente-service.js"

const createRow = (nome, email, id) => {
    const newRow = document.createElement('tr')

    const content = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="./client-update.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> `

    newRow.innerHTML = content
    newRow.dataset.id = id

    return newRow
}

const table = document.querySelector('[data-tabela]')

table.addEventListener('click', (event) => {
    event.preventDefault()
    let isDeleteButton = event.target.className === "botao-simples botao-simples--excluir"

    if (isDeleteButton) {
        const linhaCliente = event.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.deletaCliente(id)
            .then(() => {
                linhaCliente.remove()
            })
    }
})

clienteService.listaClientes()
    .then(data => {
        data.forEach(elemento => {
            table.appendChild(createRow(elemento.nome, elemento.email, elemento.id))
        })
    })