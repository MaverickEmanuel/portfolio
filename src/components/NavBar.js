import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="Headers">
                <Link to="/projects">Projects</Link>
                <Link to="/portfolio">Home</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default NavBar