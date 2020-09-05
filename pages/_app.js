import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout
    content={(<Component {...pageProps} />)}
  />
}

export default MyApp
