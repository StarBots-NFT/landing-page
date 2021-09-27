import styles from '../../styles/Footer.module.css'

import icon from '../../public/logo_FOOTER.png'


const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.starBot}>
                <img className={styles.icon} src={icon}/>
                <a className={styles.title}>Starbot</a>
                <a className={styles.content}>The first-ever robot battle NFT game to exalt strategy over contingent
                    luck.</a>
            </div>
            <div className={styles.block}>
                <div className={styles.about}>
                    <a className={styles.title}>About Starbot</a>
                    <a className={styles.content}>Resources</a>
                    <a className={styles.content}>Overview</a>
                    <a className={styles.content}>Whitepaper</a>
                    <a className={styles.content}>Documentation</a>
                </div>
                <div className={styles.followUs}>
                    <a className={styles.title}>Follow us</a>
                    <a className={styles.content}>Twitter</a>
                    <a className={styles.content}>Discord</a>
                    <a className={styles.content}>Telegram</a>
                </div>
            </div>
            <div className={styles.policy}>
                <span className={styles.policyContent}>All rights reserved.</span>
                <a href={"https://www.google.com.vn/?hl=vi"} className={styles.contentlink}>Privacy Policy</a>
            </div>
        </footer>
    );
}

export default Footer;