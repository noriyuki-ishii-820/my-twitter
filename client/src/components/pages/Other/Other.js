import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
// import DashboardNewsCard from "../../DashboardNewsCard/DashboardNewsCard"
import "./style.css"

class Roster extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                {/* <div className="content">
                    <DashboardNewsCard />
                </div> */}
            </div>
       );
    }}
export default Roster;