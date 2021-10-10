import React, { Component } from "react";
import "./style.css"

class makeTweet extends Component {

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

        const tweet = {
            tweet: this.state.tweet,
        }

        console.log(tweet);
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