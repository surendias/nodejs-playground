const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(status)
    .then(json)
    .then(data => {
        console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
        console.log('Request failed', error)
    })