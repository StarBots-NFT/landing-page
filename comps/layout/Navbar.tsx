import React from 'react';
import styles from '../../styles/Navbar.module.css'
import {withStyles} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import {Icon, Tabs} from "@material-ui/core";
import icon from '../../public/riot games.png'
import LockIcon from '@material-ui/icons/Lock';

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

const Navbar = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        if (typeof document != "undefined" && typeof window != "undefined") {
            const navheight = document.getElementById("navbar").getBoundingClientRect().height
            if (newValue == 0) {
                window.scrollTo(0, 0)
            }
            if (newValue == 1) {
                let Y = document.getElementById("intro").getBoundingClientRect().y - navheight + window.scrollY
                window.scrollTo(0, Y)
            }
            if (newValue == 2) {
                let Y = document.getElementById("trailer").getBoundingClientRect().y - navheight + window.scrollY
                window.scrollTo(0, Y)
            }
            if (newValue == 3) {
                let Y = document.getElementById("feature").getBoundingClientRect().y - navheight + window.scrollY
                window.scrollTo(0, Y)
            }
            if (newValue == 4) {
                let Y = document.getElementById("map").getBoundingClientRect().y - navheight + window.scrollY
                window.scrollTo(0, Y)
            }
            if (newValue == 5) {
                let Y = document.getElementById("sponsored").getBoundingClientRect().y - navheight + window.scrollY
                window.scrollTo(0, Y)
            }
            if (newValue == 6) {
                let Y = document.getElementById("team").getBoundingClientRect().y - navheight + window.scrollY
                window.scrollTo(0, Y)
            }
        }
    };
    return (
        <div className={styles.navbar} id={"navbar"}>
            <img className={styles.img} src={icon}/>
            <div className={styles.tabs}>
                <StyledTabs onChange={handleChange} value={value}>
                    <Tab label="Home"/>
                    <Tab label="Introduction"/>
                    <Tab label="Trailer"/>
                    <Tab label="Unique Feature"/>
                    <Tab label="RoadMap"/>
                    <Tab label="Sponsored"/>
                    <Tab label="Our Team"/>
                </StyledTabs>
            </div>
            <button className={styles.button}>
                <LockIcon/>
                <span className={styles.buttonLabel}>Connect Wallet</span>
            </button>
        </div>
    );
}
export default Navbar;