import {inspect} from "util";
import styles from "../styles/RoadMapGoal.module.css"

interface RoadMapGoalProps {
    img: string;
    text: string
}

const RoadMapGoal = ({img, text}: RoadMapGoalProps) => {
    return (
        <div className={styles.content}>
            <div className={styles.img}>
                <img src={img}/>
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}
export default RoadMapGoal