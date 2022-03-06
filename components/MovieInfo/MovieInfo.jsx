import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { apiKey } from '../../api/apiKey'
import { originalImg } from '../../common'
import { AiFillStar } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import Button from '../Button/Button'
import Link from 'next/link'

MovieInfo.propTypes = {}

function MovieInfo({ category, title, desc }) {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`
        )
        const data = await res.json()

        setMovie(data.results[0])
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [])

  return (
    <div
      className="movie-info"
      style={{
        position: 'relative',
        backgroundImage: `url(${originalImg}${
          !movie ? '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg' : movie.backdrop_path
        })`,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="wrapper__container">
        <div className="movie-info__container">
          <div className="movie-info__title">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <div className="flex">
            <div className="movie-info__img">
              {!movie ? '' : <img src={`${originalImg}${movie.poster_path}`} alt={movie.title} />}
            </div>
            <div className="movie-info__content">
              {movie ? (
                <>
                  <h3>{movie.title}</h3>
                  <p className="movie-info__desc">{movie.overview}</p>
                  <div className="movie-info__info-list flex align-item-center">
                    <div className="flex">
                      <AiFillStar />
                      <span>{movie.vote_average} star</span>
                    </div>
                    <div className="flex">
                      <FaUserAlt />
                      <span>{movie.vote_count} views</span>
                    </div>
                  </div>
                  <Link href={`/movies/${movie.id}`} passHref={true}>
                    <div>
                      <Button>Watch now</Button>
                    </div>
                  </Link>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
