import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import Maketweet from "../../makeTweet/makeTweet"
import Tweets from "../../Tweets/Tweets"
import "./Dashboard.css"

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
       
    }
    
    render() {
        return (
            <div className="DashboardContainer">
                    <Sidebar />
                    <div>
                        <h1>
                             Welcome { this.state.first_name } { this.state.last_name }
                        </h1>
                        <div>
                            <Maketweet name={this.state}/>
                            <Tweets />
                        </div>
                    </div>
            </div>
        );
    } 
}

export default DashBoard;