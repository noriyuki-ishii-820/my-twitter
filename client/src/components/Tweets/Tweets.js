import React, {Component} from 'react'
import { getAllTweets } from "../Functions/tweetFunctions"

import "./Tweets.css"

class Tweets extends Component {
    constructor() {
        super()
        this.state = {
            tweet:[""]
        }
    }

    componentDidMount() {
        getAllTweets().then(data => {
            this.setState ({
                tweet: data
            })
        })
    }


    render(){
        return (
            <div >
                {this.state.tweet.slice(0).reverse().map((each,i)=> {
                    return <div className="TweetContainer">
                                <h5>{each.tweet}</h5>
                                <h6>posted by {each.username} on {each.time}</h6>
                           </div>
                })}
            </div>
        )
}}

export default Tweets
