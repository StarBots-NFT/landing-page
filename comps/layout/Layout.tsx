import Footer from "./Footer"
import Navbar from "./Navbar"
import {inspect} from "util";
import styles from '../../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;