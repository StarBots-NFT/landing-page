import styles from '../styles/UniqueMobile.module.css'
import Image from 'next/image'
interface TextInfoProps {
    imgUrl: string;
    title: string;
    content: string
}

const UniqueMobile = ({ title, content, imgUrl }: TextInfoProps) => {
    return (
        <div className={styles.unique}>
            <div className={styles.img}>
                <Image width="100%" height="100%" layout="responsive" objectFit="contain" src={imgUrl} alt='' />
            </div>
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
export default UniqueMobile;