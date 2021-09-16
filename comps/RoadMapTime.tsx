import styles from '../styles/RoadMapTime.module.css'

interface RoadMapTimeProps {
    months: string;
    year: string;
}

const RoadMapTime = ({months, year}: RoadMapTimeProps) => {
    return (
        <div className={styles.content}>
            <div>{months}</div>
            <div>{year}</div>
        </div>
    )
}
export default RoadMapTime