import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../styles/Navbar.module.css'
import LockIcon from '@material-ui/icons/Lock';
import {router} from "next/client";
import {useRouter} from "next/router";

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const [isShowDropDown, setIsShowDropDown] = React.useState(false);
    const [isMobile, setMobile] = useState(false);
    const router = useRouter()

    //change colortext
    let tablinks;
    if (typeof document != "undefined") {
        tablinks = Array.from(document.getElementsByClassName('tablinks') as HTMLCollectionOf<HTMLElement>)
    }

    function changeColorTextWhileReload(i: number) {
        if (tablinks.length > 0) {
            tablinks.forEach(e => {
                e.style.color = '#FFFFFF'
            })
            tablinks[i].style.color = "#00E1D2";
            setValue(i)
        }
    }

    function addScrollAction() {
        if (router.pathname == "/") {
            if (window.scrollY === 0) {
                router.replace('/', undefined, {shallow: true});
                changeColorTextWhileReload(0)
            }
            document.addEventListener("scroll", function () {
                const home = document.getElementById("home").getBoundingClientRect().y
                const intro = document.getElementById("intro").getBoundingClientRect().y
                const introH = document.getElementById("intro").getBoundingClientRect().height
                const trailer = document.getElementById("trailer").getBoundingClientRect().y
                const trailerH = document.getElementById("trailer").getBoundingClientRect().height
                const feature = document.getElementById("feature").getBoundingClientRect().y
                const featureH = document.getElementById("feature").getBoundingClientRect().height
                const map = document.getElementById("map").getBoundingClientRect().y
                const mapH = document.getElementById("map").getBoundingClientRect().height
                const sponsored = document.getElementById("sponsored").getBoundingClientRect().y
                const sponsoredH = document.getElementById("sponsored").getBoundingClientRect().height
                const team = document.getElementById("team").getBoundingClientRect().y
                router.replace('/', undefined, {shallow: true});
                if (team <= (80 + sponsoredH) / 2) {
                    changeColorTextWhileReload(6)
                } else if (sponsored <= (80 + mapH) / 2 && sponsored >= 71 - sponsoredH) {
                    changeColorTextWhileReload(5)
                } else if (map <= (80 + featureH) / 2 && map >= 71 - mapH) {
                    changeColorTextWhileReload(4)
                } else if (feature <= (80 + trailerH) / 2 && feature >= 71 - featureH) {
                    changeColorTextWhileReload(3)
                } else if (trailer <= (80 + introH) / 2 && trailer >= 71 - trailerH) {
                    changeColorTextWhileReload(2)
                } else if (intro <= 80 && intro >= 71 - introH) {
                    changeColorTextWhileReload(1)
                } else if (home <= 0) {
                    changeColorTextWhileReload(0)
                }
            })

        }
    }

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

        if (typeof document != "undefined") {
            if (router.query.id == 'home') {
                changeColorTextWhileReload(0)
            }
            if (router.query.id == "intro") {
                changeColorTextWhileReload(1)
            }
            if (router.query.id == "trailer") {
                changeColorTextWhileReload(2)
            }
            if (router.query.id == "feature") {
                changeColorTextWhileReload(3)
            }
            if (router.query.id == "map") {
                changeColorTextWhileReload(4)
            }
            if (router.query.id == "sponsored") {
                changeColorTextWhileReload(5)
            }
            if (router.query.id == "team") {
                changeColorTextWhileReload(6)
            }
        }
        addScrollAction()
    }, [])
    const handleChange = (newValue: number) => {
        let dropdownH = 0;
        if (tablinks.length <= 0) {
            if (isShowDropDown) {
                dropdownH = document.getElementById("dropdownBlock").getBoundingClientRect().height
            }
            changeIsShow()
        }
        setValue(newValue);
        if (newValue == 0) {
            setTimeout(() => {
                router.push({pathname: '/', query: {id: 'home'}})
            }, 100)
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
                                    <button className="tablinks" onClick={(event) => handleChange(0)}>Home
                                    </button>
                                    <button className="tablinks"
                                            onClick={(event) => handleChange(1)}>Introduction
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(2)}>Trailer
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(3)}>Unique
                                        Features
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(4)}>RoadMap
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(5)}>Partners
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(6)}>Our Team
                                    </button>
                                </div>
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
                                <div className={styles.dropdown} onClick={(e) => handleChange(0)}>Home</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(1)}>Introduction</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(2)}>Trailer</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(3)}>Unique Features
                                </div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(4)}>RoadMap</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(5)}>Partners</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(6)}>Our Team</div>
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
                                    <button className="tablinks" onClick={(event) => handleChange(0)}>Home
                                    </button>
                                    <button className="tablinks"
                                            onClick={(event) => handleChange(1)}>Introduction
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(2)}>Trailer
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(3)}>Unique
                                        Features
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(4)}>RoadMap
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(5)}>Partners
                                    </button>
                                    <button className="tablinks" onClick={(event) => handleChange(6)}>Our Team
                                    </button>
                                </div>
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
                                <div className={styles.dropdown} onClick={(e) => handleChange(0)}>Home</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(1)}>Introduction</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(2)}>Trailer</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(3)}>Unique Features
                                </div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(4)}>RoadMap</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(5)}>Partners</div>
                                <div className={styles.dropdown} onClick={(e) => handleChange(6)}>Our Team</div>
                            </div>

                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;