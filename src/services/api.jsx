import axios from 'axios'

const api = axios.create({
    baseURL: 'https://high-deadpool-orange-bahrain.bohr.io/api/core/'
    //http://localhost:3300/'
})
export default api;