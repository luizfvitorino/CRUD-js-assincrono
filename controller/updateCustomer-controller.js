import { customerService } from "../service/customer-service.js"

(async() => {
    const catchURL = new URL(window.location) // Creates a new URL object that tells us the address of the page we are on
    const id = catchURL.searchParams.get('id') // Catches the 'id' that is in the URL
    const inputName = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')

    const data = await customerService.detailCustomer(id) // Shows existent customer info in both inputs, on the customer update page
    inputName.value = data.name
    inputEmail.value = data.email

    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', async(event) => {
        event.preventDefault()

        await customerService.updateCustomer(id, inputName.value, inputEmail.value)
        window.location.href = '../pages/update-success.html' // Once the customer is updated, it redirects to the update success page
    })
})()