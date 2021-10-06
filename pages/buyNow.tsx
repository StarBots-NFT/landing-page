import styles from "../styles/buyNow.module.css"
import reward from "../public/artificial intelligence.svg"
import {useEffect, useState} from "react";

declare const window: any;

const BuyNow = () => {
    const [isCountDown, setCountDown] = useState(true);
    const [isConnectDisplay, setConncetDisplay] = useState(false)
    let distance;
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById("footer").style.display = 'none';
        var countDownDate = new Date("Dec 1, 2021 00:00:00").getTime();
        var timeOffSet = new Date().getTimezoneOffset()
        var calCountDown = countDownDate + (7 * 60 + timeOffSet) * 60 * 1000
        // Update the count down every 1 second
        var countDown = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            distance = calCountDown - now;

            // Time calculations for days, hours, minutes and seconds
            var day1st = Math.floor(distance / (1000 * 60 * 60 * 24) / 10);
            var day2st = Math.floor(distance / (1000 * 60 * 60 * 24) % 10);
            var hours1st = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) / 10);
            var hours2st = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) % 10);
            var minutes1st = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60) / 10);
            var minutes2st = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60) % 10);
            var seconds1st = Math.floor((distance % (1000 * 60)) / 1000 / 10);
            var seconds2st = Math.floor((distance % (1000 * 60)) / 1000 % 10);
            if (document.getElementById("countDown") != null) {

                document.getElementById("day1st").textContent = day1st.toString();
                document.getElementById("day2st").textContent = day2st.toString();
                document.getElementById("hours1st").textContent = hours1st.toString();
                document.getElementById("hours2st").textContent = hours2st.toString();
                document.getElementById("min1st").textContent = minutes1st.toString();
                document.getElementById("min2st").textContent = minutes2st.toString();
                document.getElementById("sec1st").textContent = seconds1st.toString();
                document.getElementById("sec2st").textContent = seconds2st.toString();
            }
            // If the count down is finished, write some text
            if (distance < 0) {
                setCountDown(false)
                clearInterval(countDown);

                // get count bought
                let getCount = setInterval (function () {

                })
            }
        }, 1000);

        const tablinks = Array.from(document.getElementsByClassName('tablinks') as HTMLCollectionOf<HTMLElement>)
        if (tablinks.length > 0) {
            tablinks.forEach(e => {
                e.style.color = '#FFFFFF'
            })
            tablinks[7].style.color = "#00E1D2";
        }


    }, [])
    const onConnectWalletChange = (boolean: boolean) => {
        setConncetDisplay(boolean)
    }

    const connectPhanTom = () => {
        if (typeof window != "undefined") {
            if ("solana" in window) {
                window.solana.on("connect", () => console.log("connected!"))
                const provider = window.solana;
                if (provider.isPhantom) {
                    return window.solana.connect();
                }
            }
            window.open("https://phantom.app/", "_blank");
        }
    }

    const onCloesConnectWallet = () => {
      setConncetDisplay(false)
    }
    return (
        <>
            <div className={styles.buyNow}>
                {!isConnectDisplay ? (
                    <>
                        <div className={styles.reward}>
                            <img src={reward}/>
                        </div>
                        <div className={styles.bought}>
                            <div className={styles.boughttext}>0/10000 OPENED</div>
                            <div className={styles.sliderBought}>
                                <div className={styles.sliderCount}></div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            {isCountDown ? (
                                <div className={styles.countDown} id={"countDown"}>
                                    <div className={styles.timeBlock}>
                                        <label className={styles.timeItem} id={"day1st"}/>
                                        <label className={styles.timeItem} id={"day2st"}/>
                                        <div className={styles.timeName}>Days</div>
                                    </div>
                                    <div className={styles.dots}>
                                        <div className={styles.dotsBlock}>
                                            <label className={styles.dot}></label>
                                            <label className={styles.dot}></label>
                                        </div>
                                    </div>
                                    <div className={styles.timeBlock}>
                                        <label className={styles.timeItem} id={"hours1st"}/>
                                        <label className={styles.timeItem} id={"hours2st"}/>
                                        <div className={styles.timeName}>Hours</div>
                                    </div>
                                    <div className={styles.dots}>
                                        <label className={styles.dot}></label>
                                        <label className={styles.dot}></label>
                                    </div>
                                    <div className={styles.timeBlock}>
                                        <label className={styles.timeItem} id={"min1st"}/>
                                        <label className={styles.timeItem} id={"min2st"}/>
                                        <div className={styles.timeName}>Minutes</div>
                                    </div>
                                    <div className={styles.dots}>
                                        <label className={styles.dot}></label>
                                        <label className={styles.dot}></label>
                                    </div>
                                    <div className={styles.timeBlock}>
                                        <label className={styles.timeItem} id={"sec1st"}/>
                                        <label className={styles.timeItem} id={"sec2st"}/>
                                        <div className={styles.timeName}>Seconds</div>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.buyNowButton}>
                                    <button onClick={(e) => onConnectWalletChange(true)}>BUY LOOT BOX
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className={styles.table} id={"table"}>
                        <div className={styles.title}>
                            CONNECT YOUR WALLET
                        </div>
                        <div className={styles.content}>
                            Connect with one of our available wallet
                        </div>
                        <div className={styles.close} onClick={e => onCloesConnectWallet()}/>
                        <button className={styles.buttonlabel} onClick={() => connectPhanTom()}>
                            <div className={styles.icon}></div>
                            <div className={styles.buttonname}>PhanTom</div>
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}

export default BuyNow