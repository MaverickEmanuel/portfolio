import React from 'react';
import ACVI from "../assets/acvi.png";
import Queens from "../assets/queens.png";
import '../styles/Experience.css';

function Experience() {
    return (
        <div className="Experience">
            <h1>Education</h1>
            <div className="Education">
                <div className="University">
                    <div className="Info">
                        <h2>Queen's University</h2>
                        <p>2021-2025</p>
                    </div>
                    <div className="Description">
                        <img alt="Queen's University" className="Queens" src={Queens} />
                        <p>Bachelor of Computer Science (Honours)</p>
                    </div>
                </div>
                <div className="HighSchool">
                    <div className="Info">
                        <h2>Anderson CVI</h2>
                        <p>2017-2021</p>
                    </div>
                    <div className="Description">
                        <img alt="ACVI" className="ACVI" src={ACVI} />
                        <p>Ontario Secondary School Diploma</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience