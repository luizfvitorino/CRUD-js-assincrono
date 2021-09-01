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
        .then(response => response.json())
}

const criaCliente = (name, email) => {
    return fetch(db, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: name,
                email: email
            })
        })
        .then(response => response.body)
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detailCustomer = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(response => response.json())
}

const updateCustomer = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: name,
                email: email
            })
        })
        .then(response => response.json())
}

export const clienteService = {
    listaClientes,
    criaCliente,
    deletaCliente,
    detailCustomer,
    updateCustomer
}