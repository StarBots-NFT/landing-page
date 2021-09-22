import styles from '../styles/Unique.module.css'

interface TextInfoProps {
    imgUrl: string;
    title: string;
    content: string
}

const Unique = ({title, content, imgUrl}: TextInfoProps) => {
    return (
        <div className={styles.unique}>
            <div className={styles.img}>
                <img width={'100%'} src={imgUrl} />
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
export default Unique;