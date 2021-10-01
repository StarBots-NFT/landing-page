import styles from "../styles/buyNow.module.css"
import close from "../public/exit.png"
import {useEffect} from "react";

declare const window: any;
const BuyNow = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const connectPhanTom = () => {
        if (typeof window != "undefined") {
            if ("solana" in window) {
                const provider = window.solana;
                if (provider.isPhantom) {
                    return window.solana.connect();
                }
            }
            window.open("https://phantom.app/", "_blank");
        }
    }
    return (
        <>
            <div className={styles.ConnectWallet}>
                <div className={styles.table} id={"table"}>
                    <div className={styles.title}>
                        CONNECT YOUR WALLET
                    </div>
                    <div className={styles.content}>
                        Connect with one of our available wallet
                    </div>
                    <img className={styles.close} src={close}/>
                    <button className={styles.buttonlabel} onClick={() => connectPhanTom()}>
                        <div className={styles.icon}></div>
                        <div className={styles.buttonname}>PhanTom</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BuyNow