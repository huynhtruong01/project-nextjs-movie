import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SwiperSlide, Swiper } from 'swiper/react'
import { apiKey } from '../../api/apiKey'
import MovieItem from '../MovieItem/MovieItem'
import Link from 'next/link'

MovieList.propTypes = {}

function MovieList(props) {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/634649/similar?api_key=${apiKey}&language=en-US&page=1`
        )

        const data = await res.json()

        setMovieList(data.results)
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [])

  return (
    <div className="movie-list">
      <div className="wrapper__container">
        <Swiper grabCursor={true} spaceBetween={15} slidesPerView={6}>
          {movieList.length > 0
            ? movieList.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <Link href="/movie">
                    <MovieItem movie={movie} />
                  </Link>
                </SwiperSlide>
              ))
            : ''}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieList
