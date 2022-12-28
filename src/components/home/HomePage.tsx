import React from 'react';
import './HomePage.css';
import avatar from "../../assets/avatar.png";

function HomePage() {
    return (
        <div className="home-page-div">
            <div className="intro-block">
                <h1>Emma Scott</h1>
                <p className="work-title">Full Stack Engineer - London</p>
                <p className="description">A collection of work, interests and <br/> other things...</p>
            </div>
            <img src={avatar} className="App-logo" alt="Avatar of Emma" />
        </div>
    )
}

export default HomePage;