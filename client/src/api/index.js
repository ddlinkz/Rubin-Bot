import axios from 'axios';

const url = window.location.origin + "/api";

const api = axios.create({
    baseURL: url,
});

export const getAllTweets = () => api.get(`/tweets`);
export const getTweetId = (tweet_id) => api.get(`/tweets/` + tweet_id);
export const getCommentId = (tweet_id) => api.get(`/comments/` + tweet_id);

export const postComment = (body) => api.post(`/comments/`, body);

const apis = {
    getAllTweets,
    getTweetId,
    getCommentId,
    postComment
};

export default apis;