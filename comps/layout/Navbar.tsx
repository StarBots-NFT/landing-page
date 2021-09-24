import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../styles/Navbar.module.css'
import {withStyles} from '@material-ui/core/styles';
import {createStyles, InputBase, MenuItem, Select, Tabs, Theme, Tab} from "@material-ui/core";
import icon from '../../public/riot games.png'
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        color: '#fff',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#ffffff',
        },
    },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{children: <span/>}}/>);

interface StyledTabProps {
    label: string;
}

const StyledTab = withStyles({
        root: {
            textTransform: 'none',
            color: '#fff',
            minWidth: 120,
            display: 'inline-block',
            '&:focus': {
                opacity: 1,
            }
        }
    })((props: StyledTabProps) => <Tab disableRipple {...props} />);

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const [isShowDropDown, setIsShowDropDown] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        var tablinks = Array.from(document.getElementsByClassName('tablinks') as HTMLCollectionOf<HTMLElement>)
        let dropdownH = 0;
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            tablinks[i].style.backgroundSize = "50% 0px";
        }
        if (tablinks.length > 0) {
            tablinks[newValue].style.backgroundSize = "50% 2px";
        } else {
            if (isShowDropDown) {
               dropdownH = document.getElementById("dropdownBlock").getBoundingClientRect().height
            }
            changeIsShow()
        }
        setValue(newValue);
        if (typeof document != "undefined" && typeof window != "undefined") {
            const navheight = document.getElementById("navbar").getBoundingClientRect().height
            if (newValue == 0) {
                window.scrollTo(0, 0)
            }
            if (newValue == 1) {
                let Y = document.getElementById("intro").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }
            if (newValue == 2) {
                let Y = document.getElementById("trailer").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }
            if (newValue == 3) {
                let Y = document.getElementById("feature").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }
            if (newValue == 4) {
                let Y = document.getElementById("map").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }
            if (newValue == 5) {
                let Y = document.getElementById("sponsored").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
            }
            if (newValue == 6) {
                let Y = document.getElementById("team").getBoundingClientRect().y - navheight + window.scrollY + dropdownH
                window.scrollTo(0, Y)
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
    const isBreakpoint = useMediaQuery(1250)
    return (
        <div className={styles.navbar} id={"navbar"}>
            {!isBreakpoint ? (<img className={styles.img} src={icon}/>) : (<img className={styles.imgBreak} src={icon}/>)}
            {!isBreakpoint ? (
                <div className={styles.content}>
                    <div className={styles.tabs}>
                        <button className="tablinks" onClick={(event) => handleChange(event, 0)}>Home</button>
                        <button className="tablinks" onClick={(event) => handleChange(event, 1)}>Introduction</button>
                        <button className="tablinks" onClick={(event) => handleChange(event, 2)}>Trailer</button>
                        <button className="tablinks" onClick={(event) => handleChange(event, 3)}>Unique Feature</button>
                        <button className="tablinks" onClick={(event) => handleChange(event, 4)}>RoadMap</button>
                        <button className="tablinks" onClick={(event) => handleChange(event, 5)}>Sponsored</button>
                        <button className="tablinks" onClick={(event) => handleChange(event, 6)}>Our Team</button>
                    </div>
                    <button className={styles.button}>
                        <LockIcon/>
                        <span className={styles.buttonLabel}>Connect Wallet</span>
                    </button>
                </div>
            ) : (
                <div className={styles.content}>
                    <menu className={styles.menu} onClick={changeIsShow}>
                        <div className={styles.menuDiv}></div>
                        <div className={styles.menuDiv}></div>
                        <div className={styles.menuDiv}></div>
                    </menu>
                </div>
            )}
            {(isShowDropDown && isBreakpoint) ? (
                <div className={styles.dropdownBlock} id = "dropdownBlock">
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,0)}>Home</div>
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,1)}>Introduction</div>
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,2)}>Trailer</div>
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,3)}>Unique Feature</div>
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,4)}>RoadMap</div>
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,5)}>Sponsored</div>
                    <div className={styles.dropdown} onClick={(e)=>handleChange(e,6)}>Our Team</div>
                    <button className={styles.buttonDropDown}>
                        <LockIcon/>
                        <span className={styles.buttonLabel}>Connect Wallet</span>
                    </button>
                </div>

            ) : null}
        </div>
    );
}

export default Navbar;