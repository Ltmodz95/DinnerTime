import React from 'react'
import './Home.scss'
import backgroundVideo from '../../assets/videos/background.mp4'
export default function Home() {
    return (
        <div className="home-container">

            <main>
                <h1>Dinner Time</h1>
                <div className="search-container"><input placeholder="Search for something yummy"/></div>
                
            </main>
            <video autoPlay loop muted>
                <source src={backgroundVideo}></source>
            </video>
        </div>
    )
}
