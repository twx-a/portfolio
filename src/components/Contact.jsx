import React from "react";


function Contact() {
    return (
    <section className="pageCard" id="Contact">
        <div>
            <h3 className="titleText">Contact Me!</h3>
            <div>
                <div className="contactForm">
                    <p>Leave your Name, Email & Message down below if you have any enquiries! Website is WIP</p>
                    <form action="mailto:twx.alfred@gmail.com">
                        <label for="inputName">Your Name:</label><br/>
                        <input type="text" id="inputName" placeholder="Your Name" required/> <br/>
                        <label for="inputEmail">Your Email:</label><br/>
                        <input type="text" id="inputEmail" placeholder="Your Email" required/> <br/>
                        <label for="inputField">Your Message:</label><br/>
                        <textarea id="inputField" placeholder="Your Message" required/> <br/>
                        <input type="submit" id="submit" value="Submit"/>
                    </form>
                </div>
                <h4 className="snsTitle">Connect with me!</h4>
                <div className="socialMedia">
                    <ul>
                        <li><a href="https://github.com/twx-a"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/twxa/"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://www.hackerrank.com/twx_alfred"><i class="fa-brands fa-hackerrank"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Contact;