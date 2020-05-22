import axios from 'axios'

const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
})

const instance = axios.create({
    baseURL: '/api',
    timeout: 3000,
    headers
})

instance.interceptors.request.use((config) => {
    // TODO
    return config
}, (error) => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    // TODO
    if (response.status === 200) {
        return response
    } else {
        console.error(`Request fail`)
        return Promise.reject({ error: { message: "Request fail due to server error" } })
    }
}, (error) => {
    console.log(`error: ${error}`);
    return Promise.reject({ msg: '网络错误' })
})

const get = (url: string, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, params).then((response) => {
            resolve(response)
        }).catch(error => {
            console.error(`Request fail. url = ${url}, message = ${error}`)
            reject({ error: { message: "Request failed" } })
        })
    })
}

const post = (url: string, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then((response) => {
            resolve(response)
        }).catch(error => {
            console.error(`Request fail. url = ${url}, message = ${error}`)
            reject({ error: { message: "Request failed" } })
        })
    })
}

export default { get, post }