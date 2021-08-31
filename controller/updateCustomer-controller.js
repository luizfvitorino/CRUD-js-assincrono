import { clienteService } from "../service/cliente-service.js"

const catchURL = new URL(window.location)
const id = catchURL.searchParams.get('id')
const inputName = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detailCustomer(id)
    .then(data => {
        inputName.value = data.nome
        inputEmail.value = data.email
    })