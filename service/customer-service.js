const db = `http://localhost:3000/profile`

const listCustomers = async() => {
        const data = await fetch(db)

        if (!data.ok) throw new Error('Não foi possível listar os clientes! Há algo de errado com a requisição.')

        return data.json()
    } // Requests/receives the database info, then parses its body text into JSON and returns it

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

const createCustomer = async(name, email) => {
    const data_create = await fetch(db, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })

    if (!data_create.ok) throw new Error('Não foi possível criar um cliente! Há algo de errado com a requisição.')

    return data_create.body
}

const deleteCustomer = async(id) => {
        const data_delete = fetch(`http://localhost:3000/profile/${id}`, { method: 'DELETE' })

        if (!data_delete.ok) throw new Error('Não foi possível deletar o cliente! Há algo de errado com a requisição.')
    } // Deletes the customer from the database

const detailCustomer = async(id) => {
        const data_detail = await fetch(`http://localhost:3000/profile/${id}`)

        if (!data_detail.ok) throw new Error('Não foi possível trazer os detalhes do cliente! Há algo de errado com a requisição.')

        return data_detail.json()
    } // Requests/receives a customer's info (using its id property) from the database, then parses it into JSON and returns it

const updateCustomer = async(id, name, email) => {
    const data_update = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })

    if (!data_update.ok) throw new Error('Não foi possível atualizar o cliente! Há algo de errado com a requisição.')

    return data_update.json()
}

export const customerService = {
    listCustomers,
    createCustomer,
    deleteCustomer,
    detailCustomer,
    updateCustomer
}