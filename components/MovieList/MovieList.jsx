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
        <h2>{`${type[0].toUpperCase()}${type.slice(1).toLowerCase()}`}</h2>
        <Swiper grabCursor={true} spaceBetween={15} slidesPerView={6.5}>
          {movieList &&
            movieList.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link href={`/${type === 'movie' ? 'movies' : 'tv-shows'}/${movie.id}`} passHref>
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
