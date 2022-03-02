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
import '../styles/Main.scss'
import '../styles/MainTopRating.scss'
import '../styles/MovieList.scss'
import '../styles/MovieItem.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
