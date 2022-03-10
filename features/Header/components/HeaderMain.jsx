import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { originalImg, w500Img } from '../../../common/common'
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa'
import Button, { OutlineButton } from '../../../components/Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUserAuth } from '../../../context/UserAuthContent'
import { apiKey } from '../../../configApi/apiKey'

HeaderMain.propTypes = {}

function HeaderMain(props) {
  const [backdropList, setBackdropList] = useState([])
  const { user } = useUserAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        )
        const data = await res.json()

        setBackdropList(data.results.slice(0, 7))
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [])

  return (
    <div className="header__header-main">
      <div className="header-main__movie-list">
        <div className="swiper__btn-prev">
          <FaArrowLeft />
        </div>
        <div className="swiper__btn-next">
          <FaArrowRight />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{ delay: 2000 }}
          navigation={{
            prevEl: '.swiper__btn-prev',
            nextEl: '.swiper__btn-next',
          }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop
        >
          {backdropList.length > 0
            ? backdropList.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <div
                    className="header-main__movie-item"
                    style={{
                      backgroundImage: `url(${originalImg}${movie.backdrop_path})`,
                      width: '100%',
                      height: '100vh',
                      position: 'relative',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="header-main__play">
                      <button className="header-main__icon">
                        <FaPlay />
                      </button>
                      <div className="header-main__poster">
                        <img src={`${w500Img}${movie.poster_path}`} alt={movie.title} />
                      </div>
                    </div>
                    <div className="header-main__content">
                      <h2 className="header-main__title">{movie.title}</h2>
                      <div className="header-main__overview">{movie.overview}</div>
                      <div className="header-main__btns">
                        <Link href={user ? `/movies/${movie.id}` : '/login'} passHref={true}>
                          <button className="btn">Watch Now</button>
                        </Link>
                        <OutlineButton>Watch trailer</OutlineButton>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : ''}
        </Swiper>
      </div>
    </div>
  )
}

export default HeaderMain
