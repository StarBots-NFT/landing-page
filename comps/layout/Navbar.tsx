import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../styles/Navbar.module.css'
import LockIcon from '@material-ui/icons/Lock';
import {router} from "next/client";
import {useRouter} from "next/router";

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const [isShowDropDown, setIsShowDropDown] = React.useState(false);
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
    const router = useRouter()
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        var tablinks = Array.from(document.getElementsByClassName('tablinks') as HTMLCollectionOf<HTMLElement>)
        let dropdownH = 0;
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            tablinks[i].style.color = "#FFFFFF";
        }
        if (tablinks.length > 0) {
            tablinks[newValue].style.color = "#00E1D2";
        } else {
            if (isShowDropDown) {
                dropdownH = document.getElementById("dropdownBlock").getBoundingClientRect().height
            }
            changeIsShow()
        }
        setValue(newValue);
        if (typeof document != "undefined" && typeof window != "undefined") {
            if (newValue == 0) {
                setTimeout(() => {
                    router.push('/')
                },100)
            }
            if (newValue == 1) {
                setTimeout(() => {
                    router.push({pathname: '/', query: {id: 'intro'}})
                }, 100)
            }
            if (newValue == 2) {
                router.push({pathname: '/', query: {id: 'trailer'}})
            }
            if (newValue == 3) {
                router.push({pathname: '/', query: {id: 'feature'}})
            }
            if (newValue == 4) {
                router.push({pathname: '/', query: {id: 'map'}})
            }
            if (newValue == 5) {
                router.push({pathname: '/', query: {id: 'sponsored'}})
            }
            if (newValue == 6) {
                router.push({pathname: '/', query: {id: 'team'}})
            }
            if (newValue == 7) {
                router.push({pathname: '/buyNow'})
            }
        }
    };
    const changeIsShow = () => {
        setIsShowDropDown(!isShowDropDown)
    }
    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addListener(updateTarget);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true);
            }
            return () => media.removeListener(updateTarget);
        }, []);

        return targetReached;
    };
    const isBreakpoint = useMediaQuery(1290)
    return (
        <>
            {isMobile ? (
                <div className={styles.navbarMb} id={"navbar"}>
                    <div className={styles.navbarContent}>
                        {!isBreakpoint ? (<img className={styles.img} src={"/logo_HEADER.png"}/>) : (
                            <img className={styles.imgBreak} src={"/logo_HEADER.png"}/>)}
                        {!isBreakpoint ? (
                            <div className={styles.content}>
                                <div className={styles.tabs}>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 0)}>Home
                                    </button>
                                    <button className="tablinks"
                                            onClick={(event) => handleChange(event, 1)}>Introduction
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 2)}>Trailer
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 3)}>Unique
                                        Features
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 4)}>RoadMap
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 5)}>Sponsored
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 6)}>Our Team
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 7)}>Buy now
                                    </button>
                                </div>
                                {/*<button className={styles.button}>*/}
                                {/*    <LockIcon className={styles.lockIcon}/>*/}
                                {/*    <span className={styles.buttonLabel}>Connect Wallet</span>*/}
                                {/*</button>*/}
                            </div>
                        ) : (
                            <menu className={styles.menu} onClick={changeIsShow}>
                                <div className={styles.menuDiv}></div>
                                <div className={styles.menuDiv}></div>
                                <div className={styles.menuDiv}></div>
                            </menu>
                        )}
                        {(isShowDropDown && isBreakpoint) ? (
                            <div className={styles.dropdownBlock} id="dropdownBlock">
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 0)}>Home</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 1)}>Introduction</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 2)}>Trailer</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 3)}>Unique Features
                                </div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 4)}>RoadMap</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 5)}>Sponsored</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 6)}>Our Team</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 7)}>Buy now</div>
                                {/*<button className={styles.buttonDropDown}>*/}
                                {/*    <LockIcon className={styles.lockIcon}/>*/}
                                {/*    <span className={styles.buttonLabel}>Connect Wallet</span>*/}
                                {/*</button>*/}
                            </div>

                        ) : null}
                    </div>
                </div>
            ) : (
                <div className={styles.navbar} id={"navbar"}>
                    <div className={styles.navbarContent}>
                        {!isBreakpoint ? (<img className={styles.img} src={"/logo_HEADER.png"}/>) : (
                            <img className={styles.imgBreak} src={"/logo_HEADER.png"}/>)}
                        {!isBreakpoint ? (
                            <div className={styles.content}>
                                <div className={styles.tabs}>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 0)}>Home
                                    </button>
                                    <button className="tablinks"
                                            onClick={(event) => handleChange(event, 1)}>Introduction
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 2)}>Trailer
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 3)}>Unique
                                        Features
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 4)}>RoadMap
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 5)}>Sponsored
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 6)}>Our Team
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(event, 7)}>Buy now
                                    </button>
                                </div>
                                {/*<button className={styles.button}>*/}
                                {/*    <LockIcon className={styles.lockIcon}/>*/}
                                {/*    <span className={styles.buttonLabel}>Connect Wallet</span>*/}
                                {/*</button>*/}
                            </div>
                        ) : (
                            <menu className={styles.menu} onClick={changeIsShow}>
                                <div className={styles.menuDiv}></div>
                                <div className={styles.menuDiv}></div>
                                <div className={styles.menuDiv}></div>
                            </menu>
                        )}
                        {(isShowDropDown && isBreakpoint) ? (
                            <div className={styles.dropdownBlock} id="dropdownBlock">
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 0)}>Home</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 1)}>Introduction</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 2)}>Trailer</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 3)}>Unique Features
                                </div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 4)}>RoadMap</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 5)}>Sponsored</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(e, 6)}>Our Team</div>
                                {/*<button className={styles.buttonDropDown}>*/}
                                {/*    <LockIcon className={styles.lockIcon}/>*/}
                                {/*    <span className={styles.buttonLabel}>Connect Wallet</span>*/}
                                {/*</button>*/}
                            </div>

                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;