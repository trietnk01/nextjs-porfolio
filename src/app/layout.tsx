"use client";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import "scss/style.min.css";
interface PublicContext {
    onCloseToggle?: () => void;
    onSetBgContainer?: (bgClass: string) => void;
}
export const PublicContext = React.createContext<PublicContext | null>(null);
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [toggle, setToggle] = React.useState<boolean>(true);
    const [bgContainer, setBgContainer] = React.useState<string>("bgMain");
    const handleBarsClick = () => {
        setToggle(!toggle);
    };
    const handleClosePan = () => {
        setToggle(true);
    };
    const handleSetBgContainer = (bgClass: string) => {
        setBgContainer(bgClass);
    };
    return (
        <html lang="en">
            <body>
                <PublicContext.Provider value={{ onCloseToggle: handleClosePan, onSetBgContainer: handleSetBgContainer }}>
                    <div className={clsx("mainContainer", bgContainer)}>
                        <div className="fixedSidebar">
                            <div className="logoBox">
                                <Link href="/">
                                    <Image alt="Porlio" src="/Logo-AskWho.svg" width={72} height={72} />
                                </Link>
                            </div>
                            <div className="boxBars">
                                <button type="button" className="btnBars" onClick={handleBarsClick}>
                                    <FontAwesomeIcon icon={toggle ? faBars : faClose} className="faBarsIcon" />
                                </button>
                            </div>
                            <div className="contactBox">
                                <Link href="/contact" className="contactLink">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        {children}
                        <div className={clsx({ panelToggle: true, elShow: !toggle })}>
                            <ul className="mainMenu">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About me</Link>
                                </li>
                                <li>
                                    <Link href="/skills">Skills</Link>
                                </li>
                                <li>
                                    <Link href="/projects">My projects</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="contactRightBox">
                            <Link href="/contact" className="contactedLink">
                                Contact
                            </Link>
                        </div>
                        <Image
                            src="/Logo-AskWho.svg"
                            alt=""
                            className={clsx({ logoRightBottom: true, elShow: !toggle })}
                            width={80}
                            height={80}
                        />
                        <div className="headerMobile">
                            <Link href="/">
                                <Image alt="" src="/Logo-AskWho.svg" className="logoHeaderMobile" width={50} height={50} />
                            </Link>
                            <button type="button" className="btnBarHeaderMobile" onClick={handleBarsClick}>
                                <FontAwesomeIcon icon={toggle ? faBars : faClose} className="faBarsIcon" />
                            </button>
                        </div>
                    </div>
                </PublicContext.Provider>
            </body>
        </html>
    );
}
