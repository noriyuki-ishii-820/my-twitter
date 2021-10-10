import React, {Component} from 'react'
import { getAllTweets } from "../Functions/tweetFunctions"

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
        console.log(this.state)

        return (
            <div>
                {this.state.tweet.map((each,i)=> {
                    return <div>
                                <h5>{each.tweet}</h5>
                                <h6>posted by {each.username} on {each.time}</h6>
                           </div>
                })}
            </div>
        )
}}

export default Tweets
