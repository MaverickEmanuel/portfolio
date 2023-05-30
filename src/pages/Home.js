import React from 'react'
import '../styles/Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Intro">
                <h1>Maverick's Portfolio</h1>
            </div>
            <div className="Skills">
                <h1>Skills</h1>
                <div className="Items">
                    <h2>Languages</h2>
                    <p>Python, Java, C, HTML/CSS, Javascript</p>
                </div>
            </div>
        </div>
    )
}

export default Home