import { clienteService } from "../service/cliente-service.js"

const criaCliente = (nome, email, id) => {
    const linhaCliente = document.createElement('tr')

    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="./client-update.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> `

    linhaCliente.innerHTML = conteudo
    linhaCliente.dataset.id = id

    return linhaCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
    evento.preventDefault()
    let isBtnExcluir = evento.target.className === "botao-simples botao-simples--excluir"

    if (isBtnExcluir) {
        const tdCliente = evento.target.closest('[data-id]')
        let id = tdCliente.dataset.id
        clienteService.deletaCliente(id)
            .then(() => {
                tdCliente.remove
            })
    }
})

clienteService.listaClientes()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaCliente(elemento.nome, elemento.email, elemento.id))
        })
    })