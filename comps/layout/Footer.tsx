import styles from '../../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Marketplace}>
          <a className={styles.title}>Marketplace</a>
          <a className={styles.content}>All NFT</a>
          <a className={styles.content}>New</a>
          <a className={styles.content}>Art</a>
          <a className={styles.content}>Music</a>
          <a className={styles.content}>Domain Name</a>
          <a className={styles.content}>Virtual Worlds</a>
          <a className={styles.content}>Trading Card</a>
          <a className={styles.content}>Sport</a>
      </div>
        <div className={styles.MyAccount}>
            <a className={styles.title}>My Account</a>
            <a className={styles.content}>My Profile</a>
            <a className={styles.content}>My Profile</a>
            <a className={styles.content}>My Profile</a>
            <a className={styles.content}>My Profile</a>
            <div className={styles.Stats}>
                <a className={styles.title}>Stats</a>
                <a className={styles.content}>Rankings</a>
                <a className={styles.content}>Activity</a>
            </div>
        </div>
        <div className={styles.Resources}>
            <a className={styles.title}>Resource</a>
            <a className={styles.content}>All NFT</a>
            <a className={styles.content}>New</a>
            <a className={styles.content}>Art</a>
            <a className={styles.content}>Music</a>
            <a className={styles.content}>Domain Name</a>
            <a className={styles.content}>Virtual Worlds</a>
            <a className={styles.content}>Trading Card</a>
            <a className={styles.content}>Sport</a>
        </div>

    </footer>
  );
}
 
export default Footer;