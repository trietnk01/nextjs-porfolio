"use client";
import React from "react";
import { PublicContext } from "app/context";

const ContactPage = () => {
    const context = React.useContext(PublicContext);
    React.useEffect(() => {
        if (context && context.onCloseToggle && context.onSetBgContainer) {
            context.onCloseToggle();
            context.onSetBgContainer("bgSecond");
        }
    }, []);
    return (
        <div className="rightMainBox">
            <div className="container">
                <div className="squareSide"></div>
                <div className="content">
                    <h1 className="contactTitle">CONTACT</h1>
                    <div className="srollBox">
                        <div className="contactDiv">
                            <div className="contactWrapper">
                                <div className="contactRow">
                                    <div className="contactItem">
                                        <h3 className="title">First Name</h3>
                                        <div className="intro">Dien</div>
                                    </div>
                                    <div className="contactItem">
                                        <h3 className="title">Last Name</h3>
                                        <div className="intro">Nguyen Kim</div>
                                    </div>
                                </div>
                                <div className="contactRow">
                                    <div className="contactItem">
                                        <h3 className="title">Mobile/Zalo</h3>
                                        <div className="intro">(+84) 988162753</div>
                                    </div>
                                    <div className="contactItem">
                                        <h3 className="title">Skype</h3>
                                        <div className="intro">live:564693ab0db218ca</div>
                                    </div>
                                </div>
                                <div className="contactRow">
                                    <div className="contactItem">
                                        <h3 className="title">Email</h3>
                                        <div className="intro">nguyenkimdien02@gmail.com</div>
                                    </div>
                                    <div className="contactItem"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
