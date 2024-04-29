import axios from 'axios'

export const api = axios.create({ 
    baseURL: 'https://tarefa-backend-beta.vercel.app/',
})

export const fetcher = (url) => api.get(url).then(res => res.data)

// export const fetcher = (url) => axios.create({
//     baseURL: 'http://localhost:3000'
// }).get(url).then(res => res.data)