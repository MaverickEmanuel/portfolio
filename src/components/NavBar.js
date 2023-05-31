import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="Headers">
                <a href="/projects">Projects</a>
                <a href="/portfolio">Home</a>
                <a href="/experience">Experience</a>
            </div>
        </div>
    )
}

export default NavBar