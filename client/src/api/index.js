import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const getAllTweets = () => api.get(`/tweets`)

const apis = {
    getAllTweets
}

export default apis