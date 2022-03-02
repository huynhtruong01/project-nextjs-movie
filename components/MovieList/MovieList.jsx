import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { apiKey } from '../../api/apiKey'
import MovieItem from '../MovieItem/MovieItem'

MovieList.propTypes = {}

function MovieList({ category, id, type }) {
  const [movieList, setMovieList] = useState([])

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
  }, [])

  return (
    <div className="movie-list">
      <div className="wrapper__container">
        <div className="movie-list__title">
          <h3>{`${category[0].toUpperCase()}${category.slice(1).toLowerCase()} ${type}`}</h3>
          <div className="movie-list__view-more">View More</div>
        </div>
        <Swiper grabCursor={true} spaceBetween={15} slidesPerView={6.5}>
          {movieList.length > 0
            ? movieList.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <Link href="/movie" passHref>
                    <MovieItem movie={movie} type={type} />
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
