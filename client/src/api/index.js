import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllTweets = () => api.get(`/tweets`);
export const getTweetId = (tweet_id) => api.get(`/tweets/` + tweet_id);

const apis = {
    getAllTweets,
    getTweetId
};

export default apis;