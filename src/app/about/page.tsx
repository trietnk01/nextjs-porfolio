"use client";
import React from "react";
import { PublicContext } from "app/context";
const AboutPage = () => {
    const context = React.useContext(PublicContext);
    React.useEffect(() => {
        if (context && context.onCloseToggle && context.onSetBgContainer) {
            context.onCloseToggle();
            context.onSetBgContainer("bgPink");
        }
    }, []);
    return (
        <div className="rightMainBox">
            <div className="container">
                <div className="squareSide"></div>
                <div className="content">
                    <div className="srollBox">
                        <ul className="intro">
                            <li className="item">
                                <div className="text">
                                    My name is <strong>Dien</strong> . I graduated at <strong>HUTECH</strong> university for 11 years . And
                                    I have 7 years experience about Frontend as well as <strong>ReactJs</strong> , Vuejs,{" "}
                                    <strong>Html/Css3</strong> and Backend as well as <strong>Nodejs / Nestjs</strong>. But I have been
                                    doing code for <strong>ReactJs/NestJs</strong> so far.
                                </div>
                            </li>
                            <li className="item">
                                <div className="text">
                                    I believe my <strong> greatest strength </strong> is its ability to solve problems quickly and
                                    efficiently. I can see many aspects of a problem, which makes me eligible to{" "}
                                    <strong> complete my work even in challenging conditions</strong>. Solving that problem allowed me to
                                    become a better communicator. I think that my ability to see all aspects of a problem will help to
                                    collaborate better with my team members . My short term goal is to find a position where I can use the
                                    knowledge and <strong>strengths</strong> that I have. I want to partake in the growth and success of the
                                    company I work for. Well, in five years from now, I want to be in a management position of a company. I
                                    want to make a difference and <strong> I’m willing to work hard </strong> to achieve this goal. I don’t
                                    want a regular career, I want a <strong> special career </strong> that I can be proud of.
                                </div>
                            </li>
                            <li className="item">
                                <div className="text">
                                    It was a <strong> great experience </strong> but I felt I had learned everything I could in that
                                    position. I didn’t see myself having any promotion <strong> opportunities </strong> in the company
                                    before, and I was the type to <strong>enjoy challenges</strong>, so I thought it was time for me to{" "}
                                    <strong>switch jobs</strong>.
                                </div>
                            </li>
                            <li className="item">
                                <div className="text">
                                    This company has <strong>everything</strong> I’m looking for. It provides{" "}
                                    <strong>the type of work I love</strong> , the employees are all happy, and the environment is great. I
                                    believe I can grow and gain <strong>more experience</strong> , as well as prove my ability through many
                                    successful projects if I have <strong>opportunity</strong> to work for this company. I plan on staying a
                                    long time .
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
