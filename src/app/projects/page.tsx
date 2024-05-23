"use client";
import React from "react";
import { PublicContext } from "app/context";

const ProjectsPage = () => {
    const context = React.useContext(PublicContext);
    React.useEffect(() => {
        if (context && context.onCloseToggle && context.onSetBgContainer) {
            context.onCloseToggle();
            context.onSetBgContainer("bgMain");
        }
    }, []);
    return (
        <div className="rightMainBox">
            <div className="container">
                <div className="squareSide"></div>
                <div className="skillContainer">
                    <div className="skillExperience">
                        <h1 className="experience">PROJECTS AND EXPERIENCE</h1>
                        <div className="srollBox">
                            <div className="projectItem">
                                <h3 className="projectTitle">FRONTEND REACTJS/NEXTJS DEVELOPER</h3>
                                <div className="projectContent">
                                    <div className="companyName">BGB VISION</div>
                                    <div className="companyDurtion">06/2020 - 03/2024</div>
                                </div>
                                <ul className="taskList">
                                    <li>
                                        Develop responsive and user-friendly web interfaces using modern frontend frameworks such as
                                        ReactJS/Nextjs.
                                    </li>
                                    <li>
                                        Collaborate with backend developers to ensure seamless integration of frontend and backend
                                        components.
                                    </li>
                                    <li>
                                        Work closely with UX/UI designers to ensure that the user interface meets the requirements and
                                        design specifications.
                                    </li>
                                    <li>Participate in code reviews, testing, and debugging to ensure high-quality deliverables.</li>
                                    <li>
                                        <strong>Frontend:</strong> ReactJS/Nextjs , ReactHook , HTML5 / CSS / CSS3 Animation , Figma ,
                                        Typescript.
                                    </li>
                                    <li>
                                        <strong>Backend:</strong> NodeJS/NestJs , Mongodb , Socket IO , Redis Cache , Docker , GraphQL.
                                    </li>
                                </ul>
                                <div className="lineBox">
                                    <div className="lineItem"></div>
                                </div>
                            </div>
                            <div className="projectItem">
                                <h3 className="projectTitle">FRONTEND REACTJS/NEXTJS DEVELOPER</h3>
                                <div className="projectContent">
                                    <div className="companyName">OCEAN BRANCH</div>
                                    <div className="companyDurtion">03/2017 - 04/2020</div>
                                </div>
                                <ul className="taskList">
                                    <li>
                                        Plan, organize, and develop user-facing features for the components in our customer service
                                        platform.
                                    </li>
                                    <li>
                                        Develop and maintain UI components in NestJS, React, Material UI and TypeScript for use across
                                        Rakkar’s platform.
                                    </li>
                                    <li>Collaborate with team engineers to improve our product, architecture and engineering practices.</li>
                                    <li>Develop new user-facing features with a focus on responsive and intuitive design.</li>
                                    <li>
                                        <strong>Frontend:</strong> ReactJS/Nextjs , ReactHook , HTML5 / CSS / CSS3 Animation , Figma ,
                                        Typescript.
                                    </li>
                                    <li>
                                        <strong>Backend:</strong> NodeJS/NestJs , Mongodb , Socket IO , Redis Cache , Docker , GraphQL.
                                    </li>
                                </ul>
                                <div className="lineBox">
                                    <div className="lineItem"></div>
                                </div>
                            </div>
                            <div className="projectItem">
                                <h3 className="projectTitle">JUNIOR REACTJS/NEXTJS DEVELOPER</h3>
                                <div className="projectContent">
                                    <div className="companyName">VIDOCO COMPANY</div>
                                    <div className="companyDurtion">12/2016 - 01/2017</div>
                                </div>
                                <ul className="taskList">
                                    <li>
                                        Participate in the documentation process, requirements analysis, design the interface, deployment,
                                        code review, unit testing and operating the product.
                                    </li>
                                    <li>Ensure the interface loads quickly and works smoothly on diffirent platforms.</li>
                                    <li>Troubleshoot interface software and debug application code.</li>
                                    <li>Update and maintain the user interface as required or as needed.</li>
                                    <li>
                                        Interact with other members of the development team to ensure alignment and compatibility between
                                        application components
                                    </li>
                                    <li>
                                        <strong>Frontend:</strong> ReactJS/Nextjs , ReactHook , HTML5 / CSS / CSS3 Animation , Figma ,
                                        Typescript.
                                    </li>
                                    <li>
                                        <strong>Backend:</strong> NodeJS/NestJs , Mongodb , Socket IO , Redis Cache , Docker , GraphQL.
                                    </li>
                                </ul>
                                <div className="lineBox">
                                    <div className="lineItem"></div>
                                </div>
                            </div>
                            <div className="projectItem">
                                <h3 className="projectTitle">FULLSTACK .NET DEVELOPER</h3>
                                <div className="projectContent">
                                    <div className="companyName">TTC COMPANY</div>
                                    <div className="companyDurtion">05/2013 - 11/2016</div>
                                </div>
                                <ul className="taskList">
                                    <li>
                                        Collaborating in a cross functional product team and with other teams on solving customer problems
                                        by delivering product functionalities and support.
                                    </li>
                                    <li>
                                        Being involved in all phases of software engineering, from inception to coding, testing, delivery
                                        and operation.
                                    </li>
                                    <li>Developing high quality code that follows best practices and clean code principles.</li>
                                    <li>Advocate for improvements to product quality, security and performance.</li>
                                    <li>
                                        <strong>Frontend:</strong> HTML / CSS / Javascript.
                                    </li>
                                    <li>
                                        <strong>Backend:</strong> : .NET , LINQ , Microsoft SQL Server.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
