import Layout from '../components/Layout'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import '../styles/globals.css'
import '../styles/Header.scss'
import '../styles/NavBar.scss'
import '../styles/HeaderMain.scss'
import '../styles/Button.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
