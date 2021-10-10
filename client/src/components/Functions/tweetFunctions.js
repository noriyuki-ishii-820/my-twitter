import axios from 'axios';

export const addTweet = tweet => {
    return axios
    .post('/api/addTweet', {
        tweet: tweet.tweet,
        email: tweet.email,
        username: tweet.username,
        time: tweet.time,
    })
    .then(res => {
        console.log('Submitted!');
    })
}

// get All Tweets
export const getAllTweets = data => {
    return axios
    .get('/api/getAllTweets', {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}