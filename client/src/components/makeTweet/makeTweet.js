import React, { Component } from "react";
import { addTweet } from "../Functions/tweetFunctions"
import "./style.css"

class makeTweet extends Component{
    
    constructor (props) {
        super(props)
        this.state = {
            tweet:"",
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ tweet: event.target.value });
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.tweet === ""){
            alert("input is empty")
            return
        }

        const date = new Intl.DateTimeFormat("en-GB",{
            year: "numeric",
            month: "long",
            day: "2-digit"
            }).format(Date.now())

        const tweet = {
            tweet: this.state.tweet,
            email: this.props.name.email,
            username: this.props.name.first_name + " " + this.props.name.last_name,
            time: date,
        }       

        addTweet(tweet)
    }
    render() {
    
        return (
            <div className="dashboardCard card cardBackground">
                <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group'>
                            <input type='text'
                                refs='tweet_submit'
                                className='form-control'
                                name='tweet'
                                placeholder='What is happening?'
                                value={this.state.tweet}
                                onChange={this.onChange}
                            />
                    </div>
                    <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Tweet
                    </button>
                </form>
          
            </div>
        );
        }

}

export default makeTweet;