const db = `http://localhost:3000/profile`

const listaClientes = () => {
    /* Método sem o usar o fetch()

    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()
        http.open('GET', db)
        http.onload = () => {
            if (http.status < 400) {
                resolve(JSON.parse(http.response))
            } else {
                reject(JSON.parse(http.response))
            }
        }
        http.send()
    })
    return promise
    */

    return fetch(db)
        .then(resposta => resposta.json())
}

const criaCliente = (nome, email) => {
    return fetch(db, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                nome: nome,
                email: email
            })
    })
    .then(resposta => {
        return resposta.body
    })
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detailCustomer = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(data => data.json())
}

export const clienteService = {
    listaClientes,
    criaCliente,
    deletaCliente,
    detailCustomer
}