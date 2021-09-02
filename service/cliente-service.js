const db = `http://localhost:3000/profile`

const listCustomers = () => fetch(db).then(response => response.json())

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
        .then(response => response.body)
}

const deleteCustomer = (id) => fetch(`http://localhost:3000/profile/${id}`, { method:'DELETE' })

const detailCustomer = (id) => fetch(`http://localhost:3000/profile/${id}`).then(response => response.json())

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
        .then(response => response.json())
}

export const customerService = {
    listCustomers,
    createCustomer,
    deleteCustomer,
    detailCustomer,
    updateCustomer
}