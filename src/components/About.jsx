import React from "react";
import User from "../styles/images/avatar.png"

function About() {
    return (
    <section className="pageCard" id="About">
        <div>
            <h2 className="titleText">About myself</h2>
            <div className="parentBox">
                <div className="aboutContent">
                    <div className="mainContent">
                        <img className="avatar" src={User} alt="user-profile" />
                        <div className="aboutCard">
                            <p>Audio Engineer/Video Technician with strong experience in the media industry, making a career switch to the tech sector!</p>
                            <br/>
                            <p>In the midst of interfacing with digital technologies, I gained a strong interest in software development,
                            and aspire to be part of an integral community that brings about waves of changes</p>
                        </div>
                    </div>
                    <div className="subContent">
                        <p>Alfred Tay</p>
                        <p>Junior Software Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
    
}


export default About;