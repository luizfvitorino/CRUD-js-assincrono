import { customerService } from "../service/cliente-service.js"

const createRow = (name, email, id) => {
    const newRow = document.createElement('tr')

    const content = `
        <td class="td" data-td>${name}</td>
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

    const isDeleteButton = event.target.className === "botao-simples botao-simples--excluir"

    if (isDeleteButton) {
        const customerRow = event.target.closest('[data-id]')
        const id = customerRow.dataset.id

        customerService.deleteCustomer(id)
            .then(() => {
                customerRow.remove()
            })
    }
})

customerService.listCustomers()
    .then(customers => {
        customers.forEach(customer => {
            table.appendChild(createRow(customer.name, customer.email, customer.id))
        })
    })