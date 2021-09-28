import Footer from "./Footer"
import Navbar from "./Navbar"
import {inspect} from "util";
import styles from '../../styles/Layout.module.css'
import {useEffect, useState} from "react";

const Layout = ({children}) => {
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        function detectMob() {
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];

            return toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }

        setMobile(detectMob)
    })

    return (
        <div>
            <Navbar />
            {isMobile ? (
                <div className={styles.contentMb}>
                    {children}
                </div>
            ) : (
                <div className={styles.contentPc}>
                    {children}
                </div>
            )}
            <Footer/>
        </div>
    );
}

export default Layout;