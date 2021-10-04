import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.FooterBlock}>
            <div className={styles.Footer}>
                <footer className={styles.FooterContent}>
                    <div className={styles.starBot}>
                        <img className={styles.icon} src={"/logo_FOOTER.png"}/>
                        <a className={styles.content}>The first-ever robot battle NFT game to exalt strategy over contingent
                            luck.</a>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.about}>
                            <a className={styles.title}>About</a>
                            <a href={"https://medium.com/@starbots_game"} className={styles.content} target="_blank">News</a>
                            <a href={"https://whitepaper.starbots.net"} className={styles.content} target="_blank">Documentation</a>
                        </div>
                        <div className={styles.followUs}>
                            <a className={styles.title}>Follow us</a>
                            <a className={styles.content} href={"https://twitter.com/Starbots_game"} target="_blank">Twitter</a>
                            <a className={styles.content} href={"https://discord.gg/arCt64m2ms"} target="_blank">Discord</a>
                            <a className={styles.content} href={"https://t.me/starbotsofficial"} target="_blank">Telegram</a>
                            <a className={styles.content} href={"https://www.youtube.com/channel/UCVvxZZeqPEysRBeX7rh_5NQ"} target="_blank">Youtube</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    );
}

export default Footer;