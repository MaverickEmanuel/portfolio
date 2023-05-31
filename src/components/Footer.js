import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="Links">
                <a href="https://www.linkedin.com/in/maverick-emanuel-9bb326274/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/maverickemanuel" target="_blank">
                    <GitHubIcon />
                </a>
                <a href="mailto:mavjamesemanuel@gmail.com">
                    <EmailIcon />
                </a>
            </div>
        </div>
    )
}

export default Footer