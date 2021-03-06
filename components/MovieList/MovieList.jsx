import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { apiKey } from '../../configApi/apiKey'
import { useUserAuth } from '../../context/UserAuthContent'
import MovieItem from '../MovieItem/MovieItem'

MovieList.propTypes = {}

function MovieList({ category = 'popular', id = 0, type = 'movie' }) {
  const [movieList, setMovieList] = useState([])
  const { user } = useUserAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/${category}?api_key=${apiKey}&language=en-US&page=1`
        )

        const data = await res.json()

        setMovieList(data.results)
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [category, id, type])

  return (
    <div className="movie-list">
      <div className="wrapper__container">
        <div className="movie-list__title flex align-items-center">
          <h2>{type && type.toUpperCase()}</h2>
          <Link href={`/${type === 'movie' ? 'movies' : 'tv-shows'}`} passHref={true}>
            <div>View More</div>
          </Link>
        </div>
        <Swiper grabCursor={true} spaceBetween={15} slidesPerView={6.5}>
          {movieList &&
            movieList.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link
                  href={
                    user ? `/${type === 'movie' ? 'movies' : 'tv-shows'}/${movie.id}` : '/login'
                  }
                  passHref
                >
                  <div>
                    <MovieItem movie={movie} type={type} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieList
