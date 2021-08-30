const db = 'http://localhost:3000/profile'

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

export const clienteService = {
    listaClientes
}