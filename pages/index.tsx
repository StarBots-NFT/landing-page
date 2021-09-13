import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'
import {TextField} from "@material-ui/core";

function Home() {
  return (
    <>
      <Head>
        <title>My Game | Landing Page</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
          <form className="datePickTime" noValidate>
              <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  className= "datePickTime"
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
          </form>
          <h1 className={styles.text}>video preview</h1>
          <div>
              <ReactPlayer url="https://youtu.be/Zb2CoXDPBlk" />
          </div>
          <Link href="/about/">
              <h1 className={styles.text}>Game description</h1>
          </Link>
          <Link href="/landingPage/">
              <h1 className={styles.text}>Feature</h1>
          </Link>
          <Link href="/landingPage/">
              <h1 className={styles.text}>Roadmap</h1>
          </Link>
          <Link href="/landingPage/">
              <h1 className={styles.text}>Backed</h1>
          </Link>
      </div>
    </>
  )
}

export default Home
