import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="Intro">
                <h1>Hey! I'm Maverick Emanuel.</h1>
                <p>I'm a 19 year-old computer science student at Queen's University. I'm currently learning Javascript and React to further my understanding of front-end web development.</p>
                <KeyboardArrowDownIcon />
            </div>
            <div className="Skills">
                <h1>Skills</h1>
                <div className="Items">
                    <h2>Languages</h2>
                    <p>Python, Java, C, HTML/CSS, Javascript</p>
                    <h2>Developer Tools</h2>
                    <p>Git (GitHub), VS Code, Visual Studio, IntelliJ IDEA, Eclipse</p>
                </div>
            </div>
        </div>
    )
}

export default Home