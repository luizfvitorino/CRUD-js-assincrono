import { clienteService } from "../service/cliente-service.js";

const form = document.querySelector(`[data-form]`)

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../pages/register-success.html'
    })
})