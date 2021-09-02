import { customerService } from "../service/customer-service.js"

const createRow = (name, email, id) => {
    const newRow = document.createElement('tr') // Creates a new Table Row for the customer

    const content = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="./customer-update.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> `

    newRow.innerHTML = content // Sets the content above as inner HTML code for the new row
    newRow.dataset.id = id // Sets the customer's id as data-id attribute for the new row

    return newRow
}

const table = document.querySelector('[data-tabela]')

table.addEventListener('click', (event) => {
    event.preventDefault()

    const isDeleteButton = event.target.className === "botao-simples botao-simples--excluir"

    if (isDeleteButton) {
        const customerRow = event.target.closest('[data-id]')
        const id = customerRow.dataset.id

        customerService.deleteCustomer(id) // Deletes the customer from the database
            .then(() => {
                customerRow.remove() // Then deletes the customer row from the page without needing to refresh
            })
    }
})

customerService.listCustomers()
    .then(customers => {
        customers.forEach(customer => {
            table.appendChild(createRow(customer.name, customer.email, customer.id)) // Whenever the page is refreshed, it creates a row for each customer present in the database
        })
    })