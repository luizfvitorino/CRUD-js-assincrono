import { customerService } from "../service/cliente-service.js"

const catchURL = new URL(window.location)
const id = catchURL.searchParams.get('id')
const inputName = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

customerService.detailCustomer(id) // Shows existent customer info in both inputs, on the customer update page
    .then(customer => {
        inputName.value = customer.name
        inputEmail.value = customer.email
    })