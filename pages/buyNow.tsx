import {useEffect} from "react";
import styles from "../styles/ConnectWallet.module.css";

const buyNow = () => {
    var distance;

    const countDown = () => {
        if (typeof document != "undefined") {
            const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
            var x = setInterval(function () {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("countDown").innerHTML = "EXPIRED";
                }
                return distance
            }, 1000);
        }
    }
    useEffect(()=>{countDown()})
    return(
        <div id={"countDown"} className={styles.countdown}></div>
    )
}