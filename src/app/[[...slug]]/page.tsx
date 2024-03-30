"use client";
import React from "react";
import { PublicContext } from "app/layout";
import Image from "next/image";
const HomePage = () => {
    const context = React.useContext(PublicContext);
    React.useEffect(() => {
        if (context && context.onCloseToggle && context.onSetBgContainer) {
            context.onCloseToggle();
            context.onSetBgContainer("bgMain");
        }
    }, []);
    return (
        <div className="homeMainBox">
            <div className="container">
                <Image src="/Logo-AskWho.svg" alt="Nguyen Kim Dien" width={150} height={150} />
                <div className="content">
                    <h1 className="nameBox">Nguyen Kim Dien</h1>
                    <div className="titleBox">Fullstack developer</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
