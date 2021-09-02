import { customerService } from "../service/customer-service.js";

const form = document.querySelector(`[data-form]`)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = event.target.querySelector('[data-nome]').value
    const email = event.target.querySelector('[data-email]').value

    customerService.createCustomer(name, email)
        .then(() => {
            window.location.href = '../pages/register-success.html' // Once the customer is created, it redirects to the registration success page
        })
})