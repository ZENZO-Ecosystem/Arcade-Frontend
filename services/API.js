import axios from 'axios'

const API = axios.create({
    baseURL: 'https://arcade.zenzo.io/api/v1/',
    timeout: 5000
})

export default API