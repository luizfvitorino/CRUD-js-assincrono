import { clienteService } from "../service/cliente-service.js"

const criaCliente = (nome, email) => {
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
    return linhaCliente
}

const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criaCliente(elemento.nome, elemento.email))
    })
})