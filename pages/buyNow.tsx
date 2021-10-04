import styles from "../styles/buyNow.module.css"
import reward from "../public/Group 41474.png"
import countBought from "../public/Frame 74.png"
import {useEffect, useState} from "react";

declare const window: any;
const BuyNow = () => {
    const [isCountDown, setCountDown] = useState(true);
    let distance;
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById("footer").style.display = 'none';
        var countDownDate = new Date("Dec 1, 2021 00:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var day1st = Math.floor(distance / (1000 * 60 * 60 * 24) / 10);
            var day2st = Math.floor(distance / (1000 * 60 * 60 * 24) % 10);
            var hours1st = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) / 10);
            var hours2st = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) % 10);
            var minutes1st = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60) / 10);
            var minutes2st = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60) % 10);
            var seconds1st = Math.floor((distance % (1000 * 60)) / 1000 / 10);
            var seconds2st = Math.floor((distance % (1000 * 60)) / 1000 % 10);
            if (document.getElementById("countDown") != null)
            {
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("day1st").setAttribute("value", day1st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("day2st").setAttribute("value", day2st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("hours1st").setAttribute("value", hours1st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("hours2st").setAttribute("value", hours2st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("min1st").setAttribute("value", minutes1st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("min2st").setAttribute("value", minutes2st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("sec1st").setAttribute("value", seconds1st.toString());
                document.getElementById("day1st").setAttribute("type", "text");
                document.getElementById("sec2st").setAttribute("value", seconds2st.toString());
            }
            // If the count down is finished, write some text
            if (distance < 0) {
                setCountDown(false)
                clearInterval(x);
            }
        }, 1000);
    })
    return (
        <>
            <div className={styles.buyNow}>
                <div className={styles.reward}>
                    <img src={reward}/>
                </div>
                <div className={styles.bought}>
                    <div className={styles.boughtImg}>
                        <div className={styles.boughttext}>0/10000 OPENED</div>
                    </div>
                    <div className={styles.sliderBought}>
                        <div className={styles.sliderCount}></div>
                    </div>
                </div>
                <div className={styles.content}>
                    {isCountDown ? (
                        <div className={styles.countDown} id={"countDown"}>
                            <div className={styles.timeBlock}>
                                <input className={styles.timeItem} id={"day1st"}/>
                                <input className={styles.timeItem} id={"day2st"}/>
                                <div className={styles.timeName}>Days</div>
                            </div>
                            <div className={styles.dots}>
                                <input className={styles.dot}></input>
                                <input className={styles.dot}></input>
                            </div>
                            <div className={styles.timeBlock}>
                                <input className={styles.timeItem} id={"hours1st"}/>
                                <input className={styles.timeItem} id={"hours2st"}/>
                                <div className={styles.timeName}>Hours</div>
                            </div>
                            <div className={styles.dots}>
                                <input className={styles.dot}></input>
                                <input className={styles.dot}></input>
                            </div>
                            <div className={styles.timeBlock}>
                                <input className={styles.timeItem} id={"min1st"}/>
                                <input className={styles.timeItem} id={"min2st"}/>
                                <div className={styles.timeName}>Minutes</div>
                            </div>
                            <div className={styles.dots}>
                                <input className={styles.dot}></input>
                                <input className={styles.dot}></input>
                            </div>
                            <div className={styles.timeBlock}>
                                <input className={styles.timeItem} id={"sec1st"}/>
                                <input className={styles.timeItem} id={"sec2st"}/>
                                <div className={styles.timeName}>Seconds</div>
                            </div>
                        </div>
                        ): (
                        <div className={""}></div>
                        )}
                </div>
            </div>
        </>
    )
}

export default BuyNow