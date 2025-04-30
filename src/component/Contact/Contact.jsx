import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";  // Correct icon import
import { BsFillChatDotsFill } from "react-icons/bs";  // Correct icon import
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
       <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contact</span>
                <span className="primaryText">Easy to Contact Us</span>
                <span className="secondaryText">We are always ready to help by 
                    providing the best service for you.
                    We believe a good place to live can make your life better.
                </span>
                <div className="flexColStart ContactModes"> 
                    {/* first row for call*/}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} /> 
                                </div>
                                <div className="flexColStart detail"> 
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">7280086480</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>

                    {/* second row for Chat */}
                    
                     <div className="flexColCenter mode">
                        
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} /> 
                                 </div>
                                <div className="flexColStart detail"> 
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">7280086480</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Start Chat</div>
                        
                    </div> 
                    {/* this for video call section */}
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} /> 
                                </div>
                                <div className="flexColStart detail"> 
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">7280086480</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>
                    </div>
                    {/* This section for message */}
                    <div className="flexColCenter mode">
                        
                            <div className="flexStart">
                                
                             <div className="flexCenter icon">
                                  <HiChatBubbleBottomCenter size={25} />
                             </div>
                                <div className="flexColStart detail"> 
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">7280086480</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message</div>
                        
                    </div> 
                    

                </div>
            </div>
            {/* Right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="Contact" />
                </div>
            </div>

        </div>
       </section>
    )
}

export default Contact;
