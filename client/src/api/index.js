import axios from 'axios';

const url = window.location.origin + "/api";

const api = axios.create({
    baseURL: url,
});

// GET requests
export const getAllTweets = () => api.get(`/tweets`);
export const getTweetId = (tweet_id) => api.get(`/tweets/` + tweet_id);
export const getCommentId = (tweet_id) => api.get(`/comments/` + tweet_id);
export const getPageView = (route) => api.get(`/pageview/` + route);

// POST requests
export const postComment = (body) => api.post(`/comments/`, body);

// PUT requests
export const putPageView = (route) => api.put(`/pageview/`, route)

const apis = {
    getAllTweets,
    getTweetId,
    getCommentId,
    getPageView,
    postComment,
    putPageView
};

export default apis;