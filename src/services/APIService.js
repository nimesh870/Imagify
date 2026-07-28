import axios from 'axios'

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URI || 'http://localhost:8000',
    withCredentials: true,    // sends cookies automatically
    headers : {
        "Content-Type" : "application/json"
    }
})

// checks if token exists in localStorage and attaches it to the Authorization header
// interceptors runs automatically before every request to server.
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

const authService = {
    register : async ({username , email , password}) => {
        const response = await api.post('/api/auth/register' , {
            username,
            email,
            password
        })

        return response.data
    },

    login : async ({email , password}) => {
        const response = await api.post('/api/auth/login' , {
            email,
            password
        })

        localStorage.setItem('token' , response.data.token) // future request includes tokens automatically via interceptors
        return response.data
    },

    logout : async () => {
        localStorage.removeItem('token')
    }
}

export default authService;