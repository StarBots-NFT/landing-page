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
            <Image width="100%" height="65%" layout="responsive" objectFit="contain" src={imgUrl} alt="Picture of the author" />
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