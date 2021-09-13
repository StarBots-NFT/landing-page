import Layout from '../comps/layout/Layout'
import '../styles/globals.css'
import '../styles/ValidationConst.css'
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
