import styles from '../styles/OurTeamItem.module.css'
import Image from 'next/image'
interface OutTeamItemProps {
    imgUrl: string;
    title: string;
    content: string
}

const OutTeamItem = ({ title, content, imgUrl }: OutTeamItemProps) => {
    return (
        <div className={styles.ourTeamItem}>
            <img src={imgUrl} />
            <div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </div>
        </div>
    )
}
export default OutTeamItem;