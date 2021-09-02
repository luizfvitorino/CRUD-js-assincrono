const db = `http://localhost:3000/profile`

const listCustomers = () => fetch(db).then(response => {
        if (!response.ok) throw new Error('Não foi possível listar os clientes! Há algo de errado com a requisição.')
        return response.json()
    }) // Requests/receives the database info and then parses its body text into JSON

/* This is the code behind FETCH

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

const createCustomer = (name, email) => {
    return fetch(db, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then(response => {
            if (!response.ok) throw new Error('Não foi possível criar um cliente! Há algo de errado com a requisição.')
            return response.body
        }) // Returns Response's body
}

const deleteCustomer = (id) => fetch(`http://localhost:3000/profile/${id}`, { method: 'DELETE' }).then(response => {
    if (!response.ok) throw new Error('Não foi possível deletar o cliente! Há algo de errado com a requisição.')
})

const detailCustomer = (id) => fetch(`http://localhost:3000/profile/${id}`).then(response => {
        if (!response.ok) throw new Error('Não foi possível trazer os detalhes do cliente! Há algo de errado com a requisição.')
        return response.json()
    }) // Requests/receives a customer's info (using its id property) from the database and then parses into JSON

const updateCustomer = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then(response => {
            if (!response.ok) throw new Error('Não foi possível atualizar o cliente! Há algo de errado com a requisição.')
            return response.json()
        })
}

export const customerService = {
    listCustomers,
    createCustomer,
    deleteCustomer,
    detailCustomer,
    updateCustomer
}