import {inspect} from "util";
import styles from "../styles/RoadMapGoal.module.css"

interface RoadMapGoalProps {
    text: string
}

const RoadMapGoal = ({text}: RoadMapGoalProps) => {
    return (
        <div className={styles.content}>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}
export default RoadMapGoal