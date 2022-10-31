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
                            <p>Audio Engineer/Video Technician with varying experience in the media industry</p>
                            <p>Whilst interfacing with digital technologies, I gained a strong interest in software development,
                            and decided to make a bold move and start from the front-end.
                            </p>
                            <p>
                                Current technologies I am focused on: React, Javascript, HTML, CSS & Rails.
                            </p>
                        </div>
                    </div>
                    <div className="subContent">
                        <p>Alfred Tay</p>
                        <p>Junior Front-end Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
    
}


export default About;