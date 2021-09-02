import { customerService } from "../service/customer-service.js";

const form = document.querySelector(`[data-form]`)

form.addEventListener('submit', async(event) => {
    event.preventDefault()

    const name = event.target.querySelector('[data-nome]').value
    const email = event.target.querySelector('[data-email]').value

    try {
        await customerService.createCustomer(name, email)
        window.location.href = './register-success.html' // Once the customer is created, it redirects to the registration success page
    } catch (err) {
        console.log(err)
        window.location.href = './error.html'
    }
})