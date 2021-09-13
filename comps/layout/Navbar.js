import React from 'react';
import styles from '../../styles/Navbar.module.css'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: 'var(--white)',
        },
        '& > MuiTab-wrapper': {
            color: 'var(--white)',
        }
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className = {styles.navbar}>
            <div className = {styles.tab}>
                <StyledTabs className= {styles.myTab} value={value} onChange={handleChange}>
                    <Tab className = "tab" label = "Menu" />
                    <Tab label = "Banner" />
                    <Tab label = "Video" />
                </StyledTabs>
            </div>
        </div>
  );
}
export default Navbar;