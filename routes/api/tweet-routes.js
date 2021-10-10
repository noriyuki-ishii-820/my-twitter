const express = require("express");
const router = express.Router();

// Load User model
const Tweet = require("../../models/Tweet");


// add new tweet to the DB
router.post('/api/addTweet', (req, res) => {


    const tweetData = {
        tweet: req.body.tweet,
        email: req.body.email,
        username: req.body.username,
        time: req.body.time,
    }

    Tweet.create(tweetData)
    .then(tweetResponse => {
        res.json(tweetResponse);
    })
    .catch(err => {
        console.log(err);
    })
})

// get all Tweets 
router.get('/api/getAllTweets', (req, res) => {
    Tweet.find()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json({ error: "tweets do not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

module.exports = router;