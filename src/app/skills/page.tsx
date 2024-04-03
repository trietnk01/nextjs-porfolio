"use client";
import React from "react";
import { PublicContext } from "app/context";
import Image from "next/image";

const SkillsPage = () => {
    const context = React.useContext(PublicContext);
    React.useEffect(() => {
        if (context && context.onCloseToggle && context.onSetBgContainer) {
            context.onCloseToggle();
            context.onSetBgContainer("bgGray");
        }
    }, []);
    return (
        <div className="rightMainBox">
            <div className="wrapper">
                <div className="squareSide"></div>
                <div className="content">
                    <div className="skillsContainer">
                        <div className="skillsWrapper">
                            <h1 className="skillsHeading">My Skills</h1>
                            <div className="skillsMain">
                                <div className="skillsRow">
                                    <div className="skillsItemLeft">
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Html/Html5</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                        <Image src="/html5.png" alt="Porfolio" width={40} height={40} />
                                    </div>
                                    <div className="skillsItemRight">
                                        <Image src="/css3.png" alt="Porfolio" width={40} height={40} />
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Css/Css3</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skillsRow">
                                    <div className="skillsItemLeft">
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Reactjs</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                        <Image src="/reactjs.png" alt="Porfolio" width={40} height={40} />
                                    </div>
                                    <div className="skillsItemRight">
                                        <Image src="/vuejs.png" alt="Porfolio" width={40} height={40} />
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Vuejs</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skillsRow">
                                    <div className="skillsItemLeft">
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Nodejs</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                        <Image src="/nodejs.png" alt="Porfolio" width={40} height={40} />
                                    </div>
                                    <div className="skillsItemRight">
                                        <Image src="/nestjs.png" alt="Porfolio" width={40} height={40} />
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Expressjs/Nestjs</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skillsRow">
                                    <div className="skillsItemLeft">
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Elastic search</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                        <Image src="/elasticsearch.png" alt="Porfolio" width={40} height={40} />
                                    </div>
                                    <div className="skillsItemRight">
                                        <Image src="/kafka.png" alt="Porfolio" width={40} height={40} />
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Kafka</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skillsRow">
                                    <div className="skillsItemLeft">
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Typescript</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                        <Image src="/typescript.png" alt="Porfolio" width={40} height={40} />
                                    </div>
                                    <div className="skillsItemRight">
                                        <Image src="/gitlab.png" alt="Porfolio" width={40} height={40} />
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Github/Gitlab</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skillsRow">
                                    <div className="skillsItemLeft">
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Mysql/PostgreSql</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                        <Image src="/mysql.png" alt="Porfolio" width={40} height={40} />
                                    </div>
                                    <div className="skillsItemRight">
                                        <Image src="/mongo.png" alt="Porfolio" width={40} height={40} />
                                        <div className="titleBox">
                                            <h3 className="skillsTitle">Mongodb</h3>
                                            <div className="skillLine"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
