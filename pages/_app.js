import Layout from '../comps/layout/Layout'
import '../styles/globals.css'
import '../styles/ValidationConst.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
