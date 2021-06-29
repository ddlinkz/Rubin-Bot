import axios from 'axios';

const url = window.location.origin + "/api";

const api = axios.create({
    baseURL: url,
});

export const getAllTweets = () => api.get(`/tweets`);
export const getTweetId = (tweet_id) => api.get(`/tweets/` + tweet_id);

const apis = {
    getAllTweets,
    getTweetId
};

export default apis;