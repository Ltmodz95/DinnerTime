import React from 'react'
import './Home.scss'
import backgroundVideo from '../../assets/videos/background.mp4'
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="home-container">
            <main>
                <h1>Dinner Time</h1>
                <div className="search-container"><input placeholder="Search for something yummy" /></div>
                <div className="all-recipes"><Link to="/recipes">Show them all am so hungry!!</Link></div>
            </main>
            <video autoPlay loop muted>
                <source src={backgroundVideo}></source>
            </video>
        </div>
    )
}
