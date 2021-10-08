import styles from '../styles/nftReward.module.css'
import reward from "../public/artificial intelligence.svg"
import rewardMB from "../public/artificial intelligence mobile.svg"

interface NftRewardProps {
    isMobile: boolean
}


const NftReward = ({isMobile}: NftRewardProps) => {
    console.log(isMobile)
    return (
        <div className={styles.ourTeamItem}>
              {isMobile ? (<img src={rewardMB}/>) : (<img src={reward}/>)}
        </div>
    )
}
export default NftReward;